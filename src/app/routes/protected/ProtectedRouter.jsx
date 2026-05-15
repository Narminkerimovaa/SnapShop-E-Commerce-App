import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Spinner from '@/shared/components/Spinner/Spinner';
import Layout from '@/shared/components/Layout/Layout';

const HomePage = lazy(() => import('@/features/products/pages/HomePage'));
const ProductDetailPage = lazy(() => import('@/features/products/pages/ProductDetailPage'));
const BasketPage = lazy(() => import('@/features/basket/pages/BasketPage'));
const FavoritesPage = lazy(() => import('@/features/favorites/pages/FavoritesPage'));

export const ProtectedRouter = () => {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};