import PropTypes from 'prop-types';
import styles from './Toast.module.css';

/**
 * Toast — bildiriş komponenti
 *
 * @param {'success'|'error'|'warning'|'info'} variant — görünüş (default: 'success')
 * @param {string}                             message — bildiriş mətni
 * @param {Function}                           onClose — bağlama hadisəsi
 */
const ICONS = {
  success: '✓',
  error:   '✕',
  warning: '⚠',
  info:    'ℹ',
};

const Toast = ({ variant = 'success', message, onClose }) => {
  return (
    <div 
      className={`${styles.toast} ${styles[variant]}`} 
      role="alert" 
    >
      <span className={styles.icon} aria-hidden="true">
        {ICONS[variant]}
      </span>
      
      <span className={styles.message}>{message}</span>
      
      {onClose && (
        <button 
          className={styles.close} 
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      )}
    </div>
  );
};

Toast.propTypes = {
  variant: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default Toast;