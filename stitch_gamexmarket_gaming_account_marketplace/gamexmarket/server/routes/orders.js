import express from 'express';
import { Order } from '../models/Order.js';
import { getIsMongoConnected, memoryStore } from '../config/db.js';

const router = express.Router();

// GET all orders for current user
router.get('/', async (req, res) => {
  try {
    if (getIsMongoConnected()) {
      const orders = await Order.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: orders.length, data: orders });
    }
    res.json({ success: true, count: memoryStore.orders.length, data: memoryStore.orders });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST create new escrow order (Simulates payment & generates credentials)
router.post('/', async (req, res) => {
  try {
    const { accountId, title, game, amount, paymentMethod, sellerName } = req.body;
    const newOrderId = `GXM-${Math.floor(10000 + Math.random() * 90000)}`;

    const newOrder = {
      orderId: newOrderId,
      game: game || 'BGMI / PUBG Mobile',
      accountTitle: title || 'Premium Gaming Account',
      accountId: accountId || 'acc-1',
      sellerName: sellerName || 'Vikram "Godfather" Gaming',
      amount: Number(amount) || 4999,
      paymentMethod: paymentMethod || 'UPI (PhonePe)',
      paymentStatus: 'Paid (Escrow Safe)',
      orderStatus: 'Credentials Delivered',
      credentials: {
        loginId: `secure_${Math.floor(100 + Math.random() * 900)}@gamexmarket-vault.in`,
        password: `GXMSecure#${Math.floor(1000 + Math.random() * 9000)}!`,
        backupCodes: `${Math.floor(100000 + Math.random() * 900000)}, ${Math.floor(100000 + Math.random() * 900000)}`,
        handoverNotes: 'Supervised escrow transfer completed. Please bind your personal Indian mobile number immediately.'
      },
      escrowLocked: true,
      createdAt: new Date().toISOString()
    };

    if (getIsMongoConnected()) {
      const saved = await Order.create(newOrder);
      return res.status(201).json({ success: true, data: saved });
    }

    memoryStore.orders.unshift(newOrder);
    // Add transaction to ledger
    memoryStore.transactions.unshift({
      transactionId: `TXN-${Math.floor(100000 + Math.random() * 900000)}`,
      type: 'Escrow Purchase',
      description: `Purchased: ${newOrder.accountTitle}`,
      amount: -newOrder.amount,
      method: newOrder.paymentMethod,
      status: 'Completed',
      createdAt: new Date().toISOString()
    });

    res.status(201).json({ success: true, data: newOrder });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// PATCH confirm order completion & release escrow
router.patch('/:id/confirm', async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsMongoConnected()) {
      const order = await Order.findOneAndUpdate(
        { orderId: id },
        { orderStatus: 'Completed', escrowLocked: false },
        { new: true }
      );
      if (!order) return res.status(404).json({ success: false, error: 'Order not found' });
      return res.json({ success: true, data: order });
    }

    const order = memoryStore.orders.find(o => o.orderId === id || o._id === id);
    if (!order) return res.status(404).json({ success: false, error: 'Order not found' });
    order.orderStatus = 'Completed';
    order.escrowLocked = false;
    res.json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
