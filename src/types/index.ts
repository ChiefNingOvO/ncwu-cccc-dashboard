// 题目分值定义
export const BASIC_SCORES = [5, 5, 10, 10, 15, 15, 20, 20];
export const ADVANCED_SCORES = [25, 25, 25, 25];
export const TOP_SCORES = [30, 30, 30];

// 门槛阈值（团队）
export const BASIC_THRESHOLD = 800;   // 团队基础总分 >= 800，进阶分才有效
export const ADVANCED_THRESHOLD = 400; // 团队进阶总分 >= 400，登顶分才有效

// 门槛阈值（个人）
export const MEMBER_BASIC_THRESHOLD = 80;    // 个人基础总分 >= 80，进阶分才有效
export const MEMBER_ADVANCED_THRESHOLD = 40; // 个人进阶总分 >= 40，登顶分才有效

// 单题得分
export interface QuestionScore {
  questionIndex: number; // 0-based
  score: number;         // 实际得分（0 表示未通过）
  maxScore: number;      // 该题满分
}

// 队员
export interface Member {
  id: string;
  name: string;
  basicScores: QuestionScore[];    // 8题
  advancedScores: QuestionScore[]; // 4题
  topScores: QuestionScore[];      // 3题
  // 计算属性（由 context 计算）
  basicTotal: number;
  advancedTotal: number;
  topTotal: number;
  totalScore: number;            // 仅计入「有效」的分数
  advancedUnlocked: boolean;     // 个人基础分 >= MEMBER_BASIC_THRESHOLD
  topUnlocked: boolean;          // 个人进阶分 >= MEMBER_ADVANCED_THRESHOLD
}

// 队伍
export interface Team {
  id: string;
  name: string;
  members: Member[];
  // 计算属性
  basicTotal: number;
  advancedTotal: number;
  topTotal: number;
  totalScore: number;
  advancedUnlocked: boolean; // 基础分 >= 800
  topUnlocked: boolean;      // 进阶分 >= 400
}

// 分数级别
export type ScoreLevel = 'basic' | 'advanced' | 'top';

// 全局状态
export interface ScoreState {
  teams: Team[];
  selectedTeamId: string | null;
  selectedMemberId: string | null;
  lastUpdatedMemberId: string | null; // 最近更新的队员（用于动画）
  lastUpdatedTime: number | null;
}

// Action 类型
export type ScoreAction =
  | { type: 'SELECT_TEAM'; teamId: string }
  | { type: 'SELECT_MEMBER'; memberId: string }
  | { type: 'UPDATE_SCORE'; memberId: string; level: ScoreLevel; questionIndex: number; score: number }
  | { type: 'BATCH_UPDATE'; updates: Array<{ memberId: string; level: ScoreLevel; questionIndex: number; score: number }> };
