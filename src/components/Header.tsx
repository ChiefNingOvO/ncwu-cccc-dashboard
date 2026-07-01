import { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import styles from './Header.module.css';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
}

export function Header({ title, showBack = true }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const { themeLabel, nextTheme } = useTheme();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeStr = time.toLocaleTimeString('zh-CN', { hour12: false });
  const dateStr = time.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });

  // 判断当前是简约版还是官方版
  const isSimpleLive = !!id && /^\/live\/[^/]+$/.test(location.pathname);
  const isOfficialLive = !!id && /^\/live\/[^/]+\/official$/.test(location.pathname);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {showBack && (
          <button className={styles.backBtn} onClick={() => navigate('/')} title="返回 Dashboard">
            ← 返回
          </button>
        )}
        <h1 className={styles.title}>{title || '天梯赛实时大屏'}</h1>
      </div>
      <div className={styles.right}>
        {isSimpleLive && (
          <button
            className={styles.officialEntryBtn}
            onClick={() => navigate(`/live/${id}/official`)}
            title="切换到官方版大屏"
          >
            🏆 官方版
          </button>
        )}
        {isOfficialLive && (
          <button
            className={styles.officialEntryBtn}
            onClick={() => navigate(`/live/${id}`)}
            title="切换到简约版大屏"
          >
            📊 简约版
          </button>
        )}
        <button className={styles.themeBtn} onClick={nextTheme} title="切换主题">
          🎨 {themeLabel}
        </button>
        <span className={styles.date}>{dateStr}</span>
        <span className={styles.clock}>{timeStr}</span>
      </div>
    </header>
  );
}
