---
name: GameXMarket Design System
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e18'
  surface-container-low: '#171b26'
  surface-container: '#1c1f2a'
  surface-container-high: '#262a35'
  surface-container-highest: '#313540'
  on-surface: '#dfe2f1'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dfe2f1'
  inverse-on-surface: '#2c303b'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#ddb7ff'
  on-secondary: '#490080'
  secondary-container: '#6f00be'
  on-secondary-container: '#d6a9ff'
  tertiary: '#d8ffe7'
  on-tertiary: '#003824'
  tertiary-container: '#65f2b5'
  on-tertiary-container: '#006d4a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb7ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6900b3'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0f131d'
  on-background: '#dfe2f1'
  surface-variant: '#313540'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-badge:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
  currency-numeric:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '800'
    lineHeight: 28px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

The design system embodies high-octane gaming energy grounded in the uncompromising reliability required for peer-to-peer financial transactions. Built specifically for the Indian gaming ecosystem, the identity bridges esports prestige with institutional fintech security. 

The aesthetic is **Cyber-Glassmorphism on Deep Obsidian**:
- **Atmosphere**: Deep, velvety black and slate tones (`#070A11`, `#0B0F19`) layered with cosmic mesh glows and frosted acrylic surfaces.
- **Energy**: Precise, razor-sharp electric cyan (`#00F0FF`) acting as the primary conduit for critical actions, price highlights, and active states, balanced with cyber violet and emerald trust anchors.
- **Fintech Rigor**: Instant reassurance through localized payment cues (UPI, PhonePe, GPay, Paytm badges) and verified escrow guarantees. The emotional register is elevated, high-stakes, yet impervious to fraud—making a ₹45,000 Valorant or BGMI account purchase feel as secure as a premier banking transfer.

## Colors

The palette operates in a calibrated high-contrast dark space to maximize visibility of dynamic gaming ranks, inventory badges, and transaction flows.

### Core Roles
- **Primary (`#00F0FF` - Electric Cyan)**: Drives the primary transactional momentum. Used for primary CTAs ("Buy Now", "List Account"), active navigation states, verified seller borders, and highlighted listing values.
- **Secondary (`#A855F7` - Cyber Purple)**: Denotes rarity tiers (Mythic/Legendary skins), promotional badges, and secondary gaming stat accents.
- **Tertiary (`#10B981` - Emerald Green)**: Exclusively reserves visual authority for success states, escrow protection seals, instant-delivery verification, and verified seller trust metrics.
- **Neutral (`#0B0F19` - Deep Slate Obsidian)**: The foundational canvas. Extended across surface elevations:
  - Base Canvas: `#070A11`
  - Card & Container Surface: `#0E1424` (85% opacity with 16px blur)
  - Elevated Popovers & Drawers: `#161F36`

### Text & Accents
- **Text Primary**: `#F8FAFC` (98% contrast against canvas)
- **Text Secondary**: `#94A3B8` (Subtitles, parameter keys, game titles)
- **Border Default**: `rgba(255, 255, 255, 0.08)`
- **Border Glow**: `rgba(0, 240, 255, 0.35)`

## Typography

Typography balances tactical aggression with transactional legibility:
- **Headlines & Values (`Plus Jakarta Sans`)**: Delivers geometric presence, sharp structural cuts, and high-impact authority. Used for product titles, account stat numbers, and Indian Rupee (`₹`) price outputs.
- **Body & Data Grid (`Inter`)**: Provides neutral, friction-free readability across dense inventory tables, transaction receipts, safety checklists, and seller reviews.
- **Numbers & Currencies**: All financial values require tabular figures (`font-variant-numeric: tabular-nums`) to align Indian Rupee transactions cleanly across lists.

## Layout & Spacing

The layout adopts a disciplined fluid grid engineered for responsive marketplace browsing:
- **Mobile (< 768px)**: 4 columns, `margin: 1rem`, `gutter: 1rem`. Bottom sticky CTA docks are mandatory for checkout and messaging.
- **Tablet (768px – 1024px)**: 8 columns, `margin: 1.5rem`, `gutter: 1.25rem`. Account inventory shifts to dual-column cards.
- **Desktop (> 1024px)**: 12 columns, max-width `1280px` centered, `margin: 2.5rem`, `gutter: 1.5rem`. Enables 3 or 4-column marketplace grid layouts with persistent filter sidebars.

