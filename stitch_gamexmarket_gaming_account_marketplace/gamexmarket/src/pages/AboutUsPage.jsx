import React from 'react';
import { 
  Gamepad2, 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  Users, 
  CheckCircle2, 
  Lock,
  ArrowRight
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export const AboutUsPage = () => {
  const { navigate } = useMarketplace();

  return (
    <div className="about-page page-wrapper" style={{ paddingTop: '3rem' }}>
      <div className="container">
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem' }}>
          <span className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
            Empowering Indian Gamers Since 2022
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            ABOUT <span style={{ color: 'var(--neon-cyan)' }}>GAMEXMARKET</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            GameXMarket was born to solve the single largest crisis in Indian mobile gaming: <strong>scams, identity theft, and money loss</strong> in peer-to-peer account trading on social media.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          
          <div className="glass-card" style={{ padding: '2.5rem', borderLeft: '4px solid var(--neon-cyan)' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(0, 242, 254, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Target size={26} color="var(--neon-cyan)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 800, marginBottom: '0.75rem' }}>
              OUR MISSION
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              To provide Indian esports enthusiasts and competitive players with a transparent, risk-free digital marketplace. We ensure that every rupee transacted through UPI, Cards, or Net Banking is locked in automated Escrow until both parties verify seamless account ownership.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem', borderLeft: '4px solid var(--neon-purple)' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Eye size={26} color="var(--neon-purple)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 800, marginBottom: '0.75rem' }}>
              OUR VISION
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              To become South Asia's gold standard gaming asset infrastructure. We bridge the gap between casual gamers upgrading their experience and veteran players monetizing years of hard-earned skins, Conqueror frames, and maxed Town Halls.
            </p>
          </div>

        </div>

        {/* Why GameXMarket Pillars */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="section-tag" style={{ justifyContent: 'center' }}>CORE PILLARS</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>TRUST, TRANSPARENCY & COMPLIANCE</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <ShieldCheck size={32} color="var(--neon-emerald)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>100% Escrow Protection</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                Payment is never sent to the seller until you change the password and bind your mobile number.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <Award size={32} color="var(--neon-cyan)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>KYC Verified Sellers</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                All high-tier sellers undergo identity verification and maintain positive feedback ratings.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <Lock size={32} color="var(--neon-purple)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Indian Rupee Native</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                No exchange rates, dollar conversion charges, or international credit card headaches. Pay with UPI.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <Users size={32} color="var(--neon-amber)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>24/7 Human Moderation</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                Active Hindi & English support agents supervising complex credential transfers on WhatsApp.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
          border: '1px solid var(--border-medium)',
          borderRadius: '20px',
          padding: '3rem 2rem',
          textAlign: 'center',
          maxWidth: '750px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: '1.8rem', color: '#fff', fontWeight: 800, marginBottom: '0.75rem' }}>
            BE PART OF INDIA'S LARGEST GAMING REVOLUTION
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
            Explore verified accounts for BGMI, Free Fire MAX, Clash of Clans, and CODM today.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('buy')} className="btn btn-primary">
              Explore Accounts
            </button>
            <button onClick={() => navigate('sell')} className="btn btn-outline">
              Sell Your Profile
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
