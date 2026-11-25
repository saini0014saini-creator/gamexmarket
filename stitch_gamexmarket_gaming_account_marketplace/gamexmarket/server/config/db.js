import mongoose from 'mongoose';
import { SEED_ACCOUNTS, SEED_ORDERS, SEED_TRANSACTIONS } from '../data/seedData.js';

let isMongoConnected = false;

// In-Memory store fallback in case local MongoDB service is not started
export const memoryStore = {
  accounts: [...SEED_ACCOUNTS.map((a, idx) => ({ ...a, _id: `acc-${idx + 1}`, id: `acc-${idx + 1}` }))],
  orders: [...SEED_ORDERS.map((o, idx) => ({ ...o, _id: `ord-${idx + 1}` }))],
  transactions: [...SEED_TRANSACTIONS.map((t, idx) => ({ ...t, _id: `txn-${idx + 1}` }))],
  user: {
    userId: 'usr-karan',
    name: 'Karan Sharma',
    email: 'karan.gamer2026@gmail.com',
    phone: '+91 98765 43210',
    walletBalance: 14250,
    escrowBalance: 16499,
    lifetimeEarnings: 142800,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    location: 'Mumbai, Maharashtra',
    role: 'seller'
  }
};

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/gamexmarket';
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2000
    });
    isMongoConnected = true;
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    isMongoConnected = false;
    console.log(`[Database] MongoDB offline or unreachable (${error.message}).`);
    console.log(`[Database] Activated resilient in-memory datastore with ${memoryStore.accounts.length} seeded accounts.`);
  }
};

export const getIsMongoConnected = () => isMongoConnected;
