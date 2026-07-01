import { useScore } from '../context/ScoreContext';
import { BASIC_SCORES, ADVANCED_SCORES, TOP_SCORES } from '../types';
import styles from './TeamMembersModal.module.css';

export function TeamMembersModal() {
  const { state, dispatch } = useScore();
  const team = state.teams.find(t => t.id === state.selectedTeamId);

  if (!team) return null;

  const handleClose = () => {
    dispatch({ type: 'SELECT_TEAM', teamId: '' });
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.container}>
        <div className={styles.titleArea}>
          <span className={styles.teamName}>{team.name}</span>
          <button className={styles.closeBtn} onClick={handleClose}>×</button>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.nameHeader}></th>
                <th colSpan={8} className={styles.levelHeader}>基础级</th>
                <th colSpan={4} className={styles.levelHeader}>进阶级</th>
                <th colSpan={3} className={styles.levelHeader}>登顶级</th>
                <th rowSpan={2} className={styles.totalHeader}>总分</th>
                <th rowSpan={2} className={styles.effectiveHeader}>个人<br/>有效分</th>
              </tr>
              <tr className={styles.qHeaderRow}>
                <th className={styles.nameHeader}></th>
                {BASIC_SCORES.map((_, i) => (
                  <th key={`b-${i}`} className={styles.qHeader} data-stage="basic">1-{i + 1}</th>
                ))}
                {ADVANCED_SCORES.map((_, i) => (
                  <th key={`a-${i}`} className={styles.qHeader} data-stage="advanced">2-{i + 1}</th>
                ))}
                {TOP_SCORES.map((_, i) => (
                  <th key={`t-${i}`} className={styles.qHeader} data-stage="top">3-{i + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {team.members.map(member => (
                <tr key={member.id}>
                  <td className={styles.nameCell}>
                    <img src="/gplt/logo-ncwu.png" alt="" className={styles.avatar} />
                    {member.name}
                  </td>
                  {member.basicScores.map((q, i) => (
                    <td
                      key={`b-${i}`}
                      className={styles.qCell}
                      data-stage="basic"
                      data-pass={q.score > 0}
                    >
                      {q.score}
                    </td>
                  ))}
                  {member.advancedScores.map((q, i) => (
                    <td
                      key={`a-${i}`}
                      className={styles.qCell}
                      data-stage="advanced"
                      data-pass={q.score > 0}
                      data-locked={!member.advancedUnlocked}
                    >
                      {q.score}
                    </td>
                  ))}
                  {member.topScores.map((q, i) => (
                    <td
                      key={`t-${i}`}
                      className={styles.qCell}
                      data-stage="top"
                      data-pass={q.score > 0}
                      data-locked={!member.topUnlocked}
                    >
                      {q.score}
                    </td>
                  ))}
                  <td className={styles.totalCell}>{member.basicTotal + member.advancedTotal + member.topTotal}</td>
                  <td className={styles.effectiveCell}>{member.totalScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
