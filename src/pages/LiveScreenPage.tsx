import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ScoreProvider, useScore } from '../context/ScoreContext';
import { startMockWebSocket, stopMockWebSocket } from '../services/mockWebSocket';
import { getCompetition, type CompetitionDetail } from '../services/api';
import {
  BASIC_SCORES, ADVANCED_SCORES, TOP_SCORES,
  BASIC_THRESHOLD, ADVANCED_THRESHOLD,
  MEMBER_BASIC_THRESHOLD, MEMBER_ADVANCED_THRESHOLD,
  type Team, type Member, type QuestionScore,
} from '../types';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CenterPanel } from '../components/CenterPanel';
import { CountdownPage } from './CountdownPage';
import styles from '../App.module.css';

// 将后端数据转换为前端类型
function convertDetail(detail: CompetitionDetail): Team[] {
  return detail.teams.map(team => {
    const members: Member[] = team.members.map(m => {
      const basicScores: QuestionScore[] = BASIC_SCORES.map((max, i) => {
        const found = m.scores.find(s => s.level === 'basic' && s.question_index === i);
        return { questionIndex: i, score: found?.score ?? 0, maxScore: max };
      });
      const advancedScores: QuestionScore[] = ADVANCED_SCORES.map((max, i) => {
        const found = m.scores.find(s => s.level === 'advanced' && s.question_index === i);
        return { questionIndex: i, score: found?.score ?? 0, maxScore: max };
      });
      const topScores: QuestionScore[] = TOP_SCORES.map((max, i) => {
        const found = m.scores.find(s => s.level === 'top' && s.question_index === i);
        return { questionIndex: i, score: found?.score ?? 0, maxScore: max };
      });

      const basicTotal = basicScores.reduce((s, q) => s + q.score, 0);
      const advancedTotal = advancedScores.reduce((s, q) => s + q.score, 0);
      const topTotal = topScores.reduce((s, q) => s + q.score, 0);
      const mAdvancedUnlocked = basicTotal >= MEMBER_BASIC_THRESHOLD;
      const mTopUnlocked = mAdvancedUnlocked && advancedTotal >= MEMBER_ADVANCED_THRESHOLD;
      let mTotal = basicTotal;
      if (mAdvancedUnlocked) mTotal += advancedTotal;
      if (mTopUnlocked) mTotal += topTotal;

      return {
        id: String(m.id),
        name: m.name,
        basicScores,
        advancedScores,
        topScores,
        basicTotal,
        advancedTotal,
        topTotal,
        totalScore: mTotal,
        advancedUnlocked: mAdvancedUnlocked,
        topUnlocked: mTopUnlocked,
      };
    });

    const basicTotal = members.reduce((s, m) => s + m.basicTotal, 0);
    const advancedTotal = members.reduce((s, m) => s + m.advancedTotal, 0);
    const topTotal = members.reduce((s, m) => s + m.topTotal, 0);
    const advancedUnlocked = basicTotal >= BASIC_THRESHOLD;
    const topUnlocked = advancedUnlocked && advancedTotal >= ADVANCED_THRESHOLD;
    let totalScore = basicTotal;
    if (advancedUnlocked) totalScore += advancedTotal;
    if (topUnlocked) totalScore += topTotal;

    return {
      id: String(team.id),
      name: team.name,
      members,
      basicTotal,
      advancedTotal,
      topTotal,
      totalScore,
      advancedUnlocked,
      topUnlocked,
    };
  });
}

function WebSocketStarter() {
  const { state, dispatch } = useScore();
  const stateRef = useRef(state);
  stateRef.current = state;
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const timer = setTimeout(() => {
      startMockWebSocket(dispatch, () =>
        stateRef.current.teams.flatMap(t => t.members.map(m => ({ memberId: m.id, teamId: t.id })))
      );
    }, 2000);

    return () => {
      clearTimeout(timer);
      stopMockWebSocket();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}

function LiveScreenContent({ compName }: { compName: string }) {
  return (
    <div className={styles.app}>
      <WebSocketStarter />
      <Header title={compName} />
      <div className={styles.main}>
        <CenterPanel />
      </div>
      <Footer />
    </div>
  );
}

export function LiveScreenPage() {
  const { id } = useParams<{ id: string }>();
  const [teams, setTeams] = useState<Team[] | null>(null);
  const [compName, setCompName] = useState('');
  const [error, setError] = useState('');
  const [startTime, setStartTime] = useState<string | null>(null);
  const [durationMinutes, setDurationMinutes] = useState(180);
  const [isUpcoming, setIsUpcoming] = useState(false);
  const [loadKey, setLoadKey] = useState(0);

  const loadCompetition = useCallback(() => {
    if (!id) return;
    getCompetition(parseInt(id))
      .then(detail => {
        setCompName(detail.name);
        setDurationMinutes(detail.duration_minutes || 180);
        const st = detail.start_time;
        setStartTime(st);
        const now = new Date();
        const startsAfter = st ? new Date(st).getTime() - now.getTime() : -1;
        if (detail.status === 'upcoming' || startsAfter > 0) {
          setIsUpcoming(true);
          setTeams(null);
        } else {
          setIsUpcoming(false);
          setTeams(convertDetail(detail));
        }
      })
      .catch(err => {
        console.error(err);
        setError('加载比赛数据失败');
      });
  }, [id]);

  useEffect(() => {
    loadCompetition();
  }, [loadCompetition, loadKey]);

  const handleStart = useCallback(() => {
    setLoadKey(k => k + 1);
  }, []);

  if (error) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: '100vh', background: '#f0f2f5', color: '#ea4335', fontSize: 18,
      }}>
        {error}
      </div>
    );
  }

  if (isUpcoming && startTime) {
    return (
      <CountdownPage
        compName={compName}
        startTime={startTime}
        durationMinutes={durationMinutes}
        onStart={handleStart}
      />
    );
  }

  if (!teams) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: '100vh', background: '#f0f2f5', color: '#1a73e8', fontSize: 18,
      }}>
        加载中...
      </div>
    );
  }

  return (
    <ScoreProvider initialTeams={teams}>
      <LiveScreenContent compName={compName} />
    </ScoreProvider>
  );
}
