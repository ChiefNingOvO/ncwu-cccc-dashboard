import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCompetition } from '../services/api';
import styles from './CreateCompetitionPage.module.css';

const TEAMS_JSON_EXAMPLE = `[
  {
    "name": "ACM 一队",
    "members": ["张三", "李四", "王五", "赵六", "孙七", "周八", "吴九", "郑十"]
  },
  {
    "name": "ACM 二队",
    "members": ["陈一", "刘二", "黄三", "林四", "杨五", "朱六", "马七", "高八"]
  }
]`;

export function CreateCompetitionPage() {
  const navigate = useNavigate();
  const [compName, setCompName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [duration, setDuration] = useState(180);
  const [accessCookie, setAccessCookie] = useState('');
  const [ptaContestId, setPtaContestId] = useState('');
  const [teamsJson, setTeamsJson] = useState(TEAMS_JSON_EXAMPLE);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // 创建页需要滚动，覆盖全局 #root overflow:hidden
  useEffect(() => {
    const root = document.getElementById('root');
    const html = document.documentElement;
    const body = document.body;
    if (root) root.style.overflow = 'visible';
    html.style.overflow = 'visible';
    body.style.overflow = 'visible';
    return () => {
      if (root) root.style.overflow = '';
      html.style.overflow = '';
      body.style.overflow = '';
    };
  }, []);

  const handleSubmit = async () => {
    setError('');

    if (!compName.trim()) {
      setError('请输入比赛名称');
      return;
    }

    if (!accessCookie.trim()) {
      setError('请输入访问口令（Access Cookie）');
      return;
    }

    // 解析 JSON
    let parsedTeams: { name: string; members: string[] }[];
    try {
      parsedTeams = JSON.parse(teamsJson);
    } catch {
      setError('队伍信息 JSON 格式错误，请检查语法');
      return;
    }

    if (!Array.isArray(parsedTeams) || parsedTeams.length === 0) {
      setError('至少需要一个队伍');
      return;
    }

    const validTeams: { name: string; members: string[] }[] = [];
    for (const team of parsedTeams) {
      if (!team.name || typeof team.name !== 'string' || !team.name.trim()) {
        setError('队伍名称不能为空');
        return;
      }
      if (!Array.isArray(team.members) || team.members.length === 0) {
        setError(`队伍「${team.name}」至少需要一名队员`);
        return;
      }
      const validMembers = team.members.filter(m => typeof m === 'string' && m.trim());
      if (validMembers.length === 0) {
        setError(`队伍「${team.name}」至少需要一名队员`);
        return;
      }
      if (validMembers.length > 10) {
        setError(`队伍「${team.name}」队员数量不能超过 10 人`);
        return;
      }
      validTeams.push({
        name: team.name.trim(),
        members: validMembers.map(m => m.trim()),
      });
    }

    setSubmitting(true);
    try {
      await createCompetition({
        name: compName.trim(),
        teams: validTeams,
        start_time: startTime ? startTime.replace('T', ' ') : undefined,
        duration_minutes: duration,
        access_cookie: accessCookie.trim(),
        pta_contest_id: ptaContestId.trim() || undefined,
      });
      navigate('/');
    } catch (err) {
      setError('创建失败，请稍后重试');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <button className={styles.backBtn} onClick={() => navigate('/')}>← 返回</button>
          <h1 className={styles.title}>创建比赛</h1>
          <div />
        </header>

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>比赛名称</label>
            <input
              className={styles.input}
              type="text"
              value={compName}
              onChange={e => setCompName(e.target.value)}
              placeholder="例如：2026 年天梯赛春季赛"
              maxLength={50}
            />
          </div>

          <div className={styles.timeRow}>
            <div className={styles.field}>
              <label className={styles.label}>比赛开始时间</label>
              <input
                className={styles.input}
                type="datetime-local"
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>比赛时长（分钟）</label>
              <input
                className={styles.input}
                type="number"
                value={duration}
                onChange={e => setDuration(Number(e.target.value))}
                min={1}
                max={600}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              访问口令（Access Cookie）<span className={styles.required}>*必填</span>
            </label>
            <textarea
              className={styles.cookieTextarea}
              value={accessCookie}
              onChange={e => setAccessCookie(e.target.value)}
              placeholder="从浏览器复制完整的 Cookie 字符串粘贴到这里"
              rows={3}
              spellCheck={false}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>PTA 比赛 ID</label>
            <input
              className={styles.input}
              type="text"
              value={ptaContestId}
              onChange={e => setPtaContestId(e.target.value)}
              placeholder="例如：123456"
              maxLength={50}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              队伍信息（JSON 格式）<span className={styles.required}>*必填</span>
            </label>
            <textarea
              className={styles.jsonTextarea}
              value={teamsJson}
              onChange={e => setTeamsJson(e.target.value)}
              rows={16}
              spellCheck={false}
            />
            <p className={styles.jsonHint}>
              格式：{'{'}"name": "队伍名", "members": ["队员1", "队员2", ...]{'}'}
              ，每队最多 10 名队员
            </p>
          </div>

          <div className={styles.submitRow}>
            <button
              className={styles.submitBtn}
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? '创建中...' : '✓ 创建比赛'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
