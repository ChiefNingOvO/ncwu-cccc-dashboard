import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCompetition } from '../services/api';
import styles from './CreateCompetitionPage.module.css';

interface TeamForm {
  id: string;
  name: string;
  members: string[];
}

let teamCounter = 0;

export function CreateCompetitionPage() {
  const navigate = useNavigate();
  const [compName, setCompName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [duration, setDuration] = useState(180);
  const [accessCookie, setAccessCookie] = useState('');
  const [teams, setTeams] = useState<TeamForm[]>([
    { id: `t-${++teamCounter}`, name: '', members: [''] },
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const addTeam = () => {
    setTeams(prev => [...prev, { id: `t-${++teamCounter}`, name: '', members: [''] }]);
  };

  const removeTeam = (teamId: string) => {
    if (teams.length <= 1) return;
    setTeams(prev => prev.filter(t => t.id !== teamId));
  };

  const updateTeamName = (teamId: string, name: string) => {
    setTeams(prev => prev.map(t => t.id === teamId ? { ...t, name } : t));
  };

  const updateMemberName = (teamId: string, memberIdx: number, name: string) => {
    setTeams(prev => prev.map(t => {
      if (t.id !== teamId) return t;
      const members = [...t.members];
      members[memberIdx] = name;
      return { ...t, members };
    }));
  };

  const addMember = (teamId: string) => {
    setTeams(prev => prev.map(t => {
      if (t.id !== teamId) return t;
      if (t.members.length >= 10) return t; // 最多 10 人
      return { ...t, members: [...t.members, ''] };
    }));
  };

  const removeMember = (teamId: string, memberIdx: number) => {
    setTeams(prev => prev.map(t => {
      if (t.id !== teamId) return t;
      if (t.members.length <= 1) return t;
      return { ...t, members: t.members.filter((_, i) => i !== memberIdx) };
    }));
  };

  const handleSubmit = async () => {
    setError('');

    if (!compName.trim()) {
      setError('请输入比赛名称');
      return;
    }

    const validTeams = teams.filter(t => t.name.trim());
    if (validTeams.length === 0) {
      setError('至少需要一个队伍');
      return;
    }

    for (const team of validTeams) {
      const validMembers = team.members.filter(m => m.trim());
      if (validMembers.length === 0) {
        setError(`队伍「${team.name}」至少需要一名队员`);
        return;
      }
    }

    setSubmitting(true);
    try {
      await createCompetition({
        name: compName.trim(),
        teams: validTeams.map(t => ({
          name: t.name.trim(),
          members: t.members.filter(m => m.trim()),
        })),
        start_time: startTime ? startTime.replace('T', ' ') : undefined,
        duration_minutes: duration,
        access_cookie: accessCookie.trim() || undefined,
      });
      navigate('/');
    } catch (err) {
      setError('创建失败，请稍后重试');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <button className={styles.backBtn} onClick={() => navigate('/')}>← 返回</button>
          <h1 className={styles.title}>创建比赛</h1>
          <div />
        </header>

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>比赛名称</label>
            <input
              className={styles.input}
              type="text"
              value={compName}
              onChange={e => setCompName(e.target.value)}
              placeholder="例如：2026 年天梯赛春季赛"
              maxLength={50}
            />
          </div>

          <div className={styles.timeRow}>
            <div className={styles.field}>
              <label className={styles.label}>比赛开始时间</label>
              <input
                className={styles.input}
                type="datetime-local"
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>比赛时长（分钟）</label>
              <input
                className={styles.input}
                type="number"
                value={duration}
                onChange={e => setDuration(Number(e.target.value))}
                min={1}
                max={600}
              />
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>访问口令（Access Cookie）</label>
            <input
              className={styles.input}
              type="text"
              value={accessCookie}
              onChange={e => setAccessCookie(e.target.value)}
              placeholder="自定义访问口令（可选）"
              maxLength={50}
            />
          </div>

          <div className={styles.teamsSection}>
            <div className={styles.teamsHeader}>
              <h2 className={styles.sectionTitle}>队伍信息</h2>
              <span className={styles.teamCount}>{teams.length} 支队伍</span>
            </div>

            {teams.map((team, ti) => (
              <div key={team.id} className={styles.teamBlock}>
                <div className={styles.teamHeader}>
                  <span className={styles.teamIndex}>队伍 {ti + 1}</span>
                  <input
                    className={styles.teamNameInput}
                    type="text"
                    value={team.name}
                    onChange={e => updateTeamName(team.id, e.target.value)}
                    placeholder="输入队伍名称"
                    maxLength={20}
                  />
                  {teams.length > 1 && (
                    <button className={styles.removeBtn} onClick={() => removeTeam(team.id)}>✕</button>
                  )}
                </div>

                <div className={styles.members}>
                  {team.members.map((member, mi) => (
                    <div key={mi} className={styles.memberRow}>
                      <span className={styles.memberIndex}>{mi + 1}.</span>
                      <input
                        className={styles.memberInput}
                        type="text"
                        value={member}
                        onChange={e => updateMemberName(team.id, mi, e.target.value)}
                        placeholder={`队员 ${mi + 1} 姓名`}
                        maxLength={10}
                      />
                      {team.members.length > 1 && (
                        <button className={styles.removeMemberBtn} onClick={() => removeMember(team.id, mi)}>−</button>
                      )}
                    </div>
                  ))}
                </div>

                {team.members.length < 10 && (
                  <button className={styles.addMemberBtn} onClick={() => addMember(team.id)}>
                    + 添加队员
                  </button>
                )}
              </div>
            ))}

            <button className={styles.addTeamBtn} onClick={addTeam}>
              + 添加队伍
            </button>
          </div>

          <div className={styles.submitRow}>
            <button
              className={styles.submitBtn}
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? '创建中...' : '✓ 创建比赛'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
