import express from 'express';
import cors from 'cors';
import { getDb } from './db';
import { hasSeedData, seedDemoData } from './seed';
import competitionsRouter from './routes/competitions';

const PORT = 3001;

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

  // 路由
  app.use('/api/competitions', competitionsRouter);

  app.listen(PORT, () => {
    console.log(`🚀 后端服务运行在 http://localhost:${PORT}`);
  });
}

main().catch(console.error);
