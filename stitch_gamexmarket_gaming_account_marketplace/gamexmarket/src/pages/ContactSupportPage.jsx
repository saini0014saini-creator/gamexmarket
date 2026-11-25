import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  ShieldAlert, 
  Send, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { FAQS } from '../data/mockData';

export const ContactSupportPage = () => {
  const { showToast } = useMarketplace();
  const [formData, setFormData] = useState({
    name: 'Rahul Sharma',
    email: 'rahul.gamer2026@gmail.com',
    phone: '+91 98765 43210',
    subject: 'Escrow Account Handover Query',
    category: 'Escrow & Payments',
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Support ticket #TKT-' + Math.floor(1000 + Math.random() * 9000) + ' created! An Indian support specialist will reach out on WhatsApp within 15 minutes.', 'success');
    setFormData(prev => ({ ...prev, message: '' }));
  };

  return (
    <div className="contact-page page-wrapper" style={{ paddingTop: '2.5rem' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
          <span className="badge badge-cyan" style={{ marginBottom: '0.5rem' }}>
            24/7 Gamer Support Desk
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#fff', textTransform: 'uppercase' }}>
            CONTACT US & CUSTOMER SUPPORT
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Need help with an account transfer, escrow status, or seller dispute? Our dedicated Indian gaming support team is active 24/7.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
          
          {/* WhatsApp Support */}
          <div className="glass-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <Phone size={24} color="var(--neon-emerald)" />
            </div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>WhatsApp Instant Support</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '0.75rem' }}>Instant chat for fast credential handovers</p>
            <span style={{ color: 'var(--neon-emerald)', fontWeight: 800, fontSize: '1rem', display: 'block' }}>+91 98765 43210</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>Avg response: under 5 minutes</span>
          </div>

          {/* Email Support */}
          <div className="glass-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0, 242, 254, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <Mail size={24} color="var(--neon-cyan)" />
            </div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>Official Support Email</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '0.75rem' }}>For formal disputes, KYC & partnerships</p>
            <span style={{ color: 'var(--neon-cyan)', fontWeight: 800, fontSize: '0.95rem', display: 'block' }}>support@gamexmarket.in</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>Replies within 2 hours</span>
          </div>

          {/* Discord / Telegram Community */}
          <div className="glass-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <MessageSquare size={24} color="var(--neon-purple)" />
            </div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>Telegram & Discord</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '0.75rem' }}>Live trade alerts & community discussions</p>
            <span style={{ color: 'var(--neon-purple)', fontWeight: 800, fontSize: '0.95rem', display: 'block' }}>@GameXMarketIndia</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>25,000+ members</span>
          </div>

          {/* Emergency Escalation */}
          <div className="glass-card" style={{ padding: '1.75rem', textAlign: 'center', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <ShieldAlert size={24} color="var(--neon-red)" />
            </div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>Escrow Fraud Freeze</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '0.75rem' }}>Instant funds freeze if seller alters login</p>
            <span style={{ color: 'var(--neon-red)', fontWeight: 800, fontSize: '0.95rem', display: 'block' }}>disputes@gamexmarket.in</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>Immediate Moderator Intervention</span>
          </div>

        </div>

        {/* Form and FAQ Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '2.5rem' }} className="contact-layout">
          
          {/* Support Ticket Form */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
              SEND A MESSAGE TO SUPPORT
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>Your Name</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    value={formData.name} 
                    onChange={e => setFormData({ ...formData, name: e.target.value })} 
                    required 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>WhatsApp / Mobile (+91)</label>
                  <input 
                    type="tel" 
                    className="input-field" 
                    value={formData.phone} 
                    onChange={e => setFormData({ ...formData, phone: e.target.value })} 
                    required 
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>Email Address</label>
                  <input 
                    type="email" 
                    className="input-field" 
                    value={formData.email} 
                    onChange={e => setFormData({ ...formData, email: e.target.value })} 
                    required 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>Issue Category</label>
                  <select 
                    className="input-field"
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Escrow & Payments">Escrow & Indian Payments (UPI/Cards)</option>
                    <option value="Account Credentials Handover">Account Credentials Handover</option>
                    <option value="Seller Payout Withdrawal">Seller Payout Withdrawal</option>
                    <option value="Dispute / Refund Request">Dispute / Refund Request</option>
                    <option value="Seller Listing Approval">Seller Listing Approval</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>Subject</label>
                <input 
                  type="text" 
                  className="input-field" 
                  value={formData.subject} 
                  onChange={e => setFormData({ ...formData, subject: e.target.value })} 
                  required 
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>Detailed Message / Order ID</label>
                <textarea 
                  className="input-field" 
                  rows={5}
                  placeholder="Provide your Order ID (e.g. #GXM-89421) and explain what assistance you need..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <Send size={18} /> Submit Support Request
              </button>
            </form>
          </div>

          {/* FAQ Accordion Side */}
          <div>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
                COMMON QUESTIONS
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {FAQS.slice(0, 4).map((f, i) => {
                  const isOpen = activeFaq === i;
                  return (
                    <div key={i} style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                      <button
                        onClick={() => setActiveFaq(isOpen ? -1 : i)}
                        style={{
                          width: '100%',
                          background: 'none',
                          border: 'none',
                          textAlign: 'left',
                          display: 'flex',
                          justifyContent: 'space-between',
                          color: '#fff',
                          fontWeight: 600,
                          fontSize: '0.92rem',
                          cursor: 'pointer',
                          padding: '4px 0'
                        }}
                      >
                        <span>{f.q}</span>
                        {isOpen ? <ChevronUp size={16} color="var(--neon-cyan)" /> : <ChevronDown size={16} color="var(--text-muted)" />}
                      </button>

                      {isOpen && (
                        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, marginTop: '6px' }}>
                          {f.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
