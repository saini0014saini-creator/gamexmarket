import React, { useState } from 'react';
import { 
  Gamepad2, 
  Upload, 
  ShieldCheck, 
  Sparkles, 
  Eye, 
  Save, 
  CheckCircle2, 
  AlertCircle, 
  Trash2, 
  Edit3, 
  Clock, 
  HelpCircle,
  IndianRupee,
  Layers,
  ArrowRight,
  Zap,
  Lock,
  Plus,
  Check,
  ChevronDown,
  Info
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { POPULAR_GAMES } from '../data/mockData';

export const SellAccountPage = () => {
  const { 
    submitNewListing, 
    pendingListings, 
    accounts, 
    currentUser, 
    showToast,
    navigate 
  } = useMarketplace();

  // Form State
  const [formData, setFormData] = useState({
    gameId: 'bgmi',
    game: 'PUBG Mobile / BGMI',
    title: 'Conqueror S19 | Glacier M416 Lv7 + Pharaoh X-Suit 4-Star',
    level: '72',
    tier: 'Ace Dominator / Conqueror',
    price: '18500',
    skinsCount: '142',
    characters: '6 Maxed',
    mythicItems: 'Glacier M416 Lv7, Fool M416, Pharaoh 4-Star',
    features: 'Single Twitter Link, Clean Gmail, Instant Handover, Local India',
    description: 'Level 72 high-tier BGMI account with Glacier M416 maxed out with on-hit effect and loot crate. Pharaoh X-Suit 4-Star with emote. Single link only, personal primary account being sold for exam focus. Guaranteed zero social lock.',
    loginMethod: 'Twitter / X Single Link',
    canChangeEmail: 'yes',
    upiId: 'vikram.rathore@okhdfcbank',
    sellerContact: currentUser.phone || '+91 98765 43210',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDUrB8fw2GMw_u_PTxvT2aI7ck3kwCAstQulk8sUVX_pkB4QIGO2at25899fV89YK4qSKFg9ITfBbYclRtejE7CLAeToMwyk9Wi-W5uA3K99lNPhgH-pusdtkJM8aCE2y47BCP6JEc9TacgQhFa8uMpcV88NqITK3WzFaqyFVqGETcIfEPRSVMLGmWkMtC7rrFBUgj61yL_ga9lJb5ZEKqjVSWYLkYwclHmVjpcUzpU'
    ]
  });

  const [featureTagInput, setFeatureTagInput] = useState('');
  const [tagsList, setTagsList] = useState(['Glacier M416 Lv7', 'Pharaoh 4★', 'Fool M416', 'Clean Gmail']);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('create'); // 'create' | 'my-listings' | 'guidelines'
  const [activeFaq, setActiveFaq] = useState(null);

  // Commission math (5% Platform Escrow Fee matching stitch)
  const priceNum = Number(formData.price) || 0;
  const platformFee = Math.round(priceNum * 0.05); // 5% fee
  const sellerReceives = Math.max(priceNum - platformFee, 0);

  const gameOptions = [
    {
      id: 'coc',
      name: 'Clash of Clans',
      demand: 'TH14-TH16 In High Demand',
      avgSale: 'Avg Sale: 3 hrs',
      defaultImg: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'bgmi',
      name: 'BGMI / PUBG',
      demand: 'Glacier M4 & X-Suits',
      avgSale: 'Avg Sale: 45 min',
      defaultImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUrB8fw2GMw_u_PTxvT2aI7ck3kwCAstQulk8sUVX_pkB4QIGO2at25899fV89YK4qSKFg9ITfBbYclRtejE7CLAeToMwyk9Wi-W5uA3K99lNPhgH-pusdtkJM8aCE2y47BCP6JEc9TacgQhFa8uMpcV88NqITK3WzFaqyFVqGETcIfEPRSVMLGmWkMtC7rrFBUgj61yL_ga9lJb5ZEKqjVSWYLkYwclHmVjpcUzpU'
    },
    {
      id: 'freefire',
      name: 'Free Fire MAX',
      demand: 'Old Pass & Evo Guns',
      avgSale: 'Avg Sale: 1.5 hrs',
      defaultImg: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'codm',
      name: 'COD Mobile',
      demand: 'Mythic Guns & Damascus',
      avgSale: 'Avg Sale: 2 hrs',
      defaultImg: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const handleGameSelect = (g) => {
    setFormData(prev => ({
      ...prev,
      gameId: g.id,
      game: g.name,
      images: [g.defaultImg]
    }));
  };

  const addTag = () => {
    if (featureTagInput.trim() && !tagsList.includes(featureTagInput.trim())) {
      setTagsList(prev => [...prev, featureTagInput.trim()]);
      setFeatureTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTagsList(prev => prev.filter(t => t !== tagToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.price || !formData.level) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    submitNewListing({
      ...formData,
      features: tagsList.join(', '),
      sellerName: currentUser.name,
      sellerContact: formData.sellerContact
    });

    showToast('Listing submitted! GameX admin escrow team will review within 15 minutes.', 'success');
    setActiveTab('my-listings');
  };

  return (
    <div className="sell-page page-wrapper" style={{ paddingTop: '2.5rem', minHeight: 'calc(100vh - 200px)' }}>
      <div className="container">
        
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          <span style={{ cursor: 'pointer', color: 'var(--text-dim)' }} onClick={() => navigate('home')}>Home</span>
          <span>/</span>
          <span style={{ color: 'var(--neon-cyan)', fontWeight: 600 }}>Merchant Center</span>
          <span>/</span>
          <span>Sell Account</span>
        </div>

        {/* Master Heading */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem' }}>
          <span className="badge badge-cyan" style={{ marginBottom: '0.65rem' }}>
            🇮🇳 India's #1 Secure Gaming Account Escrow
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
            Sell Your Gaming Account for Instant Cash in ₹ INR
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginTop: '8px' }}>
            Zero risk of fraud. Funds are locked by buyer before you release login credentials. 5-minute automated UPI settlements.
          </p>
        </div>

        {/* Top Tab Bar: Create Listing | My Listings | Seller Safety */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <button
            onClick={() => setActiveTab('create')}
            className={`btn ${activeTab === 'create' ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.65rem 1.4rem' }}
          >
            <Gamepad2 size={16} /> Create New Listing
          </button>
          <button
            onClick={() => setActiveTab('my-listings')}
            className={`btn ${activeTab === 'my-listings' ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.65rem 1.4rem' }}
          >
            <Layers size={16} /> My Active Listings ({pendingListings.length})
          </button>
          <button
            onClick={() => setActiveTab('guidelines')}
            className={`btn ${activeTab === 'guidelines' ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.65rem 1.4rem' }}
          >
            <ShieldCheck size={16} /> Seller Protection Rules
          </button>
        </div>

        {/* ===================== TAB 1: CREATE LISTING ===================== */}
        {activeTab === 'create' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2rem' }} className="sell-layout">
            
            {/* Form Column */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* STEP 1: CHOOSE THE GAME */}
              <div className="glass-card" style={{ padding: '1.75rem', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--neon-cyan)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>1</span>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700 }}>Choose the Game</h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  {gameOptions.map(g => {
                    const isSelected = formData.gameId === g.id;
                    return (
                      <div
                        key={g.id}
                        onClick={() => handleGameSelect(g)}
                        style={{
                          padding: '1.2rem',
                          borderRadius: '12px',
                          border: '2px solid',
                          borderColor: isSelected ? 'var(--neon-cyan)' : 'var(--border-subtle)',
                          background: isSelected ? 'rgba(0, 240, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          position: 'relative'
                        }}
                      >
                        {isSelected && (
                          <div style={{ position: 'absolute', top: '10px', right: '10px', color: 'var(--neon-cyan)' }}>
                            <CheckCircle2 size={18} />
                          </div>
                        )}
                        <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>{g.name}</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginBottom: '8px' }}>{g.demand}</p>
                        <span style={{ fontSize: '0.72rem', color: 'var(--neon-emerald)', fontWeight: 600, background: 'rgba(16, 185, 129, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                          ⚡ {g.avgSale}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STEP 2: ACCOUNT DETAILS & LOGIN HIERARCHY */}
              <div className="glass-card" style={{ padding: '1.75rem', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--neon-cyan)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>2</span>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700 }}>Account Details & Login Hierarchy</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                      Listing Title * (Max 80 chars)
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={e => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g. TH16 Near Max Heroes + 6 Sceneries + 1500 CWL Medals"
                      className="input-field"
                      style={{ width: '100%', fontSize: '0.9rem' }}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                        Account Level / Town Hall *
                      </label>
                      <input
                        type="text"
                        value={formData.level}
                        onChange={e => setFormData({ ...formData, level: e.target.value })}
                        placeholder="e.g. 72 / TH16 / 240"
                        className="input-field"
                        style={{ width: '100%', fontSize: '0.9rem' }}
                        required
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                        Current Competitive Rank
                      </label>
                      <input
                        type="text"
                        value={formData.tier}
                        onChange={e => setFormData({ ...formData, tier: e.target.value })}
                        placeholder="e.g. Ace Dominator / Conqueror"
                        className="input-field"
                        style={{ width: '100%', fontSize: '0.9rem' }}
                      />
                    </div>
                  </div>

                  {/* Login Link Hierarchy */}
                  <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 600 }}>
                      Login Method & Social Unlinking Guarantee
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.65rem' }}>
                      {[
                        'Supercell ID (Clean)',
                        'Twitter / X Single Link',
                        'Fresh Dedicated Gmail',
                        'Facebook Unlinked',
                        'GameCenter Available'
                      ].map(method => (
                        <label 
                          key={method} 
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            fontSize: '0.82rem',
                            cursor: 'pointer',
                            color: formData.loginMethod === method ? 'var(--neon-cyan)' : 'var(--text-muted)',
                            border: '1px solid',
                            borderColor: formData.loginMethod === method ? 'var(--neon-cyan)' : 'var(--border-subtle)'
                          }}
                        >
                          <input 
                            type="radio" 
                            name="loginMethod" 
                            checked={formData.loginMethod === method}
                            onChange={() => setFormData({ ...formData, loginMethod: method })}
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Clean Mail / Instant Delivery Toggle */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(0, 240, 255, 0.04)', borderRadius: '10px', border: '1px solid rgba(0, 240, 255, 0.2)' }}>
                    <div>
                      <h4 style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 700, marginBottom: '2px' }}>
                        Includes Fresh Changeable Email ID?
                      </h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>
                        Accounts with full email ownership transfer sell 4x faster on GameXMarket.
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, canChangeEmail: 'yes' })}
                        style={{
                          padding: '6px 14px',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          background: formData.canChangeEmail === 'yes' ? 'var(--neon-emerald)' : 'rgba(255,255,255,0.05)',
                          color: formData.canChangeEmail === 'yes' ? '#000' : 'var(--text-muted)',
                          border: 'none'
                        }}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, canChangeEmail: 'no' })}
                        style={{
                          padding: '6px 14px',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          background: formData.canChangeEmail === 'no' ? 'var(--neon-red)' : 'rgba(255,255,255,0.05)',
                          color: formData.canChangeEmail === 'no' ? '#fff' : 'var(--text-muted)',
                          border: 'none'
                        }}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 3: KEY ASSETS & INVENTORY HIGHLIGHTS */}
              <div className="glass-card" style={{ padding: '1.75rem', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--neon-cyan)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>3</span>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700 }}>Key Assets & Inventory Highlights</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Dynamic Tag Creator */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                      Feature Badges & Rare Skins
                    </label>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                      <input
                        type="text"
                        value={featureTagInput}
                        onChange={e => setFeatureTagInput(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addTag(); } }}
                        placeholder="e.g. Glacier M4 Lv7, CWL Medals 1500, Shadow Scenery"
                        className="input-field"
                        style={{ flex: 1, fontSize: '0.85rem' }}
                      />
                      <button
                        type="button"
                        onClick={addTag}
                        className="btn btn-outline btn-sm"
                        style={{ padding: '0 1rem' }}
                      >
                        <Plus size={16} /> Add Tag
                      </button>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {tagsList.map(tag => (
                        <span 
                          key={tag}
                          style={{
                            background: 'rgba(0, 240, 255, 0.1)',
                            border: '1px solid rgba(0, 240, 255, 0.3)',
                            color: 'var(--neon-cyan)',
                            padding: '4px 10px',
                            borderRadius: '20px',
                            fontSize: '0.78rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', padding: 0 }}
                          >
                            ✕
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description Box */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                      Detailed Account Description & Verification Note
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={e => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe high-level weapons, heroes, sceneries, upgrade materials, and reason for selling..."
                      className="input-field"
                      style={{ width: '100%', fontSize: '0.85rem', resize: 'vertical' }}
                    />
                  </div>
                </div>
              </div>

              {/* STEP 4: SCREENSHOT UPLOAD & VERIFICATION VAULT */}
              <div className="glass-card" style={{ padding: '1.75rem', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--neon-cyan)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>4</span>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700 }}>Screenshot Upload & Verification Vault</h3>
                </div>

                <div style={{
                  border: '2px dashed var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.01)',
                  marginBottom: '1rem'
                }}>
                  <Upload size={38} color="var(--neon-cyan)" style={{ margin: '0 auto 0.75rem' }} />
                  <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>
                    Upload In-Game Screenshots (Lobby, Profile, Armory)
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', maxWidth: '420px', margin: '0 auto 1rem' }}>
                    Screenshots must clearly display player ID, level, and primary weapons. Images are automatically watermarked by GameX Escrow.
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
                    <button type="button" className="btn btn-outline btn-sm">
                      Select Files (JPG/PNG)
                    </button>
                  </div>
                </div>

                {/* Screenshot Thumbnails */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {formData.images.map((img, idx) => (
                    <div key={idx} style={{ position: 'relative', width: '110px', height: '70px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
                      <img src={img} alt="Proof" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <span style={{ position: 'absolute', bottom: '2px', left: '4px', fontSize: '0.65rem', color: '#fff', background: 'rgba(0,0,0,0.7)', padding: '1px 4px', borderRadius: '3px' }}>
                        Primary
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* STEP 5: PRICING & PAYOUT DESTINATION */}
              <div className="glass-card" style={{ padding: '1.75rem', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--neon-cyan)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>5</span>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700 }}>Pricing & Payout Destination</h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                      Account Price in ₹ INR *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '12px', top: '10px', fontSize: '1.1rem', color: 'var(--neon-cyan)', fontWeight: 800 }}>₹</span>
                      <input
                        type="number"
                        value={formData.price}
                        onChange={e => setFormData({ ...formData, price: e.target.value })}
                        placeholder="18500"
                        className="input-field"
                        style={{ paddingLeft: '2.4rem', fontSize: '1.1rem', fontWeight: 700, width: '100%' }}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                      Payout Destination (UPI ID / VPA) *
                    </label>
                    <input
                      type="text"
                      value={formData.upiId}
                      onChange={e => setFormData({ ...formData, upiId: e.target.value })}
                      placeholder="yourname@okhdfcbank"
                      className="input-field"
                      style={{ fontSize: '0.9rem', width: '100%' }}
                      required
                    />
                  </div>
                </div>

                {/* 95% Payout Breakdown Box (From Stitch Design) */}
                <div style={{ background: 'rgba(15, 19, 29, 0.9)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    <span>Listing Price:</span>
                    <span style={{ color: '#fff', fontWeight: 600 }}>₹{priceNum.toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    <span>GameX Escrow Fee (5%):</span>
                    <span style={{ color: 'var(--neon-red)' }}>- ₹{platformFee.toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', color: '#fff', fontWeight: 800, paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Zap size={16} color="var(--neon-emerald)" /> You Receive (95% via UPI):
                    </span>
                    <span className="inr-price" style={{ color: 'var(--neon-emerald)' }}>
                      ₹{sellerReceives.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => showToast('Listing draft saved to local browser cache.', 'info')}
                  className="btn btn-outline"
                >
                  <Save size={16} /> Save Draft
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewOpen(!previewOpen)}
                  className="btn btn-outline"
                >
                  <Eye size={16} /> {previewOpen ? 'Hide Preview' : 'Show Live Preview'}
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: '0.75rem 2rem', fontSize: '1rem', fontWeight: 700 }}
                >
                  Submit Listing to Escrow Admin <ArrowRight size={16} />
                </button>
              </div>

            </form>

            {/* Right Column: Live Card Preview + Safety Box */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Live Preview Card */}
              <div className="glass-card" style={{ padding: '1.25rem', borderRadius: '16px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '0.75rem', fontWeight: 700 }}>
                  Live Marketplace Preview
                </span>
                
                <div style={{ borderRadius: '12px', overflow: 'hidden', background: '#0e1322', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ position: 'relative', height: '140px' }}>
                    <img src={formData.images[0]} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span className="badge badge-cyan" style={{ position: 'absolute', top: '8px', left: '8px' }}>
                      {formData.game}
                    </span>
                    <span className="badge badge-purple" style={{ position: 'absolute', top: '8px', right: '8px' }}>
                      LVL {formData.level || '0'}
                    </span>
                  </div>

                  <div style={{ padding: '1rem' }}>
                    <h4 style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 700, lineHeight: 1.3, marginBottom: '6px' }}>
                      {formData.title || 'Your Account Title Here'}
                    </h4>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
                      {tagsList.slice(0, 2).map((t, i) => (
                        <span key={i} style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '4px', color: 'var(--text-muted)' }}>
                          • {t}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px solid var(--border-subtle)' }}>
                      <div>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', display: 'block' }}>Asking Price</span>
                        <span className="inr-price" style={{ fontSize: '1.25rem', color: 'var(--neon-cyan)', fontWeight: 800 }}>
                          ₹{priceNum.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                        Escrow Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* How GameX Protects Indian Sellers */}
              <div className="glass-card" style={{ padding: '1.25rem', borderRadius: '16px' }}>
                <h4 style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} color="var(--neon-cyan)" /> How We Protect Indian Sellers
                </h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(0,240,255,0.1)', color: 'var(--neon-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0 }}>1</div>
                    <div>
                      <h5 style={{ color: '#fff', fontSize: '0.82rem', fontWeight: 700, marginBottom: '2px' }}>Buyer Escrow Lock First</h5>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', margin: 0 }}>You only release passwords after GameX confirms 100% funds locked.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(0,240,255,0.1)', color: 'var(--neon-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0 }}>2</div>
                    <div>
                      <h5 style={{ color: '#fff', fontSize: '0.82rem', fontWeight: 700, marginBottom: '2px' }}>Anti-Chargeback Defense</h5>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', margin: 0 }}>Indian UPI / Net Banking prevents chargeback abuse seen on PayPal.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(0,240,255,0.1)', color: 'var(--neon-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0 }}>3</div>
                    <div>
                      <h5 style={{ color: '#fff', fontSize: '0.82rem', fontWeight: 700, marginBottom: '2px' }}>5-Minute UPI Payout</h5>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', margin: 0 }}>Direct IMPS / UPI transfer into your bank account with zero delay.</p>
                    </div>
                  </div>
                </div>
              </div>

            </aside>

          </div>
        )}

        {/* ===================== TAB 2: MY LISTINGS ===================== */}
        {activeTab === 'my-listings' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 700 }}>My Submitted Listings</h2>
            {pendingListings.length === 0 ? (
              <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', borderRadius: '16px' }}>
                <Gamepad2 size={42} color="var(--text-dim)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>No Listings Yet</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  You have not submitted any gaming account listings for review.
                </p>
                <button onClick={() => setActiveTab('create')} className="btn btn-primary">
                  Create First Listing
                </button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
                {pendingListings.map(listing => (
                  <div key={listing.id} className="glass-card" style={{ padding: '1.25rem', borderRadius: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span className="badge badge-amber">{listing.status.toUpperCase()}</span>
                      <span className="inr-price" style={{ color: 'var(--neon-cyan)', fontWeight: 800, fontSize: '1.2rem' }}>
                        ₹{listing.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>{listing.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '1rem' }}>Game: {listing.game}</p>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button className="btn btn-outline btn-sm" style={{ flex: 1 }}>Edit</button>
                      <button className="btn btn-outline btn-sm" style={{ color: 'var(--neon-red)', borderColor: 'rgba(255,0,85,0.3)' }}>Withdraw</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ===================== TAB 3: GUIDELINES & FAQS ===================== */}
        {activeTab === 'guidelines' && (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>
              Frequently Asked Questions by Indian Game Sellers
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  q: 'When do I release my account credentials to the buyer?',
                  a: 'Never give your login credentials in direct private messages before GameX confirms escrow funding. You will receive an official dashboard notification saying "Buyer Payment Vaulted". Only then proceed with handover.'
                },
                {
                  q: 'How fast do I receive my money via UPI?',
                  a: 'Once the buyer confirms login or the 24-hour inspection window expires without disputes, our automated payout system triggers an instant UPI transfer to your linked VPA within 5 minutes.'
                },
                {
                  q: 'What is GameX Marketplace commission fee?',
                  a: 'We charge a transparent flat 5% platform escrow fee on completed trades. If a buyer cancels before receiving credentials, you pay ₹0.'
                },
                {
                  q: 'Can I sell Clash of Clans Supercell ID or BGMI accounts?',
                  a: 'Yes, GameX caters to all major mobile games popular in India including BGMI, Free Fire MAX, Clash of Clans, and Call of Duty Mobile. Please note publisher terms of service before listing.'
                }
              ].map((faq, idx) => (
                <div 
                  key={idx}
                  className="glass-card"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{ padding: '1.25rem', borderRadius: '12px', cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ color: '#fff', fontSize: '0.98rem', fontWeight: 700, margin: 0 }}>{faq.q}</h4>
                    <ChevronDown size={18} color="var(--neon-cyan)" style={{ transform: activeFaq === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  </div>
                  {activeFaq === idx && (
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginTop: '0.75rem', marginBottom: 0 }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
