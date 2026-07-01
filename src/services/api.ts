const BASE = '/api';

export interface CompetitionSummary {
  id: number;
  name: string;
  created_at: string;
  status: 'active' | 'finished' | 'upcoming';
  start_time: string | null;
  duration_minutes: number | null;
  access_cookie: string | null;
  pta_contest_id: string | null;
  team_count: number;
  member_count: number;
}

export interface CompetitionDetail {
  id: number;
  name: string;
  created_at: string;
  status: string;
  start_time: string | null;
  duration_minutes: number | null;
  access_cookie: string | null;
  pta_contest_id: string | null;
  teams: TeamData[];
}

export interface TeamData {
  id: number;
  name: string;
  members: MemberData[];
}

export interface MemberData {
  id: number;
  name: string;
  scores: ScoreData[];
}

export interface ScoreData {
  level: string;
  question_index: number;
  score: number;
}

export async function getCompetitions(): Promise<CompetitionSummary[]> {
  const res = await fetch(`${BASE}/competitions`);
  if (!res.ok) throw new Error('获取比赛列表失败');
  return res.json();
}

export async function getCompetition(id: number): Promise<CompetitionDetail> {
  const res = await fetch(`${BASE}/competitions/${id}`);
  if (!res.ok) throw new Error('获取比赛详情失败');
  return res.json();
}

export async function createCompetition(data: {
  name: string;
  teams: { name: string; members: string[] }[];
  start_time?: string;
  duration_minutes?: number;
  access_cookie?: string;
  pta_contest_id?: string;
}): Promise<{ id: number }> {
  const res = await fetch(`${BASE}/competitions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('创建比赛失败');
  return res.json();
}

export async function updateCompetitionStatus(id: number, status: string): Promise<void> {
  const res = await fetch(`${BASE}/competitions/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error('更新比赛状态失败');
}

export async function deleteCompetition(id: number): Promise<void> {
  const res = await fetch(`${BASE}/competitions/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('删除比赛失败');
}
