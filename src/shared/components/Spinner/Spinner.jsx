import styles from './Spinner.module.css';
import PropTypes from 'prop-types';

/**
 * Spinner — yükləmə indikatoru
 *
 * @param {'sm' | 'md' | 'lg'} size        — ölçü (default: 'md')
 * @param {'primary' | 'white' | 'gray'} color — rəng (default: 'primary')
 * @param {boolean} fullPage               — ekranın mərkəzində, overlay ilə (default: false)
 * @param {boolean} overlay                — parent elementin üstündə (default: false)
 * @param {string}  label                  — accessibility üçün aria-label (default: 'Yüklənir...')
 */
const Spinner = ({
  size = 'md',
  color = 'primary',
  fullPage = false,
  overlay = false,
  label = 'Loading...',
  className = '', 
  ...rest
}) => {
  const containerClasses = [
    fullPage ? styles.fullPage : '',
    overlay ? styles.overlay : '',
    !fullPage && !overlay ? styles.wrapper : '',
    className
  ].filter(Boolean).join(' ');

 return (
    <div className={containerClasses} {...rest}>
      <span
        className={`${styles.spinner} ${styles[size]} ${styles[color]}`}
        role="status"
        aria-label={label}
      />
    </div>
  );
};

Spinner.propTypes = {
  size:     PropTypes.oneOf(['sm', 'md', 'lg']),
  color:    PropTypes.oneOf(['primary', 'white', 'gray']),
  fullPage: PropTypes.bool,
  overlay:  PropTypes.bool,
  label:    PropTypes.string,
  className: PropTypes.string,
};

export default Spinner;