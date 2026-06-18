import { useScore } from '../context/ScoreContext';
import styles from './Footer.module.css';

export function Footer() {
  const { state } = useScore();
  const teamCount = state.teams.length;
  const memberCount = state.teams.reduce((s, t) => s + t.members.length, 0);
  const lastUpdate = state.lastUpdatedTime
    ? new Date(state.lastUpdatedTime).toLocaleTimeString('zh-CN')
    : '--';

  return (
    <footer className={styles.footer}>
      <span className={styles.item}>参赛队伍 <strong>{teamCount}</strong></span>
      <span className={styles.divider}>|</span>
      <span className={styles.item}>参赛人数 <strong>{memberCount}</strong></span>
      <span className={styles.divider}>|</span>
      <span className={styles.item}>最近更新 <strong>{lastUpdate}</strong></span>
    </footer>
  );
}
