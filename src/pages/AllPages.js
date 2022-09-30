import { Routes, Route } from "react-router-dom";
import MuiLayout from "../components/layout/MuiLayout";
import AuthPage from "./AuthPage";

const AllPages = () => {
  return (
    <Routes>
      <Route path="auth" element={<MuiLayout />} />
    </Routes>
  );
};
export default AllPages;
