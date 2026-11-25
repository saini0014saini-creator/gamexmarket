import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  QrCode, 
  Smartphone, 
  Wallet, 
  CreditCard, 
  Building2, 
  Coins, 
  CheckCircle2, 
  Lock, 
  AlertTriangle 
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export const CheckoutModal = () => {
  const { checkoutModal, closeCheckout, completePurchase, walletBalance, showToast } = useMarketplace();
  const [selectedMethod, setSelectedMethod] = useState('upi');
  const [upiId, setUpiId] = useState('user@oksbi');
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 9821');
  const [isProcessing, setIsProcessing] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);

  if (!checkoutModal.isOpen || !checkoutModal.account) return null;

  const account = checkoutModal.account;
  const platformFee = 0; // Free for buyer
  const totalAmount = account.price + platformFee;

  const handlePay = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      showToast('Please accept the Escrow Security Terms to continue.', 'error');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      completePurchase(account, selectedMethod, { upiId, cardNumber });
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={closeCheckout}>
      <div 
        className="modal-content" 
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '640px', background: '#0a0d18' }}
      >
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'rgba(0, 242, 254, 0.1)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Lock size={18} color="var(--neon-cyan)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 800 }}>GameXMarket Escrow Checkout</h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Secure Indian Gateway • 100% Buyer Protection</p>
            </div>
          </div>
          <button 
            onClick={closeCheckout}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Prototype Safe Notice */}
        <div style={{
          background: 'rgba(245, 158, 11, 0.08)',
          borderBottom: '1px solid rgba(245, 158, 11, 0.2)',
          padding: '0.65rem 1.5rem',
          fontSize: '0.76rem',
          color: 'var(--neon-amber)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <AlertTriangle size={15} />
          <span>Interactive Prototype: Simulated Indian Gateway. No real bank debits will occur during this demo.</span>
        </div>

        {/* Content Body */}
        <form onSubmit={handlePay} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Order Item Summary */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            padding: '1rem',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center'
          }}>
            <img 
              src={account.images[0]} 
              alt={account.title} 
              style={{ width: '70px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} 
            />
            <div style={{ flex: 1 }}>
              <span className="badge badge-cyan" style={{ fontSize: '0.68rem', marginBottom: '4px' }}>
                {account.game}
              </span>
              <h4 style={{ fontSize: '0.92rem', color: '#fff', fontWeight: 600, lineHeight: 1.3 }}>
                {account.title}
              </h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Seller: {account.seller.name} (★ {account.seller.rating})
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="inr-price" style={{ fontSize: '1.35rem', color: 'var(--neon-cyan)', fontWeight: 800 }}>
                ₹{account.price.toLocaleString('en-IN')}
              </span>
              <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--neon-emerald)' }}>
                Free Escrow
              </span>
            </div>
          </div>

          {/* Select Payment Method */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Select Indian Payment Method (₹ INR)
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.65rem' }}>
              
              {/* UPI */}
              <div 
                onClick={() => setSelectedMethod('upi')}
                style={{
                  background: selectedMethod === 'upi' ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255,255,255,0.03)',
                  border: '1px solid',
                  borderColor: selectedMethod === 'upi' ? 'var(--neon-cyan)' : 'var(--border-subtle)',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s'
                }}
              >
                <QrCode size={20} color={selectedMethod === 'upi' ? 'var(--neon-cyan)' : 'var(--text-muted)'} style={{ margin: '0 auto 4px' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fff', display: 'block' }}>UPI QR / ID</span>
                <span style={{ fontSize: '0.68rem', color: 'var(--neon-emerald)' }}>0% Surcharge</span>
              </div>

              {/* Google Pay */}
              <div 
                onClick={() => setSelectedMethod('gpay')}
                style={{
                  background: selectedMethod === 'gpay' ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255,255,255,0.03)',
                  border: '1px solid',
                  borderColor: selectedMethod === 'gpay' ? 'var(--neon-cyan)' : 'var(--border-subtle)',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s'
                }}
              >
                <Smartphone size={20} color={selectedMethod === 'gpay' ? 'var(--neon-cyan)' : 'var(--text-muted)'} style={{ margin: '0 auto 4px' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fff', display: 'block' }}>Google Pay</span>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Fast App Pay</span>
              </div>

              {/* PhonePe */}
              <div 
                onClick={() => setSelectedMethod('phonepe')}
                style={{
                  background: selectedMethod === 'phonepe' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(255,255,255,0.03)',
                  border: '1px solid',
                  borderColor: selectedMethod === 'phonepe' ? 'var(--neon-purple)' : 'var(--border-subtle)',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s'
                }}
              >
                <Smartphone size={20} color={selectedMethod === 'phonepe' ? 'var(--neon-purple)' : 'var(--text-muted)'} style={{ margin: '0 auto 4px' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fff', display: 'block' }}>PhonePe</span>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Instant</span>
              </div>

              {/* Paytm */}
              <div 
                onClick={() => setSelectedMethod('paytm')}
                style={{
                  background: selectedMethod === 'paytm' ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255,255,255,0.03)',
                  border: '1px solid',
                  borderColor: selectedMethod === 'paytm' ? 'var(--neon-cyan)' : 'var(--border-subtle)',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s'
                }}
              >
                <Wallet size={20} color={selectedMethod === 'paytm' ? 'var(--neon-cyan)' : 'var(--text-muted)'} style={{ margin: '0 auto 4px' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fff', display: 'block' }}>Paytm</span>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Wallet / UPI</span>
              </div>

              {/* RuPay / Cards */}
              <div 
                onClick={() => setSelectedMethod('cards')}
                style={{
                  background: selectedMethod === 'cards' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255,255,255,0.03)',
                  border: '1px solid',
                  borderColor: selectedMethod === 'cards' ? 'var(--neon-amber)' : 'var(--border-subtle)',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s'
                }}
              >
                <CreditCard size={20} color={selectedMethod === 'cards' ? 'var(--neon-amber)' : 'var(--text-muted)'} style={{ margin: '0 auto 4px' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fff', display: 'block' }}>RuPay / Cards</span>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Debit/Credit</span>
              </div>

              {/* Wallet Balance */}
              <div 
                onClick={() => setSelectedMethod('wallet')}
                style={{
                  background: selectedMethod === 'wallet' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255,255,255,0.03)',
                  border: '1px solid',
                  borderColor: selectedMethod === 'wallet' ? 'var(--neon-emerald)' : 'var(--border-subtle)',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s'
                }}
              >
                <Coins size={20} color={selectedMethod === 'wallet' ? 'var(--neon-emerald)' : 'var(--text-muted)'} style={{ margin: '0 auto 4px' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fff', display: 'block' }}>GXM Wallet</span>
                <span style={{ fontSize: '0.68rem', color: walletBalance >= totalAmount ? 'var(--neon-emerald)' : 'var(--neon-red)', fontWeight: 600 }}>
                  ₹{walletBalance.toLocaleString('en-IN')}
                </span>
              </div>

            </div>
          </div>

          {/* Dynamic Payment Method Inputs */}
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
            {(selectedMethod === 'upi' || selectedMethod === 'gpay' || selectedMethod === 'phonepe' || selectedMethod === 'paytm') && (
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Enter Your Virtual Payment Address (UPI ID)
                </label>
                <input 
                  type="text" 
                  className="input-field" 
                  value={upiId} 
                  onChange={e => setUpiId(e.target.value)}
                  placeholder="e.g. mobile@okhdfcbank or user@paytm" 
                  required
                />
                <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '4px' }}>
                  A payment collect request will be pushed to your UPI application.
                </span>
              </div>
            )}

            {selectedMethod === 'cards' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                    Card Number (RuPay, Visa, Mastercard)
                  </label>
                  <input 
                    type="text" 
                    className="input-field" 
                    value={cardNumber} 
                    onChange={e => setCardNumber(e.target.value)} 
                    placeholder="4532 0000 0000 0000" 
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)' }}>Expiry</label>
                    <input type="text" className="input-field" defaultValue="08/29" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)' }}>CVV</label>
                    <input type="password" className="input-field" defaultValue="•••" maxLength={3} />
                  </div>
                </div>
              </div>
            )}

            {selectedMethod === 'wallet' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: '#fff' }}>Current Available Balance:</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--neon-emerald)' }}>
                    ₹{walletBalance.toLocaleString('en-IN')}
                  </span>
                </div>
                {walletBalance < totalAmount && (
                  <p style={{ fontSize: '0.78rem', color: 'var(--neon-red)', marginTop: '6px' }}>
                    ⚠️ Your balance is insufficient by ₹{(totalAmount - walletBalance).toLocaleString('en-IN')}. Please choose UPI or deposit money.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Escrow Handshake Notice */}
          <div style={{
            background: 'rgba(0, 242, 254, 0.05)',
            border: '1px solid rgba(0, 242, 254, 0.2)',
            borderRadius: '8px',
            padding: '0.85rem',
            display: 'flex',
            gap: '0.65rem',
            alignItems: 'center'
          }}>
            <ShieldCheck size={24} color="var(--neon-cyan)" style={{ flexShrink: 0 }} />
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
              <strong style={{ color: '#fff' }}>GameXMarket Escrow Promise:</strong> Payment remains locked in vault escrow. The seller only receives funds after you test login and confirm transfer.
            </p>
          </div>

          {/* Terms checkbox */}
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <input 
              type="checkbox" 
              checked={agreeTerms} 
              onChange={e => setAgreeTerms(e.target.checked)} 
              style={{ accentColor: 'var(--neon-cyan)' }} 
            />
            <span>I agree to the Escrow Purchase Terms, Buyer Handover Guidelines, and Publisher Notice.</span>
          </label>

          {/* Action Button */}
          <button 
            type="submit" 
            className="btn btn-primary btn-lg"
            disabled={isProcessing || (selectedMethod === 'wallet' && walletBalance < totalAmount)}
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            {isProcessing ? 'Simulating Indian Escrow Payment...' : `Confirm & Pay ₹${totalAmount.toLocaleString('en-IN')}`}
          </button>
        </form>
      </div>
    </div>
  );
};
