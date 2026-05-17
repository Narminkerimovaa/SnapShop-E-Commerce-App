import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@/shared/components/Input/Input';
import Dropdown from '@/shared/components/Dropdown/Dropdown';
import Badge from '@/shared/components/Badge/Badge';
import Skeleton from '@/shared/components/Skeleton/Skeleton';
import styles from './Header.module.css';
import { useAuth } from '@/shared/providers/auth/useAuth';
import { useBasket } from '@/shared/providers/basket/useBasket';
import { useFavorites } from '@/shared/providers/favorites/useFavorites';
import { useSearch } from '@/shared/providers/search/useSearch';

const LANGUAGES = [
  { label: 'AZ', value: 'az', icon: '🇦🇿' },
  { label: 'EN', value: 'en', icon: '🇬🇧' },
  { label: 'RU', value: 'ru', icon: '🇷🇺' },
];

const Header = () => {
  const navigate = useNavigate();

  const { user } = useAuth(undefined);
  const { basket } = useBasket([{ id: 1, qty: 2 }]);
  const { favorites } = useFavorites();
  const { searchValue, setSearchValue, activeCategory, setActiveCategory } = useSearch();

  const [lang, setLang] = useState('az');
  const [categories, setCategories] = useState([]);

  const basketCount = basket.reduce((sum, item) => sum + item.qty, 0);
  const favoriteCount = favorites.length;

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, []);

  const handleProtectedNav = (path) => {
    if (!user) navigate('/login');
    else navigate(path);
  };

  return (
    <header className={styles.header}>

      <div className={styles.topBar}>
        <div className={styles.inner}>

          <div className={styles.logo} onClick={() => navigate('/')}>
            Snapshop
          </div>

          <div className={styles.searchWrapper}>
            <Input
              type="search"
              placeholder="Məhsul, kateqoriya və ya brend axtar"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              iconLeft={<span>🔍</span>}
              iconRight={
                searchValue
                  ? <span onClick={() => setSearchValue('')} style={{ cursor: 'pointer' }}>✕</span>
                  : null
              }
              fullWidth
              className={styles.searchInput}
            />
          </div>

          <div className={styles.actions}>

            <Dropdown
              options={LANGUAGES}
              value={lang}
              onChange={setLang}
              size="sm"
              className={styles.langDropdown}
            />

            {user === undefined ? (
              <Skeleton variant="avatar" />
            ) : user ? (
              <button className={styles.actionBtn}>
                <span className={styles.actionIcon}>👤</span>
                <span className={styles.actionLabel}>{user.name}</span>
              </button>
            ) : (
              <button className={styles.actionBtn} onClick={() => navigate('/login')}>
                <span className={styles.actionIcon}>👤</span>
                <span className={styles.actionLabel}>Daxil ol</span>
              </button>
            )}

            <button
              className={styles.actionBtn}
              onClick={() => handleProtectedNav('/favorites')}
            >
              <span className={styles.actionIcon}>🤍</span>
              <span className={styles.actionLabel}>Sevimlilərim</span>
              {favoriteCount > 0 && (
                <span className={styles.badgeWrapper}>
                  <Badge variant="discount">
                    {favoriteCount > 99 ? '99+' : favoriteCount}
                  </Badge>
                </span>
              )}
            </button>

            <button
              className={styles.actionBtn}
              onClick={() => handleProtectedNav('/basket')}
            >
              <span className={styles.actionIcon}>🛒</span>
              <span className={styles.actionLabel}>Səbətim</span>
              {basketCount > 0 && (
                <span className={styles.badgeWrapper}>
                  <Badge variant="discount">
                    {basketCount > 99 ? '99+' : basketCount}
                  </Badge>
                </span>
              )}
            </button>

          </div>
        </div>
      </div>

      <div className={styles.categoryBar}>
        <div className={styles.inner}>
          <button
            className={`${styles.categoryBtn} ${activeCategory === '' ? styles.categoryBtnActive : ''}`}
            onClick={() => setActiveCategory('')}
          >
            Hamısı
          </button>
          {categories.map(cat => (
            <button
              key={cat.slug}
              className={`${styles.categoryBtn} ${activeCategory === cat.slug ? styles.categoryBtnActive : ''}`}
              onClick={() => setActiveCategory(cat.slug)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

    </header>
  );
};

export default Header;