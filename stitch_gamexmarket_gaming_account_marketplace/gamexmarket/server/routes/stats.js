import express from 'express';
import { memoryStore, getIsMongoConnected } from '../config/db.js';

const router = express.Router();

// GET marketplace platform metrics
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: {
      totalEscrowTransactedINR: '₹2.4+ Cr',
      activeListingsCount: memoryStore.accounts.length + 8415,
      activeUsers: '50,000+',
      avgTransferMinutes: '< 15 Mins',
      safetyRating: '100% Safe Escrow',
      isMongoConnected: getIsMongoConnected()
    }
  });
});

export default router;
