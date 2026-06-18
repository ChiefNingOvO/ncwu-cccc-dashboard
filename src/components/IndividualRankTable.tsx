import { useMemo } from 'react';
import { useScore } from '../context/ScoreContext';
import type { Member } from '../types';
import { useScoreAnimation } from '../hooks/useScoreAnimation';
import styles from './IndividualRankTable.module.css';

interface RankedMember {
  member: Member;
  teamId: string;
  teamName: string;
  rank: number;
}

export function IndividualRankTable({ searchText = '' }: { searchText?: string }) {
  const { state, dispatch } = useScore();

  const rankedMembers: RankedMember[] = useMemo(() => {
    const all: Omit<RankedMember, 'rank'>[] = [];
    for (const team of state.teams) {
      for (const member of team.members) {
        if (searchText && !member.name.includes(searchText) && !team.name.includes(searchText)) continue;
        all.push({ member, teamId: team.id, teamName: team.name });
      }
    }
    all.sort((a, b) => b.member.totalScore - a.member.totalScore || a.member.name.localeCompare(b.member.name));
    return all.map((item, idx) => ({ ...item, rank: idx + 1 }));
  }, [state.teams, searchText]);

  const handleClick = (item: RankedMember) => {
    dispatch({ type: 'SELECT_MEMBER', memberId: item.member.id });
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.thRank}>#</th>
          <th className={styles.thName}>姓名</th>
          <th className={styles.thTeam}>所属队伍</th>
          <th className={styles.thScore}>基础分</th>
          <th className={styles.thScore}>进阶分</th>
          <th className={styles.thScore}>登顶分</th>
          <th className={styles.thScore}>总分</th>
        </tr>
      </thead>
      <tbody>
        {rankedMembers.map(item => (
          <IndividualRankRow
            key={item.member.id}
            item={item}
            isSelected={state.selectedMemberId === item.member.id}
            onClick={() => handleClick(item)}
          />
        ))}
      </tbody>
    </table>
  );
}

function IndividualRankRow({
  item, isSelected, onClick,
}: {
  item: RankedMember;
  isSelected: boolean;
  onClick: () => void;
}) {
  const flash = useScoreAnimation(item.member.totalScore);

  return (
    <tr
      className={`${styles.row} ${isSelected ? styles.selected : ''} ${flash ? styles.flash : ''}`}
      onClick={onClick}
    >
      <td className={styles.rank}>
        {item.rank <= 3 ? (
          <span className={styles[`medal${item.rank}`]}>{item.rank}</span>
        ) : (
          <span className={styles.rankNum}>{item.rank}</span>
        )}
      </td>
      <td className={styles.name}>{item.member.name}</td>
      <td className={styles.team}>{item.teamName}</td>
      <td className={styles.score}>{item.member.basicTotal}</td>
      <td className={styles.score}>{item.member.advancedTotal}</td>
      <td className={styles.score}>{item.member.topTotal}</td>
      <td className={styles.total}>{item.member.totalScore}</td>
    </tr>
  );
}
