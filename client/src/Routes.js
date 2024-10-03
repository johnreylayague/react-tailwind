import React from "react";
import { Routes, Route } from "react-router-dom";
import Root from "./screens/Root/Root.js";
import NotFound from "./screens/NotFound/NotFound";
import CartPage from "./screens/Cart/Cart.js";
import ContactUs from "./screens/ContactUs/ContactUs.js";
import Homepage from "./screens/Homepage/Homepage.js";
import CheckoutPage from "./screens/Checkout/Checkout.js";
import ShopPage from "./screens/Shop/Shop.js";
import AboutUsPage from "./screens/AboutUs/AboutUs.js";
import LegalPage from "./screens/Legal/Legal.js";
import SignUpPage from "./screens/SignUp/SignUp.js";
import LoginPage from "./screens/Login/Login.js";
import WishListPage from "./screens/WishList/WishList.js";
import ProductDetailPage from "./screens/ProductDetail/ProductDetail.js";

const AppRoutes = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <Routes>
      {/* Public routes (not protected) */}
      <Route path="/" element={<Root />}>
        <Route index element={<Homepage />}></Route>
        <Route path="about-us" element={<AboutUsPage />}></Route>
        <Route path="shop" element={<ShopPage />}></Route>
        <Route path="shop/checkout" element={<CheckoutPage />}></Route>
        <Route path="shop/cart" element={<CartPage />}></Route>
        <Route path="shop/wish-list" element={<WishListPage />}></Route>
        <Route path="shop/product/:productId" element={<ProductDetailPage />}></Route>
        <Route path="legal" element={<LegalPage />}></Route>
        <Route path="contact-us" element={<ContactUs />}></Route>
        <Route path="sign-up" element={<SignUpPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        {/* Fallback route for unknown paths */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
