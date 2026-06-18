import type { Team, Member, QuestionScore } from '../types';
import {
  BASIC_SCORES, ADVANCED_SCORES, TOP_SCORES,
  BASIC_THRESHOLD, ADVANCED_THRESHOLD,
  MEMBER_BASIC_THRESHOLD, MEMBER_ADVANCED_THRESHOLD,
} from '../types';

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

function generateScores(maxScores: number[]): QuestionScore[] {
  // 模拟：大部分题目得分在满分的 60%-100% 之间，少数 0 分
  return maxScores.map((max, idx) => {
    const roll = Math.random();
    let score = 0;
    if (roll > 0.2) {
      // 80% 概率得分
      score = Math.floor(randomInt(Math.floor(max * 0.6), max));
    }
    return { questionIndex: idx, score, maxScore: max };
  });
}

function calcMemberTotals(member: Omit<Member, 'basicTotal' | 'advancedTotal' | 'topTotal' | 'totalScore' | 'advancedUnlocked' | 'topUnlocked'>): Member {
  const basicTotal = member.basicScores.reduce((sum, q) => sum + q.score, 0);
  const advancedTotal = member.advancedScores.reduce((sum, q) => sum + q.score, 0);
  const topTotal = member.topScores.reduce((sum, q) => sum + q.score, 0);
  const advancedUnlocked = basicTotal >= MEMBER_BASIC_THRESHOLD;
  const topUnlocked = advancedUnlocked && advancedTotal >= MEMBER_ADVANCED_THRESHOLD;
  let totalScore = basicTotal;
  if (advancedUnlocked) totalScore += advancedTotal;
  if (topUnlocked) totalScore += topTotal;
  return {
    ...member,
    basicTotal,
    advancedTotal,
    topTotal,
    totalScore,
    advancedUnlocked,
    topUnlocked,
  };
}

function calcTeamTotals(team: Omit<Team, 'basicTotal' | 'advancedTotal' | 'topTotal' | 'totalScore' | 'advancedUnlocked' | 'topUnlocked'>): Team {
  const basicTotal = team.members.reduce((sum, m) => sum + m.basicTotal, 0);
  const advancedTotal = team.members.reduce((sum, m) => sum + m.advancedTotal, 0);
  const topTotal = team.members.reduce((sum, m) => sum + m.topTotal, 0);
  const advancedUnlocked = basicTotal >= BASIC_THRESHOLD;
  const topUnlocked = advancedUnlocked && advancedTotal >= ADVANCED_THRESHOLD;
  // 总分：基础分 + 进阶分（若解锁）+ 登顶分（若链式解锁）
  let totalScore = basicTotal;
  if (advancedUnlocked) totalScore += advancedTotal;
  if (topUnlocked) totalScore += topTotal;
  return {
    ...team,
    basicTotal,
    advancedTotal,
    topTotal,
    totalScore,
    advancedUnlocked,
    topUnlocked,
  };
}

export function generateMockData(): Team[] {
  const teams: Team[] = [];

  for (let t = 0; t < TEAM_NAMES.length; t++) {
    const memberCount = randomInt(8, 10);
    const members: Member[] = [];

    for (let m = 0; m < memberCount; m++) {
      const rawMember = {
        id: `member-${t}-${m}`,
        name: generateName(),
        basicScores: generateScores(BASIC_SCORES),
        advancedScores: generateScores(ADVANCED_SCORES),
        topScores: generateScores(TOP_SCORES),
        basicTotal: 0,
        advancedTotal: 0,
        topTotal: 0,
        totalScore: 0,
      };
      members.push(calcMemberTotals(rawMember));
    }

    const rawTeam = {
      id: `team-${t}`,
      name: TEAM_NAMES[t],
      members,
      basicTotal: 0,
      advancedTotal: 0,
      topTotal: 0,
      totalScore: 0,
      advancedUnlocked: false,
      topUnlocked: false,
    };
    teams.push(calcTeamTotals(rawTeam));
  }

  return teams;
}
