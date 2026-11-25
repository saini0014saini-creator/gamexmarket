import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export const Toast = () => {
  const { toast } = useMarketplace();

  if (!toast.show) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle2 size={20} className="text-emerald-400" color="#10b981" />;
      case 'error':
        return <AlertCircle size={20} className="text-rose-400" color="#ef4444" />;
      default:
        return <Info size={20} className="text-cyan-400" color="#00f2fe" />;
    }
  };

  const getBorderColor = () => {
    switch (toast.type) {
      case 'success': return 'rgba(16, 185, 129, 0.4)';
      case 'error': return 'rgba(239, 68, 68, 0.4)';
      default: return 'rgba(0, 242, 254, 0.4)';
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        background: '#0e1322',
        border: `1px solid ${getBorderColor()}`,
        borderRadius: '12px',
        padding: '14px 20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.7), 0 0 20px rgba(0, 242, 254, 0.2)',
        color: '#fff',
        fontSize: '0.95rem',
        fontWeight: 500,
        maxWidth: '420px',
        animation: 'fadeIn 0.25s ease'
      }}
    >
      {getIcon()}
      <span>{toast.message}</span>
    </div>
  );
};
