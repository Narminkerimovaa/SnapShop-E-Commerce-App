import PropTypes from 'prop-types';
import { AuthContext } from '@/shared/providers/auth/AuthProvider';
import { BasketContext } from '@/shared/providers/basket/BasketProvider';
import { FavoritesContext } from '@/shared/providers/favorites/FavoritesProvider';
import { SearchContext } from '@/shared/providers/search/SearchProvider';
import { useState } from 'react';

export const GlobalProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  const mockAuth = { user: null };
  const mockBasket = { basket: [{ id: 1, qty: 3 }] };
  const mockFavorites = { favorites: [{ id: 1 }, { id: 2 }] };
  const mockSearch = { searchValue, setSearchValue, activeCategory, setActiveCategory };

  return (
    <AuthContext.Provider value={mockAuth}>
      <BasketContext.Provider value={mockBasket}>
        <FavoritesContext.Provider value={mockFavorites}>
          <SearchContext.Provider value={mockSearch}>
            {children}
          </SearchContext.Provider>
        </FavoritesContext.Provider>
      </BasketContext.Provider>
    </AuthContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;