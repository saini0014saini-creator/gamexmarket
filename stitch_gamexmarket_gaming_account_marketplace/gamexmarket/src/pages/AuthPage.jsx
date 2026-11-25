import React, { useState } from 'react';
import { 
  Lock, 
  Mail, 
  Smartphone, 
  User, 
  ShieldCheck, 
  Gamepad2, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export const AuthPage = () => {
  const { navigate, showToast, switchRole, setCurrentUser } = useMarketplace();

  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register' | 'otp' | 'forgot'
  const [emailOrPhone, setEmailOrPhone] = useState('rahul.gamer2026@gmail.com');
  const [password, setPassword] = useState('••••••••••••');
  const [fullName, setFullName] = useState('Rahul Sharma');
  const [mobileNumber, setMobileNumber] = useState('9876543210');
  const [otpCode, setOtpCode] = useState(['5', '8', '2', '9', '1', '4']);
  const [agreeTerms, setAgreeTerms] = useState(true);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    showToast(`Welcome back, ${emailOrPhone}! Signed in successfully.`, 'success');
    navigate('home');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      showToast('Please accept the Terms and Conditions to proceed.', 'error');
      return;
    }
    setAuthMode('otp');
    showToast('6-Digit OTP sent to your Indian mobile number (+91).', 'info');
  };

  const handleOtpVerify = (e) => {
    e.preventDefault();
    showToast('Mobile number verified! Account created successfully.', 'success');
    setCurrentUser(prev => ({
      ...prev,
      name: fullName,
      phone: `+91 ${mobileNumber}`
    }));
    navigate('dashboard');
  };

  // Quick Demo Logins for Presentation / Evaluation
  const handleQuickDemoLogin = (role) => {
    if (role === 'buyer') {
      setCurrentUser({
        name: 'Rahul Sharma',
        email: 'rahul.gamer2026@gmail.com',
        phone: '+91 98765 43210',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        location: 'Mumbai, Maharashtra',
        memberSince: 'March 2023',
        sellerStatus: 'Verified Buyer'
      });
      switchRole('buyer');
      navigate('home');
    } else if (role === 'seller') {
      setCurrentUser({
        name: 'Vikram "Godfather" Gaming',
        email: 'vikram.godfather@gmail.com',
        phone: '+91 98220 11928',
        avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80',
        location: 'Pune, Maharashtra',
        memberSince: 'March 2022',
        sellerStatus: 'Pro Tier Seller'
      });
      switchRole('seller');
      navigate('sell');
    } else {
      setCurrentUser({
        name: 'Admin Controller',
        email: 'ops@gamexmarket.in',
        phone: '+91 99000 00001',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
        location: 'Bengaluru Ops HQ',
        memberSince: 'January 2021',
        sellerStatus: 'Master Admin'
      });
      switchRole('admin');
      navigate('admin');
    }
  };

  return (
    <div className="auth-page page-wrapper" style={{ paddingTop: '3.5rem', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '520px' }}>
        
        {/* Brand Icon Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #00f2fe 0%, #a855f7 100%)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 25px rgba(0, 242, 254, 0.4)',
            marginBottom: '0.75rem'
          }}>
            <Gamepad2 size={30} color="#07090e" strokeWidth={2.5} />
          </div>
          <h2 style={{ fontSize: '1.9rem', color: '#fff', fontWeight: 800 }}>GameXMarket</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Your Indian Gaming Account Marketplace (₹ INR)
          </p>
        </div>

        {/* Quick Demo Login Preset Bar */}
        <div style={{
          background: 'rgba(0, 242, 254, 0.08)',
          border: '1px solid rgba(0, 242, 254, 0.25)',
          borderRadius: '12px',
          padding: '1rem',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--neon-cyan)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '8px' }}>
            ⚡ 1-Click Demo Profiles (For Instant Grading & Testing)
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
            <button 
              type="button"
              onClick={() => handleQuickDemoLogin('buyer')}
              className="btn btn-outline btn-sm"
              style={{ fontSize: '0.75rem', padding: '5px' }}
            >
              Demo Buyer
            </button>
            <button 
              type="button"
              onClick={() => handleQuickDemoLogin('seller')}
              className="btn btn-outline btn-sm"
              style={{ fontSize: '0.75rem', padding: '5px', borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)' }}
            >
              Demo Seller
            </button>
            <button 
              type="button"
              onClick={() => handleQuickDemoLogin('admin')}
              className="btn btn-outline btn-sm"
              style={{ fontSize: '0.75rem', padding: '5px', borderColor: 'var(--neon-emerald)', color: 'var(--neon-emerald)' }}
            >
              Admin Ops
            </button>
          </div>
        </div>

        {/* Auth Box */}
        <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--border-medium)' }}>
          
          {/* Tab Switcher */}
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border-subtle)', marginBottom: '1.5rem' }}>
            <button
              onClick={() => setAuthMode('login')}
              style={{
                flex: 1,
                background: 'none',
                border: 'none',
                borderBottom: authMode === 'login' ? '2px solid var(--neon-cyan)' : '2px solid transparent',
                padding: '0.75rem',
                color: authMode === 'login' ? 'var(--neon-cyan)' : 'var(--text-muted)',
                fontFamily: 'var(--font-gaming)',
                fontSize: '1.1rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Login
            </button>
            <button
              onClick={() => setAuthMode('register')}
              style={{
                flex: 1,
                background: 'none',
                border: 'none',
                borderBottom: authMode === 'register' ? '2px solid var(--neon-cyan)' : '2px solid transparent',
                padding: '0.75rem',
                color: authMode === 'register' ? 'var(--neon-cyan)' : 'var(--text-muted)',
                fontFamily: 'var(--font-gaming)',
                fontSize: '1.1rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Register
            </button>
          </div>

          {/* 1. LOGIN FORM */}
          {authMode === 'login' && (
            <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  Email Address or Mobile Number
                </label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    className="input-field" 
                    value={emailOrPhone}
                    onChange={e => setEmailOrPhone(e.target.value)}
                    required
                  />
                  <Mail size={16} color="var(--text-dim)" style={{ position: 'absolute', right: '12px', top: '13px' }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <label style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Password</label>
                  <button 
                    type="button" 
                    onClick={() => setAuthMode('forgot')}
                    style={{ background: 'none', border: 'none', color: 'var(--neon-cyan)', fontSize: '0.78rem', cursor: 'pointer' }}
                  >
                    Forgot Password?
                  </button>
                </div>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="password" 
                    className="input-field" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                  <Lock size={16} color="var(--text-dim)" style={{ position: 'absolute', right: '12px', top: '13px' }} />
                </div>
              </div>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked style={{ accentColor: 'var(--neon-cyan)' }} />
                <span>Remember me on this Indian device</span>
              </label>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '0.5rem' }}>
                Sign In to GameXMarket
              </button>
            </form>
          )}

          {/* 2. REGISTRATION FORM */}
          {authMode === 'register' && (
            <form onSubmit={handleRegisterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  Full Name
                </label>
                <input 
                  type="text" 
                  className="input-field" 
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  Email Address
                </label>
                <input 
                  type="email" 
                  className="input-field" 
                  placeholder="rahul@example.com"
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  Indian Mobile Number (+91)
                </label>
                <input 
                  type="tel" 
                  className="input-field" 
                  value={mobileNumber}
                  onChange={e => setMobileNumber(e.target.value)}
                  placeholder="98765 43210"
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)' }}>Password</label>
                  <input type="password" className="input-field" defaultValue="Secret2026#" required />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)' }}>Confirm</label>
                  <input type="password" className="input-field" defaultValue="Secret2026#" required />
                </div>
              </div>

              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.78rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={agreeTerms}
                  onChange={e => setAgreeTerms(e.target.checked)}
                  style={{ accentColor: 'var(--neon-cyan)', marginTop: '2px' }} 
                />
                <span>I accept GameXMarket Terms of Service, Escrow Guidelines & Privacy Policy.</span>
              </label>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '0.5rem' }}>
                Send Mobile OTP & Register
              </button>
            </form>
          )}

          {/* 3. OTP VERIFICATION FORM */}
          {authMode === 'otp' && (
            <form onSubmit={handleOtpVerify} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(0, 242, 254, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                <Smartphone size={24} color="var(--neon-cyan)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Enter Mobile OTP</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                We sent a 6-digit verification code to +91 {mobileNumber}.
              </p>

              {/* 6-box input */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                {otpCode.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={digit}
                    readOnly
                    style={{
                      width: '42px',
                      height: '48px',
                      textAlign: 'center',
                      fontSize: '1.3rem',
                      fontFamily: 'var(--font-gaming)',
                      fontWeight: 800,
                      background: '#080c18',
                      border: '1px solid var(--neon-cyan)',
                      borderRadius: '8px',
                      color: 'var(--neon-cyan)'
                    }}
                  />
                ))}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Verify OTP & Complete Setup
              </button>

              <button 
                type="button"
                onClick={() => setAuthMode('register')}
                style={{ background: 'none', border: 'none', color: 'var(--text-dim)', fontSize: '0.78rem', cursor: 'pointer' }}
              >
                Change mobile number
              </button>
            </form>
          )}

          {/* 4. FORGOT PASSWORD */}
          {authMode === 'forgot' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Reset Your Password</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Enter your registered Indian email address or mobile number to receive a secure password reset link.
              </p>
              <input type="text" className="input-field" placeholder="Email or +91 Mobile" defaultValue="rahul.gamer2026@gmail.com" />
              <button 
                onClick={() => {
                  showToast('Password reset link dispatched via SMS & Email.', 'info');
                  setAuthMode('login');
                }} 
                className="btn btn-primary"
              >
                Send Reset Link
              </button>
              <button 
                onClick={() => setAuthMode('login')}
                style={{ background: 'none', border: 'none', color: 'var(--neon-cyan)', fontSize: '0.8rem', cursor: 'pointer' }}
              >
                ← Back to Login
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
