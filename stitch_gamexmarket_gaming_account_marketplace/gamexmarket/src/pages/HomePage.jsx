import React, { useState } from 'react';
import { 
  Gamepad2, 
  Search, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ShoppingBag,
  Award,
  Users,
  Flame,
  Clock,
  Tag
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { POPULAR_GAMES, CUSTOMER_REVIEWS, FAQS } from '../data/mockData';
import { AccountCard } from '../components/AccountCard';

export const HomePage = () => {
  const { accounts, navigate, setFilters } = useMarketplace();
  const [heroGame, setHeroGame] = useState('all');
  const [heroKeyword, setHeroKeyword] = useState('');
  const [heroBudget, setHeroBudget] = useState('any');
  const [activeFaq, setActiveFaq] = useState(0);

  const handleHeroSearch = (e) => {
    e.preventDefault();
    setFilters(prev => ({
      ...prev,
      game: heroGame,
      search: heroKeyword.trim(),
      maxPrice: heroBudget !== 'any' ? heroBudget : ''
    }));
    navigate('buy');
  };

  const featuredAccounts = accounts.filter(a => a.isFeatured).slice(0, 6);
  const trendingAccounts = accounts.filter(a => a.isTrending).slice(0, 6);

  return (
    <div className="homepage-wrapper w-full flex flex-col bg-[#0f131d]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#0a0e18] py-16 lg:py-24">
        {/* Atmospheric Neon Mesh & Glows */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#00f0ff]/15 via-[#6f00be]/20 to-transparent blur-[120px] pointer-events-none rounded-full"></div>
        <div className="absolute top-1/4 -left-32 w-72 h-72 bg-[#00f0ff]/10 rounded-full blur-[90px] pointer-events-none"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-[#ddb7ff]/15 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-[1440px] mx-auto px-4 lg:px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* Live Market Status Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#262a35]/70 backdrop-blur-md shadow-[0_0_16px_rgba(0,240,255,0.15)] mb-4 border border-white/[0.08]">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] -ml-2.5"></span>
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#7df4ff] uppercase tracking-wider">
                India's #1 Escrow Verified Marketplace
              </span>
              <span className="text-[#849495] text-[10px]">•</span>
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#6ffbbe]">
                8,420+ IDs Ready
              </span>
            </div>

            {/* Master Headline */}
            <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight mb-4 leading-tight">
              Buy & Sell Premium <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#dbfcff] to-[#ddb7ff] drop-shadow-[0_0_24px_rgba(0,240,255,0.35)]">
                Gaming Accounts
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-['Inter'] text-base sm:text-lg text-[#b9cacb] max-w-2xl mb-8">
              Discover legendary gaming IDs. Step into high-tier competition instantly with 100% Escrow Protection, rapid email rebind, and zero-fee instant UPI payouts in ₹ INR.
            </p>

            {/* Dynamic Filter / Search Pill Box */}
            <form 
              onSubmit={handleHeroSearch}
              className="w-full bg-[#1c1f2a]/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-white/[0.1] shadow-[0_16px_40px_rgba(0,0,0,0.6)] mb-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
                
                {/* Game Dropdown */}
                <div className="lg:col-span-4 flex items-center gap-2.5 bg-[#171b26] px-3.5 py-2.5 rounded-xl border border-white/[0.06]">
                  <span className="material-symbols-outlined text-[#00f0ff] text-[22px]">sports_esports</span>
                  <div className="flex flex-col text-left flex-1">
                    <span className="text-[10px] text-[#849495] uppercase tracking-wider font-bold">Game Title</span>
                    <select 
                      value={heroGame}
                      onChange={e => setHeroGame(e.target.value)}
                      className="bg-transparent text-white font-['Plus_Jakarta_Sans'] font-semibold text-sm outline-none cursor-pointer"
                    >
                      <option className="bg-[#1c1f2a]" value="all">All Popular Games</option>
                      <option className="bg-[#1c1f2a]" value="coc">Clash of Clans (TH14-16)</option>
                      <option className="bg-[#1c1f2a]" value="bgmi">BGMI / PUBG Mobile</option>
                      <option className="bg-[#1c1f2a]" value="ff">Free Fire MAX</option>
                      <option className="bg-[#1c1f2a]" value="codm">Call of Duty Mobile</option>
                    </select>
                  </div>
                </div>

                {/* Keyword Search */}
                <div className="lg:col-span-4 flex items-center gap-2.5 bg-[#171b26] px-3.5 py-2.5 rounded-xl border border-white/[0.06]">
                  <span className="material-symbols-outlined text-[#849495] text-[22px]">search</span>
                  <div className="flex flex-col text-left flex-1">
                    <span className="text-[10px] text-[#849495] uppercase tracking-wider font-bold">Inventory Keyword</span>
                    <input 
                      type="text"
                      placeholder="Glacier M416, TH16, Criminal..."
                      value={heroKeyword}
                      onChange={e => setHeroKeyword(e.target.value)}
                      className="bg-transparent text-white text-sm outline-none w-full placeholder-[#849495]"
                    />
                  </div>
                </div>

                {/* Budget Range INR */}
                <div className="lg:col-span-2 flex items-center gap-2 bg-[#171b26] px-3 py-2.5 rounded-xl border border-white/[0.06]">
                  <span className="text-[#00f0ff] font-['Plus_Jakarta_Sans'] font-extrabold text-lg">₹</span>
                  <div className="flex flex-col text-left flex-1">
                    <span className="text-[10px] text-[#849495] uppercase tracking-wider font-bold">Max Price</span>
                    <select 
                      value={heroBudget}
                      onChange={e => setHeroBudget(e.target.value)}
                      className="bg-transparent text-white font-['Plus_Jakarta_Sans'] font-semibold text-sm outline-none cursor-pointer"
                    >
                      <option className="bg-[#1c1f2a]" value="any">Any Budget</option>
                      <option className="bg-[#1c1f2a]" value="1000">Under ₹1,000</option>
                      <option className="bg-[#1c1f2a]" value="3000">Under ₹3,000</option>
                      <option className="bg-[#1c1f2a]" value="7500">Under ₹7,500</option>
                      <option className="bg-[#1c1f2a]" value="15000">Under ₹15,000</option>
                      <option className="bg-[#1c1f2a]" value="25000">₹25,000+</option>
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <div className="lg:col-span-2">
                  <button 
                    type="submit"
                    className="w-full h-full min-h-[48px] bg-gradient-to-r from-[#00f0ff] to-[#00dbe9] hover:opacity-95 text-[#002022] font-['Plus_Jakarta_Sans'] font-bold rounded-xl px-4 flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(0,240,255,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98] border-0 cursor-pointer"
                  >
                    <span>Find IDs</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>

              </div>
            </form>

            {/* Dual Primary CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <button 
                onClick={() => navigate('buy')}
                className="px-8 py-3.5 rounded-xl bg-[#00f0ff] text-[#002022] font-['Plus_Jakarta_Sans'] font-extrabold text-sm shadow-[0_0_24px_rgba(0,240,255,0.35)] hover:shadow-[0_0_32px_rgba(0,240,255,0.55)] transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 border-0 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">explore</span>
                <span>Explore Accounts</span>
              </button>

              <button 
                onClick={() => navigate('sell')}
                className="px-8 py-3.5 rounded-xl bg-[#262a35] hover:bg-[#313540] text-[#ddb7ff] font-['Plus_Jakarta_Sans'] font-extrabold text-sm border border-[#ddb7ff]/30 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">currency_rupee</span>
                <span>Start Selling (Earn 95% Payout)</span>
              </button>
            </div>

            {/* Trust Highlights Strip */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#171b26]/70 backdrop-blur-md border border-white/[0.08]">
              <div className="flex items-center gap-3 justify-center p-2">
                <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff]">
                  <span className="material-symbols-outlined text-[24px]">payments</span>
                </div>
                <div className="text-left">
                  <div className="font-['Plus_Jakarta_Sans'] text-base text-white font-extrabold leading-tight">₹2.4+ Cr</div>
                  <div className="text-[11px] text-[#94a3b8]">Escrow Transacted</div>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center p-2">
                <div className="w-10 h-10 rounded-xl bg-[#65f2b5]/15 flex items-center justify-center text-[#6ffbbe]">
                  <span className="material-symbols-outlined text-[24px]">verified_user</span>
                </div>
                <div className="text-left">
                  <div className="font-['Plus_Jakarta_Sans'] text-base text-white font-extrabold leading-tight">100% Safe</div>
                  <div className="text-[11px] text-[#94a3b8]">Banking Escrow Vault</div>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center p-2">
                <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff]">
                  <span className="material-symbols-outlined text-[24px]">timer</span>
                </div>
                <div className="text-left">
                  <div className="font-['Plus_Jakarta_Sans'] text-base text-white font-extrabold leading-tight">&lt; 15 Mins</div>
                  <div className="text-[11px] text-[#94a3b8]">Avg. Transfer Time</div>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center p-2">
                <div className="w-10 h-10 rounded-xl bg-[#6f00be]/30 flex items-center justify-center text-[#ddb7ff]">
                  <span className="material-symbols-outlined text-[24px]">groups</span>
                </div>
                <div className="text-left">
                  <div className="font-['Plus_Jakarta_Sans'] text-base text-white font-extrabold leading-tight">50,000+</div>
                  <div className="text-[11px] text-[#94a3b8]">Indian Gamers</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. POPULAR GAMES SECTION */}
      <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-[#00f0ff]/10 text-[#00f0ff] font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider">
                Top Franchises
              </span>
              <span className="text-xs text-[#94a3b8]">Verified India Region Accounts</span>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl lg:text-3xl text-white font-extrabold">
              Popular Games on GameXMarket
            </h2>
          </div>
          <button 
            onClick={() => navigate('buy')}
            className="inline-flex items-center gap-1.5 text-[#00f0ff] hover:text-white font-['Plus_Jakarta_Sans'] font-bold text-sm transition-colors bg-transparent border-0 cursor-pointer"
          >
            <span>View all categories</span>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>

        {/* 4 Cards Grid from Stitch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: CoC */}
          <div 
            onClick={() => navigate('buy', { filterGame: 'coc' })}
            className="group relative rounded-2xl bg-[#171b26] overflow-hidden hover:bg-[#262a35] transition-all duration-300 hover:-translate-y-1.5 border border-white/[0.08] hover:border-[#00f0ff]/40 shadow-md hover:shadow-[0_12px_28px_rgba(0,240,255,0.15)] flex flex-col justify-between cursor-pointer"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjQKR3R8theRP1XlymI4W9SS-sIrhRFQmIJAqUu9U4ZKzNYFhhDfYFleO7cW3gZiqruMAnI_irnwaMkAjiS1Fvo-BdumNJk5GauIaOuDFSM8sl_ql_Fd-Lxrhb4MWmp5HF7ufrPdORtSABUtHE9sKg7qrpgkt65l201yHZumkFG00AWyfIn6T9EtxWhvmI1aziz4QXSAJQq0LUvs4sgwikTwPULlP2-R38BYHZepHn')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#171b26] via-transparent to-transparent"></div>
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0a0e18]/80 backdrop-blur-md text-[#00f0ff] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 border border-white/[0.08]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span> Supercell ID
              </span>
              <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-[#313540]/90 text-white text-[11px] font-bold">
                1,420 Listings
              </span>
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg text-white font-bold group-hover:text-[#00f0ff] transition-colors mb-1">
                  Clash of Clans
                </h3>
                <p className="text-xs text-[#94a3b8] line-clamp-2 mb-4">
                  Town Hall 16 max, level 95 heroes, 10,000+ gems, local India clan ready with full email transfer.
                </p>
              </div>
              <div className="pt-2 flex items-center justify-between border-t border-white/[0.06]">
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#94a3b8]">Starting from</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-lg text-[#00f0ff] font-extrabold">₹799</span>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-[#262a35] group-hover:bg-[#00f0ff] text-white group-hover:text-[#002022] text-xs font-bold transition-all inline-flex items-center gap-1">
                  Browse →
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: BGMI */}
          <div 
            onClick={() => navigate('buy', { filterGame: 'bgmi' })}
            className="group relative rounded-2xl bg-[#171b26] overflow-hidden hover:bg-[#262a35] transition-all duration-300 hover:-translate-y-1.5 border border-white/[0.08] hover:border-[#00f0ff]/40 shadow-md hover:shadow-[0_12px_28px_rgba(0,240,255,0.15)] flex flex-col justify-between cursor-pointer"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDy3mX-UyoPQYpNfyTied8AisFzlXLNoyo9MWqDHjxiYedkvgxn_EjMGw63Zir1bnEDk3l2Xw5zDvBo22aDxniAqaPNIV4i2EbxyqFKOXoRUMgcJ9DL4oU8jgD0wv2Hv7s7Ws5eLaVnZwZ7HJb9Xszjl4m8dwGOQL8jJq9k6MZdlSw5to9Y-vyqxCLl619fysOrsVH2hSOiMoCMQGMan6XTxGKQCpASKf0lsC9asPCg')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#171b26] via-transparent to-transparent"></div>
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0a0e18]/80 backdrop-blur-md text-[#ddb7ff] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 border border-white/[0.08]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ddb7ff]"></span> Krafton ID
              </span>
              <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-[#313540]/90 text-white text-[11px] font-bold">
                3,890 Listings
              </span>
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg text-white font-bold group-hover:text-[#00f0ff] transition-colors mb-1">
                  BGMI / PUBG Mobile
                </h3>
                <p className="text-xs text-[#94a3b8] line-clamp-2 mb-4">
                  Conqueror frame titles, Glacier M416 Lv.7, Pharaoh X-Suit 6-Star, rare mythic emotes & voice packs.
                </p>
              </div>
              <div className="pt-2 flex items-center justify-between border-t border-white/[0.06]">
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#94a3b8]">Starting from</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-lg text-[#00f0ff] font-extrabold">₹1,299</span>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-[#262a35] group-hover:bg-[#00f0ff] text-white group-hover:text-[#002022] text-xs font-bold transition-all inline-flex items-center gap-1">
                  Browse →
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Free Fire */}
          <div 
            onClick={() => navigate('buy', { filterGame: 'ff' })}
            className="group relative rounded-2xl bg-[#171b26] overflow-hidden hover:bg-[#262a35] transition-all duration-300 hover:-translate-y-1.5 border border-white/[0.08] hover:border-[#00f0ff]/40 shadow-md hover:shadow-[0_12px_28px_rgba(0,240,255,0.15)] flex flex-col justify-between cursor-pointer"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAN_z3r2PZ_8011Q9snYDbnUAqUrhGFLPHKKO7OyRZynNByJff79FiL5Kf9NJpND3tBoA9UCK33J0KIMKIt5ZfxkvoZXZJCm_pMR0Jc7M6PbHPiRIJ7E80BOVS8PyFZmquyrW_S8Cz8fWDmQeCtdtAAVVnSPZrlBUgy_W_a18m8zG7z9GS7jPyyDDjVKQQPSbN6wYpVV8GET8r7ULfQdNTCu8FA5EWG4g7nLZHkB0R3')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#171b26] via-transparent to-transparent"></div>
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0a0e18]/80 backdrop-blur-md text-[#6ffbbe] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 border border-white/[0.08]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6ffbbe]"></span> Garena Link
              </span>
              <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-[#313540]/90 text-white text-[11px] font-bold">
                2,150 Listings
              </span>
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg text-white font-bold group-hover:text-[#00f0ff] transition-colors mb-1">
                  Free Fire MAX
                </h3>
                <p className="text-xs text-[#94a3b8] line-clamp-2 mb-4">
                  Grandmaster rank, MP40 Cobra maxed, Criminal Bundle sets, 70+ Evo guns, Season 1-2 badges.
                </p>
              </div>
              <div className="pt-2 flex items-center justify-between border-t border-white/[0.06]">
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#94a3b8]">Starting from</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-lg text-[#00f0ff] font-extrabold">₹499</span>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-[#262a35] group-hover:bg-[#00f0ff] text-white group-hover:text-[#002022] text-xs font-bold transition-all inline-flex items-center gap-1">
                  Browse →
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: CODM */}
          <div 
            onClick={() => navigate('buy', { filterGame: 'codm' })}
            className="group relative rounded-2xl bg-[#171b26] overflow-hidden hover:bg-[#262a35] transition-all duration-300 hover:-translate-y-1.5 border border-white/[0.08] hover:border-[#00f0ff]/40 shadow-md hover:shadow-[0_12px_28px_rgba(0,240,255,0.15)] flex flex-col justify-between cursor-pointer"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA54tDKSjvyCqtFJLlOwgIJofX8eJjJHBOEj_X-pTV-7mh7WbN8FWwWoLRJGjxxx5jo2IxIOxyaBByz_YgOfoH54n7gK6Hn7zVAmx0g6AK3RLocHP3o7Db12aE0ZEtgrlxJapB7xoJ21r7DOfFyjrBf23WH5LKW1tZDFQUhOoHd8c7V0b-_K9tfDpTIH8fQSau2fN4sS_RwwiGOohfpkWb4zjuH3gx_uO1qE059BYUb')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#171b26] via-transparent to-transparent"></div>
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0a0e18]/80 backdrop-blur-md text-[#00f0ff] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 border border-white/[0.08]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span> Activision ID
              </span>
              <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-[#313540]/90 text-white text-[11px] font-bold">
                980 Listings
              </span>
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg text-white font-bold group-hover:text-[#00f0ff] transition-colors mb-1">
                  Call of Duty Mobile
                </h3>
                <p className="text-xs text-[#94a3b8] line-clamp-2 mb-4">
                  Damascus camo unlocked, Mythic Krig 6 & Switchblade, Legendary Ghost skin, 12x Legendary MP & BR.
                </p>
              </div>
              <div className="pt-2 flex items-center justify-between border-t border-white/[0.06]">
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#94a3b8]">Starting from</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-lg text-[#00f0ff] font-extrabold">₹1,499</span>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-[#262a35] group-hover:bg-[#00f0ff] text-white group-hover:text-[#002022] text-xs font-bold transition-all inline-flex items-center gap-1">
                  Browse →
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FEATURED LISTINGS GRID */}
      <section className="w-full bg-[#0a0e18] py-16" id="featured-listings">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[#00f0ff] text-[20px]">local_fire_department</span>
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-extrabold text-[#00f0ff] uppercase tracking-wider">
                  Instant Transfer Verified
                </span>
              </div>
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl lg:text-3xl text-white font-extrabold">
                Featured & Trending Account Drops
              </h2>
              <p className="text-sm text-[#94a3b8]">
                Every account is checked for authentic binding, 0% ban history, and protected by 24h buyer verification.
              </p>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <button 
                onClick={() => navigate('buy')} 
                className="px-4 py-1.5 rounded-full bg-[#00f0ff] text-[#002022] font-['Plus_Jakarta_Sans'] font-bold text-xs shrink-0 border-0 cursor-pointer"
              >
                All Trending
              </button>
              <button 
                onClick={() => navigate('buy', { filterGame: 'coc' })} 
                className="px-4 py-1.5 rounded-full bg-[#262a35] hover:bg-[#313540] text-[#dfe2f1] font-['Plus_Jakarta_Sans'] font-semibold text-xs shrink-0 border-0 cursor-pointer"
              >
                Town Hall 16
              </button>
              <button 
                onClick={() => navigate('buy', { filterGame: 'bgmi' })} 
                className="px-4 py-1.5 rounded-full bg-[#262a35] hover:bg-[#313540] text-[#dfe2f1] font-['Plus_Jakarta_Sans'] font-semibold text-xs shrink-0 border-0 cursor-pointer"
              >
                Conqueror BGMI
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAccounts.map(account => (
              <AccountCard key={account.id || account._id} account={account} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. FESTIVE DEALS BANNER */}
      <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-6 py-12">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#171b26] via-[#1c1f2a] to-[#262a35] border border-[#00f0ff]/30 p-8 lg:p-12 shadow-[0_10px_40px_rgba(0,240,255,0.1)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#93000a]/40 text-[#ffb4ab] text-xs font-bold uppercase tracking-wider mb-3">
              <Flame size={14} /> FESTIVE GAMING DEALS
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl lg:text-3xl text-white font-extrabold mb-2">
              SAVE UP TO ₹5,000 ON GLACIER M416 & CRIMINAL BUNDLES
            </h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              Top Indian verified sellers have dropped prices for this week only. Every transaction is covered by 100% RBI-compliant escrow vault protection with instant phone rebind.
            </p>
          </div>
          <button 
            onClick={() => navigate('buy')}
            className="px-8 py-3.5 rounded-xl bg-[#00f0ff] hover:opacity-90 text-[#002022] font-['Plus_Jakarta_Sans'] font-extrabold text-sm shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all shrink-0 border-0 cursor-pointer"
          >
            Claim Deals Now →
          </button>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="w-full bg-[#0a0e18] py-16">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3 py-1 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] text-xs font-bold uppercase tracking-wider">
              SAFE & TRANSPARENT
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl lg:text-3xl text-white font-extrabold mt-2 mb-2">
              HOW GAMEXMARKET WORKS
            </h2>
            <p className="text-sm text-[#94a3b8]">
              We eliminate social media scams through our supervised Indian Escrow framework.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#171b26] p-6 rounded-2xl border border-white/[0.08] text-center">
              <div className="w-12 h-12 rounded-full bg-[#00f0ff]/15 text-[#00f0ff] font-['Plus_Jakarta_Sans'] font-black text-xl flex items-center justify-center mx-auto mb-4 border border-[#00f0ff]/40">
                1
              </div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-base text-white font-bold mb-2">Choose Your Account</h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Filter verified BGMI, Free Fire, CoC and CODM profiles with transparent screenshots in ₹ INR.
              </p>
            </div>

            <div className="bg-[#171b26] p-6 rounded-2xl border border-white/[0.08] text-center">
              <div className="w-12 h-12 rounded-full bg-[#ddb7ff]/20 text-[#ddb7ff] font-['Plus_Jakarta_Sans'] font-black text-xl flex items-center justify-center mx-auto mb-4 border border-[#ddb7ff]/40">
                2
              </div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-base text-white font-bold mb-2">Pay via Escrow</h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Your payment is held in the GameXMarket vault. The seller does not receive a rupee until you confirm.
              </p>
            </div>

            <div className="bg-[#171b26] p-6 rounded-2xl border border-white/[0.08] text-center">
              <div className="w-12 h-12 rounded-full bg-[#65f2b5]/20 text-[#6ffbbe] font-['Plus_Jakarta_Sans'] font-black text-xl flex items-center justify-center mx-auto mb-4 border border-[#65f2b5]/40">
                3
              </div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-base text-white font-bold mb-2">Inspect & Bind Phone</h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Receive login details instantly. Log in, verify skins, change password, and link your Indian phone number.
              </p>
            </div>

            <div className="bg-[#171b26] p-6 rounded-2xl border border-white/[0.08] text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-300 font-['Plus_Jakarta_Sans'] font-black text-xl flex items-center justify-center mx-auto mb-4 border border-amber-500/40">
                4
              </div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-base text-white font-bold mb-2">Funds Released</h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Once satisfied, confirm order. Payout is dispatched directly to the seller's UPI or Indian Bank Account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REVIEWS & FAQS */}
      <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Reviews */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#00f0ff] uppercase tracking-wider">
                Real Indian Gamers
              </span>
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl text-white font-extrabold mb-6">
              Community Testimonials
            </h3>
            <div className="space-y-4">
              {CUSTOMER_REVIEWS.slice(0, 3).map(rev => (
                <div key={rev.id} className="p-4 rounded-xl bg-[#171b26] border border-white/[0.06]">
                  <div className="flex gap-1 mb-2">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 italic mb-3">"{rev.comment}"</p>
                  <div className="flex items-center gap-2.5">
                    <img src={rev.avatar} alt={rev.author} className="w-7 h-7 rounded-full object-cover" />
                    <div className="text-xs">
                      <span className="text-white font-bold block">{rev.author}</span>
                      <span className="text-[11px] text-[#00f0ff]">{rev.game} • {rev.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Accordion */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={16} color="#00f0ff" />
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#00f0ff] uppercase tracking-wider">
                Support & Answers
              </span>
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl text-white font-extrabold mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {FAQS.slice(0, 4).map((f, i) => (
                <div key={i} className="rounded-xl bg-[#171b26] border border-white/[0.06] overflow-hidden">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                    className="w-full p-4 text-left flex justify-between items-center text-white font-['Plus_Jakarta_Sans'] font-bold text-sm bg-transparent border-0 cursor-pointer"
                  >
                    <span>{f.q}</span>
                    {activeFaq === i ? <ChevronUp size={18} color="#00f0ff" /> : <ChevronDown size={18} color="#849495" />}
                  </button>
                  {activeFaq === i && (
                    <div className="px-4 pb-4 text-xs text-[#94a3b8] leading-relaxed border-t border-white/[0.04] pt-2">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
