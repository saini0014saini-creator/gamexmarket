import React from 'react';
import { MarketplaceProvider, useMarketplace } from './context/MarketplaceContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { CheckoutModal } from './components/CheckoutModal';
import { ContactSellerModal } from './components/ContactSellerModal';
import { OrderDetailsModal } from './components/OrderDetailsModal';

import { HomePage } from './pages/HomePage';
import { MarketplacePage } from './pages/MarketplacePage';
import { AccountDetailsPage } from './pages/AccountDetailsPage';
import { SellAccountPage } from './pages/SellAccountPage';
import { UserDashboardPage } from './pages/UserDashboardPage';
import { WalletPage } from './pages/WalletPage';
import { OrdersPage } from './pages/OrdersPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { AuthPage } from './pages/AuthPage';
import { ContactSupportPage } from './pages/ContactSupportPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { LegalPages } from './pages/LegalPages';

const MainContent = () => {
  const { currentPage } = useMarketplace();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'buy':
        return <MarketplacePage />;
      case 'details':
        return <AccountDetailsPage />;
      case 'sell':
        return <SellAccountPage />;
      case 'dashboard':
        return <UserDashboardPage />;
      case 'wallet':
        return <WalletPage />;
      case 'orders':
        return <OrdersPage />;
      case 'admin':
        return <AdminDashboardPage />;
      case 'auth':
        return <AuthPage />;
      case 'contact':
        return <ContactSupportPage />;
      case 'about':
        return <AboutUsPage />;
      case 'legal':
        return <LegalPages />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      <Footer />

      {/* Global Interactive Modals */}
      <CheckoutModal />
      <ContactSellerModal />
      <OrderDetailsModal />
      <Toast />
    </div>
  );
};

export function App() {
  return (
    <MarketplaceProvider>
      <MainContent />
    </MarketplaceProvider>
  );
}

export default App;
