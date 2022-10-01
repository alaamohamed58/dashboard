import { Routes, Route } from "react-router-dom";
import ASICPage from "./ASICPage";
import AuthPage from "./AuthPage";
import ShopPage from "./ShopPage";

const AllPages = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/shop/*" element={<ShopPage />} />
      <Route path="/shop/asic" element={<ASICPage />} />
    </Routes>
  );
};
export default AllPages;
