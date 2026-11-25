import React from 'react';
import { 
  FileText, 
  ShieldCheck, 
  AlertTriangle, 
  HelpCircle, 
  Scale, 
  Lock, 
  DollarSign, 
  CheckCircle2 
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export const LegalPages = () => {
  const { legalTab, setLegalTab } = useMarketplace();

  const tabs = [
    { id: 'terms', label: 'Terms & Conditions' },
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'refund', label: 'Refund & Cancellation' },
    { id: 'seller-guidelines', label: 'Seller Guidelines' },
    { id: 'buyer-guidelines', label: 'Buyer Guidelines' },
    { id: 'dispute', label: 'Dispute Resolution' },
    { id: 'disclaimer', label: 'Game Publisher Disclaimer' }
  ];

  return (
    <div className="legal-page page-wrapper" style={{ paddingTop: '2.5rem' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span className="badge badge-cyan">Legal Compliance & Security</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>• Governed by Indian Information Technology Act</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#fff', textTransform: 'uppercase' }}>
            LEGAL, POLICIES & COMPLIANCE
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            Complete rules, consumer protections, escrow guarantees, and game publisher policy notices.
          </p>
        </div>

        {/* Layout: Sidebar Tabs + Document Reader */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2rem' }} className="legal-layout">
          
          {/* Left Navigation */}
          <aside>
            <div className="glass-card" style={{ padding: '1.25rem', borderRadius: '16px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.75rem' }}>
                Legal Documents
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {tabs.map(tab => {
                  const isActive = legalTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setLegalTab(tab.id)}
                      style={{
                        background: isActive ? 'rgba(0, 242, 254, 0.12)' : 'transparent',
                        color: isActive ? 'var(--neon-cyan)' : 'var(--text-muted)',
                        border: '1px solid',
                        borderColor: isActive ? 'var(--neon-cyan)' : 'transparent',
                        borderRadius: '8px',
                        padding: '0.65rem 0.9rem',
                        textAlign: 'left',
                        fontFamily: 'var(--font-gaming)',
                        fontSize: '0.98rem',
                        fontWeight: isActive ? 700 : 500,
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Right Document Body */}
          <main>
            <div className="glass-card" style={{ padding: '2.5rem', lineHeight: 1.7, color: 'var(--text-muted)', fontSize: '0.94rem' }}>
              
              {/* 1. TERMS & CONDITIONS */}
              {legalTab === 'terms' && (
                <div>
                  <h2 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1rem', textTransform: 'uppercase' }}>
                    1. TERMS AND CONDITIONS OF USE
                  </h2>
                  <p style={{ marginBottom: '1.25rem' }}>
                    Welcome to GameXMarket. By accessing or using this website, you agree to be bound by these Terms and Conditions. GameXMarket operates exclusively within the Republic of India and adheres to applicable electronic commerce and digital intermediary guidelines.
                  </p>

                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                    1.1 Role as Digital Intermediary
                  </h4>
                  <p style={{ marginBottom: '1.25rem' }}>
                    GameXMarket provides a secure escrow infrastructure connecting buyers and sellers of digital gaming account profiles. GameXMarket does not create, manufacture, or own the accounts listed by third-party sellers. All financial payments are conducted in Indian Rupees (₹ INR).
                  </p>

                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                    1.2 User Eligibility & Identity
                  </h4>
                  <p style={{ marginBottom: '1.25rem' }}>
                    Users must be at least 18 years of age or possess guardian authorization to transact on this platform. Users agree to provide truthful mobile numbers (+91) for OTP verification. Creating fraudulent listings or submitting stolen accounts will lead to permanent account suspension and reporting to Indian Cyber Crime authorities.
                  </p>
                </div>
              )}

              {/* 2. PRIVACY POLICY */}
              {legalTab === 'privacy' && (
                <div>
                  <h2 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1rem', textTransform: 'uppercase' }}>
                    2. PRIVACY & DATA PROTECTION POLICY
                  </h2>
                  <p style={{ marginBottom: '1.25rem' }}>
                    We take the privacy of our Indian gaming community seriously. We collect minimal personal data required to authenticate escrow transfers and comply with national regulations.
                  </p>

                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                    2.1 Information We Collect
                  </h4>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
                    <li>Full Name and Contact Email.</li>
                    <li>Indian Mobile Number for SMS OTP verification and WhatsApp delivery alerts.</li>
                    <li>UPI ID (VPA) or Bank Account Number & IFSC strictly for processing seller earnings withdrawals.</li>
                    <li>IP address and device information for security logging and anti-fraud monitoring.</li>
                  </ul>

                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                    2.2 Data Confidentiality of Account Credentials
                  </h4>
                  <p style={{ marginBottom: '1.25rem' }}>
                    Game login details (passwords, 2FA backup codes) are encrypted in our vault database with AES-256 standards and are only disclosed to the specific verified buyer upon order completion.
                  </p>
                </div>
              )}

              {/* 3. REFUND POLICY */}
              {legalTab === 'refund' && (
                <div>
                  <h2 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1rem', textTransform: 'uppercase' }}>
                    3. REFUND & CANCELLATION POLICY
                  </h2>
                  <p style={{ marginBottom: '1.25rem' }}>
                    Because digital gaming credentials carry unique transfer risks, our refund policy is governed strictly by the GameXMarket Escrow Protection Guarantee.
                  </p>

                  <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                    <strong style={{ color: 'var(--neon-emerald)', display: 'block', marginBottom: '4px' }}>
                      100% Full Refund Eligibility Window:
                    </strong>
                    Buyers are entitled to an immediate 100% refund of their ₹ INR payment if:
                    <ul style={{ paddingLeft: '1.25rem', marginTop: '6px' }}>
                      <li>The provided login credentials are invalid or incorrect.</li>
                      <li>The account specifications significantly differ from the listing (e.g. wrong Town Hall level, missing Glacier M416).</li>
                      <li>The seller fails to provide full security detachment within 60 minutes of purchase.</li>
                    </ul>
                  </div>

                  <p>
                    Refunds are dispatched back to the original Indian payment source (UPI ID or Bank Account) within 2 to 4 business hours upon dispute validation.
                  </p>
                </div>
              )}

              {/* 4. SELLER GUIDELINES */}
              {legalTab === 'seller-guidelines' && (
                <div>
                  <h2 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1rem', textTransform: 'uppercase' }}>
                    4. SELLER GUIDELINES & ESCROW OBLIGATIONS
                  </h2>
                  <p style={{ marginBottom: '1.25rem' }}>
                    Sellers are the lifeblood of GameXMarket. To maintain our 4.9-star reputation, all sellers must follow these rules:
                  </p>

                  <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
                    <li>You must be the original or lawful owner of the gaming account you list.</li>
                    <li>Remove all personal recovery phone numbers, emails, and two-factor authentication devices prior to delivering credentials.</li>
                    <li>Never attempt to reclaim, reset, or initiate an account recovery ticket with Supercell, Krafton, Garena, or Activision after sale.</li>
                    <li>Any account recall attempts will result in permanent blacklisting, forfeiture of all wallet funds, and legal notices.</li>
                  </ul>
                </div>
              )}

              {/* 5. BUYER GUIDELINES */}
              {legalTab === 'buyer-guidelines' && (
                <div>
                  <h2 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1rem', textTransform: 'uppercase' }}>
                    5. BUYER GUIDELINES & SAFE HANDOVER
                  </h2>
                  <p style={{ marginBottom: '1.25rem' }}>
                    To ensure permanent ownership of your newly acquired gaming profile, follow our handover checklist immediately upon receiving credentials:
                  </p>

                  <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
                    <li>Log in to the game using the details from your Order Vault.</li>
                    <li>Verify all advertised skins, level, and gems.</li>
                    <li>Immediately change the primary password.</li>
                    <li>Bind your personal Indian mobile phone number and secondary backup recovery email.</li>
                    <li>Log out all existing sessions from previous devices.</li>
                    <li>Once completed, confirm order completion on GameXMarket to release funds to the seller.</li>
                  </ol>
                </div>
              )}

              {/* 6. DISPUTE RESOLUTION */}
              {legalTab === 'dispute' && (
                <div>
                  <h2 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1rem', textTransform: 'uppercase' }}>
                    6. DISPUTE RESOLUTION & ESCROW ARBITRATION
                  </h2>
                  <p style={{ marginBottom: '1.25rem' }}>
                    In the rare event of a disagreement between buyer and seller, GameXMarket acts as an impartial escrow arbitrator.
                  </p>

                  <p style={{ marginBottom: '1.25rem' }}>
                    Funds remain safely frozen in the escrow vault while both parties submit proof screenshots, login error logs, or video recordings. Our dispute resolution team delivers a binding decision within 24 hours.
                  </p>
                </div>
              )}

              {/* 7. GAME PUBLISHER DISCLAIMER */}
              {legalTab === 'disclaimer' && (
                <div>
                  <div style={{
                    background: 'rgba(245, 158, 11, 0.1)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    padding: '1.25rem',
                    borderRadius: '12px',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <AlertTriangle size={20} color="var(--neon-amber)" />
                      <h3 style={{ fontSize: '1.15rem', color: '#fff', textTransform: 'uppercase' }}>
                        IMPORTANT GAME PUBLISHER NOTICE & LEGAL DISCLAIMER
                      </h3>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      All users are urged to review the following disclosures before transacting.
                    </p>
                  </div>

                  <p style={{ marginBottom: '1.25rem' }}>
                    <strong>Intellectual Property:</strong> GameXMarket is an independent consumer intermediary website. All game titles, character assets, logos, and trademarks — including but not limited to <em>Clash of Clans (Supercell Oy), Free Fire / Free Fire MAX (Garena International), PUBG Mobile / BGMI (Krafton Inc. & Tencent), and Call of Duty Mobile (Activision Publishing Inc.)</em> — are the registered intellectual property of their respective publishers and copyright owners.
                  </p>

                  <p style={{ marginBottom: '1.25rem' }}>
                    <strong>Publisher Terms of Service:</strong> Please be aware that game publishers typically state in their End User License Agreements (EULA) and Terms of Service that gaming accounts, digital avatars, and virtual currencies are non-transferable and remain publisher property. The sale, purchase, or transfer of accounts may violate publisher terms and carries an inherent risk of publisher-enforced penalties, including account suspension or bans.
                  </p>

                  <p style={{ marginBottom: '1.25rem' }}>
                    <strong>User Assumption of Risk:</strong> By using GameXMarket, buyers and sellers expressly acknowledge and agree that they are transacting at their own discretion. GameXMarket facilitates escrow protection against peer-to-peer financial scams between users, but does not represent or warranty against publisher-level account enforcement.
                  </p>
                </div>
              )}

            </div>
          </main>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .legal-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
