import { useContext } from 'react';
import { SearchContext } from './SearchProvider';

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useGlobal must be used within a SearchProvider');
  }

  return context;
};
