// Mock Data for GameXMarket - Gaming Account Buying & Selling Website (100% ₹ INR)

export const POPULAR_GAMES = [
  {
    id: 'bgmi',
    name: 'PUBG Mobile / BGMI',
    slug: 'bgmi',
    category: 'Battle Royale',
    activeListings: 1420,
    minPrice: 799,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    popularTags: ['Glacier M416', 'Conqueror', 'X-Suit', 'RP Max', 'Fool M416'],
    description: 'Battlegrounds Mobile India & PUBG Mobile accounts with rare X-Suits, upgradable gun skins, and Conqueror titles.'
  },
  {
    id: 'freefire',
    name: 'Free Fire MAX',
    slug: 'freefire',
    category: 'Battle Royale',
    activeListings: 980,
    minPrice: 499,
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1600&q=80',
    popularTags: ['Cobra MP40', 'Criminal Bundle', 'Evo Gun Max', 'Grandmaster', 'Hip Hop'],
    description: 'Free Fire accounts packed with iconic Evo weapon skins, rare incubator sets, and Season 1-2 elite passes.'
  },
  {
    id: 'coc',
    name: 'Clash of Clans',
    slug: 'coc',
    category: 'Strategy',
    activeListings: 650,
    minPrice: 999,
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1600&q=80',
    popularTags: ['Town Hall 16', 'Max Heroes', 'Supercell ID', 'Local India', 'Gems 10k+'],
    description: 'Verified Supercell ID accounts with maxed Town Hall 15 & 16, epic hero equipment, and 500+ war stars.'
  },
  {
    id: 'codm',
    name: 'Call of Duty Mobile',
    slug: 'codm',
    category: 'FPS / Battle Royale',
    activeListings: 510,
    minPrice: 1299,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80',
    popularTags: ['Mythic M13', 'Damascus', 'Legendary Ghost', 'CP Loaded', 'Global / India'],
    description: 'Elite CODM profiles featuring Mythic weapons, Damascus mastery camouflage, and Legendary operator skins.'
  }
];

