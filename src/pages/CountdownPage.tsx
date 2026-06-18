import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import styles from './CountdownPage.module.css';

interface Props {
  compName: string;
  startTime: string;
  durationMinutes: number;
  onStart: () => void;
}

function calcRemaining(startTime: string): { days: number; hours: number; minutes: number; seconds: number; total: number } {
  const start = new Date(startTime).getTime();
  const now = Date.now();
  const total = Math.max(0, start - now);
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { days, hours, minutes, seconds, total };
}

export function CountdownPage({ compName, startTime, durationMinutes, onStart }: Props) {
  const [now, setNow] = useState(new Date());
  const [remaining, setRemaining] = useState(() => calcRemaining(startTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
      const r = calcRemaining(startTime);
      setRemaining(r);
      if (r.total <= 0) {
        clearInterval(timer);
        onStart();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime, onStart]);

  const timeStr = now.toLocaleTimeString('zh-CN', { hour12: false });
  const dateStr = now.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });

  const startDate = new Date(startTime);
  const startTimeStr = startDate.toLocaleTimeString('zh-CN', { hour12: false });
  const startDateStr = startDate.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className={styles.page}>
      <Header title={compName} showBack={true} />
      <div className={styles.main}>
        {/* 比赛名称与状态 */}
        <div className={styles.hero}>
          <div className={styles.badge}>🏆 即将开始</div>
          <h1 className={styles.title}>{compName}</h1>
          <p className={styles.subtitle}>
            {startDateStr} {startTimeStr} · 时长 {durationMinutes} 分钟
          </p>
        </div>

        {/* 实时时钟 */}
        <div className={styles.clockBox}>
          <div className={styles.clockLabel}>⏰ 当前时间</div>
          <div className={styles.clock}>{timeStr}</div>
          <div className={styles.dateLabel}>{dateStr}</div>
        </div>

        {/* 倒计时 */}
        <div className={styles.countdownBox}>
          <div className={styles.countdownLabel}>📌 距比赛开始</div>
          {remaining.total > 0 ? (
            <>
              <div className={styles.timer}>
                <div className={styles.timerBlock}>
                  <span className={styles.timerNum}>{remaining.days}</span>
                  <span className={styles.timerLabel}>天</span>
                </div>
                <span className={styles.timerSep}>:</span>
                <div className={styles.timerBlock}>
                  <span className={styles.timerNum}>{pad(remaining.hours)}</span>
                  <span className={styles.timerLabel}>时</span>
                </div>
                <span className={styles.timerSep}>:</span>
                <div className={styles.timerBlock}>
                  <span className={styles.timerNum}>{pad(remaining.minutes)}</span>
                  <span className={styles.timerLabel}>分</span>
                </div>
                <span className={styles.timerSep}>:</span>
                <div className={styles.timerBlock}>
                  <span className={styles.timerNum}>{pad(remaining.seconds)}</span>
                  <span className={styles.timerLabel}>秒</span>
                </div>
              </div>
              {/* 进度条 */}
              <div className={styles.progressTrack}>
                <div
                  className={styles.progressBar}
                  style={{
                    width: `${Math.max(2, Math.min(100, ((durationMinutes * 60 * 1000 - remaining.total) / (durationMinutes * 60 * 1000)) * 100))}%`,
                  }}
                />
              </div>
            </>
          ) : (
            <div className={styles.started}>
              <span className={styles.startedIcon}>🎉</span>
              <span>比赛已开始！即将进入...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
