import { useScore } from '../context/ScoreContext';
import type { Team } from '../types';
import { useScoreAnimation } from '../hooks/useScoreAnimation';
import styles from './TeamRankCard.module.css';

interface Props {
  team: Team;
  rank: number;
}

export function TeamRankRow({ team, rank }: Props) {
  const { state, dispatch } = useScore();
  const isSelected = state.selectedTeamId === team.id;
  const flash = useScoreAnimation(team.totalScore);

  const advancedUnlocked = team.advancedUnlocked;
  const topUnlocked = team.topUnlocked;

  const handleClick = () => {
    dispatch({ type: 'SELECT_TEAM', teamId: team.id });
  };

  return (
    <tr
      className={`${styles.row} ${isSelected ? styles.selected : ''} ${flash ? styles.flash : ''}`}
      onClick={handleClick}
    >
      <td className={styles.rank}>
        {rank <= 3 ? (
          <span className={styles[`medal${rank}`]}>{rank}</span>
        ) : (
          <span className={styles.rankNum}>{rank}</span>
        )}
      </td>
      <td className={styles.name}>{team.name}</td>
      <td className={styles.score}>{team.basicTotal}</td>
      <td className={`${styles.score} ${!advancedUnlocked ? styles.locked : ''}`}>
        {team.advancedTotal}
      </td>
      <td className={`${styles.score} ${!topUnlocked ? styles.locked : ''}`}>
        {team.topTotal}
      </td>
      <td className={styles.total}>{team.totalScore}</td>
      <td className={styles.count}>{team.members.length}</td>
    </tr>
  );
}