export const INITIAL_ACCOUNTS = [
  {
    id: 'acc-1',
    title: 'BGMI Conqueror S19 | Glacier M416 Lv7 Max | Pharaoh X-Suit 6-Star | 18 Upgradables',
    game: 'PUBG Mobile / BGMI',
    gameId: 'bgmi',
    level: 78,
    price: 18499,
    originalPrice: 24999,
    discountPercentage: 26,
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    isVerifiedSeller: true,
    instantDelivery: true,
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      'Glacier M416 (Level 7 Max with On-Hit Effect)',
      'Pharaoh X-Suit (6-Star Radiant Max)',
      'Conqueror S19 & C1S3 Frame & Title',
      'Fool M416 Lv4 Kill Message',
      'Godzilla AWM Lv4',
      'Single Link Twitter (Fully Safe & Changeable)'
    ],
    specs: {
      accountLevel: 'Level 78',
      tier: 'Ace Dominator / Ex-Conqueror',
      skinsCount: 240,
      characters: 'Sara, Andy, Victor, Carlo (All Max)',
      mythicItems: 34,
      serverRegion: 'India Local',
      loginMethod: 'Twitter Link (Email & Phone changeable)'
    },
    description: 'One of the most stacked BGMI accounts in India! Level 7 Glacier M416 with custom hit and loot crate effects, 6-Star Pharaoh X-Suit, 34 Mythic outfits, and pure Indian server MMR. Single social link login with no secondary locks. 100% Escrow protected with instant credential delivery.',
    seller: {
      id: 'sel-101',
      name: 'Vikram "Godfather" Gaming',
      rating: 4.96,
      reviewsCount: 312,
      completedOrders: 420,
      memberSince: 'March 2022',
      location: 'Pune, Maharashtra',
      badge: 'Pro Tier Seller',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80'
    },
    createdAt: '2026-11-18'
  },
  {
    id: 'acc-2',
    title: 'Free Fire MAX | Yellow & Red Criminal Bundles | Cobra MP40 Max Lv7 | Season 2 Elite Pass',
    game: 'Free Fire MAX',
    gameId: 'freefire',
    level: 74,
    price: 9499,
    originalPrice: 13000,
    discountPercentage: 27,
    isFeatured: true,
    isTrending: true,
    isBestSeller: false,
    isVerifiedSeller: true,
    instantDelivery: true,
    images: [
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      'Original Yellow & Red Criminal Bundles',
      'Predatory Cobra MP40 Level 7 Max',
      'Blue Flame Draco AK Lv7',
      'Season 2 Hip Hop Elite Pass & Old Badges',
      'Grandmaster Rank S24 Star Pin',
      'Google Login with Full Ownership Transfer'
    ],
    specs: {
      accountLevel: 'Level 74',
      tier: 'Grandmaster (32 Stars)',
      skinsCount: 310,
      characters: 'Alok, Chrono, K, Homer (All Awakened)',
      mythicItems: 48,
      serverRegion: 'India Server (IN)',
      loginMethod: 'Google Account (Password & 2FA Transfer)'
    },
    description: 'Rare OG Free Fire MAX profile! Features both genuine Yellow Criminal and Red Criminal sets along with maxed Cobra MP40 and Draco AK. Grandmaster ranking with high K/D ratio. Clean email bind with zero warnings.',
    seller: {
      id: 'sel-102',
      name: 'Aditya "Shadow" Roy',
      rating: 4.88,
      reviewsCount: 184,
      completedOrders: 215,
      memberSince: 'July 2022',
      location: 'Kolkata, West Bengal',
      badge: 'Verified Merchant',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
    },
    createdAt: '2026-11-19'
  },
  {
    id: 'acc-3',
    title: 'Clash of Clans Town Hall 16 Max Base | 95/95/70/45 Heroes | 12k Gems | India Local',
    game: 'Clash of Clans',
    gameId: 'coc',
    level: 242,
    price: 11999,
    originalPrice: 15999,
    discountPercentage: 25,
    isFeatured: true,
    isTrending: false,
    isBestSeller: true,
    isVerifiedSeller: true,
    instantDelivery: true,
    images: [
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      'Town Hall 16 Max Defense & Walls',
      'Barbarian King 95, Archer Queen 95, Grand Warden 70, RC 45',
      'Giant Gauntlet & Frozen Arrow Epic Equipments Maxed',
      '12,400+ Green Gems in Reserve',
      'Builder Base 10 Max',
      'Supercell ID on Fresh Dedicated Gmail'
    ],
    specs: {
      accountLevel: 'Level 242 (TH16)',
      tier: 'Legend League (5400+ Trophies)',
      skinsCount: 22,
      characters: '4 Maxed Heroes + 6 Pets Lv10',
      mythicItems: 14,
      serverRegion: 'India Local Leaderboard',
      loginMethod: 'Supercell ID with dedicated Gmail'
    },
    description: 'Pristine competitive CoC TH16 account! Defense 100% maxed, all epic hero equipment at Level 27 max. Over 12,000 gems ready for name change or instant upgrades. War stars 1,800+. Delivered with fresh Google account credentials.',
    seller: {
      id: 'sel-103',
      name: 'Rohan "ClashKing" Sharma',
      rating: 4.98,
      reviewsCount: 520,
      completedOrders: 680,
      memberSince: 'January 2021',
      location: 'Delhi NCR',
      badge: 'Super Elite Seller',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80'
    },
    createdAt: '2026-11-20'
  },
  {
    id: 'acc-4',
    title: 'CODM Mythic M13 Morningstar Max | Mythic Krig 6 Ice Drake | Legendary Ghost | 14 Legendaries',
    game: 'Call of Duty Mobile',
    gameId: 'codm',
    level: 200,
    price: 14500,
    originalPrice: 19000,
    discountPercentage: 24,
    isFeatured: true,
    isTrending: true,
    isBestSeller: false,
    isVerifiedSeller: true,
    instantDelivery: false,
    images: [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      'Mythic M13 Morningstar Level 7 Max',
      'Mythic Krig 6 Ice Drake Max',
      'Mythic DL Q33 Lotus Flames',
      'Legendary Ghost with Riley Dog Companion',
      'Damascus Camo Unlocked on All Primaries',
      'Activision Account Single Link'
    ],
    specs: {
      accountLevel: 'Level 200 (Max)',
      tier: 'Legendary Ranked MP & BR 12x',
      skinsCount: 190,
      characters: 'Legendary Ghost, Nikto Dark Side, Siren',
      mythicItems: 3,
      serverRegion: 'India / South Asia (Cheap CP prices)',
      loginMethod: 'Activision Account Link (Email changeable)'
    },
    description: 'Premium CODM account with 3 top-tier Mythics maxed out, 14 Legendary blueprints, and Damascus mastery skin. Located on Indian billing region where CP crates and lucky draws cost 1/3 of global prices. Activision login with full security questions transfer.',
    seller: {
      id: 'sel-104',
      name: 'Karan "SniperX" Mehta',
      rating: 4.91,
      reviewsCount: 95,
      completedOrders: 110,
      memberSince: 'October 2023',
      location: 'Bengaluru, Karnataka',
      badge: 'Verified Merchant',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    createdAt: '2026-11-17'
  },
  {
    id: 'acc-5',
    title: 'BGMI Glacier M416 Lv5 Kill Feed | Blood Raven X-Suit 4-Star | Fool Set | S14 Ace',
    game: 'PUBG Mobile / BGMI',
    gameId: 'bgmi',
    level: 69,
    price: 8999,
    originalPrice: 11500,
    discountPercentage: 22,
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isVerifiedSeller: true,
    instantDelivery: true,
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      'Glacier M416 Level 5 (Broadcast Kill Message)',
      'Blood Raven X-Suit 4-Star',
      'The Fool Set with Mask & Backpack',
      'Dragon Scale AWM Lv3',
      'Ace Title in 5 Consecutive Seasons'
    ],
    specs: {
      accountLevel: 'Level 69',
      tier: 'Ace Master',
      skinsCount: 165,
      characters: 'Sara & Victor Lv10',
      mythicItems: 18,
      serverRegion: 'India Server',
      loginMethod: 'Twitter Link Only'
    },
    description: 'High value BGMI account ready for rank pushing. Glacier M416 with famous broadcast kill feed banner, Blood Raven X-Suit, and rare vehicle skins. Clean account with verified seller escrow guarantee.',
    seller: {
      id: 'sel-101',
      name: 'Vikram "Godfather" Gaming',
      rating: 4.96,
      reviewsCount: 312,
      completedOrders: 420,
      memberSince: 'March 2022',
      location: 'Pune, Maharashtra',
      badge: 'Pro Tier Seller',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80'
    },
    createdAt: '2026-11-20'
  },
  {
    id: 'acc-6',
    title: 'Clash of Clans Town Hall 15 Semi-Max | 85/85/60/35 Heroes | Local IN | 4,200 Gems',
    game: 'Clash of Clans',
    gameId: 'coc',
    level: 215,
    price: 6499,
    originalPrice: 8500,
    discountPercentage: 24,
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isVerifiedSeller: true,
    instantDelivery: true,
    images: [
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      'Town Hall 15 Strong Defenses',
      'High level heroes & pets',
      '4,200+ Gems saved for free name change',
      'Clean Supercell ID linked to brand new Gmail',
      'War Stars 1,200+'
    ],
    specs: {
      accountLevel: 'Level 215 (TH15)',
      tier: 'Titan 1 / Champion',
      skinsCount: 15,
      characters: '4 Heroes + 4 Pets',
      mythicItems: 8,
      serverRegion: 'India Local',
      loginMethod: 'Supercell ID'
    },
    description: 'Perfect account for competitive clan wars. Semi-maxed TH15 with excellent defense and attack troop lab research. No third party logins attached. Fast handover within 5 minutes.',
    seller: {
      id: 'sel-103',
      name: 'Rohan "ClashKing" Sharma',
      rating: 4.98,
      reviewsCount: 520,
      completedOrders: 680,
      memberSince: 'January 2021',
      location: 'Delhi NCR',
      badge: 'Super Elite Seller',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80'
    },
    createdAt: '2026-11-19'
  },
  {
    id: 'acc-7',
    title: 'Free Fire MAX Budget Master | Green Criminal | Draco AK Lv4 | Season 5 Pass | 5,000 Likes',
    game: 'Free Fire MAX',
    gameId: 'freefire',
    level: 68,
    price: 3499,
    originalPrice: 4800,
    discountPercentage: 27,
    isFeatured: false,
    isTrending: true,
    isBestSeller: true,
    isVerifiedSeller: false,
    instantDelivery: true,
    images: [
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      'Original Green Criminal Outfit',
      'Blue Flame Draco AK47 Level 4 Kill Feed',
      'Old Season 5 Elite Pass',
      '5,800+ Profile Likes and High KD',
      'Facebook login with full email change'
    ],
    specs: {
      accountLevel: 'Level 68',
      tier: 'Heroic 3-Star',
      skinsCount: 145,
      characters: 'Alok, Wukong, Kelly, Moco',
      mythicItems: 12,
      serverRegion: 'India Server',
      loginMethod: 'Facebook Primary Link'
    },
    description: 'Great budget Free Fire account with the coveted Green Criminal suit and Draco AK. Excellent profile stats and high credibility.',
    seller: {
      id: 'sel-105',
      name: 'Mohit "ProGamer" Yadav',
      rating: 4.75,
      reviewsCount: 44,
      completedOrders: 52,
      memberSince: 'June 2023',
      location: 'Lucknow, Uttar Pradesh',
      badge: 'Active Seller',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    },
    createdAt: '2026-11-20'
  },
  {
    id: 'acc-8',
    title: 'CODM Budget Legendary | DL Q33 Bass Booster | AK-47 Wrath Black & Gold | 6x Legendary',
    game: 'Call of Duty Mobile',
    gameId: 'codm',
    level: 185,
    price: 4999,
    originalPrice: 6500,
    discountPercentage: 23,
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isVerifiedSeller: true,
    instantDelivery: true,
    images: [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      'Legendary DL Q33 Bass Booster Sniper',
      'Legendary AK-47 Wrath Black & Gold',
      '6 Battle Passes fully completed',
      'Manta Ray & Urban Tracker rare character skins',
      'Indian Server Region'
    ],
    specs: {
      accountLevel: 'Level 185',
      tier: 'Master 5 / Ex-Legendary',
      skinsCount: 110,
      characters: 'Urban Tracker, Manta Ray, Ghost Jawbone',
      mythicItems: 2,
      serverRegion: 'India',
      loginMethod: 'Activision ID'
    },
    description: 'Clean COD Mobile account with two best-in-slot legendary guns. Perfect for sniper mains and search-and-destroy specialists.',
    seller: {
      id: 'sel-104',
      name: 'Karan "SniperX" Mehta',
      rating: 4.91,
      reviewsCount: 95,
      completedOrders: 110,
      memberSince: 'October 2023',
      location: 'Bengaluru, Karnataka',
      badge: 'Verified Merchant',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    createdAt: '2026-11-16'
  },
  {
    id: 'acc-9',
    title: 'Clash of Clans Town Hall 14 Max | 80/80/55/30 Heroes | 6 Builders Unlocked | Supercell ID',
    game: 'Clash of Clans',
    gameId: 'coc',
    level: 198,
    price: 4299,
    originalPrice: 5500,
    discountPercentage: 22,
    isFeatured: false,
    isTrending: true,
    isBestSeller: false,
    isVerifiedSeller: true,
    instantDelivery: true,
    images: [
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      'Town Hall 14 100% Maxed Base',
      'OTTO 6th Builder Unlocked',
      'Level 80 King & Queen, 55 Warden, 30 RC',
      'Scenery & Custom Hero skins included',
      'Full email access provided'
    ],
    specs: {
      accountLevel: 'Level 198 (TH14)',
      tier: 'Champion 1',
      skinsCount: 10,
      characters: '4 Heroes + Pets',
      mythicItems: 4,
      serverRegion: 'India Local',
      loginMethod: 'Supercell ID'
    },
    description: 'Maxed Town Hall 14 with 6th builder unlocked and high level heroes. Ready for immediate upgrade to TH15 or TH16.',
    seller: {
      id: 'sel-103',
      name: 'Rohan "ClashKing" Sharma',
      rating: 4.98,
      reviewsCount: 520,
      completedOrders: 680,
      memberSince: 'January 2021',
      location: 'Delhi NCR',
      badge: 'Super Elite Seller',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80'
    },
    createdAt: '2026-11-15'
  },
  {
    id: 'acc-10',
    title: 'BGMI Budget Entry | Glacier M416 Lv1 | Season 17 Ace | 40+ Gun Lab Skins | Cheap Price',
    game: 'PUBG Mobile / BGMI',
    gameId: 'bgmi',
    level: 61,
    price: 2499,
    originalPrice: 3500,
    discountPercentage: 29,
    isFeatured: false,
    isTrending: false,
    isBestSeller: true,
    isVerifiedSeller: true,
    instantDelivery: true,
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      'Glacier M416 Base Skin (Level 1 Ready for Upgrade)',
      'Season 17 Ace Parachute & Title',
      '40+ Weapon Finishes & Outfits',
      'Single Social Login',
      'Instant Email Handover'
    ],
    specs: {
      accountLevel: 'Level 61',
      tier: 'Crown 2',
      skinsCount: 85,
      characters: 'Victor Max',
      mythicItems: 4,
      serverRegion: 'India Server',
      loginMethod: 'Twitter Link'
    },
    description: 'Looking to get your hands on the legendary Glacier M416 without breaking the bank? This account features the base Glacier M416 ready to level up with materials.',
    seller: {
      id: 'sel-101',
      name: 'Vikram "Godfather" Gaming',
      rating: 4.96,
      reviewsCount: 312,
      completedOrders: 420,
      memberSince: 'March 2022',
      location: 'Pune, Maharashtra',
      badge: 'Pro Tier Seller',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80'
    },
    createdAt: '2026-11-21'
  },
  {
    id: 'acc-11',
    title: 'Free Fire MAX Top Criminal Blue | MP5 Platinum Divinity Lv7 Max | Evo UMP | OG Account',
    game: 'Free Fire MAX',
    gameId: 'freefire',
    level: 71,
    price: 6999,
    originalPrice: 8999,
    discountPercentage: 22,
    isFeatured: false,
    isTrending: false,
    isBestSeller: false,
    isVerifiedSeller: true,
    instantDelivery: false,
    images: [
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      'Blue Top Criminal Suit & Special Emote',
      'MP5 Platinum Divinity Max Lv7',
      'Evo UMP Level 5',
      'Artic Blue and Samurai OG Sets',
      'Clean Gmail Login'
    ],
    specs: {
      accountLevel: 'Level 71',
      tier: 'Master 1-Star',
      skinsCount: 220,
      characters: 'Chrono, Tatsuya, Dimitri Maxed',
      mythicItems: 28,
      serverRegion: 'India Server',
      loginMethod: 'Google Account'
    },
    description: 'Rare Blue Top Criminal account with Max Evo MP5. Great collection of rare melee weapons and legendary emotes.',
    seller: {
      id: 'sel-102',
      name: 'Aditya "Shadow" Roy',
      rating: 4.88,
      reviewsCount: 184,
      completedOrders: 215,
      memberSince: 'July 2022',
      location: 'Kolkata, West Bengal',
      badge: 'Verified Merchant',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
    },
    createdAt: '2026-11-18'
  },
  {
    id: 'acc-12',
    title: 'Clash of Clans Town Hall 13 Full Max | 75/75/50/25 Heroes | Local IN | 6 Builders',
    game: 'Clash of Clans',
    gameId: 'coc',
    level: 182,
    price: 2899,
    originalPrice: 3800,
    discountPercentage: 24,
    isFeatured: false,
    isTrending: false,
    isBestSeller: true,
    isVerifiedSeller: true,
    instantDelivery: true,
    images: [
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      'Town Hall 13 100% Maxed Out',
      'Heroes Maxed for TH13: BK 75, AQ 75, GW 50, RC 25',
      '6th Builder Unlocked',
      '3,100 Gems Included',
      'Supercell ID on New Email'
    ],
    specs: {
      accountLevel: 'Level 182 (TH13)',
      tier: 'Master 1',
      skinsCount: 8,
      characters: '4 Heroes Maxed',
      mythicItems: 2,
      serverRegion: 'India Local',
      loginMethod: 'Supercell ID'
    },
    description: 'Best starter competitive base! Maxed defenses, maxed laboratory spells and troops. 100% safe transaction.',
    seller: {
      id: 'sel-103',
      name: 'Rohan "ClashKing" Sharma',
      rating: 4.98,
      reviewsCount: 520,
      completedOrders: 680,
      memberSince: 'January 2021',
      location: 'Delhi NCR',
      badge: 'Super Elite Seller',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80'
    },
    createdAt: '2026-11-14'
  }
];

