import styles from './Layout.module.css';
import Header from '../Header';
import Footer from '../Footer';
import ToastContainer from '../ToastContainer';

/**
 * Layout — əsas səhifə strukturu
 *
 * @param {React.ReactNode} children         — səhifə məzmunu
 * @param {object}          user             — istifadəçi
 * @param {number}          basketCount      — səbət sayı
 * @param {number}          favoriteCount    — favorit sayı
 * @param {Function}        onSearch         — axtarış
 * @param {string}          searchValue      — axtarış dəyəri
 * @param {string}          activeCategory   — aktiv kateqoriya
 * @param {Function}        onCategoryChange — kateqoriya dəyişikliyi
 */

const Layout = ({ children }) => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
      <ToastContainer/>
    </div>
  );
};



export default Layout;