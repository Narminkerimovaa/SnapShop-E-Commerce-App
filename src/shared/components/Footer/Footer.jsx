import { Link } from 'react-router-dom';
import Button from '@/shared/components/Button/Button';
import styles from './Footer.module.css';
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { BsGooglePlay } from "react-icons/bs";


const SOCIAL_LINKS = [
  { icon: <FaInstagram />, label: 'Instagram', href: '#' },
  { icon: <IoLogoTiktok />, label: 'TikTok',    href: '#' },
  { icon: <BsYoutube />, label: 'YouTube',   href: '#' },
  { icon: <FaFacebook />, label: 'Facebook',  href: '#' },
];

const LINKS = [
  {
    title: 'Şirkət',
    items: [
      { label: 'Haqqımızda',  to: '#' },
      { label: 'Karyera',     to: '#' },
      { label: 'Bloq',        to: '#' },
      { label: 'Tərəfdaşlıq', to: '#' },
    ],
  },
  {
    title: 'Dəstək',
    items: [
      { label: 'Yardım Mərkəzi', to: '#' },
      { label: 'Əlaqə',          to: '#' },
      { label: 'Geri qaytarma',  to: '#' },
      { label: 'Çatdırılma',     to: '#' },
    ],
  },
  {
    title: 'Hüquqi',
    items: [
      { label: 'Məxfilik siyasəti', to: '#' },
      { label: 'İstifadə şərtləri', to: '#' },
      { label: 'Kuki siyasəti',     to: '#' },
    ],
  },
];

const APP_LINKS = [
  { icon: <FaApple />, label: 'App Store',   href: '#' },
  { icon: <BsGooglePlay />, label: 'Google Play', href: '#' },
];

const BOTTOM_LINKS = [
  { label: 'Məxfilik siyasəti', to: '#' },
  { label: 'İstifadə şərtləri', to: '#' },
  { label: 'Kuki seçimləri',    to: '#' },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.top}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>Snapshop</Link>
          <p className={styles.desc}>
            Ən yaxşı məhsulları ən əlverişli qiymətlərlə tap.
          </p>
          <div className={styles.socials}>
            {SOCIAL_LINKS.map(s => (
              <Button
                key={s.label}
                variant="ghost"
                className={styles.socialBtn}
                iconLeft={s.icon}
                aria-label={s.label}
                onClick={() => window.open(s.href)}
              />
            ))}
          </div>
        </div>

        <div className={styles.links}>
          {LINKS.map(group => (
            <div key={group.title} className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>{group.title}</h4>
              {group.items.map(item => (
                <Link key={item.label} to={item.to} className={styles.link}>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.appLinks}>
          <h4 className={styles.linkTitle}>Tətbiq</h4>
          {APP_LINKS.map(app => (
            <Button
              key={app.label}
              variant="ghost"
              className={styles.appBtn}
              onClick={() => window.open(app.href)}
            >
              <span className={styles.appIcon}>{app.icon}</span>
              <div>
                <div className={styles.appSub}>Get it on</div>
                <div className={styles.appLabel}>{app.label}</div>
              </div>
            </Button>
          ))}
        </div>

      </div>

      <div className={styles.bottom}>
        <span className={styles.copyright}>
          © 2026 Snapshop. Bütün hüquqlar qorunur.
        </span>
        <div className={styles.bottomLinks}>
          {BOTTOM_LINKS.map(link => (
            <Link key={link.label} to={link.to} className={styles.bottomLink}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;