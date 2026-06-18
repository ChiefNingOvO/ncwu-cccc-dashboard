import { useState } from 'react';
import { GPLTTeamRank } from './GPLTTeamRank';
import { GPLTIndividualRank } from './GPLTIndividualRank';

type TabKey = 'team' | 'individual';

const ASSETS = '/gplt/team-assets';
const GPLT = '/gplt';

/* ---- 所有图片均为本地图片 ---- */
const LOCAL = {
  heroBg: `${GPLT}/bg-hero.jpg`,
  mainBg: `${GPLT}/bg-main.jpg`,
  planet1: `${GPLT}/planet1.png`,
  planet2: `${GPLT}/planet2.png`,
  planet3: `${GPLT}/planet3.png`,
  stardust: `${GPLT}/stardust.png`,
  progressHead: `${GPLT}/progress-head.png`,
  progressNode1: `${GPLT}/progress-node1.png`,
  progressNode2: `${GPLT}/progress-node2.png`,
  progressNode3: `${GPLT}/progress-node3.png`,
  progressPipe: `${GPLT}/progress-pipe.png`,
  progressSnode1: `${GPLT}/progress-snode1.png`,
  progressSnode2: `${GPLT}/progress-snode2.png`,
  progressTail: `${GPLT}/progress-tail.png`,
  leftLight: `${ASSETS}/1d4f0bd3-a090-4ed6-8637-12e2394b80c6.png`,
  rightLight: `${ASSETS}/5c7372e5-2e3a-4d93-b535-10fa3012649d.png`,
  rocket: `${ASSETS}/b103afab-4223-4d34-b3c4-29bae6bbfa7e.png`,
  top: `${ASSETS}/58493d75-9ff9-47df-bf0a-1226374fe917.png`,
  ladder: `${ASSETS}/cde5ca70-9633-408f-be36-c154617f8165.png`,
  logo: `${ASSETS}/620d9910-8b12-4a2d-bb9e-76a640daf0aa.png`,
  rocket2: `${ASSETS}/a599e0df-22eb-41a3-87d7-024b03f8c0f3.png`,
  cloud: `${ASSETS}/83f91ff3-68f8-4eb8-b516-2653de53fb52.png`,
};

export function GPLTCenterPanel() {
  const [tab, setTab] = useState<TabKey>('individual');

  const wrapperStyle = {
    '--bg-image': `url(${LOCAL.mainBg})`,
    '--planet1-image': `url(${LOCAL.planet1})`,
    '--planet2-image': `url(${LOCAL.planet2})`,
    '--planet3-image': `url(${LOCAL.planet3})`,
    '--stardust-image': `url(${LOCAL.stardust})`,
  } as React.CSSProperties;

  const progressVars = {
    '--progress-head': `url(${LOCAL.progressHead})`,
    '--progress-node1': `url(${LOCAL.progressNode1})`,
    '--progress-node2': `url(${LOCAL.progressNode2})`,
    '--progress-node3': `url(${LOCAL.progressNode3})`,
    '--progress-pipe': `url(${LOCAL.progressPipe})`,
    '--progress-snode1': `url(${LOCAL.progressSnode1})`,
    '--progress-snode2': `url(${LOCAL.progressSnode2})`,
    '--progress-tail': `url(${LOCAL.progressTail})`,
  } as React.CSSProperties;

  return (
    <div className="mainContainer_zpZoi">
      {/* ======== Hero 区域 (container_KGMv8 → wrapper_Gjsvi → shortBody_ELmXF) ======== */}
      <div className="container_KGMv8">
        <div className="wrapper_Gjsvi">
          <div
            className="shortBody_ELmXF"
            style={{ '--bg-image': `url(${LOCAL.heroBg})` } as React.CSSProperties}
          >
            <img className="left_e69CK" src={LOCAL.leftLight} alt="leftLight" />
            <img className="right_RTLWm" src={LOCAL.rightLight} alt="rightLight" />
            <img className="rocket_vlZSI" src={LOCAL.rocket} alt="rocket" />
            <img className="top_gG9x9" src={LOCAL.top} alt="top" />
            <div className="inner_cEOqe" />

            {/* ladder (在 shortBody 内) */}
            <img className="ladder_LjuTV" src={LOCAL.ladder} alt="ladder" />

            {/* 导航链接 (在 shortBody 内) */}
            <div className="links_xU9fI">
              <a
                className={tab === 'team' ? 'active_Eu6E1' : ''}
                onClick={() => setTab('team')}
              >
                团队排名
              </a>
              <a
                className={tab === 'individual' ? 'active_Eu6E1' : ''}
                onClick={() => setTab('individual')}
              >
                个人排名
              </a>
            </div>

            {/* Logo (在 shortBody 内) */}
            <div className="logo_Srcaz">
              <img src={LOCAL.logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>

      {/* ======== 主内容区域 (wrapper_VkSjg - 与 container_KGMv8 兄弟) ======== */}
      <div className="wrapper_VkSjg" style={wrapperStyle}>
        <div className="body_W_vNZ">
          <div className="inner_E9HP3">
            {tab === 'team' ? (
              <div className="rankTeamPage_KSGze" style={progressVars}>
                <GPLTTeamRank />
              </div>
            ) : (
              <div className="rankStudentPage_YXwTc" style={progressVars}>
                <GPLTIndividualRank />
              </div>
            )}
          </div>
        </div>

        {/* 火箭 + 云装饰 */}
        <div style={{ position: 'relative', marginTop: 40 }}>
          <img className="rocket_S4f1K" src={LOCAL.rocket2} alt="rocket" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          <img className="cloudLeft_yLzW1" src={LOCAL.cloud} alt="cloud-left" />
          <img className="cloudRight_a90At" src={LOCAL.cloud} alt="cloud-right" />
        </div>
      </div>

      {/* ======== 页脚 ======== */}
      <div className="footer_AWrq9">
        <div className="container_zgmCz">
          <div className="supports_ZvyYN">
            <h2>支持单位</h2>
            <p className="footerSupportLine_NCWU">
              <img src="/gplt/logo-ncwu.png" alt="华北水利水电大学" />
              <span>华北水利水电大学</span>
            </p>
          </div>
          <div className="hosts__B8WB">
            <h2>主办单位</h2>
            <p>华北水利水电大学信息工程学院</p>
          </div>
          <div className="rights_HqAXh">
            <h2>版权信息</h2>
            <p>本天梯赛实时大屏对比赛持有最终解释权，对于任何侵权行为，我们将保留追究侵权者法律责任的权利。</p>
            <p>© chiefning</p>
          </div>
          <div className="contacts_CWg7b">
            <h2>联系我们</h2>
            <p><a href="mailto:769472984@qq.com">769472984@qq.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
