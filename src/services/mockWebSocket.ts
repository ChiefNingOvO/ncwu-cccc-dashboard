import type { ScoreAction, ScoreLevel } from '../types';
import { BASIC_SCORES, ADVANCED_SCORES, TOP_SCORES } from '../types';

const SCORE_LEVELS: { level: ScoreLevel; maxScores: number[] }[] = [
  { level: 'basic', maxScores: BASIC_SCORES },
  { level: 'advanced', maxScores: ADVANCED_SCORES },
  { level: 'top', maxScores: TOP_SCORES },
];

let timerId: ReturnType<typeof setInterval> | null = null;

export function startMockWebSocket(
  dispatch: React.Dispatch<ScoreAction>,
  getMemberIds: () => { memberId: string; teamId: string }[]
) {
  if (timerId) return; // 防止重复启动

  function tick() {
    const members = getMemberIds();
    if (members.length === 0) return;

    // 随机选中 1-2 名队员
    const count = Math.random() > 0.6 ? 2 : 1;
    const updates: Array<{ memberId: string; level: ScoreLevel; questionIndex: number; score: number }> = [];

    for (let i = 0; i < count; i++) {
      const { memberId } = members[Math.floor(Math.random() * members.length)];
      const { level, maxScores } = SCORE_LEVELS[Math.floor(Math.random() * SCORE_LEVELS.length)];
      const questionIndex = Math.floor(Math.random() * maxScores.length);
      const maxScore = maxScores[questionIndex];
      // 得分在 60%-100% 之间随机
      const score = Math.floor(Math.random() * (maxScore * 0.4) + maxScore * 0.6);

      updates.push({ memberId, level, questionIndex, score });
    }

    if (updates.length === 1) {
      dispatch({ type: 'UPDATE_SCORE', ...updates[0] });
    } else {
      dispatch({ type: 'BATCH_UPDATE', updates });
    }
  }

  // 每 2-5 秒随机推送一次
  const scheduleNext = () => {
    const delay = 2000 + Math.random() * 3000;
    timerId = setTimeout(() => {
      tick();
      scheduleNext();
    }, delay);
  };

  scheduleNext();
}

export function stopMockWebSocket() {
  if (timerId) {
    clearTimeout(timerId);
    timerId = null;
  }
}
