import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styles from './Modal.module.css';

/**
 * Modal — universal modal komponenti
 *
 * @param {boolean}         isOpen    — modalın açıq/qapalı vəziyyəti
 * @param {Function}        onClose   — bağlama hadisəsi
 * @param {string}          title     — modal başlığı
 * @param {React.ReactNode} children  — modal məzmunu
 * @param {React.ReactNode} footer    — modal altlığı (düymələr və s.)
 * @param {'sm'|'md'|'lg'}  size      — modal ölçüsü (default: 'md')
 */
const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={`${styles.modal} ${styles[size]}`}
        onClick={e => e.stopPropagation()}
      >
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <button className={styles.closeBtn} onClick={onClose} aria-label="Bağla">
            ✕
          </button>
        </div>

        <div className={styles.body}>
          {children}
        </div>

        {footer && (
          <div className={styles.footer}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen:   PropTypes.bool.isRequired,
  onClose:  PropTypes.func.isRequired,
  title:    PropTypes.string,
  children: PropTypes.node,
  footer:   PropTypes.node,
  size:     PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Modal;