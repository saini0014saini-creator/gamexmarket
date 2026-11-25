import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: '+91 98765 43210' },
  role: { type: String, enum: ['buyer', 'seller', 'admin'], default: 'buyer' },
  walletBalance: { type: Number, default: 14250 }, // ₹ INR
  escrowBalance: { type: Number, default: 16499 }, // ₹ INR
  lifetimeEarnings: { type: Number, default: 142800 }, // ₹ INR
  avatar: { type: String },
  location: { type: String, default: 'Mumbai, Maharashtra' },
  kycVerified: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
