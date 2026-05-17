import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.css';

/**
 * Dropdown — universal açılan menyu komponenti
 *
 * @param {Array}           options      — seçimlər: [{ label, value, icon? }]
 * @param {string|number}   value        — seçilmiş dəyər
 * @param {Function}        onChange     — dəyişiklik hadisəsi
 * @param {string}          placeholder  — seçim olmadıqda göstərilən mətn (default: 'Seçin')
 * @param {'sm'|'md'|'lg'}  size         — ölçü (default: 'md')
 * @param {boolean}         disabled     — deaktiv (default: false)
 * @param {boolean}         fullWidth    — tam en (default: false)
 * @param {string}          label        — üstdəki yazı
 * @param {string}          className    — əlavə class
 */
const Dropdown = ({
  options = [],
  value,
  onChange,
  placeholder = 'Seçin',
  size = 'md',
  disabled = false,
  fullWidth = false,
  label,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const selected = options.find(o => o.value === value);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
      
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div
      className={`${styles.wrapper} ${fullWidth ? styles.fullWidth : ''} ${className}`}
      ref={ref}
    >
      {label && <label className={styles.label}>{label}</label>}

      <button
        type="button"
        className={`${styles.trigger} ${styles[size]} ${isOpen ? styles.triggerOpen : ''} ${disabled ? styles.disabled : ''}`}
        onClick={() => !disabled && setIsOpen(prev => !prev)}
        disabled={disabled}
      >
        <span className={styles.triggerContent}>
          {selected?.icon && <span className={styles.icon}>{selected.icon}</span>}
          <span className={selected ? styles.selectedText : styles.placeholder}>
            {selected ? selected.label : placeholder}
          </span>
        </span>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}>
          ›
        </span>
      </button>

      {isOpen && (
        <ul className={styles.menu}>
          {options.map(option => (
            <li
              key={option.value}
              className={`${styles.item} ${option.value === value ? styles.itemActive : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option.icon && <span className={styles.icon}>{option.icon}</span>}
              <span>{option.label}</span>
              {option.value === value && <span className={styles.check}>✓</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options:     PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      icon:  PropTypes.node,
    })
  ).isRequired,
  value:       PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange:    PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  size:        PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled:    PropTypes.bool,
  fullWidth:   PropTypes.bool,
  label:       PropTypes.string,
  className:   PropTypes.string,
};

export default Dropdown;