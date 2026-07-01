import express from 'express';
import cors from 'cors';
import { getDb } from './db';
import { hasSeedData, seedDemoData } from './seed';
import competitionsRouter from './routes/competitions';
import { startPtaSync, stopAllPtaSync } from './ptaSync';

const PORT = 3001;
const SYNC_INTERVAL_SEC = 60; // 每 60 秒同步一次

async function main() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  // 初始化数据库
  const db = await getDb();

  // 种子数据
  if (!hasSeedData(db)) {
    const demoId = seedDemoData(db);
    console.log(`✅ 演示比赛已创建 (id=${demoId})`);
  } else {
    console.log('ℹ️  演示比赛已存在，跳过种子数据');
  }

  // 给已有比赛启动定时同步
  const comps = db.exec('SELECT id FROM competitions');
  if (comps.length > 0) {
    for (const row of comps[0].values) {
      const compId = row[0] as number;
      startPtaSync(compId, SYNC_INTERVAL_SEC);
    }
  }

  // 路由
  app.use('/api/competitions', competitionsRouter);

  app.listen(PORT, () => {
    console.log(`🚀 后端服务运行在 http://localhost:${PORT}`);
    console.log(`⏱  同步间隔: ${SYNC_INTERVAL_SEC} 秒`);
  });

  // 退出时清理
  process.on('SIGINT', () => {
    console.log('\n正在停止同步任务...');
    stopAllPtaSync();
    process.exit(0);
  });
}

main().catch(console.error);