export const INDIAN_PAYMENT_METHODS = [
  {
    id: 'upi',
    name: 'UPI / QR Code',
    badge: 'Fastest (0% Fee)',
    icon: 'QrCode',
    apps: ['Google Pay', 'PhonePe', 'Paytm', 'BHIM UPI', 'Cred UPI']
  },
  {
    id: 'gpay',
    name: 'Google Pay',
    badge: 'Instant Transfer',
    icon: 'Smartphone',
    apps: ['GPay Fast Pay']
  },
  {
    id: 'phonepe',
    name: 'PhonePe',
    badge: 'Recommended',
    icon: 'Smartphone',
    apps: ['PhonePe Wallet & UPI']
  },
  {
    id: 'paytm',
    name: 'Paytm Wallet / UPI',
    badge: 'Popular',
    icon: 'Wallet',
    apps: ['Paytm Payments']
  },
  {
    id: 'cards',
    name: 'Debit & Credit Cards',
    badge: 'All Major Indian Banks',
    icon: 'CreditCard',
    apps: ['RuPay', 'Visa', 'Mastercard']
  },
  {
    id: 'netbanking',
    name: 'Net Banking',
    badge: '50+ Indian Banks',
    icon: 'Building2',
    apps: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak']
  },
  {
    id: 'wallet',
    name: 'GameXMarket Wallet',
    badge: '1-Click Checkout',
    icon: 'Coins',
    apps: ['Instant Balance Deduction']
  }
];

