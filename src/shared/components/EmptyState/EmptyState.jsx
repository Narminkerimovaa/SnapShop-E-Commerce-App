import PropTypes from 'prop-types';
import styles from './EmptyState.module.css';

/**
 * EmptyState — boş vəziyyət komponenti
 *
 * @param {'basket'|'favorites'|'search'|'orders'|'custom'} variant    — görünüş (default: 'custom')
 * @param {string}                                          title       — başlıq
 * @param {string}                                          description — açıqlama
 * @param {React.ReactNode}                                 action      — düymə və ya link
 * @param {string}                                          className   — əlavə class
 */

const VARIANTS = {
  basket: {
    icon: '🛒',
    title: 'Səbətiniz boşdur',
    description: 'Bəyəndiyiniz məhsulları səbətə əlavə edin.',
  },
  favorites: {
    icon: '❤️',
    title: 'Hələ favorit yoxdur',
    description: 'Bəyəndiyiniz məhsulları favoritlərə əlavə edin.',
  },
  search: {
    icon: '🔍',
    title: 'Nəticə tapılmadı',
    description: 'Başqa açar söz ilə yenidən axtarış edin.',
  },
  orders: {
    icon: '📦',
    title: 'Sifarişiniz yoxdur',
    description: 'Etdiyiniz sifarişlər burada görünəcək.',
  },
  custom: {
    icon: '📭',
    title: 'Məlumat yoxdur',
    description: '',
  },
};

const EmptyState = ({
  variant = 'custom',
  title,
  description,
  action,
  className = '',
}) => {
  const defaults = VARIANTS[variant];

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <span className={styles.icon}>{defaults.icon}</span>
      <h3 className={styles.title}>{title || defaults.title}</h3>
      {(description || defaults.description) && (
        <p className={styles.description}>{description || defaults.description}</p>
      )}
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
};

EmptyState.propTypes = {
  variant:     PropTypes.oneOf(['basket', 'favorites', 'search', 'orders', 'custom']),
  title:       PropTypes.string,
  description: PropTypes.string,
  action:      PropTypes.node,
  className:   PropTypes.string,
};

export default EmptyState;