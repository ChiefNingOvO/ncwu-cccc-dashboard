import { Router, type Request, type Response } from 'express';
import { getDb } from '../db';

const router = Router();

function esc(v: string | number): string {
  if (typeof v === 'number') return String(v);
  return `'${v.replace(/'/g, "''")}'`;
}

function computeStatus(startTime: string | null, durationMinutes: number | null, storedStatus: string): string {
  if (!startTime) return storedStatus;
  const now = new Date();
  const start = new Date(startTime.replace(' ', 'T'));
  const diff = now.getTime() - start.getTime();
  if (diff < 0) return 'upcoming';
  if (durationMinutes && diff > durationMinutes * 60 * 1000) return 'finished';
  return 'active';
}

// GET /api/competitions — 比赛列表
router.get('/', async (_req: Request, res: Response) => {
  const db = await getDb();
  const comps = db.exec(`
    SELECT c.*, COUNT(DISTINCT t.id) as team_count, COUNT(DISTINCT m.id) as member_count
    FROM competitions c
    LEFT JOIN teams t ON t.competition_id = c.id
    LEFT JOIN members m ON m.team_id = t.id
    GROUP BY c.id
    ORDER BY c.created_at DESC
  `);

  if (comps.length === 0) {
    res.json([]);
    return;
  }

  const rows = comps[0].values.map(v => ({
    id: v[0],
    name: v[1],
    created_at: v[2],
    status: computeStatus(v[4] as string | null, v[5] as number | null, v[3] as string),
    start_time: v[4],
    duration_minutes: v[5],
    access_cookie: v[6],
    team_count: v[7],
    member_count: v[8],
  }));
  res.json(rows);
});

// POST /api/competitions — 创建比赛
router.post('/', async (req: Request, res: Response) => {
  const { name, teams: teamData, start_time, duration_minutes, access_cookie } = req.body as {
    name: string;
    teams: { name: string; members: string[] }[];
    start_time?: string;
    duration_minutes?: number;
    access_cookie?: string;
  };

  if (!name || !teamData || teamData.length === 0) {
    res.status(400).json({ error: '比赛名称和队伍信息不能为空' });
    return;
  }

  const db = await getDb();
  const now = new Date();
  const startTime = start_time || now.toISOString().slice(0, 19).replace('T', ' ');
  const duration = duration_minutes || 180;
  const cookie = access_cookie || '';
  const status = start_time && new Date(start_time) > now ? 'upcoming' : 'active';
  db.run(`INSERT INTO competitions (name, status, created_at, start_time, duration_minutes, access_cookie) VALUES (${esc(name)}, ${esc(status)}, datetime('now', 'localtime'), ${esc(startTime)}, ${duration}, ${esc(cookie)})`);
  const compResult = db.exec('SELECT last_insert_rowid()');
  const compId = Number(compResult[0].values[0][0]);

  for (const team of teamData) {
    db.run(`INSERT INTO teams (competition_id, name) VALUES (${compId}, ${esc(team.name)})`);
    const teamResult = db.exec('SELECT last_insert_rowid()');
    const teamId = Number(teamResult[0].values[0][0]);

    for (const memberName of team.members) {
      db.run(`INSERT INTO members (team_id, name) VALUES (${teamId}, ${esc(memberName)})`);
    }
  }

  res.status(201).json({ id: compId, name, status: 'active' });
});

// GET /api/competitions/:id — 比赛详情（含队伍、队员、分数）
router.get('/:id', async (req: Request, res: Response) => {
  const db = await getDb();
  const compId = parseInt(req.params.id);

  const compRows = db.exec(`SELECT * FROM competitions WHERE id = ${compId}`);
  if (compRows.length === 0 || compRows[0].values.length === 0) {
    res.status(404).json({ error: '比赛不存在' });
    return;
  }
  const comp = compRows[0].values[0];

  const teamRows = db.exec(`SELECT * FROM teams WHERE competition_id = ${compId}`);

  const teams: Array<{
    id: number; name: string;
    members: Array<{
      id: number; name: string;
      scores: Array<{ level: string; question_index: number; score: number }>;
    }>;
  }> = [];

  if (teamRows.length > 0) {
    for (const t of teamRows[0].values) {
      const teamId = t[0] as number;
      const memberRows = db.exec(`SELECT * FROM members WHERE team_id = ${teamId}`);

      const members: Array<{
        id: number; name: string;
        scores: Array<{ level: string; question_index: number; score: number }>;
      }> = [];

      if (memberRows.length > 0) {
        for (const m of memberRows[0].values) {
          const memberId = m[0] as number;
          const scoreRows = db.exec(`SELECT level, question_index, score FROM scores WHERE member_id = ${memberId}`);
          const scores = scoreRows.length > 0
            ? scoreRows[0].values.map(s => ({ level: s[0] as string, question_index: s[1] as number, score: s[2] as number }))
            : [];
          members.push({ id: memberId, name: m[2] as string, scores });
        }
      }

      teams.push({ id: teamId, name: t[2] as string, members });
    }
  }

  res.json({
    id: comp[0],
    name: comp[1],
    created_at: comp[2],
    status: computeStatus(comp[4] as string | null, comp[5] as number | null, comp[3] as string),
    start_time: comp[4],
    duration_minutes: comp[5],
    access_cookie: comp[6],
    teams,
  });
});

// PUT /api/competitions/:id — 更新比赛状态
router.put('/:id', async (req: Request, res: Response) => {
  const { status } = req.body as { status: string };
  const compId = parseInt(req.params.id);

  if (!['active', 'finished', 'upcoming'].includes(status)) {
    res.status(400).json({ error: '无效的状态' });
    return;
  }

  const db = await getDb();
  db.run(`UPDATE competitions SET status = ${esc(status)} WHERE id = ${compId}`);
  res.json({ id: compId, status });
});

// DELETE /api/competitions/:id — 删除比赛
router.delete('/:id', async (req: Request, res: Response) => {
  const db = await getDb();
  const compId = parseInt(req.params.id);
  db.run(`DELETE FROM competitions WHERE id = ${compId}`);
  res.json({ success: true });
});

// GET /api/competitions/:id/scores — 获取所有分数
router.get('/:id/scores', async (req: Request, res: Response) => {
  const db = await getDb();
  const compId = parseInt(req.params.id);

  const result = db.exec(`
    SELECT s.member_id, s.level, s.question_index, s.score
    FROM scores s
    JOIN members m ON m.id = s.member_id
    JOIN teams t ON t.id = m.team_id
    WHERE t.competition_id = ${compId}
  `);

  if (result.length === 0) {
    res.json([]);
    return;
  }

  const scores = result[0].values.map(v => ({
    member_id: v[0],
    level: v[1],
    question_index: v[2],
    score: v[3],
  }));
  res.json(scores);
});

// POST /api/competitions/:id/scores — 批量更新分数
router.post('/:id/scores', async (req: Request, res: Response) => {
  const db = await getDb();
  const { updates } = req.body as {
    updates: Array<{ member_id: number; level: string; question_index: number; score: number }>;
  };

  if (!updates || updates.length === 0) {
    res.status(400).json({ error: '更新数据不能为空' });
    return;
  }

  for (const u of updates) {
    db.run(
      `INSERT OR REPLACE INTO scores (member_id, level, question_index, score, updated_at) VALUES (${u.member_id}, ${esc(u.level)}, ${u.question_index}, ${u.score}, datetime('now', 'localtime'))`
    );
  }

  res.json({ success: true, count: updates.length });
});

export default router;
