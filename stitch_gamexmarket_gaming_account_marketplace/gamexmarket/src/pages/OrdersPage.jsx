import React, { useState } from 'react';
import { 
  Package, 
  Eye, 
  Download, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  RotateCcw,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export const OrdersPage = () => {
  const { orders, setActiveOrderModal, navigate, showToast } = useMarketplace();
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredOrders = orders.filter(ord => {
    if (statusFilter === 'all') return true;
    if (statusFilter === 'delivered') return ord.orderStatus.includes('Delivered');
    if (statusFilter === 'completed') return ord.orderStatus.includes('Completed');
    return true;
  });

  const handleDownloadInvoice = (order) => {
    showToast(`Downloading official GST invoice for Order #${order.id} (₹${order.amount.toLocaleString('en-IN')})...`, 'info');
  };

  return (
    <div className="orders-page page-wrapper" style={{ paddingTop: '2.5rem' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span className="badge badge-cyan">Buyer Credentials Vault</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>• 100% Escrow Backed</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#fff', textTransform: 'uppercase' }}>
            MY GAMING ORDERS
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            Track account handovers, access decrypted login credentials, and manage escrow releases.
          </p>
        </div>

        {/* Status Filter Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
          {[
            { id: 'all', label: `All Orders (${orders.length})` },
            { id: 'delivered', label: 'Delivered (Credentials Ready)' },
            { id: 'completed', label: 'Completed Transfers' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id)}
              style={{
                background: statusFilter === tab.id ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                color: statusFilter === tab.id ? 'var(--neon-cyan)' : 'var(--text-muted)',
                border: '1px solid',
                borderColor: statusFilter === tab.id ? 'var(--neon-cyan)' : 'transparent',
                borderRadius: '8px',
                padding: '0.65rem 1.25rem',
                fontFamily: 'var(--font-gaming)',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Orders Listing */}
        {filteredOrders.length === 0 ? (
          <div className="glass-card" style={{ padding: '4rem 2rem', textAlign: 'center', borderRadius: '16px' }}>
            <Package size={48} color="var(--text-dim)" style={{ margin: '0 auto 1.25rem' }} />
            <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>No Orders Found</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              You haven't placed any orders in this category yet. Explore thousands of verified gaming accounts today.
            </p>
            <button onClick={() => navigate('buy')} className="btn btn-primary btn-sm">
              <ShoppingBag size={16} /> Explore Marketplace
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {filteredOrders.map(order => (
              <div 
                key={order.id}
                className="glass-card card-hover-glow"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1.5rem'
                }}
              >
                <div style={{ flex: '1', minWidth: '280px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span className="badge badge-emerald">{order.orderStatus}</span>
                    <span className="badge badge-cyan">{order.game}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Order #{order.id}</span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700, marginBottom: '0.4rem' }}>
                    {order.accountTitle}
                  </h3>

                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <span>Date: <strong style={{ color: '#fff' }}>{order.date}</strong></span>
                    <span>Seller: <strong style={{ color: '#fff' }}>{order.seller}</strong></span>
                    <span>Payment: <strong style={{ color: 'var(--neon-cyan)' }}>{order.paymentMethod}</strong></span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Amount Paid (₹)</span>
                    <span className="inr-price" style={{ display: 'block', fontSize: '1.6rem', color: 'var(--neon-cyan)', fontWeight: 800 }}>
                      ₹{order.amount.toLocaleString('en-IN')}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--neon-emerald)' }}>
                      Payment Verified
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <button
                      onClick={() => setActiveOrderModal(order)}
                      className="btn btn-primary btn-sm"
                      style={{ padding: '0.6rem 1.1rem' }}
                    >
                      <Eye size={16} /> View Credentials Vault
                    </button>

                    <button
                      onClick={() => handleDownloadInvoice(order)}
                      className="btn btn-outline btn-sm"
                      style={{ padding: '0.45rem 1.1rem', fontSize: '0.8rem' }}
                    >
                      <Download size={14} /> Download Receipt
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
