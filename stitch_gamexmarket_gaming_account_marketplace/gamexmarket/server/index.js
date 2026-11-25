import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB, getIsMongoConnected } from './config/db.js';
import accountsRouter from './routes/accounts.js';
import ordersRouter from './routes/orders.js';
import walletRouter from './routes/wallet.js';
import statsRouter from './routes/stats.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database (MongoDB with resilient in-memory fallback)
connectDB();

// API Routes
app.use('/api/accounts', accountsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/wallet', walletRouter);
app.use('/api/stats', statsRouter);

// Health Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    server: 'GameXMarket Backend (Node.js)',
    timestamp: new Date().toISOString(),
    currency: '₹ INR',
    database: getIsMongoConnected() ? 'MongoDB (Connected)' : 'Resilient In-Memory Datastore (Active)'
  });
});

app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 GameXMarket Backend running on port ${PORT}`);
  console.log(`💳 Currency: Indian Rupees (₹ INR) Only`);
  console.log(`🛡️ Escrow Framework Active`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`======================================================\n`);
});
