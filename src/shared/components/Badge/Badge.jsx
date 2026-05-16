import PropTypes from 'prop-types';
import styles from './Badge.module.css';

/**
 * Badge — universal nişan komponenti
 *
 * @param {'discount'|'stock'|'status'|'category'} variant   — görünüş (default: 'status')
 * @param {string}                                 className  — əlavə class
 * @param {React.ReactNode}                        children   — məzmun
 */
const Badge = ({ variant = 'status', className = '', children }) => {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  variant:   PropTypes.oneOf(['discount', 'stock', 'status', 'category']),
  className: PropTypes.string,
  children:  PropTypes.node.isRequired,
};

export default Badge;