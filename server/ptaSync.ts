import { execFileSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDb, saveDb } from './db';

// ===== 同步逻辑 =====

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DEFAULT_PTA_SYNC_SCRIPT = path.join(__dirname, 'scripts', 'pta_sync.py');
const PYTHON_BIN = process.env.PYTHON_BIN || 'python';

function esc(v: string | number): string {
  if (typeof v === 'number') return String(v);
  return `'${v.replace(/'/g, "''")}'`;
}

/**
 * 题目映射: l1-1~8 → basic(0-7), l1-9~12 → advanced(0-3), l1-13~15 → top(0-2)
 */
function parseQuestionKey(key: string): { level: string; questionIndex: number } | null {
  const match = key.match(/^l1-(\d+)$/);
  if (!match) return null;
  const idx = parseInt(match[1]) - 1;
  if (idx < 8) return { level: 'basic', questionIndex: idx };
  if (idx < 12) return { level: 'advanced', questionIndex: idx - 8 };
  if (idx < 15) return { level: 'top', questionIndex: idx - 12 };
  return null;
}

/**
 * 单次同步：调用 Python 脚本拉取 PTA 数据，直接写入数据库。
 */
export async function syncOnce(competitionId: number): Promise<number> {
  const db = await getDb();

  // 获取比赛信息（Cookie 和 PTA Contest ID）
  const compRows = db.exec(`SELECT access_cookie, pta_contest_id FROM competitions WHERE id = ${competitionId}`);
  if (compRows.length === 0 || compRows[0].values.length === 0) return 0;

  const comp = compRows[0].values[0];
  const cookie = comp[0] as string || '';
  const ptaContestId = comp[1] as string || '';

  // 必须有 Cookie 和 PTA 题目集 ID 才同步
  if (!cookie || !ptaContestId) {
    console.log(`⏭ 比赛 ${competitionId} 未配置 PTA，跳过同步`);
    return 0;
  }

  try {
    const count = await callPythonScript(competitionId, ptaContestId, cookie, db);
    return count;
  } catch (err) {
    console.error(`⚠️ Python 脚本调用失败:`, err);
    return 0;
  }
}

/**
 * 调用 Python 脚本拉取 PTA 数据，解析 stdout JSON 直接写入 DB
 */
