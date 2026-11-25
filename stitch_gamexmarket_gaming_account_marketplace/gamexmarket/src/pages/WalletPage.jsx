import React, { useState } from 'react';
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  QrCode, 
  Smartphone, 
  CreditCard, 
  Building2, 
  ShieldCheck, 
  AlertTriangle, 
  Coins, 
  CheckCircle2, 
  Clock, 
  Download,
  Filter
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export const WalletPage = () => {
  const { walletBalance, transactions, depositToWallet, withdrawFromWallet, showToast } = useMarketplace();

  // Modals for Add Money & Withdraw Money
  const [showAddModal, setShowAddModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);

  // Form states
  const [depositAmount, setDepositAmount] = useState('2000');
  const [depositMethod, setDepositMethod] = useState('UPI (Google Pay)');
  const [withdrawAmount, setWithdrawAmount] = useState('3000');
  const [withdrawTarget, setWithdrawTarget] = useState('user@oksbi');
  const [withdrawType, setWithdrawType] = useState('upi');

  // Filter for transactions
  const [filterType, setFilterType] = useState('all');

  const filteredTransactions = transactions.filter(t => {
    if (filterType === 'all') return true;
    if (filterType === 'deposits') return t.amount > 0 && t.type.includes('Deposit');
    if (filterType === 'purchases') return t.amount < 0 && t.type.includes('Purchase');
    if (filterType === 'earnings') return t.amount > 0 && t.type.includes('Earnings');
    if (filterType === 'withdrawals') return t.amount < 0 && t.type.includes('Withdrawal');
    return true;
  });

  const handleDepositSubmit = (e) => {
    e.preventDefault();
    depositToWallet(depositAmount, depositMethod);
    setShowAddModal(false);
  };

  const handleWithdrawSubmit = (e) => {
    e.preventDefault();
    const success = withdrawFromWallet(withdrawAmount, withdrawTarget);
    if (success) {
      setShowWithdrawModal(false);
    }
  };

  return (
    <div className="wallet-page page-wrapper" style={{ paddingTop: '2.5rem' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span className="badge badge-emerald">Indian Rupee (₹) Financial Hub</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>• 0% Withdrawal Fee • Instant UPI</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#fff', textTransform: 'uppercase' }}>
            WALLET & INDIAN PAYMENTS
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            Manage deposits, escrow balances, seller earnings, and direct Indian bank/UPI payouts.
          </p>
        </div>

        {/* Prototype Safeguard Notice */}
        <div style={{
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: '12px',
          padding: '1rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
          marginBottom: '2rem'
        }}>
          <AlertTriangle size={24} color="var(--neon-amber)" style={{ flexShrink: 0 }} />
          <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
            <strong style={{ color: '#fff' }}>Interactive Financial Prototype:</strong> All amounts, balances, deposits, and withdrawal flows shown below are real-time simulation values in Indian Rupees (₹ INR). No real bank charges or UPI debits occur.
          </div>
        </div>

        {/* Balance Card & Quick Action Strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '2rem',
          marginBottom: '2.5rem'
        }} className="wallet-overview-grid">
          
          {/* Main Balance Box */}
          <div className="glass-card" style={{
            padding: '2.25rem',
            background: 'linear-gradient(135deg, rgba(14, 19, 36, 0.9) 0%, rgba(16, 23, 44, 0.95) 100%)',
            border: '1px solid var(--border-glow)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Total Available Balance (₹ INR)
              </span>
              <span className="badge badge-emerald">Ready for Instant Withdrawal</span>
            </div>

            <h2 className="inr-price" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', color: 'var(--neon-emerald)', fontWeight: 800, lineHeight: 1, marginBottom: '1.75rem' }}>
              ₹{walletBalance.toLocaleString('en-IN')}
            </h2>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setShowAddModal(true)}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <ArrowDownLeft size={18} /> Add Money (UPI / Cards)
              </button>

              <button 
                onClick={() => setShowWithdrawModal(true)}
                className="btn btn-outline"
                style={{ flex: 1, borderColor: 'var(--neon-emerald)', color: 'var(--neon-emerald)' }}
              >
                <ArrowUpRight size={18} /> Withdraw to Bank / UPI
              </button>
            </div>
          </div>

          {/* Mini Stats Card */}
          <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <h4 style={{ fontSize: '0.9rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
              WALLET HIGHLIGHTS
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Escrow Held in Transit:</span>
                <span style={{ color: 'var(--neon-cyan)', fontWeight: 700 }}>₹0.00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Total Lifetime Sales:</span>
                <span style={{ color: '#fff', fontWeight: 700 }}>₹24,800</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Platform Fee Saved:</span>
                <span style={{ color: 'var(--neon-emerald)', fontWeight: 700 }}>₹1,980 (0% Promo)</span>
              </div>
            </div>

            <div style={{
              marginTop: '1.25rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              color: 'var(--text-dim)'
            }}>
              <ShieldCheck size={16} color="var(--neon-cyan)" />
              <span>Compliant with Indian NPCI UPI guidelines.</span>
            </div>
          </div>

        </div>

        {/* Indian Payment Rails Supported */}
        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2.5rem' }}>
          <h4 style={{ fontSize: '0.9rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
            SUPPORTED INDIAN PAYMENT NETWORKS
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              <span className="badge badge-cyan" style={{ marginBottom: '4px' }}>UPI Fast Rails</span>
              <p style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600 }}>Google Pay, PhonePe, Paytm</p>
              <span style={{ fontSize: '0.72rem', color: 'var(--neon-emerald)' }}>Instant Settlement</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              <span className="badge badge-purple" style={{ marginBottom: '4px' }}>Cards</span>
              <p style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600 }}>RuPay, Visa, Mastercard</p>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Debit & Credit</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              <span className="badge badge-amber" style={{ marginBottom: '4px' }}>Net Banking</span>
              <p style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600 }}>SBI, HDFC, ICICI, Axis</p>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>50+ Indian Banks</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              <span className="badge badge-emerald" style={{ marginBottom: '4px' }}>IMPS Payouts</span>
              <p style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600 }}>Direct to Account IFSC</p>
              <span style={{ fontSize: '0.72rem', color: 'var(--neon-emerald)' }}>Within 1 Hour</span>
            </div>
          </div>
        </div>

        {/* Transaction History Section */}
        <div className="glass-card" style={{ padding: '2rem' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: '#fff', textTransform: 'uppercase' }}>
                FINANCIAL TRANSACTIONS LEDGER (₹ INR)
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Detailed audit trail of all purchases, deposits, sales, and withdrawals
              </p>
            </div>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {['all', 'deposits', 'purchases', 'earnings', 'withdrawals'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilterType(f)}
                  style={{
                    background: filterType === f ? 'var(--neon-cyan)' : 'rgba(255,255,255,0.04)',
                    color: filterType === f ? '#000' : 'var(--text-muted)',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Transactions List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {filteredTransactions.map(txn => (
              <div 
                key={txn.id}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  padding: '1.1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span className={`badge ${txn.amount > 0 ? 'badge-emerald' : 'badge-red'}`}>
                      {txn.type}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>ID: {txn.id}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>• {txn.date}</span>
                  </div>
                  <h4 style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>{txn.description}</h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Method: {txn.method} • Status: {txn.status}</span>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span className="inr-price" style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: txn.amount > 0 ? 'var(--neon-emerald)' : 'var(--neon-red)'
                  }}>
                    {txn.amount > 0 ? `+₹${txn.amount.toLocaleString('en-IN')}` : `-₹${Math.abs(txn.amount).toLocaleString('en-IN')}`}
                  </span>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                    Indian Rupee Settlement
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* MODAL 1: ADD MONEY */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px' }}>
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>Add Money to Wallet (₹ INR)</h3>
              <button onClick={() => setShowAddModal(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>✕</button>
            </div>

            <form onSubmit={handleDepositSubmit} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Deposit Amount in Indian Rupees (₹)
                </label>
                <input 
                  type="number"
                  className="input-field"
                  value={depositAmount}
                  onChange={e => setDepositAmount(e.target.value)}
                  placeholder="e.g. 2000"
                  required
                />
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {[1000, 2000, 5000, 10000].map(val => (
                    <button
                      type="button"
                      key={val}
                      onClick={() => setDepositAmount(String(val))}
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', color: 'var(--neon-cyan)', padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}
                    >
                      +₹{val}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Select Indian Payment Method
                </label>
                <select 
                  className="input-field"
                  value={depositMethod}
                  onChange={e => setDepositMethod(e.target.value)}
                >
                  <option value="UPI (Google Pay)">Google Pay UPI</option>
                  <option value="UPI (PhonePe)">PhonePe UPI</option>
                  <option value="UPI (Paytm)">Paytm UPI</option>
                  <option value="RuPay / Indian Cards">RuPay / Debit Card</option>
                  <option value="Net Banking">Net Banking (SBI / HDFC / ICICI)</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                Simulate Deposit of ₹{Number(depositAmount || 0).toLocaleString('en-IN')}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: WITHDRAW MONEY */}
      {showWithdrawModal && (
        <div className="modal-overlay" onClick={() => setShowWithdrawModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px' }}>
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>Withdraw Money to Bank / UPI (₹)</h3>
              <button onClick={() => setShowWithdrawModal(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>✕</button>
            </div>

            <form onSubmit={handleWithdrawSubmit} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Available Wallet Balance:</span>
                <span className="inr-price" style={{ display: 'block', fontSize: '1.4rem', color: 'var(--neon-emerald)', fontWeight: 800 }}>
                  ₹{walletBalance.toLocaleString('en-IN')}
                </span>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Withdrawal Amount (₹)
                </label>
                <input 
                  type="number"
                  className="input-field"
                  value={withdrawAmount}
                  onChange={e => setWithdrawAmount(e.target.value)}
                  max={walletBalance}
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Payout Destination (UPI ID or Bank Account)
                </label>
                <input 
                  type="text"
                  className="input-field"
                  value={withdrawTarget}
                  onChange={e => setWithdrawTarget(e.target.value)}
                  placeholder="e.g. mobile@okhdfcbank or 501002341202 IFSC: HDFC0001"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-emerald"
                disabled={Number(withdrawAmount) > walletBalance}
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                Simulate Payout of ₹{Number(withdrawAmount || 0).toLocaleString('en-IN')}
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .wallet-overview-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
