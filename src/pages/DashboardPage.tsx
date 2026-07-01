import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import {
  getCompetitions,
  updateCompetitionStatus,
  deleteCompetition,
  type CompetitionSummary,
} from '../services/api';
import styles from './DashboardPage.module.css';

export function DashboardPage() {
  const navigate = useNavigate();
  const [competitions, setCompetitions] = useState<CompetitionSummary[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const data = await getCompetitions();
      setCompetitions(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleFinish = async (id: number) => {
    await updateCompetitionStatus(id, 'finished');
    load();
  };

  const handleDelete = async (id: number) => {
    if (!confirm('确定要删除这个比赛吗？')) return;
    await deleteCompetition(id);
    load();
  };

  const statusLabels: Record<string, string> = {
    active: '进行中',
    finished: '已结束',
    upcoming: '未开始',
  };

  const statusClasses: Record<string, string> = {
    active: styles.active,
    finished: styles.finished,
    upcoming: styles.upcoming,
  };

  return (
    <div className={styles.page}>
      <Header title="华北水利水电大学天梯赛系统" showBack={false} />
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>🏆 比赛管理</h1>
            <p className={styles.subtitle}>管理比赛、查看实时排名</p>
          </div>
          <button className={styles.createBtn} onClick={() => navigate('/create')}>
            + 创建比赛
          </button>
        </header>

        {loading ? (
          <div className={styles.loading}>
            <div className={styles.spinner} />
            <span>加载中...</span>
          </div>
        ) : competitions.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>📭</span>
            <p>还没有比赛，点击上方按钮创建第一个比赛</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {competitions.map(comp => (
              <div
                key={comp.id}
                className={styles.card}
                onClick={() => navigate(`/live/${comp.id}/official`)}
              >
                <div className={styles.cardTop}>
                  <span className={`${styles.badge} ${statusClasses[comp.status]}`}>
                    {statusLabels[comp.status]}
                  </span>
                  <span className={styles.date}>{comp.created_at}</span>
                </div>
                {comp.start_time && (
                  <div className={styles.startTime}>
                    🕐 {comp.start_time.replace('T', ' ')}
                    {comp.status === 'upcoming' && comp.duration_minutes && (
                      <span className={styles.duration}> · {comp.duration_minutes}分钟</span>
                    )}
                  </div>
                )}
                <h3 className={styles.cardName}>{comp.name}</h3>
                {comp.pta_contest_id && (
                  <div className={styles.ptaId}>
                    📋 PTA 比赛 ID：{comp.pta_contest_id}
                  </div>
                )}
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>{comp.team_count}</span>
                    <span className={styles.statLabel}>队伍</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>{comp.member_count}</span>
                    <span className={styles.statLabel}>选手</span>
                  </div>
                </div>
                <div className={styles.actions} onClick={e => e.stopPropagation()}>
                  <button
                    className={styles.officialBtn}
                    onClick={() => navigate(`/live/${comp.id}/official`)}
                  >
                    🏆 查看榜单
                  </button>
                  {comp.status === 'active' && (
                    <button
                      className={styles.finishBtn}
                      onClick={() => handleFinish(comp.id)}
                    >
                      结束比赛
                    </button>
                  )}
                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(comp.id)}
                  >
                    删除
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
