import React, { useState } from 'react';
import { Send, X, ShieldCheck, MessageSquare } from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export const ContactSellerModal = () => {
  const { contactModal, setContactModal, showToast } = useMarketplace();
  const [message, setMessage] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');

  if (!contactModal.isOpen) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    showToast(`Message sent to ${contactModal.seller?.name || 'Seller'}! They will respond via WhatsApp/SMS.`, 'success');
    setMessage('');
    setBuyerPhone('');
    setContactModal({ isOpen: false, seller: null, account: null });
  };

  return (
    <div className="modal-overlay" onClick={() => setContactModal({ isOpen: false, seller: null, account: null })}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0, 242, 254, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MessageSquare size={20} color="var(--neon-cyan)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>Contact Seller</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Chat with {contactModal.seller?.name}</p>
            </div>
          </div>
          <button 
            onClick={() => setContactModal({ isOpen: false, seller: null, account: null })}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSend} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {contactModal.account && (
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.9rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--neon-cyan)', textTransform: 'uppercase', fontWeight: 700 }}>Inquiring About:</p>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {contactModal.account.title}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--neon-emerald)', fontWeight: 700, marginTop: '2px' }}>
                ₹{contactModal.account.price.toLocaleString('en-IN')}
              </p>
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
              Your WhatsApp / Mobile Number (+91)
            </label>
            <input 
              type="tel"
              className="input-field"
              placeholder="e.g. 98765 43210"
              value={buyerPhone}
              onChange={e => setBuyerPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
              Your Question or Offer
            </label>
            <textarea 
              className="input-field"
              rows={4}
              placeholder="Ask about login link methods, character inventory, rank, or request extra screenshots..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              style={{ resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16, 185, 129, 0.08)', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
            <ShieldCheck size={18} color="var(--neon-emerald)" />
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Always pay through <strong style={{ color: '#fff' }}>GameXMarket Escrow</strong>. Never send money directly on UPI outside the platform.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button 
              type="button" 
              className="btn btn-outline btn-sm"
              onClick={() => setContactModal({ isOpen: false, seller: null, account: null })}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary btn-sm">
              <Send size={16} /> Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
