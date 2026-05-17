import { useContext } from 'react';
import { FavoritesContext } from './FavoritesProvider';

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useGlobal must be used within a FavoritesProvider');
  }

  return context;
};
