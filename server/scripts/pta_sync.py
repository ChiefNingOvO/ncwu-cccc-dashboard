import argparse
import json
import os
import sys
from typing import Any

import requests


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="从 Pintia (PTA) 获取比赛成绩并输出 JSON 到 stdout"
    )
    parser.add_argument("--pta-contest-id", type=str, required=True, help="PTA 题目集 ID")
    return parser.parse_args()


args = parse_args()

PROBLEM_SET_ID = args.pta_contest_id
API_BASE = f"https://pintia.cn/api/problem-sets/{PROBLEM_SET_ID}"
COOKIE = os.environ.get("PTA_COOKIE", "")

if not COOKIE:
    print("错误：环境变量 PTA_COOKIE 为空", file=sys.stderr)
    sys.exit(1)

INCLUDE_ALL_MEMBERS = False
RANKING_LIMIT = 500
MEMBER_LIMIT = 500

HEADERS = {
    "Accept": "application/json;charset=UTF-8",
    "Accept-Language": "zh-CN",
    "Content-Type": "application/json;charset=UTF-8",
    "Referer": f"https://pintia.cn/problem-sets/{PROBLEM_SET_ID}/rankings",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0",
    "x-lollipop": "e5e82e1dfcd1e08742d1cb5b10683529",
}


def create_session() -> requests.Session:
    session = requests.Session()
    session.headers.update(HEADERS)
    for cookie_item in COOKIE.split(";"):
        cookie_item = cookie_item.strip()
        if not cookie_item or "=" not in cookie_item:
            continue
        name, value = cookie_item.split("=", 1)
        session.cookies.set(name.strip(), value.strip(), domain="pintia.cn", path="/")
    return session


session = create_session()


def get_json(url: str, params: dict[str, Any] | None = None) -> dict[str, Any]:
    response = session.get(url, params=params, timeout=30)
    print(f"GET {response.url}", file=sys.stderr)
    print(f"状态码：{response.status_code}", file=sys.stderr)
    response.raise_for_status()
    if "application/json" not in response.headers.get("content-type", ""):
        raise RuntimeError("接口返回的不是 JSON，Cookie 可能已经失效。\n" + response.text[:500])
    return response.json()


def get_problems() -> list[dict[str, Any]]:
    data = get_json(f"{API_BASE}/problem-types")
    problems = data.get("labels", [])
    problems.sort(key=lambda p: p.get("problemPoolIndex", 0))
    print(f"题目数量：{len(problems)}", file=sys.stderr)
    for i, p in enumerate(problems, 1):
        print(f"  l1-{i}：{p.get('title')}，满分 {p.get('score')}", file=sys.stderr)
    return problems


def merge_user_maps(data, stu_map, user_map):
    stu_map.update(data.get("studentUserById", {}))
    user_map.update(data.get("userById", {}))


def get_all_rankings():
    url = f"{API_BASE}/common-rankings"
    first = get_json(url, params={"page": 0, "limit": RANKING_LIMIT})
    total = int(first.get("total", 0))
    rankings = list(first.get("commonRankings", []))
    stu_map, user_map = {}, {}
    merge_user_maps(first, stu_map, user_map)
    print(f"排名总数：{total}", file=sys.stderr)
    print(f"排名已获取：{len(rankings)}/{total}", file=sys.stderr)
    limit = len(rankings) if 0 < len(rankings) < RANKING_LIMIT and len(rankings) < total else RANKING_LIMIT
    page = 1
    while len(rankings) < total:
        data = get_json(url, params={"page": page, "limit": limit})
        cur = data.get("commonRankings", [])
        if not cur:
            break
        rankings.extend(cur)
        merge_user_maps(data, stu_map, user_map)
        print(f"排名已获取：{len(rankings)}/{total}", file=sys.stderr)
        page += 1
    return rankings, stu_map, user_map


def get_all_members():
    url = f"{API_BASE}/members"
    filt = {"studentUserFilter": {"keyword": "", "unbindOnly": False, "field": "STUDENT_NUMBER"}}
    first = get_json(url, params={"page": 0, "limit": MEMBER_LIMIT, "filter": json.dumps(filt, ensure_ascii=False, separators=(",", ":"))})
    total = int(first.get("total", 0))
    members = list(first.get("members", []))
    stu_map, user_map = {}, {}
    merge_user_maps(first, stu_map, user_map)
    print(f"成员总数：{total}", file=sys.stderr)
    print(f"成员已获取：{len(members)}/{total}", file=sys.stderr)
    limit = len(members) if 0 < len(members) < MEMBER_LIMIT and len(members) < total else MEMBER_LIMIT
    page = 1
    while len(members) < total:
        data = get_json(url, params={"page": page, "limit": limit, "filter": json.dumps(filt, ensure_ascii=False, separators=(",", ":"))})
        cur = data.get("members", [])
        if not cur:
            break
        members.extend(cur)
        merge_user_maps(data, stu_map, user_map)
        print(f"成员已获取：{len(members)}/{total}", file=sys.stderr)
        page += 1
    return members, stu_map, user_map


def normalize_score(v):
    try:
        n = float(v)
        return int(n) if n.is_integer() else n
    except (TypeError, ValueError):
        return 0


def create_score(ranking, problems):
    pmap = ranking.get("problemScoreByProblemSetProblemId", {})
    score = {}
    for i, p in enumerate(problems, 1):
        info = pmap.get(str(p["id"]), {})
        score[f"l1-{i}"] = normalize_score(info.get("score", 0))
    return score


def build_result(problems, rankings, members, stu_map, user_map):
    best = {}
    for r in rankings:
        ru = r.get("user", {})
        uid = str(ru.get("studentUserId", "") or ru.get("userId", ""))
        old = best.get(uid)
        if old is None or r.get("totalScore", 0) > old.get("totalScore", 0):
            best[uid] = r

    result = []
    for r in sorted(best.values(), key=lambda x: (x.get("rank", 999999), -x.get("totalScore", 0), x.get("solvingTime", 0))):
        ru = r.get("user", {})
        sid = str(ru.get("studentUserId", ""))
        uid = str(ru.get("userId", ""))
        s = stu_map.get(sid, {})
        u = user_map.get(uid, {})
        name = s.get("name") or u.get("nickname") or f"未知-{uid}"
        result.append({"name": name, "score": create_score(r, problems)})
    return result


def main():
    # Windows 下强制 stdout 使用 UTF-8 编码
    sys.stdout.reconfigure(encoding="utf-8")
    print("开始请求 Pintia 数据……", file=sys.stderr)
    print(f"题目集 ID: {PROBLEM_SET_ID}", file=sys.stderr)

    problems = get_problems()
    rankings, rs, ru = get_all_rankings()
    members, ms, mu = get_all_members()

    stu_map = {**rs, **ms}
    user_map = {**ru, **mu}

    result = build_result(problems, rankings, members, stu_map, user_map)
    print(f"\n处理完成，共获取 {len(result)} 名选手数据。", file=sys.stderr)

    # 输出 JSON 到 stdout（最后一行），Node.js 后端读取
    print(json.dumps(result, ensure_ascii=False))


if __name__ == "__main__":
    try:
        main()
    except requests.RequestException as e:
        print(f"网络请求失败：{e}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"程序执行失败：{e}", file=sys.stderr)
        sys.exit(1)