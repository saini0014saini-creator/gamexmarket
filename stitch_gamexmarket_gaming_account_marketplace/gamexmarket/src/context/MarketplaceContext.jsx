import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  INITIAL_ACCOUNTS, 
  INITIAL_USER_ORDERS, 
  INITIAL_TRANSACTIONS, 
  INITIAL_PENDING_LISTINGS, 
  PLATFORM_STATS 
} from '../data/mockData';

const MarketplaceContext = createContext();

const API_BASE = import.meta.env.VITE_API_URL || '/api';

export const MarketplaceProvider = ({ children }) => {
  // Navigation & Page State
  const [currentPage, setCurrentPage] = useState('home');
  const [activeAccount, setActiveAccount] = useState(INITIAL_ACCOUNTS[0]);
  const [legalTab, setLegalTab] = useState('terms');

  // User & Roles: 'buyer' | 'seller' | 'admin'
  const [userRole, setUserRole] = useState('buyer');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    name: 'Karan Sharma',
    email: 'karan.gamer2026@gmail.com',
    phone: '+91 98765 43210',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    location: 'Mumbai, Maharashtra',
    memberSince: 'March 2023',
    sellerStatus: 'Verified Pro Seller V4'
  });

  // Wallet
  const [walletBalance, setWalletBalance] = useState(14250);
  const [escrowBalance, setEscrowBalance] = useState(16499);
  const [lifetimeEarnings, setLifetimeEarnings] = useState(142800);

  // Accounts & Inventory
  const [accounts, setAccounts] = useState(INITIAL_ACCOUNTS);
  const [pendingListings, setPendingListings] = useState(INITIAL_PENDING_LISTINGS);
  const [orders, setOrders] = useState(INITIAL_USER_ORDERS);
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);
  const [wishlist, setWishlist] = useState(['acc-1', 'acc-3']);
  const [backendOnline, setBackendOnline] = useState(false);

  // Notifications
  const [notifications, setNotifications] = useState([
    {
      id: 'notif-1',
      title: 'Order Delivered!',
      message: 'Credentials for BGMI Glacier account have been delivered securely.',
      time: '10 mins ago',
      unread: true,
      type: 'order'
    },
    {
      id: 'notif-2',
      title: 'Wallet Credit',
      message: '₹3,955 credited to your wallet from completed CoC sale.',
      time: '1 hour ago',
      unread: true,
      type: 'wallet'
    },
    {
      id: 'notif-3',
      title: 'Escrow Locked',
      message: '₹16,499.00 currently secured in RBI-regulated escrow account.',
      time: '2 hours ago',
      unread: false,
      type: 'escrow'
    }
  ]);

  // Filters state for Buy Page
  const [filters, setFilters] = useState({
    search: '',
    game: 'all',
    minPrice: '',
    maxPrice: '',
    level: '',
    verifiedOnly: false,
    instantOnly: false,
    sortBy: 'featured'
  });

  // Modals state
  const [checkoutModal, setCheckoutModal] = useState({ isOpen: false, account: null });
  const [contactModal, setContactModal] = useState({ isOpen: false, seller: null, account: null });
  const [activeOrderModal, setActiveOrderModal] = useState(null);

  // Toast feedback state
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 3500);
  };

  // Sync with Backend API on Mount
  useEffect(() => {
    const fetchBackendData = async () => {
      try {
        const res = await fetch(`${API_BASE}/accounts`);
        if (res.ok) {
          const json = await res.json();
          if (json.data && json.data.length > 0) {
            setAccounts(json.data);
            setBackendOnline(true);
          }
        }
      } catch (err) {
        console.log('[Frontend] Backend not reachable, using local reactive state:', err.message);
      }

      try {
        const orderRes = await fetch(`${API_BASE}/orders`);
        if (orderRes.ok) {
          const json = await orderRes.json();
          if (json.data && json.data.length > 0) {
            setOrders(json.data);
          }
        }
      } catch (_) {}

      try {
        const walletRes = await fetch(`${API_BASE}/wallet`);
        if (walletRes.ok) {
          const json = await walletRes.json();
          if (json.data) {
            if (json.data.walletBalance) setWalletBalance(json.data.walletBalance);
            if (json.data.escrowBalance) setEscrowBalance(json.data.escrowBalance);
            if (json.data.transactions) setTransactions(json.data.transactions);
          }
        }
      } catch (_) {}
    };

    fetchBackendData();
  }, []);

  // Navigation Helper
  const navigate = (page, options = {}) => {
    if (options.account) {
      setActiveAccount(options.account);
    }
    if (options.legalTab) {
      setLegalTab(options.legalTab);
    }
    if (options.filterGame) {
      setFilters(prev => ({ ...prev, game: options.filterGame }));
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Wishlist Toggle
  const toggleWishlist = (accountId) => {
    setWishlist(prev => {
      const exists = prev.includes(accountId);
      if (exists) {
        showToast('Account removed from wishlist', 'info');
        return prev.filter(id => id !== accountId);
      } else {
        showToast('Account saved to your Wishlist Vault ❤️', 'success');
        return [...prev, accountId];
      }
    });
  };

  // Checkout Actions
  const openCheckout = (account) => {
    setCheckoutModal({ isOpen: true, account });
  };

  const closeCheckout = () => {
    setCheckoutModal({ isOpen: false, account: null });
  };

  const completePurchase = async (account, paymentMethod, paymentDetails) => {
    const newOrderId = `GXM-${Math.floor(10000 + Math.random() * 90000)}`;
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    // Handle wallet deduction if selected
    if (paymentMethod === 'wallet') {
      if (walletBalance < account.price) {
        showToast('Insufficient wallet balance! Please pay via UPI or top-up.', 'error');
        return false;
      }
      setWalletBalance(prev => prev - account.price);
    }

    const newOrder = {
      orderId: newOrderId,
      id: newOrderId,
      game: account.game,
      accountTitle: account.title,
      accountId: account.id || account._id,
      date: formattedDate,
      amount: account.price,
      paymentMethod: paymentMethod === 'wallet' ? 'GameXMarket Wallet' : `UPI / Gateway (${paymentMethod.toUpperCase()})`,
      paymentStatus: 'Paid (Escrow Safe)',
      orderStatus: 'Credentials Delivered',
      seller: account.seller?.name || 'Pro Tier Seller',
      sellerName: account.seller?.name || 'Pro Tier Seller',
      credentials: {
        loginId: `${account.gameId}_secure_${Math.floor(100 + Math.random() * 899)}@gamexmarket-vault.in`,
        password: `GXMSecure#${Math.floor(1000 + Math.random() * 9000)}!`,
        backupCodes: `${Math.floor(100000 + Math.random() * 900000)}, ${Math.floor(100000 + Math.random() * 900000)}`,
        handoverNotes: 'Supervised escrow transfer completed. Please bind your personal Indian mobile number and change login password right away.'
      }
    };

    const newTxn = {
      transactionId: `TXN-${Math.floor(100000 + Math.random() * 900000)}`,
      id: `TXN-${Math.floor(100000 + Math.random() * 900000)}`,
      type: 'Escrow Purchase',
      description: `Purchased: ${account.title.substring(0, 36)}...`,
      amount: -account.price,
      date: formattedDate,
      method: paymentMethod.toUpperCase(),
      status: 'Completed'
    };

    // Attempt push to backend
    try {
      await fetch(`${API_BASE}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accountId: account.id || account._id,
          title: account.title,
          game: account.game,
          amount: account.price,
          paymentMethod,
          sellerName: account.seller?.name
        })
      });
    } catch (_) {}

    setOrders(prev => [newOrder, ...prev]);
    setTransactions(prev => [newTxn, ...prev]);

    setNotifications(prev => [
      {
        id: `notif-${Date.now()}`,
        title: 'Payment Confirmed in Escrow!',
        message: `Order #${newOrderId} for ${account.game} is ready. Credentials available in vault.`,
        time: 'Just now',
        unread: true,
        type: 'order'
      },
      ...prev
    ]);

    closeCheckout();
    showToast(`Order #${newOrderId} Escrow Handshake Complete! ₹${account.price.toLocaleString('en-IN')}`, 'success');
    navigate('orders');
    return true;
  };

  // Submit Listing Flow
  const submitNewListing = async (listingData) => {
    const newId = `pend-${Date.now()}`;
    const newPending = {
      id: newId,
      _id: newId,
      ...listingData,
      status: 'Pending Review',
      submittedAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };

    try {
      await fetch(`${API_BASE}/accounts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(listingData)
      });
    } catch (_) {}

    setPendingListings(prev => [newPending, ...prev]);
    showToast('Listing submitted! Waiting for admin escrow audit (usually 15 mins).', 'success');
  };

  // Admin Actions
  const adminApproveListing = (pendingId) => {
    const item = pendingListings.find(p => p.id === pendingId);
    if (!item) return;

    const approvedAccount = {
      id: `acc-${Date.now()}`,
      _id: `acc-${Date.now()}`,
      title: item.title,
      game: item.game,
      gameId: item.gameId || 'bgmi',
      level: Number(item.level) || 50,
      price: Number(item.price) || 2999,
      originalPrice: Math.round(Number(item.price) * 1.25),
      discountPercentage: 20,
      isFeatured: false,
      isTrending: true,
      isBestSeller: false,
      isVerifiedSeller: true,
      instantDelivery: true,
      images: item.images && item.images.length > 0 ? item.images : [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDy3mX-UyoPQYpNfyTied8AisFzlXLNoyo9MWqDHjxiYedkvgxn_EjMGw63Zir1bnEDk3l2Xw5zDvBo22aDxniAqaPNIV4i2EbxyqFKOXoRUMgcJ9DL4oU8jgD0wv2Hv7s7Ws5eLaVnZwZ7HJb9Xszjl4m8dwGOQL8jJq9k6MZdlSw5to9Y-vyqxCLl619fysOrsVH2hSOiMoCMQGMan6XTxGKQCpASKf0lsC9asPCg'
      ],
      features: item.features ? item.features.split(',').map(s => s.trim()) : [
        'Verified Indian Game Account',
        'Clean Login Ownership',
        'Full Email Access'
      ],
      specs: {
        accountLevel: `Level ${item.level || 50}`,
        tier: item.tier || 'Ace / Master',
        skinsCount: item.skinsCount || 100,
        characters: 'Standard All Unlocked',
        mythicItems: item.mythicItems || 5,
        serverRegion: 'India Local',
        loginMethod: item.loginMethod || 'Single Social Link'
      },
      description: item.description || 'Verified gaming account with clean transfer history. Fully supported by GameXMarket escrow.',
      seller: {
        id: `sel-${Date.now()}`,
        name: item.sellerName || currentUser.name,
        rating: 5.0,
        reviewsCount: 1,
        completedOrders: 1,
        location: 'India',
        badge: 'New Verified Merchant',
        avatar: currentUser.avatar
      },
      createdAt: new Date().toISOString().substring(0, 10),
      status: 'available'
    };

    setAccounts(prev => [approvedAccount, ...prev]);
    setPendingListings(prev => prev.filter(p => p.id !== pendingId));
    showToast(`Listing "${item.title.substring(0, 24)}..." approved & live on marketplace!`, 'success');
  };

  const adminRejectListing = (pendingId, reason = 'Account proof insufficient') => {
    setPendingListings(prev => prev.filter(p => p.id !== pendingId));
    showToast(`Listing rejected: ${reason}`, 'info');
  };

  // Wallet Management
  const depositToWallet = async (amount, method) => {
    const num = Number(amount);
    if (!num || num <= 0) return;

    try {
      await fetch(`${API_BASE}/wallet/deposit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: num, method })
      });
    } catch (_) {}

    setWalletBalance(prev => prev + num);
    const newTxn = {
      transactionId: `TXN-${Math.floor(100000 + Math.random() * 900000)}`,
      id: `TXN-${Math.floor(100000 + Math.random() * 900000)}`,
      type: 'Wallet Deposit',
      description: `Added ₹${num.toLocaleString('en-IN')} via ${method}`,
      amount: num,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      method: method,
      status: 'Completed'
    };
    setTransactions(prev => [newTxn, ...prev]);
    showToast(`₹${num.toLocaleString('en-IN')} deposited to wallet successfully!`, 'success');
  };

  const withdrawFromWallet = async (amount, destination) => {
    const num = Number(amount);
    if (num > walletBalance) {
      showToast('Withdrawal amount exceeds your available wallet balance!', 'error');
      return false;
    }

    try {
      await fetch(`${API_BASE}/wallet/withdraw`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: num, destination })
      });
    } catch (_) {}

    setWalletBalance(prev => prev - num);
    const newTxn = {
      transactionId: `TXN-${Math.floor(100000 + Math.random() * 900000)}`,
      id: `TXN-${Math.floor(100000 + Math.random() * 900000)}`,
      type: 'Bank Withdrawal',
      description: `Payout to ${destination}`,
      amount: -num,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      method: 'Instant UPI Payout',
      status: 'Completed'
    };
    setTransactions(prev => [newTxn, ...prev]);
    showToast(`₹${num.toLocaleString('en-IN')} payout initiated to ${destination}`, 'success');
    return true;
  };

  // Role Switcher for seamless test review
  const switchRole = (newRole) => {
    setUserRole(newRole);
    if (newRole === 'admin') {
      setCurrentPage('admin');
      showToast('Switched to Administrator Mode 🛡️', 'info');
    } else if (newRole === 'seller') {
      setCurrentPage('sell');
      showToast('Switched to Seller Portal 💼', 'info');
    } else {
      if (currentPage === 'admin') setCurrentPage('home');
      showToast('Switched to Buyer Experience 🎮', 'info');
    }
  };

  return (
    <MarketplaceContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        navigate,
        activeAccount,
        setActiveAccount,
        legalTab,
        setLegalTab,
        userRole,
        setUserRole,
        switchRole,
        isAuthenticated,
        setIsAuthenticated,
        currentUser,
        setCurrentUser,
        walletBalance,
        escrowBalance,
        lifetimeEarnings,
        accounts,
        setAccounts,
        pendingListings,
        orders,
        transactions,
        wishlist,
        toggleWishlist,
        notifications,
        setNotifications,
        filters,
        setFilters,
        checkoutModal,
        openCheckout,
        closeCheckout,
        completePurchase,
        submitNewListing,
        adminApproveListing,
        adminRejectListing,
        depositToWallet,
        withdrawFromWallet,
        contactModal,
        setContactModal,
        activeOrderModal,
        setActiveOrderModal,
        toast,
        showToast,
        backendOnline
      }}
    >
      {children}
    </MarketplaceContext.Provider>
  );
};

export const useMarketplace = () => useContext(MarketplaceContext);
