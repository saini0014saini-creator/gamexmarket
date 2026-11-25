import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Heart, 
  ShoppingBag, 
  MessageSquare, 
  Star, 
  Zap, 
  MapPin, 
  Calendar, 
  Lock, 
  Share2, 
  CheckCircle2, 
  ArrowLeft,
  Info,
  Check
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { AccountCard } from '../components/AccountCard';

export const AccountDetailsPage = () => {
  const { 
    activeAccount, 
    accounts, 
    navigate, 
    wishlist, 
    toggleWishlist, 
    openCheckout, 
    setContactModal,
    showToast 
  } = useMarketplace();

  const account = activeAccount || accounts[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const isWishlisted = wishlist.includes(account.id);

  const relatedAccounts = accounts
    .filter(a => a.gameId === account.gameId && a.id !== account.id)
    .slice(0, 3);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('Listing link copied to clipboard!', 'info');
  };

  return (
    <div className="account-details-page page-wrapper" style={{ paddingTop: '2rem' }}>
      <div className="container">
        
        {/* Breadcrumb & Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <button 
            onClick={() => navigate('buy')} 
            className="btn btn-outline btn-sm"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <ArrowLeft size={16} /> Back to Marketplace
          </button>

          <div style={{ display: 'flex', gap: '0.65rem' }}>
            <button 
              onClick={handleShare}
              className="btn btn-outline btn-sm"
              title="Share listing"
            >
              <Share2 size={16} /> Share
            </button>
            <button 
              onClick={() => toggleWishlist(account.id)}
              className="btn btn-outline btn-sm"
              style={{ color: isWishlisted ? 'var(--neon-pink)' : 'inherit' }}
            >
              <Heart size={16} fill={isWishlisted ? 'var(--neon-pink)' : 'none'} /> {isWishlisted ? 'Saved' : 'Wishlist'}
            </button>
          </div>
        </div>

        {/* Main Details Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '2.5rem', marginBottom: '3.5rem' }} className="details-layout">
          
          {/* Left Column: Image Gallery & Specs */}
          <div>
            {/* Active Big Screenshot */}
            <div style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid var(--border-medium)',
              height: '420px',
              marginBottom: '1rem',
              background: '#090d18'
            }}>
              <img 
                src={account.images[selectedImage] || account.images[0]} 
                alt={account.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Game Badge */}
              <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '8px' }}>
                <span className="badge badge-cyan" style={{ fontSize: '0.85rem', padding: '6px 12px' }}>
                  {account.game}
                </span>
                <span className="badge badge-purple" style={{ fontSize: '0.85rem', padding: '6px 12px' }}>
                  {account.specs?.accountLevel || `Level ${account.level}`}
                </span>
              </div>

              {account.instantDelivery && (
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  background: 'rgba(16, 185, 129, 0.25)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid var(--neon-emerald)',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  color: 'var(--neon-emerald)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <Zap size={14} /> Instant Credential Delivery
                </div>
              )}
            </div>

            {/* Thumbnail Selectors */}
            {account.images.length > 1 && (
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
                {account.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    style={{
                      width: '80px',
                      height: '60px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: '2px solid',
                      borderColor: selectedImage === idx ? 'var(--neon-cyan)' : 'transparent',
                      opacity: selectedImage === idx ? 1 : 0.6,
                      transition: 'all 0.2s'
                    }}
                  >
                    <img src={img} alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            )}

            {/* Full Technical Specifications */}
            <div className="glass-card" style={{ padding: '1.75rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                ACCOUNT SPECIFICATIONS
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Game Category</span>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>{account.game}</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Account Level / Town Hall</span>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>{account.specs?.accountLevel || `Level ${account.level}`}</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Rank / Competitive Tier</span>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--neon-cyan)' }}>{account.specs?.tier || 'Unranked / High Tier'}</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Total Skins / Blueprints</span>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>{account.specs?.skinsCount || '150+'}</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Mythic / Evo Items</span>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--neon-purple)' }}>{account.specs?.mythicItems || 'Multiple'}</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Server Region</span>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--neon-emerald)' }}>{account.specs?.serverRegion || 'India Local'}</p>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Ownership & Login Method</span>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>{account.specs?.loginMethod || 'Single Social Link'}</p>
                </div>
              </div>
            </div>

            {/* Account Inventory Features Checklist */}
            <div className="glass-card" style={{ padding: '1.75rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                SPECIAL ITEMS & HIGHLIGHTS
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.85rem' }}>
                {account.features.map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={14} color="var(--neon-emerald)" />
                    </div>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: 500 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                SELLER DESCRIPTION
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                {account.description}
              </p>
            </div>
          </div>

          {/* Right Column: Pricing Box, Seller Profile & Escrow Card */}
          <div>
            {/* Purchase Card */}
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem', border: '1px solid var(--border-glow)' }}>
              
              <h1 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fff', lineHeight: 1.3, marginBottom: '1.25rem' }}>
                {account.title}
              </h1>

              {/* Price Highlight in ₹ INR */}
              <div style={{
                background: 'rgba(0, 242, 254, 0.05)',
                border: '1px solid rgba(0, 242, 254, 0.2)',
                borderRadius: '12px',
                padding: '1.25rem',
                marginBottom: '1.5rem'
              }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Total Account Price (Indian Rupees)
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginTop: '4px' }}>
                  <span className="inr-price" style={{ fontSize: '2.4rem', color: 'var(--neon-cyan)', fontWeight: 800, lineHeight: 1 }}>
                    ₹{account.price.toLocaleString('en-IN')}
                  </span>
                  {account.originalPrice && (
                    <span style={{ fontSize: '1.1rem', color: 'var(--text-dim)', textDecoration: 'line-through' }}>
                      ₹{account.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>

                {account.discountPercentage && (
                  <span className="badge badge-emerald" style={{ marginTop: '8px' }}>
                    Save ₹{(account.originalPrice - account.price).toLocaleString('en-IN')} ({account.discountPercentage}% OFF)
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                <button
                  onClick={() => openCheckout(account)}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', fontSize: '1.15rem' }}
                >
                  <ShoppingBag size={20} /> Buy Now with Escrow (₹)
                </button>

                <button
                  onClick={() => setContactModal({ isOpen: true, seller: account.seller, account })}
                  className="btn btn-outline"
                  style={{ width: '100%' }}
                >
                  <MessageSquare size={18} /> Contact Seller / Chat
                </button>
              </div>

              {/* Escrow Guarantee Box */}
              <div style={{
                background: 'rgba(16, 185, 129, 0.06)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: '10px',
                padding: '1rem',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'flex-start'
              }}>
                <ShieldCheck size={22} color="var(--neon-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '2px' }}>
                    100% GameXMarket Escrow Protection
                  </strong>
                  Your ₹ INR payment is safely held until you log in, test credentials, and change the security recovery info.
                </div>
              </div>

            </div>

            {/* Seller Profile Card */}
            <div className="glass-card" style={{ padding: '1.75rem', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
                SELLER INFORMATION
              </h4>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <img 
                  src={account.seller.avatar} 
                  alt={account.seller.name} 
                  style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--neon-cyan)' }} 
                />
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {account.seller.name}
                    {account.isVerifiedSeller && <ShieldCheck size={16} color="var(--neon-cyan)" />}
                  </h4>
                  <span className="badge badge-purple" style={{ marginTop: '2px' }}>
                    {account.seller.badge}
                  </span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.82rem' }}>
                <div>
                  <span style={{ color: 'var(--text-dim)' }}>Rating</span>
                  <p style={{ color: 'var(--neon-amber)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={14} fill="var(--neon-amber)" /> {account.seller.rating} ({account.seller.reviewsCount} reviews)
                  </p>
                </div>
                <div>
                  <span style={{ color: 'var(--text-dim)' }}>Completed Sales</span>
                  <p style={{ color: '#fff', fontWeight: 600 }}>{account.seller.completedOrders}+ Orders</p>
                </div>
                <div>
                  <span style={{ color: 'var(--text-dim)' }}>Location</span>
                  <p style={{ color: '#fff', fontWeight: 600 }}>{account.seller.location}</p>
                </div>
                <div>
                  <span style={{ color: 'var(--text-dim)' }}>Member Since</span>
                  <p style={{ color: '#fff', fontWeight: 600 }}>{account.seller.memberSince}</p>
                </div>
              </div>

            </div>

            {/* Indian Payment Options Accepted */}
            <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Accepted Payment Methods for This Listing
              </span>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-cyan">UPI</span>
                <span className="badge badge-emerald">Google Pay</span>
                <span className="badge badge-purple">PhonePe</span>
                <span className="badge badge-cyan">Paytm</span>
                <span className="badge badge-amber">RuPay Cards</span>
              </div>
            </div>

          </div>

        </div>

        {/* Recommended Accounts */}
        {relatedAccounts.length > 0 && (
          <div style={{ marginTop: '3rem' }}>
            <div className="section-header">
              <div className="section-title-wrap">
                <span className="section-tag">SIMILAR LISTINGS</span>
                <h3 className="section-title" style={{ fontSize: '1.8rem' }}>YOU MIGHT ALSO LIKE</h3>
              </div>
            </div>

            <div className="grid-marketplace">
              {relatedAccounts.map(rel => (
                <AccountCard key={rel.id} account={rel} />
              ))}
            </div>
          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 900px) {
          .details-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
