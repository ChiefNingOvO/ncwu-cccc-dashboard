import { useMemo } from 'react';
import { useScore } from '../context/ScoreContext';
import { useScoreAnimation } from '../hooks/useScoreAnimation';
import { ScoreDetailPanel } from './ScoreDetailPanel';
import type { Member } from '../types';

const GPLT = '/gplt';
const PROGRESS_BLUE = `${GPLT}/student-assets/3079c545-5b3e-4bc9-8e01-71d42490b25c.png`;
const PROGRESS_YELLOW = `${GPLT}/student-assets/0394fbe5-3914-4696-81e3-91d3549c0f10.png`;
const PROGRESS_RED = `${GPLT}/student-assets/bc20a93b-d4e1-4f68-b3e6-e05546fbbaa2.png`;
const PROGRESS_CIRCLE = `${GPLT}/student-assets/f23bd2d9-a27b-41b6-9b74-4688e7c0d437.png`;

interface RankedMember {
  member: Member;
  teamId: string;
  teamName: string;
  rank: number;
}

function PersonPipes({ member, teamName }: { member: Member; teamName: string }) {
  const maxBasic = 100;
  const maxAdvanced = 100;
  const maxTop = 90;

  // 进阶/登顶解锁状态（已在 context 计算）
  const advUnlocked = member.advancedUnlocked;
  const topUnlocked = member.topUnlocked;

  const pct1 = Math.min((member.basicTotal / maxBasic) * 100, 100);
  // 即使未解锁也按实际得分显示进度条，仅外观置灰
  const pct2 = member.advancedTotal > 0 ? Math.min((member.advancedTotal / maxAdvanced) * 100, 100) : 0;
  const pct3 = member.topTotal > 0 ? Math.min((member.topTotal / maxTop) * 100, 100) : 0;

  const Node1 = advUnlocked ? 'node1_P5XVN' : 'node_JIp6m';
  const Node2 = topUnlocked ? 'node2_zRkMT' : 'node_JIp6m';

  const pipe2Cls = `progress_zTSqP${advUnlocked ? '' : ' progressLocked_GRAY'}`;
  const pipe3Cls = `progress_zTSqP${topUnlocked ? '' : ' progressLocked_GRAY'}`;
  const tip2 = advUnlocked
    ? `${member.advancedTotal} / ${maxAdvanced}`
    : `${member.advancedTotal} / ${maxAdvanced}（未达基础门槛 ${80}，进阶分无效）`;
  const tip3 = topUnlocked
    ? `${member.topTotal} / ${maxTop}`
    : `${member.topTotal} / ${maxTop}（未达进阶门槛 ${40}，登顶分无效）`;

  return (
    <div className="pipes_IXOBJ">
      <div className="head_MtmVb">
        <div className="pc-image min-w-0 items-center justify-center inline-flex logo_bPOkW">
          <img src="/gplt/logo-ncwu.png" alt="校徽" />
        </div>
      </div>

      <div className="pipe_DLbm3">
        <span className="name_ETm8P">{member.name} - {teamName}</span>
        <img src={PROGRESS_BLUE} className="progress_zTSqP" title={`${member.basicTotal} / ${maxBasic}`} alt="progress" style={{ width: `${pct1}%` }} />
      </div>

      <div className={Node1} />

      <div className="pipe_DLbm3">
        <img src={PROGRESS_YELLOW} className={pipe2Cls} title={tip2} alt="progress" style={{ width: `${pct2}%` }} />
        <div className="badges2_bcVll" />
      </div>

      <div className={Node2} />

      <div className="pipe_DLbm3">
        <img src={PROGRESS_RED} className={pipe3Cls} title={tip3} alt="progress" style={{ width: `${pct3}%` }} />
        {/* 圆球只在「有效」(已解锁) 且有分数时显示，标记有效分数的终点 */}
        {topUnlocked && pct3 > 0 && (
          <img
            src={PROGRESS_CIRCLE}
            className={pct3 >= 100 ? 'circleFull_Kp4vJ' : 'circle_FXZIg'}
            alt="node"
            style={{ left: `${pct3}%` }}
          />
        )}
        <div className="badges2_bcVll" />
      </div>

      <div className="tail_YUPwI" />
    </div>
  );
}

/* 排名 — 使用与分数相同的 GPLT-Number 字体 */
function RankBadge({ rank }: { rank: number }) {
  return <p className="gpltNumber_x1pEx">{rank}</p>;
}

function PersonRow({ item, rank, isSelected, onClick }: {
  item: RankedMember;
  rank: number;
  isSelected: boolean;
  onClick: () => void;
}) {
  const flash = useScoreAnimation(item.member.totalScore);

  return (
    <div
      className={`studentListItem_LWYA2 ${isSelected ? 'gplt-selected' : ''} ${flash ? 'gplt-flash' : ''}`}
      onClick={onClick}
    >
      <div className="badge_xcZuC">
        <RankBadge rank={rank} />
      </div>
      <PersonPipes member={item.member} teamName={item.teamName} />
      <div className="score_ulq1B">
        <p className="gpltNumber_x1pEx">{item.member.totalScore}</p>
      </div>
    </div>
  );
}

export function GPLTIndividualRank() {
  const { state, dispatch } = useScore();

  const rankedMembers: RankedMember[] = useMemo(() => {
    const all: Omit<RankedMember, 'rank'>[] = [];
    for (const team of state.teams) {
      for (const member of team.members) {
        all.push({ member, teamId: team.id, teamName: team.name });
      }
    }
    all.sort((a, b) => b.member.totalScore - a.member.totalScore || a.member.name.localeCompare(b.member.name));
    return all.map((item, idx) => ({ ...item, rank: idx + 1 }));
  }, [state.teams]);

  const total = rankedMembers.length;

  return (
    <>
      <ScoreDetailPanel />

      <div className="title_Pdg00">
        <h1 id="个人排名" className="anchorTitle_jVGN2"><a href="#个人排名">个人排名</a></h1>
        <p className="counter_YbA0b">
          共 {total} 人
          <span className="pagination_inline">
            <a className="disabled cursor-not-allowed pc-color-light pageItem_NmC03 hover:no-underline"><span>‹</span></a>
            <a className="active pageItem_NmC03 active_OZSEy hover:no-underline"><span>1</span></a>
            <a className="disabled cursor-not-allowed pc-color-light pageItem_NmC03 hover:no-underline"><span>›</span></a>
          </span>
        </p>
      </div>
      <div style={{ clear: 'both' }} />

      <div className="studentList_JpA1T">
        {rankedMembers.map(item => (
          <PersonRow
            key={item.member.id}
            item={item}
            rank={item.rank}
            isSelected={state.selectedMemberId === item.member.id}
            onClick={() => dispatch({ type: 'SELECT_MEMBER', memberId: item.member.id })}
          />
        ))}
        {total === 0 && <div className="empty_rGDZ6"><p>暂无队员数据</p></div>}
      </div>
    </>
  );
}
