import { useScore } from '../context/ScoreContext';
import { MemberCard } from './MemberCard';
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
      <div className={styles.dialog}>
        <div className={styles.header}>
          <span className={styles.title}>👥 {team.name}</span>
          <span className={styles.count}>{team.members.length} 名队员</span>
          <button className={styles.closeBtn} onClick={handleClose}>✕</button>
        </div>
        <div className={styles.content}>
          <div className={styles.grid}>
            {team.members.map(member => (
              <MemberCard
                key={member.id}
                member={member}
                teamAdvancedUnlocked={team.advancedUnlocked}
                teamTopUnlocked={team.topUnlocked}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
