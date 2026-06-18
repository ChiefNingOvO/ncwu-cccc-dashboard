import { useScore } from '../context/ScoreContext';
import { MemberCard } from './MemberCard';
import styles from './RightPanel.module.css';

export function RightPanel() {
  const { state } = useScore();
  const selectedTeam = state.teams.find(t => t.id === state.selectedTeamId);

  if (!selectedTeam) {
    return (
      <div className={styles.panel}>
        <div className={styles.placeholder}>👈 请从左侧选择队伍</div>
      </div>
    );
  }

  return (
    <div className={styles.panel}>
      <div className={styles.titleBar}>
        👥 {selectedTeam.name} · 队员列表
      </div>
      <div className={styles.grid}>
        {selectedTeam.members.map(member => (
          <MemberCard
            key={member.id}
            member={member}
            teamAdvancedUnlocked={selectedTeam.advancedUnlocked}
            teamTopUnlocked={selectedTeam.topUnlocked}
          />
        ))}
      </div>
    </div>
  );
}
