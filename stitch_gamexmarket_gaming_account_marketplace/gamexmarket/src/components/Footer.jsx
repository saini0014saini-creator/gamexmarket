import React from 'react';
import { 
  Gamepad2, 
  ShieldCheck, 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Award,
  ArrowRight,
  Lock
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export const Footer = () => {
  const { navigate } = useMarketplace();

  return (
    <footer style={{ 
      background: '#06080d', 
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: '4rem',
      paddingBottom: '2rem',
      position: 'relative'
    }}>
      {/* Glow decorative strip */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '20%',
        right: '20%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--neon-cyan), var(--neon-purple), transparent)'
      }} />

      <div className="container">
        {/* Top Feature Highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: '3rem'
        }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 242, 254, 0.1)', border: '1px solid rgba(0, 242, 254, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={24} color="var(--neon-cyan)" />
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700 }}>100% Escrow Protection</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>Funds held safely until login transfer verified</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={24} color="var(--neon-emerald)" />
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700 }}>Instant UPI & GPay</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>Zero-friction Indian payments & fast payouts</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Award size={24} color="var(--neon-purple)" />
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700 }}>Verified Indian Sellers</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>Every high-tier account manually audited</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Phone size={24} color="var(--neon-amber)" />
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700 }}>24/7 WhatsApp Support</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>Instant dispute assistance for buyers & sellers</p>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #00f2fe 0%, #a855f7 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Gamepad2 size={20} color="#07090e" strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: 'var(--font-gaming)', fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>
                Game<span style={{ color: 'var(--neon-cyan)' }}>X</span>Market
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              India's premier digital gaming account marketplace. Buy and sell verified accounts for BGMI, Free Fire, Clash of Clans, and CODM with guaranteed escrow security in Indian Rupees (₹).
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="#discord" onClick={e => e.preventDefault()} className="badge badge-purple" style={{ textDecoration: 'none', padding: '6px 12px' }}>Discord</a>
              <a href="#telegram" onClick={e => e.preventDefault()} className="badge badge-cyan" style={{ textDecoration: 'none', padding: '6px 12px' }}>Telegram</a>
              <a href="#youtube" onClick={e => e.preventDefault()} className="badge badge-red" style={{ textDecoration: 'none', padding: '6px 12px' }}>YouTube</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.25rem', fontFamily: 'var(--font-gaming)', letterSpacing: '1px' }}>
              QUICK NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
              <li>
                <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', textAlign: 'left' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate('buy')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', textAlign: 'left' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  Buy Gaming Accounts
                </button>
              </li>
              <li>
                <button onClick={() => navigate('sell')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', textAlign: 'left' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  Sell Your Account
                </button>
              </li>
              <li>
                <button onClick={() => navigate('dashboard')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', textAlign: 'left' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  User Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => navigate('wallet')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', textAlign: 'left' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  Wallet & Indian Payments
                </button>
              </li>
              <li>
                <button onClick={() => navigate('admin')} style={{ background: 'none', border: 'none', color: 'var(--neon-emerald)', cursor: 'pointer', textAlign: 'left', fontWeight: 600 }}>
                  Admin Operations Panel
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Games */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.25rem', fontFamily: 'var(--font-gaming)', letterSpacing: '1px' }}>
              POPULAR GAMES
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
              <li>
                <button onClick={() => navigate('buy', { filterGame: 'bgmi' })} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', textAlign: 'left' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  PUBG Mobile / BGMI Accounts
                </button>
              </li>
              <li>
                <button onClick={() => navigate('buy', { filterGame: 'freefire' })} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', textAlign: 'left' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  Free Fire MAX Accounts
                </button>
              </li>
              <li>
                <button onClick={() => navigate('buy', { filterGame: 'coc' })} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', textAlign: 'left' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  Clash of Clans TH16 / TH15
                </button>
              </li>
              <li>
                <button onClick={() => navigate('buy', { filterGame: 'codm' })} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', textAlign: 'left' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  Call of Duty Mobile Mythics
                </button>
              </li>
              <li>
                <button onClick={() => navigate('buy')} style={{ background: 'none', border: 'none', color: 'var(--neon-cyan)', cursor: 'pointer', textAlign: 'left' }}>
                  Explore All Categories →
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.25rem', fontFamily: 'var(--font-gaming)', letterSpacing: '1px' }}>
              LEGAL & POLICIES
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
              <li>
                <button onClick={() => navigate('legal', { legalTab: 'terms' })} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', textAlign: 'left' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => navigate('legal', { legalTab: 'privacy' })} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', textAlign: 'left' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigate('legal', { legalTab: 'refund' })} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', textAlign: 'left' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  Refund & Cancellation Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigate('legal', { legalTab: 'seller-guidelines' })} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', textAlign: 'left' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-cyan)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  Seller Guidelines
                </button>
              </li>
              <li>
                <button onClick={() => navigate('legal', { legalTab: 'disclaimer' })} style={{ background: 'none', border: 'none', color: 'var(--neon-amber)', cursor: 'pointer', textAlign: 'left', fontWeight: 600 }}>
                  Game Publisher Disclaimer
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Indian Payment Methods Banner */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          padding: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>
              ACCEPTED INDIAN PAYMENT METHODS (₹ INR ONLY)
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              100% Secure 256-Bit SSL Encrypted Escrow Gateway
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
            <div className="badge badge-cyan" style={{ padding: '6px 10px', fontSize: '0.8rem' }}>UPI</div>
            <div className="badge badge-emerald" style={{ padding: '6px 10px', fontSize: '0.8rem' }}>Google Pay</div>
            <div className="badge badge-purple" style={{ padding: '6px 10px', fontSize: '0.8rem' }}>PhonePe</div>
            <div className="badge badge-cyan" style={{ padding: '6px 10px', fontSize: '0.8rem' }}>Paytm</div>
            <div className="badge badge-amber" style={{ padding: '6px 10px', fontSize: '0.8rem' }}>RuPay / Cards</div>
            <div className="badge badge-emerald" style={{ padding: '6px 10px', fontSize: '0.8rem' }}>Net Banking</div>
          </div>
        </div>

        {/* Publisher Notice & Copyright */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          fontSize: '0.78rem',
          color: 'var(--text-dim)',
          textAlign: 'center'
        }}>
          <p>
            <strong style={{ color: 'var(--text-muted)' }}>Notice on Game Publishers:</strong> GameXMarket is an independent intermediary gaming marketplace. All game titles, trademarks, and logos (Clash of Clans, Supercell, Free Fire, Garena, PUBG Mobile, BGMI, Krafton, Call of Duty Mobile, Activision) belong to their respective copyright owners. Game publishers' Terms of Service may restrict account trading. Users are advised to review relevant publisher policies prior to trading.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span>© 2026 GameXMarket India Inc. All rights reserved. Built for Indian Gamers with ❤️ and ₹ INR.</span>
            <span>Server Time: 2026-11-21 13:00 IST | System Status: All Escrow Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
