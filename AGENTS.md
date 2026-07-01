# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

天梯赛（Ladder Tournament）实时分数展示大屏 — a 1920×1080 dashboard displaying team rankings with real-time score updates for a competitive programming contest.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start frontend dev server (http://localhost:5173)
npm run dev:server   # Start backend server (http://localhost:3001)
npm run build        # Type-check + production build
npx tsc --noEmit     # TypeScript type check only
```

## Architecture

**Stack**: React 19 + Vite 8 + TypeScript 6 + CSS Modules + Express 5 + SQLite (sql.js)

**Pages** (React Router v7):
- `/` — DashboardPage: competition management, list all competitions
- `/create` — CreateCompetitionPage: form to create a new competition with teams/members
- `/live/:id` — LiveScreenPage: the 1920×1080 real-time score display (loads data from backend API)

**Backend**: Express server on port 3001 with SQLite (sql.js in-memory) for persistence.
Vite dev server proxies `/api` to `http://localhost:3001`.

**Layout** (LiveScreenPage): 3-column fixed 1920×1080 (no scroll):
- **LeftPanel** (220px): Team list sidebar — click to select a team
- **CenterPanel** (flex): Team rank cards in 2-column grid + ScoreDetailPanel overlay
- **RightPanel** (260px): Member cards for the selected team — click to view per-question details

**State management**: Single `ScoreContext` (Context + useReducer) at `src/context/ScoreContext.tsx`. All score updates flow through `dispatch({ type: 'UPDATE_SCORE', ... })`, which recalculates member → team totals and re-sorts by totalScore.

**Mock real-time**: `src/services/mockWebSocket.ts` uses `setTimeout` chain (2–5s random interval) to randomly update a player's question score, dispatched to ScoreContext.

## Contest Rules (hardcoded in `src/types/index.ts`)

| Level    | Questions | Points per question | Unlock threshold |
|----------|-----------|---------------------|------------------|
| 基础级   | 8         | 5,5,10,10,15,15,20,20 | Always valid     |
| 进阶级   | 4         | 25 each             | Team basic ≥ 800 |
| 登顶级   | 3         | 30 each             | Team advanced ≥ 400 |

A team's `totalScore` = basicTotal + (advancedTotal if unlocked) + (topTotal if unlocked).

## Key Files

| File | Purpose |
|------|---------|
| `src/types/index.ts` | All TypeScript types + score constants + thresholds |
| `src/data/mockData.ts` | Generates 8 teams × 8-10 members with random initial scores |
| `src/context/ScoreContext.tsx` | Global state: teams[], selectedTeamId, selectedMemberId, reducer with UPDATE_SCORE/SELECT_TEAM/SELECT_MEMBER |
| `src/services/mockWebSocket.ts` | Simulated real-time score push via setTimeout chain |
| `src/services/api.ts` | Frontend API client for backend REST endpoints |
| `src/hooks/useScoreAnimation.ts` | Flash animation hook triggered when a value changes |
| `src/App.tsx` | React Router entry: 3 routes |
| `server/index.ts` | Express server entry point |
| `server/db.ts` | SQLite database init + schema |
| `server/seed.ts` | Demo competition seed data |
| `server/routes/competitions.ts` | REST API: CRUD competitions, scores |

## Interaction Flow

1. Visit `/` → Dashboard shows all competitions with status badges
2. Click a competition card → `/live/:id` opens the real-time score display
3. Click "创建比赛" → `/create` form to add teams and members
4. In LiveScreenPage: click team in **LeftPanel** → team highlighted + **RightPanel** shows members
5. Click member in **RightPanel** → **ScoreDetailPanel** overlay shows all 15 question scores
6. Scores auto-update every 2–5s with flash animation on changed cards
