import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
  title: { type: String, required: true },
  game: { type: String, required: true },
  gameId: { type: String, required: true }, // 'coc', 'bgmi', 'ff', 'codm'
  category: { type: String, default: 'Battle Royale' },
  level: { type: Number, required: true },
  price: { type: Number, required: true }, // ₹ INR
  originalPrice: { type: Number },
  discountPercentage: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  isTrending: { type: Boolean, default: false },
  isBestSeller: { type: Boolean, default: false },
  isVerifiedSeller: { type: Boolean, default: true },
  instantDelivery: { type: Boolean, default: true },
  images: [{ type: String }],
  features: [{ type: String }],
  specs: {
    accountLevel: { type: String },
    tier: { type: String },
    skinsCount: { type: Number, default: 0 },
    characters: { type: String },
    mythicItems: { type: Number, default: 0 },
    serverRegion: { type: String, default: 'India Local' },
    loginMethod: { type: String, default: 'Single Social Link' }
  },
  description: { type: String },
  seller: {
    id: { type: String },
    name: { type: String, default: 'Vikram "Godfather" Gaming' },
    rating: { type: Number, default: 4.9 },
    reviewsCount: { type: Number, default: 120 },
    completedOrders: { type: Number, default: 150 },
    location: { type: String, default: 'Mumbai, Maharashtra' },
    badge: { type: String, default: 'Pro Seller V4' },
    avatar: { type: String }
  },
  status: { type: String, enum: ['available', 'pending_approval', 'sold', 'rejected'], default: 'available' },
  createdAt: { type: Date, default: Date.now }
});

export const Account = mongoose.models.Account || mongoose.model('Account', accountSchema);
