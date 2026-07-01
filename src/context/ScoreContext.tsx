import { createContext, useContext, useReducer, useCallback, type ReactNode } from 'react';
import type { ScoreState, ScoreAction, Team, Member } from '../types';
import {
  BASIC_THRESHOLD, ADVANCED_THRESHOLD,
  MEMBER_BASIC_THRESHOLD, MEMBER_ADVANCED_THRESHOLD,
} from '../types';

// --- 辅助计算函数 ---

function recalcMember(member: Member): Member {
  const basicTotal = member.basicScores.reduce((s, q) => s + q.score, 0);
  const advancedTotal = member.advancedScores.reduce((s, q) => s + q.score, 0);
  const topTotal = member.topScores.reduce((s, q) => s + q.score, 0);
  const advancedUnlocked = basicTotal >= MEMBER_BASIC_THRESHOLD;
  const topUnlocked = advancedUnlocked && advancedTotal >= MEMBER_ADVANCED_THRESHOLD;
  let totalScore = basicTotal;
  if (advancedUnlocked) totalScore += advancedTotal;
  if (topUnlocked) totalScore += topTotal;
  return {
    ...member,
    basicTotal,
    advancedTotal,
    topTotal,
    totalScore,
    advancedUnlocked,
    topUnlocked,
  };
}

function recalcTeam(team: Team): Team {
  const members = team.members.map(recalcMember);
  const basicTotal = members.reduce((s, m) => s + m.basicTotal, 0);
  const advancedTotal = members.reduce((s, m) => s + m.advancedTotal, 0);
  const topTotal = members.reduce((s, m) => s + m.topTotal, 0);
  const advancedUnlocked = basicTotal >= BASIC_THRESHOLD;
  // 链式：top 有效必须先 advanced 有效
  const topUnlocked = advancedUnlocked && advancedTotal >= ADVANCED_THRESHOLD;
  let totalScore = basicTotal;
  if (advancedUnlocked) totalScore += advancedTotal;
  if (topUnlocked) totalScore += topTotal;
  return {
    ...team,
    members,
    basicTotal,
    advancedTotal,
    topTotal,
    totalScore,
    advancedUnlocked,
    topUnlocked,
  };
}

function sortTeams(teams: Team[]): Team[] {
  return [...teams].sort((a, b) => b.totalScore - a.totalScore);
}

// --- Reducer ---

function scoreReducer(state: ScoreState, action: ScoreAction): ScoreState {
  switch (action.type) {
    case 'SELECT_TEAM':
      return { ...state, selectedTeamId: action.teamId, selectedMemberId: null };

    case 'SELECT_MEMBER':
      return { ...state, selectedMemberId: action.memberId };

    case 'UPDATE_SCORE': {
      const { memberId, level, questionIndex, score } = action;
      const teams = state.teams.map(team => ({
        ...team,
        members: team.members.map(member => {
          if (member.id !== memberId) return member;
          const updated = { ...member };
          if (level === 'basic') {
            updated.basicScores = member.basicScores.map((q, i) =>
              i === questionIndex ? { ...q, score } : q
            );
          } else if (level === 'advanced') {
            updated.advancedScores = member.advancedScores.map((q, i) =>
              i === questionIndex ? { ...q, score } : q
            );
          } else {
            updated.topScores = member.topScores.map((q, i) =>
              i === questionIndex ? { ...q, score } : q
            );
          }
          return recalcMember(updated);
        }),
      })).map(team => recalcTeam(team));

      return {
        ...state,
        teams: sortTeams(teams),
        lastUpdatedMemberId: memberId,
        lastUpdatedTime: Date.now(),
      };
    }

    case 'BATCH_UPDATE': {
      const memberMap = new Map<string, Map<string, { level: string; questionIndex: number; score: number }[]>>();
      for (const u of action.updates) {
        if (!memberMap.has(u.memberId)) memberMap.set(u.memberId, new Map());
        const inner = memberMap.get(u.memberId)!;
        const key = `${u.level}-${u.questionIndex}`;
        if (!inner.has(key)) inner.set(key, []);
        inner.get(key)!.push(u);
      }

      const teams = state.teams.map(team => ({
        ...team,
        members: team.members.map(member => {
          const updates = memberMap.get(member.id);
          if (!updates) return member;
          const updated = { ...member };
          for (const [, uList] of updates) {
            const u = uList[uList.length - 1]; // latest wins
            if (u.level === 'basic') {
              updated.basicScores = updated.basicScores.map((q, i) =>
                i === u.questionIndex ? { ...q, score: u.score } : q
              );
            } else if (u.level === 'advanced') {
              updated.advancedScores = updated.advancedScores.map((q, i) =>
                i === u.questionIndex ? { ...q, score: u.score } : q
              );
            } else {
              updated.topScores = updated.topScores.map((q, i) =>
                i === u.questionIndex ? { ...q, score: u.score } : q
              );
            }
          }
          return recalcMember(updated);
        }),
      })).map(team => recalcTeam(team));

      const lastMemberId = action.updates.length > 0 ? action.updates[action.updates.length - 1].memberId : null;

      return {
        ...state,
        teams: sortTeams(teams),
        lastUpdatedMemberId: lastMemberId,
        lastUpdatedTime: Date.now(),
      };
    }

    case 'BATCH_REPLACE':
      return {
        ...state,
        teams: sortTeams(action.teams.map(team => recalcTeam(team))),
        lastUpdatedTime: Date.now(),
      };
  }
}

// --- Context ---

interface ScoreContextValue {
  state: ScoreState;
  dispatch: React.Dispatch<ScoreAction>;
  getSelectedTeam: () => Team | undefined;
  getSelectedMember: () => Member | undefined;
}

const ScoreContext = createContext<ScoreContextValue | null>(null);

export function ScoreProvider({ children, initialTeams }: { children: ReactNode; initialTeams: Team[] }) {
  const [state, dispatch] = useReducer(scoreReducer, {
    teams: sortTeams(initialTeams),
    selectedTeamId: null,
    selectedMemberId: null,
    lastUpdatedMemberId: null,
    lastUpdatedTime: null,
  });

  const getSelectedTeam = useCallback(() => {
    return state.teams.find(t => t.id === state.selectedTeamId);
  }, [state.teams, state.selectedTeamId]);

  const getSelectedMember = useCallback(() => {
    for (const t of state.teams) {
      const m = t.members.find(m => m.id === state.selectedMemberId);
      if (m) return m;
    }
    return undefined;
  }, [state.teams, state.selectedMemberId]);

  return (
    <ScoreContext.Provider value={{ state, dispatch, getSelectedTeam, getSelectedMember }}>
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  const ctx = useContext(ScoreContext);
  if (!ctx) throw new Error('useScore must be used within ScoreProvider');
  return ctx;
}
