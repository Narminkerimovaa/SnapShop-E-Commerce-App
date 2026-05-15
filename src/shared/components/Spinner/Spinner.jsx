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
}) => {
  const spinnerEl = (
    <span
      className={`${styles.spinner} ${styles[size]} ${styles[color]}`}
      role="status"
      aria-label={label}
    />
  );

  if (fullPage) {
    return (
      <div className={styles.fullPage}>
        {spinnerEl}
      </div>
    );
  }

  if (overlay) {
    return (
      <div className={styles.overlay}>
        {spinnerEl}
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {spinnerEl}
    </div>
  );
};

Spinner.propTypes = {
  size:     PropTypes.oneOf(['sm', 'md', 'lg']),
  color:    PropTypes.oneOf(['primary', 'white', 'gray']),
  fullPage: PropTypes.bool,
  overlay:  PropTypes.bool,
  label:    PropTypes.string,
};

export default Spinner;