export const INITIAL_USER_ORDERS = [
  {
    id: 'GXM-89421',
    game: 'PUBG Mobile / BGMI',
    accountTitle: 'BGMI Glacier M416 Lv5 Kill Feed | Blood Raven X-Suit',
    date: '2026-11-19 18:42',
    amount: 8999,
    paymentMethod: 'UPI (Google Pay)',
    paymentStatus: 'Paid',
    orderStatus: 'Credentials Delivered',
    seller: 'Vikram "Godfather" Gaming',
    credentials: {
      loginId: 'bgmi_godfather_sec8@gmail.com',
      password: '•••••••••••• (Reveal)',
      plainPassword: 'GamerXSecure2026#',
      backupCodes: '482910, 938201, 104928',
      handoverNotes: 'Please change password immediately and link your Indian phone number under Twitter account settings.'
    }
  },
  {
    id: 'GXM-88104',
    game: 'Free Fire MAX',
    accountTitle: 'Free Fire MAX Budget Master | Green Criminal | Draco AK Lv4',
    date: '2026-11-12 14:15',
    amount: 3499,
    paymentMethod: 'PhonePe UPI',
    paymentStatus: 'Paid',
    orderStatus: 'Completed',
    seller: 'Mohit "ProGamer" Yadav',
    credentials: {
      loginId: 'mohit.ff.trade99@facebook.com',
      password: '•••••••••••• (Reveal)',
      plainPassword: 'FreeFireMax#2026India',
      backupCodes: '849102, 192834',
      handoverNotes: 'Facebook email primary address swapped to customer email. Escrow successfully completed.'
    }
  }
];

