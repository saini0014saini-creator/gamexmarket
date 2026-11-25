import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  transactionId: { type: String, required: true, unique: true },
  userId: { type: String, default: 'usr-karan' },
  type: { 
    type: String, 
    enum: ['Escrow Purchase', 'Wallet Deposit', 'Seller Earnings', 'Bank Withdrawal', 'Refund'],
    required: true 
  },
  description: { type: String, required: true },
  amount: { type: Number, required: true }, // positive or negative ₹ INR
  method: { type: String, default: 'UPI (GPay)' },
  status: { type: String, enum: ['Completed', 'Pending', 'Failed'], default: 'Completed' },
  createdAt: { type: Date, default: Date.now }
});

export const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);
