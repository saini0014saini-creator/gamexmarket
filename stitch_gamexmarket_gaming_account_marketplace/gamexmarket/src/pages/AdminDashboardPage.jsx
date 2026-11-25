import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Gamepad2, 
  ShoppingBag, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Settings, 
  Layers, 
  Eye, 
  Trash2, 
  Sliders, 
  Search,
  Check,
  RefreshCw
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { PLATFORM_STATS } from '../data/mockData';

export const AdminDashboardPage = () => {
  const { 
    pendingListings, 
    adminApproveListing, 
    adminRejectListing, 
    accounts, 
    orders, 
    navigate,
    showToast 
  } = useMarketplace();

  const [activeAdminTab, setActiveAdminTab] = useState('approvals');
  const [commissionRate, setCommissionRate] = useState(8);
  const [searchTerm, setSearchTerm] = useState('');

  const adminNavItems = [
    { id: 'approvals', label: 'Pending Approvals', badge: pendingListings.length },
    { id: 'listings', label: 'Manage All Listings', badge: accounts.length },
    { id: 'users', label: 'User & Seller Management' },
    { id: 'orders', label: 'Escrow Orders Audit', badge: orders.length },
    { id: 'commission', label: 'Commission & Fees' },
    { id: 'disputes', label: 'Disputes & Complaints' },
    { id: 'settings', label: 'Website Settings' }
  ];

  return (
    <div className="admin-page page-wrapper" style={{ paddingTop: '2rem' }}>
      <div className="container">
        
        {/* Admin Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '16px',
          padding: '1.5rem 2rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '4px' }}>
              <span className="badge badge-emerald">Master Administrator Access</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>• Indian Operations Console</span>
            </div>
            <h1 style={{ fontSize: '1.85rem', color: '#fff', fontWeight: 800, textTransform: 'uppercase' }}>
              GAMEXMARKET ADMIN OPERATIONS PANEL
            </h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Supervise gaming account listings, approve escrow releases, audit sellers, and manage compliance.
            </p>
          </div>

          <button onClick={() => navigate('home')} className="btn btn-outline btn-sm">
            Exit to Public Website →
          </button>
        </div>

        {/* Global Statistics Cards (All in ₹ INR) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2.5rem'
        }}>
          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Registered Indian Users</span>
            <h3 className="inr-price" style={{ fontSize: '1.6rem', color: '#fff', fontWeight: 800, margin: '4px 0' }}>
              {PLATFORM_STATS.totalUsers.toLocaleString('en-IN')}
            </h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--neon-emerald)' }}>+240 this week</span>
          </div>

          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Verified Sellers</span>
            <h3 className="inr-price" style={{ fontSize: '1.6rem', color: 'var(--neon-purple)', fontWeight: 800, margin: '4px 0' }}>
              {PLATFORM_STATS.verifiedSellers.toLocaleString('en-IN')}
            </h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>KYC Audited</span>
          </div>

          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Live Gaming Listings</span>
            <h3 className="inr-price" style={{ fontSize: '1.6rem', color: 'var(--neon-cyan)', fontWeight: 800, margin: '4px 0' }}>
              {accounts.length} Accounts
            </h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Across 4 Games</span>
          </div>

          <div className="glass-card" style={{ padding: '1.25rem', border: '1px solid rgba(245, 158, 11, 0.4)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--neon-amber)', textTransform: 'uppercase', fontWeight: 700 }}>Pending Approvals</span>
            <h3 className="inr-price" style={{ fontSize: '1.6rem', color: 'var(--neon-amber)', fontWeight: 800, margin: '4px 0' }}>
              {pendingListings.length}
            </h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--neon-amber)' }}>Requires Audit</span>
          </div>

          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Total Revenue (₹ INR)</span>
            <h3 className="inr-price" style={{ fontSize: '1.6rem', color: 'var(--neon-emerald)', fontWeight: 800, margin: '4px 0' }}>
              ₹{PLATFORM_STATS.totalRevenueINR.toLocaleString('en-IN')}
            </h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--neon-emerald)' }}>Post 8% Commission</span>
          </div>
        </div>

        {/* Admin Workspace Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2rem' }} className="admin-layout">
          
          {/* Admin Sidebar */}
          <aside>
            <div className="glass-card" style={{ padding: '1.25rem', borderRadius: '16px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.75rem' }}>
                Admin Operations
              </span>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {adminNavItems.map(item => {
                  const isActive = activeAdminTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveAdminTab(item.id)}
                      style={{
                        background: isActive ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                        color: isActive ? 'var(--neon-emerald)' : 'var(--text-muted)',
                        border: '1px solid',
                        borderColor: isActive ? 'rgba(16, 185, 129, 0.3)' : 'transparent',
                        borderRadius: '8px',
                        padding: '0.65rem 0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-gaming)',
                        fontSize: '0.98rem',
                        fontWeight: isActive ? 700 : 600,
                        textAlign: 'left'
                      }}
                    >
                      <span>{item.label}</span>
                      {item.badge !== undefined && (
                        <span className={`badge ${isActive ? 'badge-emerald' : 'badge-cyan'}`} style={{ fontSize: '0.68rem', padding: '1px 6px' }}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Admin Main Action Panels */}
          <main>
            
            {/* TAB: PENDING APPROVALS */}
            {activeAdminTab === 'approvals' && (
              <div className="glass-card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: '#fff', textTransform: 'uppercase' }}>
                      PENDING ACCOUNT LISTINGS QUEUE ({pendingListings.length})
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Inspect seller credentials, screenshots, and game levels before approving to the public marketplace.
                    </p>
                  </div>

                  <span className="badge badge-amber">Automated Anti-Scam Filter Passed</span>
                </div>

                {pendingListings.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '3.5rem 1rem' }}>
                    <CheckCircle2 size={48} color="var(--neon-emerald)" style={{ margin: '0 auto 1rem' }} />
                    <h4 style={{ color: '#fff', fontSize: '1.2rem' }}>All Listings Audited!</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                      There are no pending accounts waiting for admin review right now.
                    </p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {pendingListings.map(item => (
                      <div 
                        key={item.id}
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '12px',
                          padding: '1.5rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1rem'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                          <div>
                            <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                              <span className="badge badge-amber">{item.status}</span>
                              <span className="badge badge-cyan">{item.game}</span>
                              <span className="badge badge-purple">Level {item.level}</span>
                            </div>
                            <h4 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 700 }}>{item.title}</h4>
                            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                              Seller: <strong style={{ color: '#fff' }}>{item.sellerName}</strong> • Phone: <strong style={{ color: 'var(--neon-cyan)' }}>{item.sellerContact}</strong>
                            </p>
                          </div>

                          <div style={{ textAlign: 'right' }}>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Asking Price</span>
                            <span className="inr-price" style={{ display: 'block', fontSize: '1.6rem', color: 'var(--neon-cyan)', fontWeight: 800 }}>
                              ₹{Number(item.price).toLocaleString('en-IN')}
                            </span>
                            <span style={{ fontSize: '0.72rem', color: 'var(--neon-emerald)' }}>
                              Platform Share: ₹{Math.round(Number(item.price) * 0.08).toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>

                        {/* Specs & Notes */}
                        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.85rem', borderRadius: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                          <p><strong style={{ color: '#fff' }}>Features / Specs:</strong> {item.features || item.specs || 'Glacier M416, S19 Ace, Single Social'}</p>
                          <p style={{ marginTop: '4px' }}><strong style={{ color: '#fff' }}>Admin Safety Audit:</strong> Clean social link, no active 2FA recovery locks reported.</p>
                        </div>

                        {/* Approval / Rejection Actions */}
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                          <button
                            onClick={() => adminRejectListing(item.id, 'Account screenshot proof incomplete')}
                            className="btn btn-outline btn-sm"
                            style={{ borderColor: 'var(--neon-red)', color: 'var(--neon-red)' }}
                          >
                            <XCircle size={16} /> Reject Listing
                          </button>

                          <button
                            onClick={() => adminApproveListing(item.id)}
                            className="btn btn-emerald btn-sm"
                          >
                            <CheckCircle2 size={16} /> Approve & Publish (1-Click)
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB: MANAGE ALL LISTINGS */}
            {activeAdminTab === 'listings' && (
              <div className="glass-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
                  ACTIVE MARKETPLACE LISTINGS ({accounts.length})
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {accounts.map(acc => (
                    <div key={acc.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.9rem', borderBottom: '1px solid var(--border-subtle)' }}>
                      <div>
                        <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>{acc.game}</span>
                        <h4 style={{ fontSize: '0.95rem', color: '#fff', marginTop: '3px' }}>{acc.title}</h4>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Seller: {acc.seller.name} • Level {acc.level}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span className="inr-price" style={{ fontSize: '1.25rem', color: 'var(--neon-cyan)', fontWeight: 800 }}>
                          ₹{acc.price.toLocaleString('en-IN')}
                        </span>
                        <button 
                          onClick={() => {
                            showToast(`Account #${acc.id} unlisted from marketplace.`, 'info');
                          }}
                          className="btn btn-outline btn-sm" 
                          style={{ borderColor: 'var(--neon-red)', color: 'var(--neon-red)' }}
                        >
                          <Trash2 size={14} /> Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: COMMISSION & FEES */}
            {activeAdminTab === 'commission' && (
              <div className="glass-card" style={{ padding: '2rem', maxWidth: '650px' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1rem', textTransform: 'uppercase' }}>
                  PLATFORM COMMISSION & MONETIZATION
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                  Adjust the percentage fee deducted from sellers on successful account sales.
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#fff', fontWeight: 600 }}>Platform Commission Rate:</span>
                    <span style={{ color: 'var(--neon-emerald)', fontWeight: 800, fontSize: '1.2rem' }}>{commissionRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="3" 
                    max="15" 
                    value={commissionRate} 
                    onChange={e => setCommissionRate(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--neon-emerald)' }} 
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '4px' }}>
                    <span>Min: 3%</span>
                    <span>Current: {commissionRate}%</span>
                    <span>Max: 15%</span>
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Calculation Example for a ₹10,000 BGMI Account:</span>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', fontSize: '0.9rem' }}>
                    <span>Platform Commission ({commissionRate}%):</span>
                    <span style={{ color: 'var(--neon-emerald)', fontWeight: 700 }}>₹{(10000 * (commissionRate / 100)).toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px', fontSize: '0.9rem' }}>
                    <span>Seller Receives (₹):</span>
                    <span style={{ color: '#fff', fontWeight: 700 }}>₹{(10000 * (1 - commissionRate / 100)).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button 
                  onClick={() => showToast(`Platform commission rate updated to ${commissionRate}%.`, 'success')}
                  className="btn btn-emerald btn-sm"
                >
                  Save Commission Settings
                </button>
              </div>
            )}

            {/* TAB: USERS & SELLERS */}
            {activeAdminTab === 'users' && (
              <div className="glass-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
                  USER & SELLER AUDIT DIRECTORY
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {[
                    { name: 'Vikram "Godfather" Gaming', role: 'Verified Merchant', location: 'Pune, MH', rating: 4.96, sales: '420 sales', status: 'Active' },
                    { name: 'Rohan "ClashKing" Sharma', role: 'Super Elite Seller', location: 'Delhi NCR', rating: 4.98, sales: '680 sales', status: 'Active' },
                    { name: 'Aditya "Shadow" Roy', role: 'Verified Merchant', location: 'Kolkata, WB', rating: 4.88, sales: '215 sales', status: 'Active' },
                    { name: 'Rahul Sharma', role: 'Standard Buyer', location: 'Mumbai, MH', rating: 5.0, sales: '2 purchases', status: 'Active' }
                  ].map((usr, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem', borderBottom: '1px solid var(--border-subtle)' }}>
                      <div>
                        <h4 style={{ color: '#fff', fontSize: '0.95rem' }}>{usr.name}</h4>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{usr.role} • {usr.location} • {usr.sales}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <span className="badge badge-emerald">{usr.status}</span>
                        <button onClick={() => showToast(`Verified KYC check on ${usr.name}.`, 'info')} className="btn btn-outline btn-sm" style={{ padding: '2px 8px', fontSize: '0.75rem' }}>
                          Audit
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: DISPUTES */}
            {activeAdminTab === 'disputes' && (
              <div className="glass-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1rem', textTransform: 'uppercase' }}>
                  DISPUTES & REFUND MANAGEMENT
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  All buyers and sellers have 24 hours after credentials delivery to report an issue before funds release.
                </p>

                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span className="badge badge-cyan">Dispute #DSP-4019</span>
                    <h4 style={{ color: '#fff', fontSize: '0.95rem', marginTop: '4px' }}>CODM Activision Account Email Delay</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Buyer reported verification code took 10 minutes. Resolved by seller.</p>
                  </div>
                  <span className="badge badge-emerald">Resolved</span>
                </div>
              </div>
            )}

            {/* TAB: SETTINGS */}
            {activeAdminTab === 'settings' && (
              <div className="glass-card" style={{ padding: '2rem', maxWidth: '650px' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
                  GLOBAL MARKETPLACE SETTINGS
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked style={{ accentColor: 'var(--neon-emerald)' }} />
                    <span>Enforce 100% Escrow on all accounts above ₹500</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked style={{ accentColor: 'var(--neon-emerald)' }} />
                    <span>Require phone number OTP verification for all new sellers</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked style={{ accentColor: 'var(--neon-emerald)' }} />
                    <span>Display mandatory Indian game publisher policy disclosure</span>
                  </label>
                </div>
                <button onClick={() => showToast('Website configuration saved.', 'success')} className="btn btn-emerald btn-sm" style={{ marginTop: '1.5rem' }}>
                  Save Global Settings
                </button>
              </div>
            )}

          </main>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .admin-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
