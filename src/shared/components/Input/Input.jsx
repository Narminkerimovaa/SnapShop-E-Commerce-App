import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({
  type = 'text',
  size = 'md',
  label,
  placeholder,
  value,
  error,
  hint,
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  onChange,
  className = '',
  id, 
  ...rest
}) => {
  const wrapperClasses = [
    styles.wrapper,
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inputClasses = [
    styles.input,
    styles[size],
    error ? styles.errorInput : '',
    disabled ? styles.disabled : '',
    iconLeft ? styles.hasIconLeft : '',
    iconRight ? styles.hasIconRight : '',
  ]
    .filter(Boolean)
    .join(' ');

  const inputId = id || `input-${label?.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={wrapperClasses}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.inputWrapper}>
        {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
        
        <input
          id={inputId}
          type={type}
          className={inputClasses}
          placeholder={placeholder}
          value={value ?? ''} 
          disabled={disabled}
          onChange={onChange}
          {...rest}
        />

        {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
      </div>

      {error ? (
        <span className={styles.error}>{error}</span>
      ) : (
        hint && <span className={styles.hint}>{hint}</span>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'search']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  hint: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onChange: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Input;