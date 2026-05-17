import { useContext } from 'react';
import { BasketContext } from './BasketProvider';

export const useBasket = () => {
  const context = useContext(BasketContext);

  if (!context) {
    throw new Error('useGlobal must be used within a BasketProvider');
  }

  return context;
};
