import express from 'express';
import { Transaction } from '../models/Transaction.js';
import { getIsMongoConnected, memoryStore } from '../config/db.js';

const router = express.Router();

// GET wallet balance & transactions
router.get('/', async (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        walletBalance: memoryStore.user.walletBalance,
        escrowBalance: memoryStore.user.escrowBalance,
        lifetimeEarnings: memoryStore.user.lifetimeEarnings,
        transactions: memoryStore.transactions
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST deposit money via UPI/Cards
router.post('/deposit', async (req, res) => {
  try {
    const { amount, method } = req.body;
    const num = Number(amount);
    if (!num || num <= 0) {
      return res.status(400).json({ success: false, error: 'Invalid deposit amount' });
    }

    memoryStore.user.walletBalance += num;

    const newTxn = {
      transactionId: `TXN-${Math.floor(100000 + Math.random() * 900000)}`,
      type: 'Wallet Deposit',
      description: `Added ₹${num.toLocaleString('en-IN')} via ${method || 'UPI'}`,
      amount: num,
      method: method || 'UPI (PhonePe)',
      status: 'Completed',
      createdAt: new Date().toISOString()
    };

    memoryStore.transactions.unshift(newTxn);

    res.json({
      success: true,
      data: {
        newBalance: memoryStore.user.walletBalance,
        transaction: newTxn
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST withdraw money to Bank / UPI
router.post('/withdraw', async (req, res) => {
  try {
    const { amount, destination } = req.body;
    const num = Number(amount);

    if (num > memoryStore.user.walletBalance) {
      return res.status(400).json({ success: false, error: 'Insufficient wallet balance' });
    }

    memoryStore.user.walletBalance -= num;

    const newTxn = {
      transactionId: `TXN-${Math.floor(100000 + Math.random() * 900000)}`,
      type: 'Bank Withdrawal',
      description: `Payout to ${destination || 'UPI: user@oksbi'}`,
      amount: -num,
      method: 'Instant UPI Payout',
      status: 'Completed',
      createdAt: new Date().toISOString()
    };

    memoryStore.transactions.unshift(newTxn);

    res.json({
      success: true,
      data: {
        newBalance: memoryStore.user.walletBalance,
        transaction: newTxn
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
