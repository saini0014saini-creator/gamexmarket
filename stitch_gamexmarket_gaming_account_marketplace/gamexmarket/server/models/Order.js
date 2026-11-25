import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  game: { type: String, required: true },
  accountTitle: { type: String, required: true },
  accountId: { type: String },
  buyerId: { type: String, default: 'usr-karan' },
  sellerName: { type: String, required: true },
  amount: { type: Number, required: true }, // ₹ INR
  paymentMethod: { type: String, default: 'UPI (PhonePe)' },
  paymentStatus: { type: String, default: 'Paid (Escrow Safe)' },
  orderStatus: { 
    type: String, 
    enum: ['Credentials Delivered', 'Awaiting Buyer Confirmation', 'Completed', 'Disputed', 'Refunded'],
    default: 'Credentials Delivered'
  },
  credentials: {
    loginId: { type: String },
    password: { type: String },
    backupCodes: { type: String },
    handoverNotes: { type: String }
  },
  escrowLocked: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
