import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from '@/shared/components/Spinner/Spinner';
import Layout from '@/shared/components/Layout/Layout';

const HomePage = lazy(() => import('@/features/products/pages/HomePage'));
const ProductDetailPage = lazy(() => import('@/features/products/pages/ProductDetailPage'));
const LoginPage = lazy(() => import('@/features/auth/pages/LoginPage'));
const RegisterPage = lazy(() => import('@/features/auth/pages/RegisterPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

export const AuthRouter = () => {
  return (
    <Layout>
      <Suspense fallback={<Spinner fullPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};