export const INITIAL_TRANSACTIONS = [
  {
    id: 'TXN-994182',
    type: 'Escrow Purchase',
    description: 'Purchased BGMI Glacier Account #acc-5',
    amount: -8999,
    date: '2026-11-19 18:42',
    method: 'UPI (GPay)',
    status: 'Completed'
  },
  {
    id: 'TXN-993410',
    type: 'Wallet Deposit',
    description: 'Added money via Paytm UPI',
    amount: +10000,
    date: '2026-11-19 18:35',
    method: 'Paytm UPI',
    status: 'Completed'
  },
  {
    id: 'TXN-991204',
    type: 'Seller Earnings',
    description: 'Sale payout for CoC TH14 Base (Post 8% Commission)',
    amount: +3955,
    date: '2026-11-15 11:20',
    method: 'Direct Escrow Release',
    status: 'Completed'
  },
  {
    id: 'TXN-988921',
    type: 'Bank Withdrawal',
    description: 'Payout to HDFC Bank A/C ending in 4102',
    amount: -3500,
    date: '2026-11-16 16:40',
    method: 'IMPS Bank Transfer',
    status: 'Completed'
  }
];

export const INITIAL_PENDING_LISTINGS = [
  {
    id: 'pend-1',
    title: 'Free Fire MAX | Evo MP40 Cobra Lv6 | Golden Criminal | 12 Elite Passes',
    game: 'Free Fire MAX',
    gameId: 'freefire',
    level: 70,
    price: 7499,
    sellerName: 'Sameer Khan',
    sellerContact: '+91 98210 44321',
    status: 'Pending Review',
    submittedAt: '2026-11-21 11:15',
    specs: 'Level 70, 180 Skins, Google Login',
    notes: 'Seller provided full proof screenshot of lobby and login ownership.'
  },
  {
    id: 'pend-2',
    title: 'Clash of Clans TH16 Semi-Max | Local India | 5 Hero Equipments Epic',
    game: 'Clash of Clans',
    gameId: 'coc',
    level: 228,
    price: 9999,
    sellerName: 'Nitin Rawat',
    sellerContact: '+91 97112 88410',
    status: 'Pending Review',
    submittedAt: '2026-11-21 12:40',
    specs: 'Level 228, 4 Max Heroes, Supercell ID',
    notes: 'Account verification documents submitted. Local Indian leaderboard verified.'
  }
];

