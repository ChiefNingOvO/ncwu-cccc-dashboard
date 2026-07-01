import { useMemo } from 'react';
import { useScore } from '../context/ScoreContext';
import { useScoreAnimation } from '../hooks/useScoreAnimation';
import { TeamMembersModal } from './TeamMembersModal';
import { ScoreDetailPanel } from './ScoreDetailPanel';
import type { Team } from '../types';

const PROGRESS_BLUE = '/gplt/team-assets/3079c545-5b3e-4bc9-8e01-71d42490b25c.png';
const PROGRESS_YELLOW = '/gplt/team-assets/0394fbe5-3914-4696-81e3-91d3549c0f10.png';
const PROGRESS_RED = '/gplt/team-assets/bc20a93b-d4e1-4f68-b3e6-e05546fbbaa2.png';
const PROGRESS_CIRCLE = '/gplt/team-assets/f23bd2d9-a27b-41b6-9b74-4688e7c0d437.png';

/* ---- 进度管：按官方 DOM 使用图片进度条 ---- */
function TeamPipes({ team }: { team: Team }) {
  const maxBasic = 1000;
  const maxAdvanced = 1000;
  const maxTop = 900;

  const pct1 = Math.min((team.basicTotal / maxBasic) * 100, 100);
  // 即使未解锁也按实际得分显示进度条，仅置灰提示无效
  const pct2 = team.advancedTotal > 0 ? Math.min((team.advancedTotal / maxAdvanced) * 100, 100) : 0;
  const pct3 = team.topTotal > 0 ? Math.min((team.topTotal / maxTop) * 100, 100) : 0;

  const Node1 = team.advancedUnlocked ? 'node1_q5IIb' : 'node_D8RD8';
  const Node2 = team.topUnlocked ? 'node2_X2JzO' : 'node_D8RD8';

  const pipe2Cls = `progress_JU3mj${team.advancedUnlocked ? '' : ' progressLocked_GRAY'}`;
  const pipe3Cls = `progress_JU3mj${team.topUnlocked ? '' : ' progressLocked_GRAY'}`;
  const tip2 = team.advancedUnlocked
    ? `${team.advancedTotal} / ${maxAdvanced}`
    : `${team.advancedTotal} / ${maxAdvanced}（未达基础门槛 800，进阶分无效）`;
  const tip3 = team.topUnlocked
    ? `${team.topTotal} / ${maxTop}`
    : `${team.topTotal} / ${maxTop}（未达进阶门槛 400，登顶分无效）`;

  // 球指示「当前进度边界」：放在最高有效段尾部
  type BallLevel = 'top' | 'advanced' | 'basic' | null;
  const ballLevel: BallLevel =
    team.topUnlocked && team.topTotal > 0 ? 'top' :
    team.advancedUnlocked && team.advancedTotal > 0 ? 'advanced' :
    team.basicTotal > 0 ? 'basic' : null;
  const ballPct =
    ballLevel === 'top' ? pct3 :
    ballLevel === 'advanced' ? pct2 :
    ballLevel === 'basic' ? pct1 : 0;

  // 根据球的位置选择对应的颜色滤镜类
  const circleColorCls =
    ballLevel === 'top' ? 'circle-red' :
    ballLevel === 'advanced' ? 'circle-yellow' :
    'circle-blue';

  return (
    <div className="pipes_JC6Fa">
      <div className="head_FBonr">
        <div className="pc-image min-w-0 items-center justify-center inline-flex logo_WqHLc">
          <img src="/gplt/logo-ncwu.png" alt="校徽" />
        </div>
      </div>

      <div className="pipe_QQ5UZ">
        <span className="name_UpmfW">{team.name}</span>
        <img src={PROGRESS_BLUE} className="progress_JU3mj" title={`${team.basicTotal} / ${maxBasic}`} alt="progress" style={{ width: `${pct1}%` }} />
        {ballLevel === 'basic' && (
          <img src={PROGRESS_CIRCLE} className={`circle_dkyqW ${circleColorCls}`} alt="node" style={{ left: `${ballPct}%` }} />
        )}
        <div className="badges_S9eE3" />
      </div>

      <div className={Node1} />

      <div className="pipe_QQ5UZ">
        <img src={PROGRESS_YELLOW} className={pipe2Cls} title={tip2} alt="progress" style={{ width: `${pct2}%` }} />
        {ballLevel === 'advanced' && (
          <img src={PROGRESS_CIRCLE} className={`circle_dkyqW ${circleColorCls}`} alt="node" style={{ left: `${ballPct}%` }} />
        )}
        <div className="badges2_uxJ8K" />
      </div>

      <div className={Node2} />

      <div className="pipe_QQ5UZ">
        <img src={PROGRESS_RED} className={pipe3Cls} title={tip3} alt="progress" style={{ width: `${pct3}%` }} />
        {ballLevel === 'top' && (
          <img src={PROGRESS_CIRCLE} className={`circle_dkyqW ${circleColorCls}`} alt="node" style={{ left: `${ballPct}%` }} />
        )}
        <div className="badges2_uxJ8K" />
      </div>

      <div className="tail_c7ta0" />
    </div>
  );
}

function TeamRow({ team, rank }: { team: Team; rank: number }) {
  const { state, dispatch } = useScore();
  const isSelected = state.selectedTeamId === team.id;
  const flash = useScoreAnimation(team.totalScore);

  return (
    <div
      className={`teamListItem_qeRUr ${isSelected ? 'gplt-selected' : ''} ${flash ? 'gplt-flash' : ''}`}
      onClick={() => dispatch({ type: 'SELECT_TEAM', teamId: team.id })}
    >
      <div className="badge_e77kz">
        <p className="gpltNumber_n12aB">{rank}</p>
      </div>
      <TeamPipes team={team} />
      <div className="score_lqSzX">
        <p className="gpltNumber_n12aB">{team.totalScore}</p>
      </div>
    </div>
  );
}

export function GPLTTeamRank() {
  const { state } = useScore();
  const teams = useMemo(() => state.teams, [state.teams]);
  const total = teams.length;

  return (
    <>
      <ScoreDetailPanel />
      <TeamMembersModal />

      <div className="title_Pdg00">
        <h1 id="团队排名" className="anchorTitle_jVGN2"><a href="#团队排名">团队排名</a></h1>
        <p className="counter_YbA0b">
          共 {total} 支团队
          <span className="pagination_inline">
            <a className="disabled cursor-not-allowed pc-color-light pageItem_NmC03 hover:no-underline"><span>‹</span></a>
            <a className="active pageItem_NmC03 active_OZSEy hover:no-underline"><span>1</span></a>
            <a className="disabled cursor-not-allowed pc-color-light pageItem_NmC03 hover:no-underline"><span>›</span></a>
          </span>
        </p>
      </div>

      <div className="teamList_sy21T">
        {teams.map((team, idx) => (
          <TeamRow key={team.id} team={team} rank={idx + 1} />
        ))}
        {total === 0 && <div className="empty_mnFop"><p>暂无队伍数据</p></div>}
      </div>
    </>
  );
}
