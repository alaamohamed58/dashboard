import { Routes, Route, Navigate } from "react-router-dom";
import CheckoutPage from "./CheckoutPage";
import ASICPage from "./ASICPage";
import AuthPage from "./AuthPage";
import DashboardPage from "./DashboardPage";
import ElectricityBillsPage from "./ElectricityBillsPage";
import MyProductsPage from "./MyProductsPage";
import ShopPage from "./ShopPage";
import WalletPage from "./WalletPage";
import PaymentPage from "./PaymentPage";
import NotificationPage from "./NotificationPage";
import { useContext } from "react";
import AuthContext from "../context/auth-context";

const AllPages = () => {
  const authCtx = useContext(AuthContext);
  const { isLoggedIn } = authCtx;
  return (
    <Routes>
      <Route
        path="/auth"
        element={
          !isLoggedIn ? <AuthPage /> : <Navigate to="/dashboard" replace />
        }
      />
      <Route path="/shop/*" element={<ShopPage />} />
      <Route path="/shop/asic" element={<ASICPage />} />
      <Route
        path="/dashboard"
        element={
          isLoggedIn ? <DashboardPage /> : <Navigate to="/auth" replace />
        }
      />
      <Route path="/" element={isLoggedIn ? <DashboardPage /> : <AuthPage />} />
      <Route
        path="/wallet"
        element={isLoggedIn ? <WalletPage /> : <Navigate to="/auth" replace />}
      />
      <Route
        path="/bills"
        element={
          isLoggedIn ? (
            <ElectricityBillsPage />
          ) : (
            <Navigate to="/auth" replace />
          )
        }
      />
      <Route
        path="/products"
        element={
          isLoggedIn ? <MyProductsPage /> : <Navigate to="/auth" replace />
        }
      />
      <Route
        path="/shop/checkout"
        element={
          isLoggedIn ? <CheckoutPage /> : <Navigate to="/auth" replace />
        }
      />
      <Route
        path="/shop/payment"
        element={isLoggedIn ? <PaymentPage /> : <Navigate to="/auth" replace />}
      />
      <Route
        path="/notification"
        element={
          isLoggedIn ? <NotificationPage /> : <Navigate to="/auth" replace />
        }
      />
    </Routes>
  );
};
export default AllPages;
