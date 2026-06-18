import type { Database } from 'sql.js';
import { BASIC_SCORES, ADVANCED_SCORES, TOP_SCORES } from '../src/types';

const TEAM_NAMES = [
  '天梯先锋队', '代码特工队', '凌云战队', '算法猎手',
  '星辰大海队', '破晓突击队', '极光编程组', '无限火力队',
];

const FAMILY_NAMES = ['张', '李', '王', '刘', '陈', '杨', '赵', '黄', '周', '吴', '徐', '孙', '马', '朱', '胡', '郭', '何', '高', '林', '罗'];
const GIVEN_NAMES = ['伟', '芳', '娜', '敏', '静', '强', '磊', '洋', '勇', '军', '杰', '涛', '明', '超', '秀英', '华', '丽', '平', '刚', '桂英'];

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateName(): string {
  return pickRandom(FAMILY_NAMES) + pickRandom(GIVEN_NAMES);
}

export function seedDemoData(db: Database): number {
  // 创建演示比赛
  db.run(
    "INSERT INTO competitions (name, status, created_at, start_time, duration_minutes, access_cookie) VALUES ('演示比赛 - 天梯赛', 'active', datetime('now', 'localtime'), datetime('now', 'localtime'), 180, 'demo2026')"
  );
  const compResult = db.exec('SELECT last_insert_rowid()');
  const competitionId = Number(compResult[0].values[0][0]);

  for (let t = 0; t < TEAM_NAMES.length; t++) {
    db.run(`INSERT INTO teams (competition_id, name) VALUES (${competitionId}, '${TEAM_NAMES[t].replace(/'/g, "''")}')`);
    const teamResult = db.exec('SELECT last_insert_rowid()');
    const teamId = Number(teamResult[0].values[0][0]);
    const memberCount = randomInt(8, 10);

    for (let m = 0; m < memberCount; m++) {
      const name = generateName().replace(/'/g, "''");
      db.run(`INSERT INTO members (team_id, name) VALUES (${teamId}, '${name}')`);
      const memberResult = db.exec('SELECT last_insert_rowid()');
      const memberId = Number(memberResult[0].values[0][0]);

      // 基础级 8 题
      for (let qi = 0; qi < BASIC_SCORES.length; qi++) {
        const roll = Math.random();
        const score = roll > 0.2 ? Math.floor(randomInt(Math.floor(BASIC_SCORES[qi] * 0.6), BASIC_SCORES[qi])) : 0;
        db.run(`INSERT OR REPLACE INTO scores (member_id, level, question_index, score) VALUES (${memberId}, 'basic', ${qi}, ${score})`);
      }
      // 进阶级 4 题
      for (let qi = 0; qi < ADVANCED_SCORES.length; qi++) {
        const roll = Math.random();
        const score = roll > 0.2 ? Math.floor(randomInt(Math.floor(ADVANCED_SCORES[qi] * 0.6), ADVANCED_SCORES[qi])) : 0;
        db.run(`INSERT OR REPLACE INTO scores (member_id, level, question_index, score) VALUES (${memberId}, 'advanced', ${qi}, ${score})`);
      }
      // 登顶级 3 题
      for (let qi = 0; qi < TOP_SCORES.length; qi++) {
        const roll = Math.random();
        const score = roll > 0.2 ? Math.floor(randomInt(Math.floor(TOP_SCORES[qi] * 0.6), TOP_SCORES[qi])) : 0;
        db.run(`INSERT OR REPLACE INTO scores (member_id, level, question_index, score) VALUES (${memberId}, 'top', ${qi}, ${score})`);
      }
    }
  }

  return competitionId;
}

// 检查是否已有种子数据
export function hasSeedData(db: Database): boolean {
  const result = db.exec("SELECT COUNT(*) as count FROM competitions WHERE name = '演示比赛 - 天梯赛'");
  if (result.length > 0 && result[0].values.length > 0) {
    return (result[0].values[0][0] as number) > 0;
  }
  return false;
}
