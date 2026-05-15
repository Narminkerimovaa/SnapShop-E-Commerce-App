import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import HomePage from "@/features/products/pages/HomePage";
import ProductDetailPage from "@/features/products/pages/ProductDetailPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";


export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};