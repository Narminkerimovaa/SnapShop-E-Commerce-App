import PropTypes from 'prop-types';
import styles from './Skeleton.module.css';

/**
 * Skeleton — yükləmə skelet komponenti
 *
 * @param {'text'|'title'|'image'|'card'|'avatar'|'badge'} variant   — görünüş (default: 'text')
 * @param {number}                                          count     — neçə sətir (yalnız 'text' üçün, default: 1)
 * @param {string}                                          width     — en (default: '100%')
 * @param {string}                                          height    — hündürlük
 * @param {string}                                          className — əlavə class
 */
const Skeleton = ({
  variant = 'text',
  count = 1,
  width,
  height,
  className = '',
}) => {
  if (variant === 'card') {
    return (
      <div className={`${styles.card} ${className}`}>
        <div className={styles.cardImage} />
        <div className={styles.cardBody}>
          <div className={`${styles.base} ${styles.badge}`} />
          <div className={`${styles.base} ${styles.title}`} />
          <div className={`${styles.base} ${styles.titleShort}`} />
          <div className={`${styles.base} ${styles.rating}`} />
          <div className={`${styles.base} ${styles.price}`} />
          <div className={`${styles.base} ${styles.badge}`} />
        </div>
      </div>
    );
  }

  if (variant === 'text' && count > 1) {
    return (
      <div className={`${styles.textGroup} ${className}`}>
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={`${styles.base} ${styles.text}`}
            style={{
              width: i === count - 1 ? '65%' : width || '100%',
              height,
            }}
          />
        ))}
      </div>
    );
  }

  const variantClass = {
    text:   styles.text,
    title:  styles.titleSkeleton,
    image:  styles.image,
    avatar: styles.avatar,
    badge:  styles.badge,
  }[variant];

  return (
    <div
      className={`${styles.base} ${variantClass} ${className}`}
      style={{ width, height }}
    />
  );
};

Skeleton.propTypes = {
  variant:   PropTypes.oneOf(['text', 'title', 'image', 'card', 'avatar', 'badge']),
  count:     PropTypes.number,
  width:     PropTypes.string,
  height:    PropTypes.string,
  className: PropTypes.string,
};

export default Skeleton;