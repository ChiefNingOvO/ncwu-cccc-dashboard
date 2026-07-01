import type { Database } from 'sql.js';
import { saveDb } from './db';
import { BASIC_SCORES, ADVANCED_SCORES, TOP_SCORES } from '../src/types';

const TEAM_NAMES = [
  '天梯先锋队', '代码特工队', '凌云战队', '算法猎手',
  '星辰大海队', '破晓突击队', '极光编程组', '无限火力队',
];

const DEMO_MEMBERS: Record<string, string[]> = {
  '天梯先锋队': ['张伟', '李娜', '王磊', '刘芳', '陈明', '杨静', '赵强', '周洋'],
  '代码特工队': ['吴勇', '徐敏', '孙军', '马杰', '朱涛', '胡华', '何超', '高丽'],
  '凌云战队': ['林平', '罗刚', '郭秀英', '张桂英', '李强', '王芳', '刘洋', '陈静'],
  '算法猎手': ['杨勇', '赵敏', '黄伟', '周娜', '吴磊', '徐芳', '孙明', '马静'],
  '星辰大海队': ['朱强', '胡洋', '何勇', '高军', '林杰', '罗涛', '郭华', '张超'],
  '破晓突击队': ['李秀英', '王桂英', '刘平', '陈刚', '杨丽', '赵伟', '黄芳', '周强'],
  '极光编程组': ['吴敏', '徐磊', '孙洋', '马勇', '朱静', '胡强', '何芳', '高洋'],
  '无限火力队': ['林敏', '罗伟', '郭娜', '张磊', '李杰', '王涛', '刘超', '陈秀英'],
};

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function seedDemoData(db: Database): number {
  db.run(
    "INSERT INTO competitions (name, status, created_at, start_time, duration_minutes, access_cookie, pta_contest_id) VALUES ('演示比赛 - 天梯赛', 'active', datetime('now', 'localtime'), datetime('now', 'localtime'), 180, '', '')"
  );
  const compResult = db.exec('SELECT last_insert_rowid()');
  const competitionId = Number(compResult[0].values[0][0]);

  for (const teamName of TEAM_NAMES) {
    db.run(`INSERT INTO teams (competition_id, name) VALUES (${competitionId}, '${teamName.replace(/'/g, "''")}')`);
    const teamResult = db.exec('SELECT last_insert_rowid()');
    const teamId = Number(teamResult[0].values[0][0]);

    const memberNames = DEMO_MEMBERS[teamName] || [];
    for (const name of memberNames) {
      db.run(`INSERT INTO members (team_id, name) VALUES (${teamId}, '${name.replace(/'/g, "''")}')`);
      const memberResult = db.exec('SELECT last_insert_rowid()');
      const memberId = Number(memberResult[0].values[0][0]);

      // 基础级 8 题
      for (let qi = 0; qi < BASIC_SCORES.length; qi++) {
        const roll = Math.random();
        const score = roll > 0.2 ? randomInt(Math.floor(BASIC_SCORES[qi] * 0.6), BASIC_SCORES[qi]) : 0;
        db.run(`INSERT INTO scores (member_id, level, question_index, score) VALUES (${memberId}, 'basic', ${qi}, ${score})`);
      }
      // 进阶级 4 题
      for (let qi = 0; qi < ADVANCED_SCORES.length; qi++) {
        const roll = Math.random();
        const score = roll > 0.2 ? randomInt(Math.floor(ADVANCED_SCORES[qi] * 0.6), ADVANCED_SCORES[qi]) : 0;
        db.run(`INSERT INTO scores (member_id, level, question_index, score) VALUES (${memberId}, 'advanced', ${qi}, ${score})`);
      }
      // 登顶级 3 题
      for (let qi = 0; qi < TOP_SCORES.length; qi++) {
        const roll = Math.random();
        const score = roll > 0.2 ? randomInt(Math.floor(TOP_SCORES[qi] * 0.6), TOP_SCORES[qi]) : 0;
        db.run(`INSERT INTO scores (member_id, level, question_index, score) VALUES (${memberId}, 'top', ${qi}, ${score})`);
      }
    }
  }

  saveDb();
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
