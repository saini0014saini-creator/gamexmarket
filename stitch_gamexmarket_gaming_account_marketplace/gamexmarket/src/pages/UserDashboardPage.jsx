import React, { useState } from 'react';
import { 
  Layers, 
  User, 
  ShoppingBag, 
  Gamepad2, 
  Wallet, 
  Clock, 
  Heart, 
  Package, 
  Bell, 
  HelpCircle, 
  Settings, 
  LogOut, 
  TrendingUp, 
  ShieldCheck, 
  ArrowUpRight, 
  CheckCircle2,
  DollarSign,
  ChevronRight,
  Eye,
  Zap,
  Lock,
  ArrowRight,
  X,
  CreditCard,
  Building,
  Check,
  FileText,
  MessageSquare
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export const UserDashboardPage = () => {
  const { 
    currentUser, 
    walletBalance, 
    orders, 
    accounts, 
    wishlist, 
    transactions, 
    navigate, 
    setActiveOrderModal,
    showToast,
    withdrawMoney
  } = useMarketplace();

  const [activeTab, setActiveTab] = useState('orders'); // 'orders' | 'listings' | 'wallet' | 'kyc' | 'settings'
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('5000');
  const [upiVpa, setUpiVpa] = useState('vikram.rathore@okhdfcbank');

  // Stitch Mock Escrow Orders
  const stitchEscrowOrders = [
    {
      id: '#GX-8924',
      game: 'BGMI / PUBG',
      title: 'BGMI Conqueror Account • 7 Upgradable Guns • Glacier M416 Lv5',
      buyer: 'Rohan_M',
      buyerBadge: 'Aadhaar Verified Buyer',
      amount: 12500,
      escrowStatus: 'Escrow In-Vault',
      statusDetail: 'Buyer Inspecting (14h 22m left) • Auto-release upon timeout',
      statusColor: 'var(--neon-cyan)',
      action: 'Escrow Room',
      actionType: 'chat'
    },
    {
      id: '#GX-8911',
      game: 'Clash of Clans',
      title: 'COC TH16 Maxed Base • Supercell ID • 8,500 Gems • 6 Builders',
      buyer: 'Supercell_Deals',
      buyerBadge: 'Trusted Seller V3',
      amount: 7800,
      escrowStatus: 'Credentials Sent',
      statusDetail: 'Verify OTP • Waiting on Buyer Confirmation',
      statusColor: 'var(--neon-amber)',
      action: 'Confirm Receipt',
      actionType: 'confirm'
    },
    {
      id: '#GX-8890',
      game: 'Free Fire MAX',
      title: 'Free Fire Max Cobra MP40 • Evo Gun Lv7 • Old Elite Passes',
      buyer: 'Amit_K',
      buyerBadge: 'Order Settled',
      amount: 4500,
      fee: 225,
      net: 4275,
      escrowStatus: 'Released via UPI',
      statusDetail: 'Ref: UPI/402919481023 • Transferred to HDFC',
      statusColor: 'var(--neon-emerald)',
      action: 'Invoice',
      actionType: 'invoice'
    }
  ];

  const handleQuickWithdraw = (e) => {
    e.preventDefault();
    const num = Number(withdrawAmount);
    if (isNaN(num) || num <= 0) {
      showToast('Please enter a valid amount.', 'error');
      return;
    }
    if (num > walletBalance) {
      showToast('Insufficient wallet balance.', 'error');
      return;
    }
    withdrawMoney(num, `UPI: ${upiVpa}`);
    setShowWithdrawModal(false);
    showToast(`Instant payout of ₹${num.toLocaleString('en-IN')} initiated to ${upiVpa}!`, 'success');
  };

  return (
    <div className="dashboard-page page-wrapper" style={{ paddingTop: '2rem', minHeight: 'calc(100vh - 200px)' }}>
      <div className="container">
        
        {/* Main Grid: Left Nav Sidebar + Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2rem' }} className="dashboard-layout">
          
          {/* ===================== LEFT SIDEBAR ===================== */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
              
              {/* Mini Profile */}
              <div style={{ textAlign: 'center', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '1.25rem' }}>
                <div style={{ position: 'relative', width: '70px', height: '70px', margin: '0 auto 0.75rem' }}>
                  <img 
                    src={currentUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80'} 
                    alt={currentUser.name} 
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--neon-cyan)' }}
                  />
                  <div style={{ position: 'absolute', bottom: '0', right: '0', width: '18px', height: '18px', borderRadius: '50%', background: 'var(--neon-emerald)', border: '2px solid #0f131d' }}></div>
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 800 }}>Vikram Rathore</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Level 38 Merchant • Mumbai</p>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '8px' }}>
                  <span className="badge badge-cyan" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                    <ShieldCheck size={11} style={{ display: 'inline', marginRight: '2px' }} /> V4 Verified
                  </span>
                  <span className="badge badge-emerald" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                    Aadhaar KYC
                  </span>
                </div>
              </div>

              {/* Sidebar Links (From Stitch) */}
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  { id: 'orders', label: 'Escrow Orders', icon: Package, badge: 3 },
                  { id: 'listings', label: 'My Listings', icon: Layers, badge: 2 },
                  { id: 'wallet', label: 'Wallet & UPI', icon: Wallet },
                  { id: 'kyc', label: 'KYC Verification', icon: ShieldCheck },
                  { id: 'settings', label: 'Security Settings', icon: Settings }
                ].map(item => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        if (item.id === 'wallet') navigate('wallet');
                        else setActiveTab(item.id);
                      }}
                      style={{
                        background: isActive ? 'rgba(0, 240, 255, 0.12)' : 'transparent',
                        color: isActive ? 'var(--neon-cyan)' : 'var(--text-muted)',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '0.7rem 0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        fontSize: '0.92rem',
                        fontWeight: isActive ? 700 : 500,
                        textAlign: 'left',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Icon size={17} color={isActive ? 'var(--neon-cyan)' : 'var(--text-muted)'} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="badge badge-cyan" style={{ fontSize: '0.65rem', padding: '1px 6px' }}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}

                <button
                  onClick={() => navigate('marketplace')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-dim)',
                    padding: '0.7rem 0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    marginTop: '0.5rem'
                  }}
                >
                  <ArrowRight size={16} /> Return to Market
                </button>

                <button
                  onClick={() => {
                    showToast('Logged out of session.', 'info');
                    navigate('auth');
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--neon-red)',
                    padding: '0.7rem 0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    marginTop: '0.5rem',
                    borderTop: '1px solid var(--border-subtle)'
                  }}
                >
                  <LogOut size={16} /> Logout
                </button>
              </nav>

            </div>
          </aside>

          {/* ===================== MAIN CONTENT AREA ===================== */}
          <main style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            
            {/* Top User Escrow Strip Banner */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(22, 28, 42, 0.9) 0%, rgba(15, 19, 29, 0.9) 100%)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <h1 style={{ fontSize: '1.6rem', color: '#fff', fontWeight: 800 }}>Vikram Rathore</h1>
                  <span className="badge badge-cyan" style={{ fontSize: '0.72rem' }}>
                    100% Escrow Rating
                  </span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: 0 }}>
                  Active Escrow Session ID: #GX-AUTH-9042 • Aadhaar & UPI Linked
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => setShowWithdrawModal(true)}
                  className="btn btn-primary"
                  style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
                >
                  <Zap size={15} /> Instant UPI Payout
                </button>
                <button
                  onClick={() => navigate('sell')}
                  className="btn btn-outline"
                  style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
                >
                  <Gamepad2 size={15} /> Sell New Account
                </button>
              </div>
            </div>

            {/* 4 Master Metric Cards (From Stitch Design) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.25rem' }}>
              
              {/* Card 1: Available Wallet Balance */}
              <div className="glass-card" style={{ padding: '1.25rem', borderRadius: '14px', borderLeft: '4px solid var(--neon-emerald)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Available Wallet Balance
                </span>
                <div className="inr-price" style={{ fontSize: '1.8rem', color: 'var(--neon-emerald)', fontWeight: 800, margin: '6px 0' }}>
                  ₹{walletBalance.toLocaleString('en-IN')}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Linked to UPI</span>
                  <button 
                    onClick={() => setShowWithdrawModal(true)}
                    style={{ background: 'none', border: 'none', color: 'var(--neon-cyan)', fontWeight: 700, cursor: 'pointer' }}
                  >
                    Withdraw →
                  </button>
                </div>
              </div>

              {/* Card 2: Escrow Locked Vault */}
              <div className="glass-card" style={{ padding: '1.25rem', borderRadius: '14px', borderLeft: '4px solid var(--neon-cyan)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Escrow Vault (In Trade)
                </span>
                <div className="inr-price" style={{ fontSize: '1.8rem', color: 'var(--neon-cyan)', fontWeight: 800, margin: '6px 0' }}>
                  ₹16,499.00
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--neon-cyan)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Lock size={12} /> 3 Active Orders
                </div>
              </div>

              {/* Card 3: Lifetime Volume */}
              <div className="glass-card" style={{ padding: '1.25rem', borderRadius: '14px', borderLeft: '4px solid var(--neon-purple)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Lifetime Sales Volume
                </span>
                <div className="inr-price" style={{ fontSize: '1.8rem', color: 'var(--neon-purple)', fontWeight: 800, margin: '6px 0' }}>
                  ₹1,42,800
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  24 Accounts Sold
                </div>
              </div>

              {/* Card 4: Trust Score */}
              <div className="glass-card" style={{ padding: '1.25rem', borderRadius: '14px', borderLeft: '4px solid var(--neon-amber)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Merchant Trust Score
                </span>
                <div style={{ fontSize: '1.8rem', color: 'var(--neon-amber)', fontWeight: 800, margin: '6px 0' }}>
                  99.4%
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--neon-emerald)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <CheckCircle2 size={12} /> 0 Disputes Lost (58 Reviews)
                </div>
              </div>

            </div>

            {/* Middle Section: Active Escrow Transactions Table (From Stitch) */}
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700, margin: 0 }}>
                    Active Escrow Transactions
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: '3px 0 0' }}>
                    Real-time status of locked funds, OTP releases, and automated inspection timers.
                  </p>
                </div>
                <span className="badge badge-emerald" style={{ fontSize: '0.75rem' }}>
                  🛡️ Escrow Guard 24/7 Active
                </span>
              </div>

              {/* Orders Table */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)', textAlign: 'left', color: 'var(--text-dim)' }}>
                      <th style={{ padding: '10px 12px', fontWeight: 600 }}>Order & Game</th>
                      <th style={{ padding: '10px 12px', fontWeight: 600 }}>Counterparty</th>
                      <th style={{ padding: '10px 12px', fontWeight: 600 }}>Amount (₹)</th>
                      <th style={{ padding: '10px 12px', fontWeight: 600 }}>Escrow Status</th>
                      <th style={{ padding: '10px 12px', fontWeight: 600, textAlign: 'right' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stitchEscrowOrders.map((ord, idx) => (
                      <tr 
                        key={idx}
                        style={{
                          borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                          transition: 'background 0.2s'
                        }}
                      >
                        {/* Order & Game */}
                        <td style={{ padding: '14px 12px', verticalAlign: 'top' }}>
                          <span style={{ color: 'var(--neon-cyan)', fontWeight: 700, display: 'block', fontSize: '0.8rem' }}>
                            {ord.id} • {ord.game}
                          </span>
                          <span style={{ color: '#fff', fontWeight: 600, display: 'block', maxWidth: '320px', lineHeight: 1.4 }}>
                            {ord.title}
                          </span>
                        </td>

                        {/* Counterparty */}
                        <td style={{ padding: '14px 12px', verticalAlign: 'top' }}>
                          <strong style={{ color: '#fff', display: 'block' }}>{ord.buyer}</strong>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{ord.buyerBadge}</span>
                        </td>

                        {/* Amount */}
                        <td style={{ padding: '14px 12px', verticalAlign: 'top' }}>
                          <span className="inr-price" style={{ color: '#fff', fontWeight: 800, fontSize: '1rem', display: 'block' }}>
                            ₹{ord.amount.toLocaleString('en-IN')}
                          </span>
                          {ord.net && (
                            <span style={{ fontSize: '0.7rem', color: 'var(--neon-emerald)' }}>
                              Net: ₹{ord.net.toLocaleString('en-IN')}
                            </span>
                          )}
                        </td>

                        {/* Escrow Status */}
                        <td style={{ padding: '14px 12px', verticalAlign: 'top' }}>
                          <span style={{ color: ord.statusColor, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: ord.statusColor }}></span>
                            {ord.escrowStatus}
                          </span>
                          <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                            {ord.statusDetail}
                          </span>
                        </td>

                        {/* Actions */}
                        <td style={{ padding: '14px 12px', verticalAlign: 'top', textAlign: 'right' }}>
                          {ord.actionType === 'chat' && (
                            <button
                              onClick={() => showToast('Opening secure escrow chat room with Rohan_M...', 'info')}
                              className="btn btn-outline btn-sm"
                              style={{ padding: '4px 10px', fontSize: '0.78rem' }}
                            >
                              <MessageSquare size={13} /> Escrow Room
                            </button>
                          )}
                          {ord.actionType === 'confirm' && (
                            <button
                              onClick={() => showToast('Receipt confirmed! Buyer verification window closed.', 'success')}
                              className="btn btn-primary btn-sm"
                              style={{ padding: '4px 10px', fontSize: '0.78rem' }}
                            >
                              <Check size={13} /> Confirm Receipt
                            </button>
                          )}
                          {ord.actionType === 'invoice' && (
                            <button
                              onClick={() => showToast('Downloading GST/Escrow Settlement Invoice...', 'info')}
                              className="btn btn-outline btn-sm"
                              style={{ padding: '4px 10px', fontSize: '0.78rem' }}
                            >
                              <FileText size={13} /> Invoice
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom 2 Widgets: Instant UPI & KYC Status */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              
              {/* Widget 1: INR Wallet & Payouts */}
              <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Wallet size={18} color="var(--neon-cyan)" /> INR Wallet & Payouts
                  </h4>
                  <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                    Instant Payout Active
                  </span>
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: '12px', padding: '1rem', marginBottom: '1rem', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Linked Verified UPI VPA</div>
                  <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 700, fontFamily: 'monospace' }}>
                    vikram.rathore@okhdfcbank
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--neon-emerald)', marginTop: '4px', display: 'block' }}>
                    ✓ 5-Min UPI Transfer • 0% Transaction Fee
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => setShowWithdrawModal(true)}
                    className="btn btn-primary"
                    style={{ flex: 1, padding: '0.65rem', fontSize: '0.85rem' }}
                  >
                    <Zap size={14} /> Instant UPI Withdrawal
                  </button>
                  <button
                    onClick={() => navigate('wallet')}
                    className="btn btn-outline"
                    style={{ padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                  >
                    Ledger
                  </button>
                </div>
              </div>

              {/* Widget 2: Identity & KYC */}
              <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={18} color="var(--neon-emerald)" /> Identity & KYC Verification
                  </h4>
                  <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>
                    Level 3 KYC
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', padding: '8px 10px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Aadhaar Card (UIDAI):</span>
                    <span style={{ color: 'var(--neon-emerald)', fontWeight: 700 }}>Verified (•••• •••• 8291)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', padding: '8px 10px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>PAN Tax Status:</span>
                    <span style={{ color: 'var(--neon-emerald)', fontWeight: 700 }}>Verified (•••••721J)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', padding: '8px 10px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Daily Payout Limit:</span>
                    <span style={{ color: '#fff', fontWeight: 700 }}>₹2,00,000 / day</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', margin: 0 }}>
                  Government compliant under Indian IT Act and RBI digital escrow frameworks.
                </p>
              </div>

            </div>

          </main>

        </div>

      </div>

      {/* ===================== WITHDRAW MODAL ===================== */}
      {showWithdrawModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          <div className="glass-card" style={{ maxWidth: '440px', width: '100%', padding: '2rem', borderRadius: '16px', position: 'relative' }}>
            <button
              onClick={() => setShowWithdrawModal(false)}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>

            <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 800, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Zap size={20} color="var(--neon-emerald)" /> Instant UPI Withdrawal
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
              Funds will be directly credited to your Indian UPI VPA via IMPS within 5 minutes.
            </p>

            <form onSubmit={handleQuickWithdraw} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Amount in ₹ INR (Available: ₹{walletBalance.toLocaleString('en-IN')})
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '12px', top: '10px', fontSize: '1.1rem', color: 'var(--neon-cyan)', fontWeight: 800 }}>₹</span>
                  <input
                    type="number"
                    value={withdrawAmount}
                    onChange={e => setWithdrawAmount(e.target.value)}
                    max={walletBalance}
                    min={100}
                    className="input-field"
                    style={{ paddingLeft: '2.4rem', fontSize: '1.1rem', fontWeight: 700, width: '100%' }}
                    required
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Destination UPI ID / VPA
                </label>
                <input
                  type="text"
                  value={upiVpa}
                  onChange={e => setUpiVpa(e.target.value)}
                  className="input-field"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                  required
                />
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', padding: '0.75rem', fontSize: '0.78rem', color: 'var(--neon-emerald)' }}>
                ✓ Payout Fee: ₹0 (Zero Platform Withdrawal Fee)
              </div>

              <div style={{ display: 'flex', gap: '8px', marginTop: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setShowWithdrawModal(false)}
                  className="btn btn-outline"
                  style={{ flex: 1 }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  Confirm Payout
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