Spacing tokens follow a strict 4px/8px rhythm. Component internal vertical paddings default to `space-sm` (8px) or `space-md` (16px), keeping content dense and scan-friendly for gaming inventories.

## Elevation & Depth

Visual hierarchy uses frosted glassmorphic layering and controlled luminescent glows instead of drop shadows:

1. **Surface 0 (Canvas)**: `#070A11` accented with faint radial meshes (`radial-gradient(circle at 50% 0%, rgba(0, 240, 255, 0.08) 0%, transparent 60%)`).
2. **Surface 1 (Base Cards / Inventory Items)**: Background `rgba(14, 20, 36, 0.75)` with `backdrop-filter: blur(12px)` and border `1px solid rgba(255, 255, 255, 0.08)`.
3. **Surface 2 (Hover / Active Listing)**: Border transitions to `rgba(0, 240, 255, 0.5)` with an ambient cyan aura: `box-shadow: 0 0 24px -4px rgba(0, 240, 255, 0.2)`.
4. **Surface 3 (Modals / Sticky Escrow Dock)**: Background `rgba(22, 31, 54, 0.95)` with `backdrop-filter: blur(20px)`, border `1px solid rgba(255, 255, 255, 0.14)`, and elevated soft shadow `0 20px 40px -10px rgba(0, 0, 0, 0.8)`.

## Shapes

The roundedness level is **2 (Rounded)**, creating balanced corner geometry suited for modern digital interfaces:
- **Base UI & Buttons**: `0.5rem` (8px). Delivers a modern, engineered edge that avoids being bubbly while remaining friendly.
- **Cards & Modals (`rounded-lg`)**: `1rem` (16px). Creates smooth visual containers for layered game cards and checkout modals.
- **Rarity & Stat Badges (`rounded-sm`)**: `0.25rem` (4px). Provides crisp tags for parameters like "TH16", "Conqueror", or "Level 80".
- **Avatar & Verification Rings**: Fully circular (`rounded-full`) with a 2px offset border.

## Components

### 1. Buttons
- **Primary (Action/Checkout)**: Solid Electric Cyan (`#00F0FF`) with deep dark text (`#070A11`), font weight 700. On hover: slight scale (`1.02`) and cyan glow (`0 0 20px rgba(0, 240, 255, 0.4)`).
- **Secondary (Escrow/Details)**: Transparent background, `1.5px` border in `rgba(0, 240, 255, 0.4)`, text `#00F0FF`.
- **Tertiary / Ghost**: Subtle slate background `rgba(255, 255, 255, 0.04)` with `#94A3B8` text, shifting to white on hover.

### 2. Gaming Stat Badges & Chips
- **Rarity Badges**: Compact pill layout with uppercase typography (`label-badge`).
  - *Mythic/Skin Level*: Purple glow background `rgba(168, 85, 247, 0.15)`, text `#C084FC`, border `rgba(168, 85, 247, 0.3)`.
  - *Game Rank (e.g., TH16, Conqueror, Immortal)*: Cyan tint `rgba(0, 240, 255, 0.12)`, text `#00F0FF`, border `rgba(0, 240, 255, 0.3)`.
  - *Trust/Instant Delivery*: Emerald tint `rgba(16, 185, 129, 0.15)`, text `#34D399`, border `rgba(16, 185, 129, 0.3)`.

### 3. Account Marketplace Cards
- Glass background with an aspect-ratio-locked game banner image (16:9).
- Prominent INR price tag in `currency-numeric` format (e.g., `₹12,499`).
- Seller trust strip containing star rating (`★ 4.9`), verified badge, and transaction count.
- Quick summary row featuring key stats (e.g., "Level 78", "12 Mythics", "Full Access").

### 4. Input Fields & Search
- Inputs feature `rgba(255, 255, 255, 0.04)` fill with crisp `1px` borders (`rgba(255, 255, 255, 0.1)`).
- Focused state transitions border to `#00F0FF` with a subtle inner cyan sheen.
- Search includes contextual game filters (e.g., "BGMI", "Valorant", "CoD Mobile", "Clash of Clans").

### 5. Indian Payment Strip
- Integrated checkout trust container displaying localized payment options: UPI icon, Google Pay, PhonePe, and Paytm logos framed in crisp monochrome pills with a green "100% Escrow Protected" seal.