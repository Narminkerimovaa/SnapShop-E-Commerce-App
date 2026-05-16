import PropTypes from 'prop-types';
import styles from './Card.module.css';

/**
 * Card — universal kart komponenti
 *
 * @param {React.ReactNode} children  — kart məzmunu
 * @param {Function}        onClick   — klik hadisəsi
 * @param {string}          className — əlavə class
 */
const Card = ({ children, onClick, className = '' , ...rest}) => {
  return (
    <div
      className={`${styles.card} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children:  PropTypes.node.isRequired,
  onClick:   PropTypes.func,
  className: PropTypes.string,
};

export default Card;