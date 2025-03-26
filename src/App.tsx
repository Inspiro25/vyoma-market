
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { CartProvider } from '@/contexts/CartContext';
import { WishlistProvider } from '@/contexts/WishlistContext';
import { OrderProvider } from '@/contexts/OrderContext';
<<<<<<< HEAD
=======
import ErrorBoundary from './components/ErrorBoundary';
>>>>>>> 0d27cbd (Added new file: filename.ext)

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
<<<<<<< HEAD
import Categories from '@/pages/NewArrivals'; // Using NewArrivals as Categories page
=======
import Categories from '@/pages/CategoryPage'; // Using NewArrivals as Categories page
>>>>>>> 0d27cbd (Added new file: filename.ext)
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
<<<<<<< HEAD
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>
          <WishlistProvider>
            <OrderProvider>
              <Routes>
                {/* Main routes */}
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="products" element={<Products />} />
                  <Route path="products/:id" element={<ProductDetail />} />
                  <Route path="product/:id" element={<ProductDetail />} /> {/* Added this route for compatibility with ProductCard links */}
                  <Route path="shops" element={<Shops />} />
                  <Route path="shops/:id" element={<ShopDetail />} />
                  <Route path="shop/:id" element={<ShopDetail />} /> {/* Keeping this for backwards compatibility */}
                  <Route path="cart" element={<Cart />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="categories" element={<Categories />} />
                  <Route path="category/:categorySlug" element={<CategoryPage />} /> {/* New category page route */}
                  <Route path="search" element={<Search />} />
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="forgot-password" element={<ForgotPassword />} />
                  <Route path="reset-password" element={<ResetPassword />} />
                  <Route path="account" element={<Account />} />
                  <Route path="account/orders" element={<AccountOrders />} />
                  <Route path="account/wishlist" element={<AccountWishlist />} />
                  <Route path="account/settings" element={<AccountSettings />} />
                  <Route path="order-success" element={<OrderSuccess />} />
                  <Route path="offers" element={<Offers />} />
                  <Route path="*" element={<NotFound />} />
                </Route>

                {/* Management routes */}
                <Route path="management/login" element={<ManagementLogin />} />
                <Route path="management" element={<DashboardLayout />}>
                  <Route path="dashboard" element={<ManagementDashboard />} />
                  <Route path="shops" element={<ManagementShops />} />
                  <Route path="users" element={<ManagementUsers />} />
                  <Route path="analytics" element={<ManagementAnalytics />} />
                  <Route path="settings" element={<ManagementSettings />} />
                  <Route path="offers" element={<ManagementOffers />} />
                </Route>

                {/* Shop admin routes */}
                <Route path="admin/login" element={<AdminLogin />} />
                <Route path="admin/dashboard" element={<AdminDashboard />} />
              </Routes>
            </OrderProvider>
          </WishlistProvider>
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
=======
    <ErrorBoundary>
      <AuthProvider>
        <ThemeProvider>
          <CartProvider>
            <WishlistProvider>
              <OrderProvider>
                <Routes>
                  {/* Main routes */}
                  <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="trending" element={<Products />} /> {/* Add this new route */}
                    <Route path="products/:id" element={<ProductDetail />} />
                    <Route path="product/:id" element={<ProductDetail />} /> {/* Added this route for compatibility with ProductCard links */}
                    <Route path="shops" element={<Shops />} />
                    <Route path="shops/:id" element={<ShopDetail />} />
                    <Route path="shop/:id" element={<ShopDetail />} /> {/* Keeping this for backwards compatibility */}
                    <Route path="cart" element={<Cart />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="category/:categorySlug" element={<CategoryPage />} /> {/* New category page route */}
                    <Route path="search" element={<Search />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                    <Route path="account" element={<Account />} />
                    <Route path="account/orders" element={<AccountOrders />} />
                    <Route path="account/wishlist" element={<AccountWishlist />} />
                    <Route path="account/settings" element={<AccountSettings />} />
                    <Route path="order-success" element={<OrderSuccess />} />
                    <Route path="offers" element={<Offers />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>
                
                  {/* Management routes */}
                  <Route path="management/login" element={<ManagementLogin />} />
                  <Route path="management" element={<DashboardLayout />}>
                    <Route path="dashboard" element={<ManagementDashboard />} />
                    <Route path="shops" element={<ManagementShops />} />
                    <Route path="users" element={<ManagementUsers />} />
                    <Route path="analytics" element={<ManagementAnalytics />} />
                    <Route path="settings" element={<ManagementSettings />} />
                    <Route path="offers" element={<ManagementOffers />} />
                  </Route>
                
                  {/* Shop admin routes */}
                  <Route path="admin/login" element={<AdminLogin />} />
                  <Route path="admin/dashboard" element={<AdminDashboard />} />
                  
                  {/* Add these new routes */}
                  <Route path="account/notifications" element={<Account />} />
                  <Route path="support" element={<Account />} />
                  <Route path="auth" element={<Login />} />
                </Routes>
              </OrderProvider>
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </AuthProvider>
    </ErrorBoundary>
>>>>>>> 0d27cbd (Added new file: filename.ext)
  );
}

export default App;