export const CUSTOMER_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Aman Verma',
    location: 'Delhi',
    game: 'PUBG Mobile / BGMI',
    rating: 5,
    comment: 'Got my Glacier M416 Lv7 account in under 4 minutes! The escrow system gave me complete peace of mind. Paid through PhonePe UPI seamlessly. Best Indian marketplace!',
    date: '2 days ago',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'rev-2',
    author: 'Rohan Deshmukh',
    location: 'Mumbai, Maharashtra',
    game: 'Clash of Clans',
    rating: 5,
    comment: 'Sold my Town Hall 15 account for ₹8,500. The funds reached my UPI within 1 hour after buyer inspected the Supercell ID. 100% genuine and safe platform.',
    date: '3 days ago',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'rev-3',
    author: 'Priyanshu Roy',
    location: 'Kolkata, WB',
    game: 'Free Fire MAX',
    rating: 5,
    comment: 'I was always scared of getting scammed on Telegram and Instagram. GameXMarket changed the game with verified Indian sellers and zero fraud guarantee. Highly recommended!',
    date: '5 days ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'rev-4',
    author: 'Sneha Sharma',
    location: 'Bengaluru, Karnataka',
    game: 'Call of Duty Mobile',
    rating: 5,
    comment: 'Bought a Mythic M13 CODM account for ₹14,500. Credentials came with step-by-step instructions on securing Activision ID. WhatsApp support was super responsive.',
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80'
  }
];

