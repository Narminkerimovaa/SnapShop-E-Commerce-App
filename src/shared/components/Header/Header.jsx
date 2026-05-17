import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "@/shared/components/Input/Input";
import Dropdown from "@/shared/components/Dropdown/Dropdown";
import Badge from "@/shared/components/Badge/Badge";
import Skeleton from "@/shared/components/Skeleton/Skeleton";
import styles from "./Header.module.css";
import { useAuth } from "@/shared/providers/auth/useAuth";
import { useBasket } from "@/shared/providers/basket/useBasket";
import { useFavorites } from "@/shared/providers/favorites/useFavorites";
import { useSearch } from "@/shared/providers/search/useSearch";
import Button from "../Button";
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { CiUser } from "react-icons/ci";


const LANGUAGES = [
  { label: "AZ", value: "az", icon: "🇦🇿" },
  { label: "EN", value: "en", icon: "🇬🇧" },
  { label: "RU", value: "ru", icon: "🇷🇺" },
];

const Header = () => {
  const navigate = useNavigate();

  const { user } = useAuth();
  const { basket } = useBasket();
  const { favorites } = useFavorites();
  const { searchValue, setSearchValue, activeCategory, setActiveCategory } =
    useSearch();

  const [lang, setLang] = useState("az");
  const [categories, setCategories] = useState([]);

  const basketCount = basket.reduce((sum, item) => sum + item.qty, 0);
  const favoriteCount = favorites.length;

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  const handleProtectedNav = (path) => {
    if (!user) navigate("/login");
    else navigate(path);
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.inner}>
          <div className={styles.logo} onClick={() => navigate("/")}>
            Snapshop
          </div>

          <div className={styles.searchWrapper}>
            <Input
              type="search"
              placeholder="Məhsul, kateqoriya və ya brend axtar"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              iconLeft={<span><IoSearch /></span>}
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
              <Button variant="menuItem" className={styles.menuItem}>
                <div className={styles.iconContainer}>
                  <span className={styles.actionIcon}><CiUser /></span>
                </div>
                <span className={styles.actionLabel}>{user.name}</span>
              </Button>
            ) : (
              <Button
                variant="primary"
                size="md"
                onClick={() => navigate("/login")}
              >
                Daxil ol
              </Button>
            )}

            <Button
              variant="menuItem"
              className={styles.menuItem}
              onClick={() => handleProtectedNav("/favorites")}
            >
              <div className={styles.iconContainer}>
                <span className={styles.favIcon}><CiHeart /></span>
                </div>
                <span className={styles.actionLabel}>Sevimlilərim</span>
                {favoriteCount > 0 && (
                  <span className={styles.badgeWrapper}>
                    <Badge variant="discount">
                      {favoriteCount > 99 ? "99+" : favoriteCount}
                    </Badge>
                  </span>
                )}
            </Button>

            <Button
              variant="menuItem"
              className={styles.menuItem}
              onClick={() => handleProtectedNav("/basket")}
            >
              <div className={styles.iconContainer}>
                <span className={styles.actionIcon}><SlBasket /></span>
                </div>
                <span className={styles.actionLabel}>Səbətim</span>
                {basketCount > 0 && (
                  <span className={styles.badgeWrapper}>
                    <Badge variant="discount">
                      {basketCount > 99 ? "99+" : basketCount}
                    </Badge>
                  </span>
                )}
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.categoryBar}>
        <div className={styles.inner}>
          <Button
            variant="tab"
            active={activeCategory === ""}
            onClick={() => setActiveCategory("")}
          >
            Hamısı
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.slug}
              variant="tab"
              active={activeCategory === cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
            >
              {cat.name}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
