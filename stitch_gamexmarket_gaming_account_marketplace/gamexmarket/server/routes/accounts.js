import express from 'express';
import { Account } from '../models/Account.js';
import { getIsMongoConnected, memoryStore } from '../config/db.js';

const router = express.Router();

// GET all accounts with filters & search
router.get('/', async (req, res) => {
  try {
    const { game, minPrice, maxPrice, search, sort } = req.query;

    if (getIsMongoConnected()) {
      let query = { status: 'available' };
      if (game && game !== 'all') query.gameId = game;
      if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice) query.price.$gte = Number(minPrice);
        if (maxPrice) query.price.$lte = Number(maxPrice);
      }
      if (search) {
        query.$or = [
          { title: { $regex: search, $options: 'i' } },
          { game: { $regex: search, $options: 'i' } },
          { features: { $regex: search, $options: 'i' } }
        ];
      }

      let sortObj = { isFeatured: -1, createdAt: -1 };
      if (sort === 'price-low') sortObj = { price: 1 };
      if (sort === 'price-high') sortObj = { price: -1 };
      if (sort === 'newest') sortObj = { createdAt: -1 };

      const accounts = await Account.find(query).sort(sortObj);
      return res.json({ success: true, count: accounts.length, data: accounts });
    }

    // In-memory fallback
    let filtered = memoryStore.accounts.filter(a => a.status === 'available');
    if (game && game !== 'all') {
      filtered = filtered.filter(a => a.gameId === game);
    }
    if (minPrice) {
      filtered = filtered.filter(a => a.price >= Number(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter(a => a.price <= Number(maxPrice));
    }
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(a => 
        a.title.toLowerCase().includes(q) || 
        a.game.toLowerCase().includes(q) ||
        (a.features && a.features.some(f => f.toLowerCase().includes(q)))
      );
    }

    if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (sort === 'newest') filtered.reverse();

    res.json({ success: true, count: filtered.length, data: filtered });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET single account by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsMongoConnected()) {
      const account = await Account.findById(id);
      if (!account) return res.status(404).json({ success: false, error: 'Account not found' });
      return res.json({ success: true, data: account });
    }

    const account = memoryStore.accounts.find(a => a._id === id || a.id === id);
    if (!account) return res.status(404).json({ success: false, error: 'Account not found' });
    res.json({ success: true, data: account });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST new listing (Seller Wizard submission)
router.post('/', async (req, res) => {
  try {
    const listingData = req.body;
    const newId = `acc-${Date.now()}`;
    const newAccount = {
      ...listingData,
      _id: newId,
      id: newId,
      status: 'available', // Instantly available or pending approval
      createdAt: new Date().toISOString()
    };

    if (getIsMongoConnected()) {
      const saved = await Account.create(newAccount);
      return res.status(201).json({ success: true, data: saved });
    }

    memoryStore.accounts.unshift(newAccount);
    res.status(201).json({ success: true, data: newAccount });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
