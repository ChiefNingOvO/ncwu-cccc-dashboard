import { useScore } from '../context/ScoreContext';
import { BASIC_SCORES, ADVANCED_SCORES, TOP_SCORES } from '../types';
import styles from './ScoreDetailPanel.module.css';

export function ScoreDetailPanel() {
  const { state, dispatch } = useScore();
  const selectedMember = (() => {
    for (const t of state.teams) {
      const m = t.members.find(m => m.id === state.selectedMemberId);
      if (m) return { member: m, team: t };
    }
    return null;
  })();

  if (!selectedMember) return null;

  const { member, team } = selectedMember;

  const handleClose = () => {
    dispatch({ type: 'SELECT_MEMBER', memberId: '' });
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.panel}>
        <div className={styles.header}>
          <span className={styles.title}>
            📋 {member.name}
            <span className={styles.teamName}>（{team.name}）</span>
          </span>
          <button className={styles.closeBtn} onClick={handleClose}>✕</button>
        </div>

        <div className={styles.content}>
          <LevelSection title="基础级" scores={member.basicScores} maxScores={BASIC_SCORES} color="#1a73e8" />
          <LevelSection title="进阶级" scores={member.advancedScores} maxScores={ADVANCED_SCORES} color="#e8710a" />
          <LevelSection title="登顶级" scores={member.topScores} maxScores={TOP_SCORES} color="#e6a817" />
        </div>

        <div className={styles.summary}>
          <span>基础 {member.basicTotal}</span>
          <span>进阶 {member.advancedTotal}</span>
          <span>登顶 {member.topTotal}</span>
          <span className={styles.total}>总分 {member.totalScore}</span>
        </div>
      </div>
    </div>
  );
}

function LevelSection({
  title, scores, maxScores, color,
}: {
  title: string;
  scores: { questionIndex: number; score: number; maxScore: number }[];
  maxScores: number[];
  color: string;
}) {
  const total = scores.reduce((s, q) => s + q.score, 0);
  const maxTotal = maxScores.reduce((a, b) => a + b, 0);

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTitle} style={{ color }}>{title}</span>
        <span className={styles.sectionTotal}>{total}/{maxTotal}</span>
      </div>
      <div className={styles.questions}>
        {scores.map((q, i) => (
          <div
            key={i}
            className={`${styles.question} ${q.score > 0 ? styles.passed : styles.failed}`}
            title={`第${i + 1}题: ${q.score}/${q.maxScore}`}
          >
            <span className={styles.qNum}>T{i + 1}</span>
            <span className={styles.qScore}>{q.score}/{q.maxScore}</span>
            <div className={styles.qBar}>
              <div
                className={styles.qBarFill}
                style={{
                  width: `${(q.score / q.maxScore) * 100}%`,
                  background: q.score > 0 ? color : '#eee',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
