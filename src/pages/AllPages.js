import { Routes, Route } from "react-router-dom";
import ASICPage from "./ASICPage";
import AuthPage from "./AuthPage";
import DashboardPage from "./DashboardPage";
import ElectricityBillsPage from "./ElectricityBillsPage";
import MyProductsPage from "./MyProductsPage";
import ShopPage from "./ShopPage";
import WalletPage from "./WalletPage";

const AllPages = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/shop/*" element={<ShopPage />} />
      <Route path="/shop/asic" element={<ASICPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/wallet" element={<WalletPage />} />
      <Route path="/bills" element={<ElectricityBillsPage />} />
      <Route path="/products" element={<MyProductsPage />} />
    </Routes>
  );
};
export default AllPages;
