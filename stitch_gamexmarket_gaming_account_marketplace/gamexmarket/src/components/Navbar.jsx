import React, { useState } from 'react';
import { 
  Gamepad2, 
  Search, 
  Heart, 
  Bell, 
  ChevronDown, 
  Layers, 
  Wallet, 
  Package, 
  LogOut, 
  ShieldCheck, 
  Menu, 
  X 
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export const Navbar = () => {
  const { 
    currentPage, 
    navigate, 
    wishlist, 
    notifications, 
    userRole, 
    switchRole, 
    walletBalance, 
    currentUser,
    setFilters,
    backendOnline
  } = useMarketplace();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [navSearch, setNavSearch] = useState('');

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleNavSearch = (e) => {
    e.preventDefault();
    if (navSearch.trim()) {
      setFilters(prev => ({ ...prev, search: navSearch.trim() }));
      navigate('buy');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e18]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
      {/* Top Demo Bar */}
      <div className="bg-gradient-to-r from-primary-container/10 via-surface-container to-secondary/10 border-b border-white/[0.05] py-1 px-4 text-[12px] text-on-surface-variant">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[15px] text-[#00f0ff]">verified_user</span>
            <span>India's #1 Gaming Account Marketplace • 100% Escrow Protection • Instant UPI Payouts</span>
            {backendOnline && (
              <span className="ml-2 px-1.5 py-0.2 rounded bg-emerald-500/20 text-[#6ffbbe] text-[10px] font-bold">API Online</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold hidden sm:inline">Role:</span>
            <div className="flex items-center bg-black/40 p-0.5 rounded-lg border border-white/[0.08]">
              <button 
                onClick={() => switchRole('buyer')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors ${userRole === 'buyer' ? 'bg-[#00f0ff] text-[#070a11]' : 'text-slate-400 hover:text-white'}`}
              >
                Buyer
              </button>
              <button 
                onClick={() => switchRole('seller')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors ${userRole === 'seller' ? 'bg-[#ddb7ff] text-[#2c0051]' : 'text-slate-400 hover:text-white'}`}
              >
                Seller
              </button>
              <button 
                onClick={() => switchRole('admin')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors ${userRole === 'admin' ? 'bg-[#6ffbbe] text-[#002113]' : 'text-slate-400 hover:text-white'}`}
              >
                Admin
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="h-20 w-full px-4 lg:px-6 max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <button onClick={() => navigate('home')} className="flex items-center gap-2.5 text-left group border-0 bg-transparent cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#6f00be] flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-transform duration-300 group-hover:scale-105">
              <span className="material-symbols-outlined text-[#070a11] text-[22px]">sports_esports</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold tracking-tight text-white">
                  GameX<span className="text-[#00f0ff]">Market</span>
                </span>
                <span className="px-1.5 py-0.5 rounded bg-[#6f00be]/40 text-[#ddb7ff] text-[10px] font-['Plus_Jakarta_Sans'] font-extrabold uppercase tracking-wider">
                  PRO
                </span>
              </div>
              <span className="text-[11px] text-[#94a3b8] font-medium tracking-tight hidden sm:block">
                Your Gaming Account Marketplace
              </span>
            </div>
          </button>
        </div>

        {/* Center Search Pill */}
        <form onSubmit={handleNavSearch} className="hidden xl:flex items-center flex-1 max-w-xs mx-2">
          <div className="w-full flex items-center gap-2 bg-[#171b26] px-3.5 py-2 rounded-xl border border-white/[0.08] shadow-inner focus-within:border-[#00f0ff] transition-all">
            <span className="material-symbols-outlined text-[18px] text-[#849495]">search</span>
            <input 
              type="text"
              placeholder="Search Valorant, BGMI, CoD..."
              value={navSearch}
              onChange={e => setNavSearch(e.target.value)}
              className="bg-transparent text-sm text-white placeholder-[#849495] outline-none w-full"
            />
            <kbd className="ml-auto bg-[#262a35] text-[#b9cacb] px-1.5 py-0.5 rounded text-[10px] font-bold">⌘K</kbd>
          </div>
        </form>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 flex-1 justify-center">
          <button 
            onClick={() => navigate('home')}
            className={`font-['Inter'] text-sm font-semibold transition-colors py-1 bg-transparent border-0 cursor-pointer ${currentPage === 'home' ? 'text-[#00f0ff]' : 'text-[#b9cacb] hover:text-white'}`}
          >
            Home
          </button>
          
          <button 
            onClick={() => navigate('buy')}
            className={`font-['Inter'] text-sm font-semibold transition-colors py-1 inline-flex items-center gap-1.5 bg-transparent border-0 cursor-pointer ${currentPage === 'buy' ? 'text-[#00f0ff]' : 'text-[#b9cacb] hover:text-white'}`}
          >
            Buy Accounts
            <span className="bg-[#93000a] text-[#ffb4ab] px-1.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
              Hot
            </span>
          </button>

          <button 
            onClick={() => navigate('sell')}
            className={`font-['Inter'] text-sm font-semibold transition-colors py-1 inline-flex items-center gap-1.5 bg-transparent border-0 cursor-pointer ${currentPage === 'sell' ? 'text-[#00f0ff]' : 'text-[#b9cacb] hover:text-white'}`}
          >
            Sell Accounts
            <span className="bg-[#65f2b5]/20 text-[#6ffbbe] text-[10px] font-extrabold px-1.5 py-0.5 rounded-full uppercase">
              Earn 95%
            </span>
          </button>

          <button 
            onClick={() => navigate('dashboard')}
            className={`font-['Inter'] text-sm font-semibold transition-colors py-1 bg-transparent border-0 cursor-pointer ${currentPage === 'dashboard' ? 'text-[#00f0ff]' : 'text-[#b9cacb] hover:text-white'}`}
          >
            Dashboard
          </button>

          <button 
            onClick={() => navigate('about')}
            className={`font-['Inter'] text-sm font-semibold transition-colors py-1 bg-transparent border-0 cursor-pointer ${currentPage === 'about' ? 'text-[#00f0ff]' : 'text-[#b9cacb] hover:text-white'}`}
          >
            About Us
          </button>

          <button 
            onClick={() => navigate('contact')}
            className={`font-['Inter'] text-sm font-semibold transition-colors py-1 bg-transparent border-0 cursor-pointer ${currentPage === 'contact' ? 'text-[#00f0ff]' : 'text-[#b9cacb] hover:text-white'}`}
          >
            Contact Us
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          
          {/* Currency Pill */}
          <div 
            onClick={() => navigate('wallet')}
            className="hidden md:flex items-center gap-1.5 bg-[#1c1f2a] px-3 py-1.5 rounded-full text-[#b9cacb] text-xs font-semibold cursor-pointer hover:bg-[#262a35] transition-colors border border-white/[0.06]"
            title="Manage Wallet (₹ INR)"
          >
            <span>🇮🇳</span>
            <span className="text-white font-bold">INR (₹)</span>
          </div>

          {/* Wishlist Button */}
          <button
            onClick={() => navigate('dashboard')}
            className="p-2 rounded-xl bg-[#171b26] text-[#b9cacb] hover:text-[#00f0ff] transition-colors relative flex items-center justify-center border border-white/[0.08]"
            title="Wishlist"
          >
            <span className="material-symbols-outlined text-[20px]">favorite</span>
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#6f00be] text-[#ddb7ff] text-[10px] font-['Plus_Jakarta_Sans'] flex items-center justify-center font-bold">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Notifications Button */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-xl bg-[#171b26] text-[#b9cacb] hover:text-[#00f0ff] transition-colors relative flex items-center justify-center border border-white/[0.08]"
              title="Notifications"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]"></span>
              )}
            </button>

            {/* Notification Drawer Popover */}
            {showNotifications && (
              <div className="absolute top-12 right-0 w-80 bg-[#0d1222] border border-white/15 rounded-xl shadow-2xl p-4 z-50">
                <div className="flex justify-between items-center pb-2 border-b border-white/10 mb-2">
                  <span className="text-sm font-bold text-white">Notifications</span>
                  <span className="text-xs text-[#00f0ff]">{unreadCount} unread</span>
                </div>
                <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
                  {notifications.map(n => (
                    <div key={n.id} className="p-2 rounded-lg bg-white/[0.03] text-left">
                      <div className="text-xs font-bold text-white">{n.title}</div>
                      <div className="text-[11px] text-[#94a3b8]">{n.message}</div>
                      <span className="text-[9px] text-[#64748b] mt-1 block">{n.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sell Account Gradient Button */}
          <button
            onClick={() => navigate('sell')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#6f00be] text-[#002022] font-['Plus_Jakarta_Sans'] text-xs font-extrabold shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_28px_rgba(0,240,255,0.45)] transition-all hover:scale-[1.02] active:scale-[0.98] border-0 cursor-pointer"
          >
            Sell Account
          </button>

          {/* Profile Pill & Balance */}
          <div className="relative">
            <div 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 bg-[#171b26] hover:bg-[#262a35] py-1 px-2.5 rounded-full transition-colors cursor-pointer border border-white/[0.08]"
            >
              <div className="w-8 h-8 rounded-full bg-[#dbfcff] flex items-center justify-center text-[#00363a]">
                <span className="material-symbols-outlined text-[18px]">person</span>
              </div>
              <div className="hidden xl:flex flex-col text-left">
                <span className="text-xs text-[#dfe2f1] font-bold leading-tight">{currentUser.name.split(' ')[0]} S.</span>
                <span className="text-[11px] text-[#6ffbbe] font-['Plus_Jakarta_Sans'] font-bold leading-tight">
                  ₹{walletBalance.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div className="absolute top-12 right-0 w-60 bg-[#0d1222] border border-white/15 rounded-xl shadow-2xl p-3 z-50">
                <div className="pb-2 border-b border-white/10 mb-2">
                  <div className="text-sm font-bold text-white">{currentUser.name}</div>
                  <div className="text-xs text-[#94a3b8]">{currentUser.email}</div>
                  <span className="mt-1 inline-block px-2 py-0.5 rounded bg-[#00f0ff]/15 text-[#00f0ff] text-[10px] font-bold uppercase">
                    Role: {userRole}
                  </span>
                </div>
                <div className="flex flex-col gap-1 text-xs">
                  <button onClick={() => { navigate('dashboard'); setShowProfileMenu(false); }} className="w-full text-left py-1.5 px-2 hover:bg-white/[0.05] rounded text-slate-300 hover:text-[#00f0ff]">
                    User Dashboard
                  </button>
                  <button onClick={() => { navigate('orders'); setShowProfileMenu(false); }} className="w-full text-left py-1.5 px-2 hover:bg-white/[0.05] rounded text-slate-300 hover:text-[#00f0ff]">
                    My Escrow Orders
                  </button>
                  <button onClick={() => { navigate('wallet'); setShowProfileMenu(false); }} className="w-full text-left py-1.5 px-2 hover:bg-white/[0.05] rounded text-slate-300 hover:text-[#00f0ff]">
                    Wallet & UPI Payouts
                  </button>
                  <button onClick={() => { navigate('admin'); setShowProfileMenu(false); }} className="w-full text-left py-1.5 px-2 hover:bg-emerald-500/10 rounded text-[#6ffbbe] font-bold">
                    Admin Operations
                  </button>
                  <button onClick={() => { navigate('auth'); setShowProfileMenu(false); }} className="w-full text-left py-1.5 px-2 hover:bg-red-500/10 rounded text-red-400 border-t border-white/10 mt-1">
                    Sign Out / Switch User
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white bg-transparent border-0 cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e18] border-b border-white/10 p-4 flex flex-col gap-3">
          <form onSubmit={handleNavSearch}>
            <input 
              type="text"
              placeholder="Search Valorant, BGMI..."
              value={navSearch}
              onChange={e => setNavSearch(e.target.value)}
              className="w-full bg-[#171b26] p-2.5 rounded-lg text-sm text-white border border-white/10 outline-none"
            />
          </form>
          <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
            <button onClick={() => { navigate('home'); setMobileMenuOpen(false); }} className="p-2 text-left bg-white/5 rounded text-white">Home</button>
            <button onClick={() => { navigate('buy'); setMobileMenuOpen(false); }} className="p-2 text-left bg-white/5 rounded text-[#00f0ff]">Buy Accounts</button>
            <button onClick={() => { navigate('sell'); setMobileMenuOpen(false); }} className="p-2 text-left bg-white/5 rounded text-[#6ffbbe]">Sell Accounts</button>
            <button onClick={() => { navigate('dashboard'); setMobileMenuOpen(false); }} className="p-2 text-left bg-white/5 rounded text-white">Dashboard</button>
            <button onClick={() => { navigate('wallet'); setMobileMenuOpen(false); }} className="p-2 text-left bg-white/5 rounded text-white">Wallet (₹)</button>
            <button onClick={() => { navigate('orders'); setMobileMenuOpen(false); }} className="p-2 text-left bg-white/5 rounded text-white">Orders</button>
            <button onClick={() => { navigate('admin'); setMobileMenuOpen(false); }} className="col-span-2 p-2 text-center bg-emerald-500/20 text-[#6ffbbe] rounded font-bold">Admin Panel</button>
          </div>
        </div>
      )}
    </header>
  );
};