export const FAQS = [
  {
    q: 'How does the GameXMarket Escrow Protection work for Indian buyers and sellers?',
    a: 'When you purchase an account, your money is held securely in GameXMarket Escrow. The seller does not receive payment until you verify login credentials and confirm full ownership transfer. If anything is wrong, our dispute team refunds 100% of your amount to your original payment method (UPI / Bank).'
  },
  {
    q: 'Which Indian payment options are accepted on GameXMarket?',
    a: 'We accept all major Indian payment gateways: Instant UPI (Google Pay, PhonePe, Paytm, BHIM, Cred), RuPay, Visa, Mastercard Debit and Credit cards, and Net Banking across 50+ Indian banks. All prices are in Indian Rupees (₹ INR).'
  },
  {
    q: 'How fast do I receive the gaming account login details after payment?',
    a: 'Accounts marked with the "Instant Delivery" badge provide credentials within seconds on your screen and order dashboard. For custom transfers, the seller must deliver credentials within 30 minutes, supervised by our 24/7 support moderators.'
  },
  {
    q: 'What is the platform commission for sellers listing accounts?',
    a: 'GameXMarket charges a transparent 8% platform fee on successful sales. This fee covers payment gateway processing, automated escrow protection, and 24/7 fraud prevention. Listing an account is 100% free with no upfront costs.'
  },
  {
    q: 'Is buying and selling gaming accounts legal in India, and what are the publisher rules?',
    a: 'GameXMarket operates as a consumer technology and digital asset marketplace in compliance with Indian IT and electronic commerce norms. However, please note that some game publishers (such as Supercell, Krafton, Garena, Activision) have terms of service restricting account transfers. We provide buyer guidance and risk disclaimers before checkout so buyers and sellers make informed choices.'
  },
  {
    q: 'How do I withdraw my earnings to my Indian bank or UPI?',
    a: 'Once an order is marked complete, your earnings are credited to your GameXMarket wallet. You can click "Withdraw" and enter your UPI ID (e.g., yourname@oksbi / yourname@paytm) or Bank A/C number + IFSC. Payouts are dispatched via IMPS/UPI within 1-2 hours.'
  }
];

export const PLATFORM_STATS = {
  totalUsers: 14850,
  verifiedSellers: 1840,
  activeListings: 3560,
  completedOrders: 9420,
  totalRevenueINR: 2485000,
  satisfactionRate: '99.4%'
};
