import React from 'react';
import { Heart, Star, ShieldCheck, Zap, ArrowUpRight, Check, ShoppingBag } from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export const AccountCard = ({ account }) => {
  const { navigate, wishlist, toggleWishlist, openCheckout } = useMarketplace();
  const isWishlisted = wishlist.includes(account.id);

  const getGameBadgeColor = (gameId) => {
    switch (gameId) {
      case 'bgmi': return 'badge-amber';
      case 'freefire': return 'badge-red';
      case 'coc': return 'badge-emerald';
      case 'codm': return 'badge-purple';
      default: return 'badge-cyan';
    }
  };

  return (
    <div 
      className="glass-card card-hover-glow" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: 'var(--radius-md)',
        background: '#0e1322'
      }}
    >
      {/* Account Image & Badges */}
      <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden' }}>
        <img 
          src={account.images[0]} 
          alt={account.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          className="account-img-hover"
        />
        
        {/* Dark gradient overlay for readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, #0e1322 0%, rgba(14, 19, 34, 0.4) 60%, transparent 100%)'
        }} />

        {/* Game Tag & Level */}
        <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <span className={`badge ${getGameBadgeColor(account.gameId)}`}>
            {account.game}
          </span>
          <span className="badge badge-cyan">
            LVL {account.level}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(account.id);
          }}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(6px)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: isWishlisted ? 'var(--neon-pink)' : '#fff',
            transition: 'transform 0.2s'
          }}
          title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart size={16} fill={isWishlisted ? 'var(--neon-pink)' : 'none'} />
        </button>

        {/* Instant delivery indicator */}
        {account.instantDelivery && (
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(16, 185, 129, 0.2)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '0.7rem',
            color: 'var(--neon-emerald)',
            fontWeight: 700
          }}>
            <Zap size={12} /> Instant Delivery
          </div>
        )}
      </div>

      {/* Card Content */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        
        {/* Account Title */}
        <h3 
          onClick={() => navigate('details', { account })}
          style={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.35,
            marginBottom: '0.65rem',
            cursor: 'pointer',
            height: '42px',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}
          title={account.title}
        >
          {account.title}
        </h3>

        {/* Key Features Chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.9rem' }}>
          {account.features.slice(0, 2).map((feat, idx) => (
            <span 
              key={idx} 
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--text-muted)',
                fontSize: '0.72rem',
                padding: '2px 6px',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%'
              }}
            >
              • {feat}
            </span>
          ))}
        </div>

        {/* Seller Info Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.6rem',
          borderTop: '1px solid var(--border-subtle)',
          marginBottom: '1rem',
          fontSize: '0.78rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <img 
              src={account.seller.avatar} 
              alt={account.seller.name} 
              style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }} 
            />
            <span style={{ color: 'var(--text-muted)', fontWeight: 500, maxWidth: '110px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {account.seller.name}
            </span>
            {account.isVerifiedSeller && (
              <ShieldCheck size={14} color="var(--neon-cyan)" title="Verified Seller" />
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--neon-amber)', fontWeight: 700 }}>
            <Star size={13} fill="var(--neon-amber)" />
            <span>{account.seller.rating}</span>
            <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}>({account.seller.reviewsCount})</span>
          </div>
        </div>

        {/* Price & Action CTA */}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.45rem' }}>
              <span className="inr-price" style={{ fontSize: '1.45rem', color: 'var(--neon-cyan)', fontWeight: 800 }}>
                ₹{account.price.toLocaleString('en-IN')}
              </span>
              {account.originalPrice && (
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textDecoration: 'line-through' }}>
                  ₹{account.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            {account.discountPercentage && (
              <span style={{ fontSize: '0.68rem', color: 'var(--neon-emerald)', fontWeight: 700 }}>
                Save ₹{(account.originalPrice - account.price).toLocaleString('en-IN')} ({account.discountPercentage}% OFF)
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <button
              onClick={() => navigate('details', { account })}
              className="btn btn-outline btn-sm"
              style={{ padding: '0.45rem 0.65rem', fontSize: '0.8rem' }}
              title="View full specs"
            >
              Details
            </button>
            <button
              onClick={() => openCheckout(account)}
              className="btn btn-primary btn-sm"
              style={{ padding: '0.45rem 0.8rem', fontSize: '0.8rem' }}
            >
              <ShoppingBag size={14} /> Buy
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
