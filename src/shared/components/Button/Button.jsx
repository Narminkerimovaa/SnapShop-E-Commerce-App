import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import styles from './Button.module.css';

/**
 * Button — universal düymə komponenti
 *
 * @param {'primary'|'secondary'|'ghost'|'danger'|'text'} variant  — görünüş (default: 'primary')
 * @param {'sm'|'md'|'lg'}                                size      — ölçü (default: 'md')
 * @param {'button'|'submit'|'reset'}                     type      — HTML type (default: 'button')
 * @param {boolean}                                       disabled  — deaktiv (default: false)
 * @param {boolean}                                       loading   — yükləmə vəziyyəti (default: false)
 * @param {boolean}                                       fullWidth — tam en (default: false)
 * @param {React.ReactNode}                               iconLeft  — solda ikon
 * @param {React.ReactNode}                               iconRight — sağda ikon
 * @param {Function}                                      onClick   — klik hadisəsi
 * @param {string}                                        className — əlavə class
 * @param {React.ReactNode}                               children  — mətn / məzmun
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  loading = false,
  fullWidth = false,
  active = false,
  iconLeft,
  iconRight,
  onClick,
  className = '',
  children,
  ...rest
}) => {
  const isIconOnly = !children;

  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    active ? styles.active : '',
    loading   ? styles.loading   : '',
    disabled  ? styles.disabled  : '',
    fullWidth ? styles.fullWidth : '',
    isIconOnly ? styles.iconOnly : '',
    iconRight && !isIconOnly ? styles.iconRight : styles.iconLeft,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const spinnerColor = variant === 'primary' || variant === 'danger' ? 'white' : 'primary';

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...rest}
    >
      {loading ? (
        <span className={styles.loadingContent}>
          <Spinner size="sm" color={spinnerColor} />
          {children && <span>{children}</span>}
        </span>
      ) : (
        <>
          {iconLeft  && <span className={styles.icon}>{iconLeft}</span>}
          {children}
          {iconRight && <span className={styles.icon}>{iconRight}</span>}
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  variant:   PropTypes.oneOf(['primary', 'secondary', 'ghost', 'danger', 'text', 'nav', 'tab', 'menuItem']),
  size:      PropTypes.oneOf(['sm', 'md', 'lg']),
  type:      PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled:  PropTypes.bool,
  loading:   PropTypes.bool,
  fullWidth: PropTypes.bool,
  iconLeft:  PropTypes.node,
  iconRight: PropTypes.node,
  onClick:   PropTypes.func,
  className: PropTypes.string,
  children:  PropTypes.node,
};

export default Button;