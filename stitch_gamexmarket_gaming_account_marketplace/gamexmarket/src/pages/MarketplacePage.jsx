import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  Sparkles, 
  Check, 
  X, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Grid,
  ListFilter,
  Star,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sliders
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { POPULAR_GAMES } from '../data/mockData';
import { AccountCard } from '../components/AccountCard';

export const MarketplacePage = () => {
  const { accounts, filters, setFilters, navigate, openCheckout } = useMarketplace();

  // Local state for UI
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [selectedQuickTag, setSelectedQuickTag] = useState(null);
  const itemsPerPage = 6;

  // Filter & Search Logic
  const filteredAccounts = useMemo(() => {
    return accounts.filter(acc => {
      // Search
      if (filters.search) {
        const query = filters.search.toLowerCase();
        const matchesTitle = acc.title.toLowerCase().includes(query);
        const matchesGame = acc.game.toLowerCase().includes(query);
        const matchesFeat = acc.features.some(f => f.toLowerCase().includes(query));
        if (!matchesTitle && !matchesGame && !matchesFeat) return false;
      }

      // Quick Tag Filter
      if (selectedQuickTag) {
        if (selectedQuickTag === 'glacier' && !acc.title.toLowerCase().includes('glacier') && !acc.features.some(f => f.toLowerCase().includes('glacier'))) return false;
        if (selectedQuickTag === 'th16' && !acc.title.toLowerCase().includes('th16') && !acc.features.some(f => f.toLowerCase().includes('th16'))) return false;
        if (selectedQuickTag === 'evo' && !acc.title.toLowerCase().includes('evo') && !acc.features.some(f => f.toLowerCase().includes('evo'))) return false;
        if (selectedQuickTag === 'under5k' && acc.price > 5000) return false;
        if (selectedQuickTag === 'instant' && !acc.instantDelivery) return false;
        if (selectedQuickTag === 'toprated' && acc.seller.rating < 4.8) return false;
      }

      // Game Category
      if (filters.game && filters.game !== 'all') {
        if (acc.gameId !== filters.game) return false;
      }

      // Min Price ₹
      if (filters.minPrice && acc.price < Number(filters.minPrice)) {
        return false;
      }

      // Max Price ₹
      if (filters.maxPrice && acc.price > Number(filters.maxPrice)) {
        return false;
      }

      // Level
      if (filters.level && acc.level < Number(filters.level)) {
        return false;
      }

      // Verified Seller
      if (filters.verifiedOnly && !acc.isVerifiedSeller) {
        return false;
      }

      // Instant Delivery
      if (filters.instantOnly && !acc.instantDelivery) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'newest': return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        case 'level-high': return b.level - a.level;
        case 'rating': return b.seller.rating - a.seller.rating;
        default: return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      }
    });
  }, [accounts, filters, selectedQuickTag]);

  // Pagination
  const totalPages = Math.ceil(filteredAccounts.length / itemsPerPage) || 1;
  const paginatedAccounts = filteredAccounts.slice(
    (currentPageNum - 1) * itemsPerPage,
    currentPageNum * itemsPerPage
  );

  const resetFilters = () => {
    setFilters({
      game: 'all',
      search: '',
      minPrice: '',
      maxPrice: '',
      level: '',
      verifiedOnly: false,
      instantOnly: false,
      sortBy: 'featured'
    });
    setSelectedQuickTag(null);
    setCurrentPageNum(1);
  };

  const setPriceRange = (min, max) => {
    setFilters(prev => ({ ...prev, minPrice: min ? String(min) : '', maxPrice: max ? String(max) : '' }));
    setCurrentPageNum(1);
  };

  return (
    <div className="marketplace-page page-wrapper" style={{ paddingTop: '2.5rem', minHeight: 'calc(100vh - 200px)' }}>
      <div className="container">
        
        {/* Breadcrumb & Live Market Tag */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <span style={{ cursor: 'pointer', color: 'var(--text-dim)' }} onClick={() => navigate('home')}>Home</span>
            <span>/</span>
            <span style={{ color: 'var(--neon-cyan)', fontWeight: 600 }}>Marketplace</span>
            <span>/</span>
            <span>All Gaming Accounts</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="live-indicator" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--neon-emerald)', fontWeight: 700, background: 'rgba(16, 185, 129, 0.1)', padding: '4px 10px', borderRadius: '20px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <span className="ping-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--neon-emerald)', display: 'inline-block' }}></span>
              8,440 Accounts Live in India
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', background: 'rgba(255, 255, 255, 0.04)', padding: '4px 10px', borderRadius: '20px', border: '1px solid var(--border-subtle)' }}>
              🇮🇳 INR (₹) Guaranteed
            </span>
          </div>
        </div>

        {/* Master Heading */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
            Browse Premium Gaming Accounts
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '4px' }}>
            Instant digital handover with 100% Escrow Protection. Buyer inspection window with automatic refund protection.
          </p>
        </div>

        {/* Quick Filter Chips (From Stitch Design) */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          flexWrap: 'wrap', 
          marginBottom: '2rem',
          padding: '0.75rem 1rem',
          background: 'rgba(22, 28, 42, 0.7)',
          borderRadius: '12px',
          border: '1px solid var(--border-subtle)'
        }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginRight: '4px' }}>
            <Sparkles size={14} color="var(--neon-cyan)" /> Quick Tags:
          </span>

          <button
            onClick={() => setSelectedQuickTag(selectedQuickTag === 'glacier' ? null : 'glacier')}
            style={{
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid',
              borderColor: selectedQuickTag === 'glacier' ? 'var(--neon-cyan)' : 'var(--border-subtle)',
              background: selectedQuickTag === 'glacier' ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.04)',
              color: selectedQuickTag === 'glacier' ? 'var(--neon-cyan)' : 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-cyan)' }}></span>
            BGMI Glacier
          </button>

          <button
            onClick={() => setSelectedQuickTag(selectedQuickTag === 'th16' ? null : 'th16')}
            style={{
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid',
              borderColor: selectedQuickTag === 'th16' ? 'var(--neon-purple)' : 'var(--border-subtle)',
              background: selectedQuickTag === 'th16' ? 'rgba(221, 183, 255, 0.2)' : 'rgba(255, 255, 255, 0.04)',
              color: selectedQuickTag === 'th16' ? 'var(--neon-purple)' : 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-purple)' }}></span>
            COC TH16
          </button>

          <button
            onClick={() => setSelectedQuickTag(selectedQuickTag === 'evo' ? null : 'evo')}
            style={{
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid',
              borderColor: selectedQuickTag === 'evo' ? 'var(--neon-red)' : 'var(--border-subtle)',
              background: selectedQuickTag === 'evo' ? 'rgba(255, 0, 85, 0.2)' : 'rgba(255, 255, 255, 0.04)',
              color: selectedQuickTag === 'evo' ? 'var(--neon-red)' : 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-red)' }}></span>
            Free Fire Evo Gun
          </button>

          <button
            onClick={() => setSelectedQuickTag(selectedQuickTag === 'under5k' ? null : 'under5k')}
            style={{
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid',
              borderColor: selectedQuickTag === 'under5k' ? 'var(--neon-emerald)' : 'var(--border-subtle)',
              background: selectedQuickTag === 'under5k' ? 'rgba(101, 242, 181, 0.2)' : 'rgba(255, 255, 255, 0.04)',
              color: selectedQuickTag === 'under5k' ? 'var(--neon-emerald)' : 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-emerald)' }}></span>
            Under ₹5,000
          </button>

          <button
            onClick={() => setSelectedQuickTag(selectedQuickTag === 'instant' ? null : 'instant')}
            style={{
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid',
              borderColor: selectedQuickTag === 'instant' ? 'var(--neon-amber)' : 'var(--border-subtle)',
              background: selectedQuickTag === 'instant' ? 'rgba(255, 170, 0, 0.2)' : 'rgba(255, 255, 255, 0.04)',
              color: selectedQuickTag === 'instant' ? 'var(--neon-amber)' : 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Zap size={12} color="var(--neon-amber)" />
            Instant Delivery
          </button>

          <button
            onClick={() => setSelectedQuickTag(selectedQuickTag === 'toprated' ? null : 'toprated')}
            style={{
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid',
              borderColor: selectedQuickTag === 'toprated' ? 'var(--neon-cyan)' : 'var(--border-subtle)',
              background: selectedQuickTag === 'toprated' ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.04)',
              color: selectedQuickTag === 'toprated' ? 'var(--neon-cyan)' : 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Star size={12} color="var(--neon-amber)" />
            Top Rated Sellers
          </button>

          {(selectedQuickTag || filters.game !== 'all' || filters.search || filters.minPrice || filters.maxPrice || filters.verifiedOnly || filters.instantOnly) && (
            <button
              onClick={resetFilters}
              style={{
                marginLeft: 'auto',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: '1px solid rgba(255, 0, 85, 0.4)',
                background: 'rgba(255, 0, 85, 0.1)',
                color: 'var(--neon-red)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <RotateCcw size={12} /> Reset All
            </button>
          )}
        </div>

        {/* Main Layout: Sidebar (col-span-3) + Main Grid (col-span-9) */}
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '2rem' }} className="marketplace-layout">
          
          {/* ==================== LEFT FILTER SIDEBAR ==================== */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Header Box */}
            <div className="glass-card" style={{ padding: '1.25rem', borderRadius: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-gaming)' }}>
                  <Filter size={16} color="var(--neon-cyan)" /> Filters
                </span>
                <button
                  onClick={resetFilters}
                  style={{ background: 'none', border: 'none', color: 'var(--text-dim)', fontSize: '0.78rem', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Clear
                </button>
              </div>

              {/* SECTION 1: Select Game */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '0.75rem' }}>
                  Select Game
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label 
                    onClick={() => { setFilters(prev => ({ ...prev, game: 'all' })); setCurrentPageNum(1); }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      background: filters.game === 'all' ? 'rgba(0, 240, 255, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid',
                      borderColor: filters.game === 'all' ? 'var(--neon-cyan)' : 'transparent',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      color: filters.game === 'all' ? 'var(--neon-cyan)' : 'var(--text-main)',
                      fontWeight: filters.game === 'all' ? 700 : 500
                    }}
                  >
                    <span>All Games</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>8,440</span>
                  </label>

                  {[
                    { id: 'coc', name: 'Clash of Clans', count: '2,410' },
                    { id: 'bgmi', name: 'BGMI / PUBG Mobile', count: '3,120' },
                    { id: 'freefire', name: 'Free Fire MAX', count: '1,480' },
                    { id: 'codm', name: 'Call of Duty Mobile', count: '890' }
                  ].map(g => {
                    const isSelected = filters.game === g.id;
                    return (
                      <label
                        key={g.id}
                        onClick={() => { setFilters(prev => ({ ...prev, game: g.id })); setCurrentPageNum(1); }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 10px',
                          borderRadius: '8px',
                          background: isSelected ? 'rgba(0, 240, 255, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid',
                          borderColor: isSelected ? 'var(--neon-cyan)' : 'transparent',
                          cursor: 'pointer',
                          fontSize: '0.85rem',
                          color: isSelected ? 'var(--neon-cyan)' : 'var(--text-main)',
                          fontWeight: isSelected ? 700 : 500
                        }}
                      >
                        <span>{g.name}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{g.count}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 2: Price Budget in ₹ INR */}
              <div style={{ marginBottom: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '0.75rem' }}>
                  Price Budget (₹ INR)
                </span>
                
                {/* Quick Chips */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px', marginBottom: '0.75rem' }}>
                  <button
                    onClick={() => setPriceRange(0, 1000)}
                    style={{ padding: '6px', borderRadius: '6px', fontSize: '0.75rem', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)', cursor: 'pointer' }}
                  >
                    &lt; ₹1,000
                  </button>
                  <button
                    onClick={() => setPriceRange(1000, 5000)}
                    style={{ padding: '6px', borderRadius: '6px', fontSize: '0.75rem', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)', cursor: 'pointer' }}
                  >
                    ₹1k - ₹5,000
                  </button>
                  <button
                    onClick={() => setPriceRange(5000, 15000)}
                    style={{ padding: '6px', borderRadius: '6px', fontSize: '0.75rem', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)', cursor: 'pointer' }}
                  >
                    ₹5k - ₹15k
                  </button>
                  <button
                    onClick={() => setPriceRange(15000, null)}
                    style={{ padding: '6px', borderRadius: '6px', fontSize: '0.75rem', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)', cursor: 'pointer' }}
                  >
                    ₹15k+
                  </button>
                </div>

                {/* Min / Max Inputs */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ flex: 1, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '8px', top: '7px', fontSize: '0.75rem', color: 'var(--text-dim)' }}>₹</span>
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice}
                      onChange={e => setFilters(prev => ({ ...prev, minPrice: e.target.value }))}
                      className="input-field"
                      style={{ padding: '6px 6px 6px 20px', fontSize: '0.8rem', width: '100%' }}
                    />
                  </div>
                  <span style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>to</span>
                  <div style={{ flex: 1, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '8px', top: '7px', fontSize: '0.75rem', color: 'var(--text-dim)' }}>₹</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.maxPrice}
                      onChange={e => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                      className="input-field"
                      style={{ padding: '6px 6px 6px 20px', fontSize: '0.8rem', width: '100%' }}
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 3: Account Rank & Tier */}
              <div style={{ marginBottom: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '0.75rem' }}>
                  Account Rank & Tier
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.82rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: 'var(--text-muted)' }}>
                    <input type="checkbox" className="custom-checkbox" />
                    <span>TH15 - TH16 (Max/Semi)</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: 'var(--text-muted)' }}>
                    <input type="checkbox" className="custom-checkbox" />
                    <span>Conqueror / Ace Dominator</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: 'var(--text-muted)' }}>
                    <input type="checkbox" className="custom-checkbox" />
                    <span>Grandmaster / Heroic ID</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: 'var(--text-muted)' }}>
                    <input type="checkbox" className="custom-checkbox" />
                    <span>Legendary Rank (CODM)</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: 'var(--text-muted)' }}>
                    <input type="checkbox" className="custom-checkbox" />
                    <span>Account Level 70+</span>
                  </label>
                </div>
              </div>

              {/* SECTION 4: Safety & Delivery Guard */}
              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '0.75rem' }}>
                  Safety & Delivery Guard
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem' }}>
                  <label 
                    onClick={() => setFilters(prev => ({ ...prev, instantOnly: !prev.instantOnly }))}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: filters.instantOnly ? 'var(--neon-emerald)' : 'var(--text-muted)' }}
                  >
                    <input type="checkbox" checked={filters.instantOnly} readOnly className="custom-checkbox" />
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Zap size={13} color="var(--neon-emerald)" /> Instant Delivery (&lt; 5 mins)
                    </span>
                  </label>
                  
                  <label 
                    onClick={() => setFilters(prev => ({ ...prev, verifiedOnly: !prev.verifiedOnly }))}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: filters.verifiedOnly ? 'var(--neon-cyan)' : 'var(--text-muted)' }}
                  >
                    <input type="checkbox" checked={filters.verifiedOnly} readOnly className="custom-checkbox" />
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <ShieldCheck size={13} color="var(--neon-cyan)" /> Aadhaar/KYC Verified Sellers
                    </span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: 'var(--text-muted)' }}>
                    <input type="checkbox" className="custom-checkbox" />
                    <span>Email Changeable (Clean Mail)</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: 'var(--text-muted)' }}>
                    <input type="checkbox" className="custom-checkbox" />
                    <span>Clean Link (No Social Lock)</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Escrow Guarantee Callout Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(0, 240, 255, 0.05) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '14px',
              padding: '1.25rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--neon-emerald)', fontWeight: 700, fontSize: '0.88rem', marginBottom: '6px' }}>
                <ShieldCheck size={18} /> 100% Escrow Protected
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                Your payment remains securely locked in GameX Escrow Vault until you verify account ownership, change passwords, and confirm receipt.
              </p>
            </div>

          </aside>

          {/* ==================== MAIN PRODUCT SECTION ==================== */}
          <main style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Top Toolbar: Search + Sort + View Mode */}
            <div style={{
              background: 'rgba(22, 28, 42, 0.8)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '14px',
              padding: '0.9rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              
              {/* Search input */}
              <div style={{ position: 'relative', flex: 1, minWidth: '220px' }}>
                <Search size={16} color="var(--text-dim)" style={{ position: 'absolute', left: '12px', top: '11px' }} />
                <input
                  type="text"
                  placeholder="Search by title, weapon skin, Town Hall..."
                  value={filters.search}
                  onChange={e => { setFilters(prev => ({ ...prev, search: e.target.value })); setCurrentPageNum(1); }}
                  className="input-field"
                  style={{ paddingLeft: '2.4rem', width: '100%', fontSize: '0.85rem' }}
                />
              </div>

              {/* Showing Count */}
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                Showing <strong style={{ color: '#fff' }}>{filteredAccounts.length}</strong> accounts
              </div>

              {/* Sort By Dropdown */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>Sort:</span>
                <select
                  value={filters.sortBy}
                  onChange={e => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                  className="input-field"
                  style={{ padding: '6px 12px', fontSize: '0.82rem', cursor: 'pointer', background: 'var(--surface)' }}
                >
                  <option value="featured">Featured Listings</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated Sellers</option>
                  <option value="newest">Newest First</option>
                  <option value="level-high">Highest Level</option>
                </select>

                {/* View toggle */}
                <div style={{ display: 'flex', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '6px', padding: '2px', border: '1px solid var(--border-subtle)' }}>
                  <button
                    onClick={() => setViewMode('grid')}
                    style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      background: viewMode === 'grid' ? 'rgba(0, 240, 255, 0.2)' : 'none',
                      color: viewMode === 'grid' ? 'var(--neon-cyan)' : 'var(--text-dim)',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    title="Grid View"
                  >
                    <Grid size={15} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      background: viewMode === 'list' ? 'rgba(0, 240, 255, 0.2)' : 'none',
                      color: viewMode === 'list' ? 'var(--neon-cyan)' : 'var(--text-dim)',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    title="List View"
                  >
                    <ListFilter size={15} />
                  </button>
                </div>
              </div>

            </div>

            {/* Account Listings Grid / List */}
            {filteredAccounts.length === 0 ? (
              <div className="glass-card" style={{ padding: '3.5rem 1.5rem', textAlign: 'center', borderRadius: '16px' }}>
                <Search size={42} color="var(--text-dim)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem' }}>No Accounts Found</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', maxWidth: '420px', margin: '0 auto 1.5rem' }}>
                  No accounts matched your current filter criteria. Try clearing search filters or broadening your price range in ₹ INR.
                </p>
                <button onClick={resetFilters} className="btn btn-primary btn-sm">
                  <RotateCcw size={14} /> Reset All Filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
                gap: '1.25rem'
              }}>
                {paginatedAccounts.map(account => (
                  <AccountCard key={account.id} account={account} />
                ))}
              </div>
            ) : (
              /* List Mode View */
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {paginatedAccounts.map(account => (
                  <div 
                    key={account.id} 
                    className="glass-card card-hover-glow" 
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '220px 1fr auto',
                      gap: '1.25rem',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      padding: '1rem',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{ position: 'relative', width: '220px', height: '140px', borderRadius: '10px', overflow: 'hidden' }}>
                      <img src={account.images[0]} alt={account.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <span className="badge badge-cyan" style={{ position: 'absolute', top: '8px', left: '8px' }}>
                        {account.game}
                      </span>
                    </div>

                    <div>
                      <h3 
                        onClick={() => navigate('details', { account })}
                        style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 700, cursor: 'pointer', marginBottom: '6px' }}
                      >
                        {account.title}
                      </h3>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
                        <span className="badge badge-purple" style={{ fontSize: '0.72rem' }}>LVL {account.level}</span>
                        {account.features.map((f, i) => (
                          <span key={i} style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px', color: 'var(--text-muted)' }}>
                            • {f}
                          </span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                        <span>Seller: <strong style={{ color: '#fff' }}>{account.seller.name}</strong></span>
                        <span>•</span>
                        <span style={{ color: 'var(--neon-amber)', display: 'flex', alignItems: 'center', gap: '2px' }}>
                          <Star size={12} fill="var(--neon-amber)" /> {account.seller.rating} ({account.seller.reviewsCount})
                        </span>
                        {account.instantDelivery && (
                          <span style={{ color: 'var(--neon-emerald)', display: 'flex', alignItems: 'center', gap: '3px', fontWeight: 600 }}>
                            <Zap size={12} /> Instant Delivery
                          </span>
                        )}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '150px' }}>
                      <div className="inr-price" style={{ fontSize: '1.6rem', color: 'var(--neon-cyan)', fontWeight: 800 }}>
                        ₹{account.price.toLocaleString('en-IN')}
                      </div>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <button onClick={() => navigate('details', { account })} className="btn btn-outline btn-sm">
                          Details
                        </button>
                        <button onClick={() => openCheckout(account)} className="btn btn-primary btn-sm">
                          Buy via UPI
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 0',
                borderTop: '1px solid var(--border-subtle)',
                marginTop: '1rem'
              }}>
                <button
                  disabled={currentPageNum === 1}
                  onClick={() => setCurrentPageNum(prev => Math.max(1, prev - 1))}
                  className="btn btn-outline btn-sm"
                  style={{ opacity: currentPageNum === 1 ? 0.4 : 1, cursor: currentPageNum === 1 ? 'not-allowed' : 'pointer' }}
                >
                  <ChevronLeft size={16} /> Previous
                </button>

                <div style={{ display: 'flex', gap: '6px' }}>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPageNum(page)}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        border: '1px solid',
                        borderColor: currentPageNum === page ? 'var(--neon-cyan)' : 'var(--border-subtle)',
                        background: currentPageNum === page ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                        color: currentPageNum === page ? 'var(--neon-cyan)' : 'var(--text-main)',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  disabled={currentPageNum === totalPages}
                  onClick={() => setCurrentPageNum(prev => Math.min(totalPages, prev + 1))}
                  className="btn btn-outline btn-sm"
                  style={{ opacity: currentPageNum === totalPages ? 0.4 : 1, cursor: currentPageNum === totalPages ? 'not-allowed' : 'pointer' }}
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>
            )}

          </main>

        </div>

      </div>
    </div>
  );
};
