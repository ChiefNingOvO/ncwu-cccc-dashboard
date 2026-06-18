import { useScore } from '../context/ScoreContext';
import type { Member } from '../types';
import { useScoreAnimation } from '../hooks/useScoreAnimation';
import styles from './MemberCard.module.css';

interface Props {
  member: Member;
  teamAdvancedUnlocked: boolean;
  teamTopUnlocked: boolean;
}

export function MemberCard({ member, teamAdvancedUnlocked, teamTopUnlocked }: Props) {
  const { state, dispatch } = useScore();
  const isSelected = state.selectedMemberId === member.id;
  const flash = useScoreAnimation(member.totalScore);

  const advancedValid = teamAdvancedUnlocked;
  const topValid = teamAdvancedUnlocked && teamTopUnlocked;

  let effectiveScore = member.basicTotal;
  if (advancedValid) effectiveScore += member.advancedTotal;
  if (topValid) effectiveScore += member.topTotal;

  const handleClick = () => {
    dispatch({ type: 'SELECT_MEMBER', memberId: member.id });
  };

  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ''} ${flash ? styles.flash : ''}`}
      onClick={handleClick}
    >
      <div className={styles.name}>{member.name}</div>
      <div className={styles.total}>{effectiveScore}</div>
      <div className={styles.levels}>
        <span className={styles.level}>基{member.basicTotal}</span>
        <span className={`${styles.level} ${!advancedValid ? styles.locked : ''}`}>
          进{member.advancedTotal}
        </span>
        <span className={`${styles.level} ${!topValid ? styles.locked : ''}`}>
          登{member.topTotal}
        </span>
      </div>
    </div>
  );
}
