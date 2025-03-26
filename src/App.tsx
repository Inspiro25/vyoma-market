
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { CartProvider } from '@/contexts/CartContext';
import { WishlistProvider } from '@/contexts/WishlistContext';
import { OrderProvider } from '@/contexts/OrderContext';
import ErrorBoundary from './components/ErrorBoundary';

// Layout components
import MainLayout from '@/components/layout/MainLayout';
import DashboardLayout from '@/components/management/DashboardLayout';

// Main pages
import Home from '@/pages/Index';
import ProductDetail from '@/pages/ProductDetail';
import Products from '@/pages/TrendingNow'; // Using TrendingNow as Products page
import Checkout from '@/pages/Checkout';
import NotFound from '@/pages/NotFound';
import ShopDetail from '@/pages/ShopDetail';
import Shops from '@/pages/Shops';
import Cart from '@/pages/Cart';
import Categories from '@/pages/NewArrivals'; // Using NewArrivals as Categories page
import CategoryPage from '@/pages/CategoryPage'; // New category page
import Login from '@/pages/Authentication'; // Using Authentication for Login
import Register from '@/pages/Authentication'; // Using Authentication for Register too
import ForgotPassword from '@/pages/Authentication'; // Using Authentication for ForgotPassword
import ResetPassword from '@/pages/Authentication'; // Using Authentication for ResetPassword
import Account from '@/pages/Profile'; // Using Profile as Account
import AccountOrders from '@/pages/Orders'; // Using Orders as AccountOrders
import AccountWishlist from '@/pages/Wishlist'; // Using Wishlist as AccountWishlist
import AccountSettings from '@/pages/Settings'; // Using Settings as AccountSettings
import Search from '@/pages/Search';
import OrderSuccess from '@/pages/OrderConfirmation'; // Using OrderConfirmation as OrderSuccess
import Offers from '@/pages/Offers';

// Management pages
import ManagementLogin from '@/pages/ManagementLogin';
import ManagementDashboard from '@/pages/ManagementDashboard';
import ManagementShops from '@/pages/ManagementShops';
import ManagementUsers from '@/pages/ManagementPartners'; // Using ManagementPartners as ManagementUsers
import ManagementAnalytics from '@/pages/ManagementShopPerformance'; // Using ManagementShopPerformance as ManagementAnalytics
import ManagementSettings from '@/pages/Settings'; // Using Settings as ManagementSettings
import ManagementOffers from '@/pages/ManagementOffers';

// Admin pages
import AdminLogin from '@/pages/AdminLogin';
import ShopDashboard from '@/pages/ShopDashboard';
import AdminDashboard from '@/pages/AdminDashboard';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ThemeProvider>
          <CartProvider>
            <WishlistProvider>
              <OrderProvider>
                <Routes>
                  {/* Your routes here */}
                </Routes>
              </OrderProvider>
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
