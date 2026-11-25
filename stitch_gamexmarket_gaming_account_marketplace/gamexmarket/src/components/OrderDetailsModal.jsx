import React, { useState } from 'react';
import { X, ShieldCheck, Key, Eye, EyeOff, Copy, Check, AlertCircle, Download } from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export const OrderDetailsModal = () => {
  const { activeOrderModal, setActiveOrderModal, showToast } = useMarketplace();
  const [showPassword, setShowPassword] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  if (!activeOrderModal) return null;

  const order = activeOrderModal;

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    showToast(`Copied ${fieldName} to clipboard!`, 'info');
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="modal-overlay" onClick={() => setActiveOrderModal(null)}>
      <div 
        className="modal-content" 
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '600px', background: '#0c101e' }}
      >
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(255,255,255,0.02)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge badge-emerald">Order #{order.id}</span>
              <span className="badge badge-cyan">{order.orderStatus}</span>
            </div>
            <h3 style={{ fontSize: '1.15rem', color: '#fff', marginTop: '4px' }}>Gaming Account Credentials Vault</h3>
          </div>
          <button 
            onClick={() => setActiveOrderModal(null)}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Order Details Header Box */}
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
            <h4 style={{ color: '#fff', fontSize: '0.98rem', marginBottom: '4px' }}>{order.accountTitle}</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <span>Game: <strong style={{ color: '#fff' }}>{order.game}</strong></span>
              <span>Total Paid: <strong style={{ color: 'var(--neon-cyan)' }}>₹{order.amount.toLocaleString('en-IN')}</strong></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '4px' }}>
              <span>Order Date: {order.date}</span>
              <span>Payment: {order.paymentMethod}</span>
            </div>
          </div>

          {/* Credentials Display */}
          <div style={{ background: '#070a13', border: '1px solid var(--border-medium)', borderRadius: '10px', padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Key size={18} color="var(--neon-cyan)" />
              <h4 style={{ color: '#fff', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Account Login Credentials
              </h4>
            </div>

            {/* Login ID */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Login ID / Email / Username
              </label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input 
                  type="text" 
                  readOnly 
                  value={order.credentials?.loginId || 'supercell_id_9821@gmail.com'} 
                  className="input-field"
                  style={{ background: '#0e1424', color: 'var(--neon-cyan)', fontFamily: 'monospace' }}
                />
                <button 
                  onClick={() => handleCopy(order.credentials?.loginId || 'supercell_id_9821@gmail.com', 'Login ID')}
                  className="btn btn-outline btn-sm"
                  title="Copy Login ID"
                >
                  {copiedField === 'Login ID' ? <Check size={16} color="var(--neon-emerald)" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Password with Reveal */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Login Password
              </label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  readOnly 
                  value={order.credentials?.plainPassword || 'GamerXSecure2026#'} 
                  className="input-field"
                  style={{ background: '#0e1424', color: '#fff', fontFamily: 'monospace', letterSpacing: showPassword ? '0' : '2px' }}
                />
                <button 
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-outline btn-sm"
                  title={showPassword ? 'Hide Password' : 'Show Password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
                <button 
                  onClick={() => handleCopy(order.credentials?.plainPassword || 'GamerXSecure2026#', 'Password')}
                  className="btn btn-outline btn-sm"
                  title="Copy Password"
                >
                  {copiedField === 'Password' ? <Check size={16} color="var(--neon-emerald)" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* 2FA Backup Codes */}
            {order.credentials?.backupCodes && (
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  2FA Backup Security Codes
                </label>
                <input 
                  type="text" 
                  readOnly 
                  value={order.credentials.backupCodes} 
                  className="input-field"
                  style={{ background: '#0e1424', color: 'var(--neon-purple)', fontFamily: 'monospace' }}
                />
              </div>
            )}

            {/* Handover notes */}
            {order.credentials?.handoverNotes && (
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '6px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                <strong style={{ color: '#fff' }}>Seller Handover Instructions:</strong> {order.credentials.handoverNotes}
              </div>
            )}
          </div>

          {/* Security Checklist */}
          <div style={{
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            borderRadius: '8px',
            padding: '1rem'
          }}>
            <h5 style={{ color: 'var(--neon-emerald)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} /> Account Security Handover Checklist
            </h5>
            <ul style={{ fontSize: '0.76rem', color: 'var(--text-muted)', paddingLeft: '1.25rem', lineHeight: 1.5 }}>
              <li>Log in to the game using the provided credentials above.</li>
              <li>Immediately bind your own Indian mobile phone number and recovery email.</li>
              <li>Change the master password and activate two-factor authentication (2FA).</li>
              <li>Log out all active background sessions from previous devices.</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button 
              onClick={() => showToast('Dispute window is open. Support representative assigned on WhatsApp.', 'info')}
              style={{ background: 'none', border: 'none', color: 'var(--neon-red)', fontSize: '0.82rem', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Raise a Dispute / Report Issue
            </button>
            <button 
              onClick={() => setActiveOrderModal(null)}
              className="btn btn-primary btn-sm"
            >
              Done & Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