async function callPythonScript(competitionId: number, ptaContestId: string, cookie: string, db: any): Promise<number> {
  const scriptPath = process.env.PTA_SYNC_SCRIPT_PATH || DEFAULT_PTA_SYNC_SCRIPT;

  console.log(`🐍 调用 Python 脚本同步比赛 ${competitionId}...`);
  const output = execFileSync(PYTHON_BIN, [scriptPath, '--pta-contest-id', ptaContestId], {
    timeout: 180000,
    encoding: 'utf-8',
    env: { ...process.env, PTA_COOKIE: cookie },
  });

  // Python 脚本最后一行是 JSON 数据
  const lines = output.trim().split('\n');
  const jsonLine = lines[lines.length - 1];
  let players: Array<{ name: string; score: Record<string, number> }>;
  try {
    players = JSON.parse(jsonLine);
  } catch {
    console.error(`⚠️ 无法解析 Python 输出为 JSON: ${jsonLine.slice(0, 200)}`);
    return 0;
  }

  if (!Array.isArray(players) || players.length === 0) {
    console.log('⚠️ Python 返回空数据');
    return 0;
  }

  // 获取该比赛的所有队员 (name → id 映射)
  const memberRows = db.exec(`
    SELECT m.id, m.name FROM members m
    JOIN teams t ON t.id = m.team_id
    WHERE t.competition_id = ${competitionId}
  `);

  const nameToId = new Map<string, number>();
  if (memberRows.length > 0) {
    for (const row of memberRows[0].values) {
      nameToId.set(row[1] as string, row[0] as number);
    }
  }

  console.log(`📊 PTA 返回 ${players.length} 名选手, DB 有 ${nameToId.size} 名队员`);
  console.log(`📊 PTA 前3: ${players.slice(0, 3).map(p => p.name).join(', ')}`);
  console.log(`📊 DB 前3: ${[...nameToId.keys()].slice(0, 3).join(', ')}`);

  let matchedCount = 0;
  const unmatchedPlayers: string[] = [];

  // 调试：打印前几个名字的字节
  if (players.length > 0 && nameToId.size > 0) {
    const pName = players[0].name;
    const dbFirstName = [...nameToId.keys()][0];
    console.log(`🔍 PTA[0]="${pName}" hex=${Buffer.from(pName, 'utf-8').toString('hex')}`);
    console.log(`🔍 DB[0]="${dbFirstName}" hex=${Buffer.from(dbFirstName, 'utf-8').toString('hex')}`);
    console.log(`🔍 includes test: ${dbFirstName.includes(pName)}`);
  }

  for (const player of players) {
    // 先精确匹配，再模糊匹配（PTA 名包含于 DB 名，如 "王云飞" 匹配 "202217902 王云飞"）
    let memberId = nameToId.get(player.name);
    if (!memberId) {
      for (const [dbName, dbId] of nameToId) {
        if (dbName.includes(player.name) || player.name.includes(dbName)) {
          memberId = dbId;
          break;
        }
      }
    }
    if (!memberId) {
      unmatchedPlayers.push(player.name);
      continue;
    }
    matchedCount++;

    for (const [key, score] of Object.entries(player.score)) {
      const mapped = parseQuestionKey(key);
      if (!mapped) continue;
      const intScore = Math.round(Number(score)) || 0;
      db.run(
        `INSERT OR REPLACE INTO scores (member_id, level, question_index, score, updated_at)
         VALUES (${memberId}, ${esc(mapped.level)}, ${mapped.questionIndex}, ${intScore}, datetime('now', 'localtime'))`
      );
    }
  }

  saveDb();

  if (unmatchedPlayers.length > 0) {
    console.log(`⚠️ 导入完成: 匹配 ${matchedCount} 人, 未匹配 ${unmatchedPlayers.length} 人 (${unmatchedPlayers.slice(0, 5).join(', ')}${unmatchedPlayers.length > 5 ? '...' : ''})`);
  } else {
    console.log(`✅ 导入完成: 匹配 ${matchedCount} 人`);
  }

  return matchedCount;
}

// ===== 定时器管理 =====

const syncTimers = new Map<number, ReturnType<typeof setInterval>>();
const lastSyncTimes = new Map<number, string>();

export function startPtaSync(competitionId: number, intervalSec: number = 60): void {
  if (syncTimers.has(competitionId)) {
    console.log(`⚠️ 比赛 ${competitionId} 已有同步定时器，跳过`);
    return;
  }

  console.log(`🔄 启动比赛 ${competitionId} 的定时同步（每 ${intervalSec} 秒）`);

  // 立即执行一次
  syncOnce(competitionId).then(count => {
    const now = new Date().toLocaleString('zh-CN', { hour12: false });
    lastSyncTimes.set(competitionId, now);
    console.log(`✅ 比赛 ${competitionId} 初始同步完成，更新 ${count} 人`);
  });

  // 定时执行
  const timer = setInterval(async () => {
    try {
      const count = await syncOnce(competitionId);
      const now = new Date().toLocaleString('zh-CN', { hour12: false });
      lastSyncTimes.set(competitionId, now);
      console.log(`🔄 比赛 ${competitionId} 同步完成，更新 ${count} 人 [${now}]`);
    } catch (err) {
      console.error(`❌ 比赛 ${competitionId} 同步失败:`, err);
    }
  }, intervalSec * 1000);

  syncTimers.set(competitionId, timer);
}

export function stopPtaSync(competitionId: number): void {
  const timer = syncTimers.get(competitionId);
  if (timer) {
    clearInterval(timer);
    syncTimers.delete(competitionId);
    lastSyncTimes.delete(competitionId);
    console.log(`⏹ 停止比赛 ${competitionId} 的定时同步`);
  }
}

export function getPtaSyncStatus(competitionId: number): { running: boolean; lastSyncTime: string | null } {
  return {
    running: syncTimers.has(competitionId),
    lastSyncTime: lastSyncTimes.get(competitionId) || null,
  };
}

export function stopAllPtaSync(): void {
  for (const [id] of syncTimers) {
    stopPtaSync(id);
  }
}
