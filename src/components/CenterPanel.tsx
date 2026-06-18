import { useState } from 'react';
import { useScore } from '../context/ScoreContext';
import { TeamRankRow } from './TeamRankCard';
import { IndividualRankTable } from './IndividualRankTable';
import { ScoreDetailPanel } from './ScoreDetailPanel';
import { TeamMembersModal } from './TeamMembersModal';
import styles from './CenterPanel.module.css';

type TabKey = 'team' | 'individual';

export function CenterPanel() {
  const { state } = useScore();
  const [tab, setTab] = useState<TabKey>('team');
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <main className={styles.panel}>
      <ScoreDetailPanel />
      <TeamMembersModal />

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${tab === 'team' ? styles.tabActive : ''}`}
          onClick={() => setTab('team')}
        >
          队伍排名
        </button>
        <button
          className={`${styles.tab} ${tab === 'individual' ? styles.tabActive : ''}`}
          onClick={() => setTab('individual')}
        >
          个人排名
        </button>
        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="搜索队伍名或队员名..."
            value={searchText}
            onChange={handleSearchChange}
          />
          {searchText && (
            <button className={styles.searchClear} onClick={() => setSearchText('')}>✕</button>
          )}
        </div>
      </div>

      <div className={styles.tableWrap}>
        {tab === 'team' ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thRank}>#</th>
                <th className={styles.thName}>队伍</th>
                <th className={styles.thScore}>基础分</th>
                <th className={styles.thScore}>进阶分</th>
                <th className={styles.thScore}>登顶分</th>
                <th className={styles.thScore}>总分</th>
                <th className={styles.thCount}>人数</th>
              </tr>
            </thead>
            <tbody>
              {state.teams
                .filter(team => !searchText || team.name.includes(searchText) || team.members.some(m => m.name.includes(searchText)))
                .map((team, idx) => (
                  <TeamRankRow key={team.id} team={team} rank={idx + 1} />
                ))}
            </tbody>
          </table>
        ) : (
          <IndividualRankTable searchText={searchText} />
        )}
      </div>
    </main>
  );
}
