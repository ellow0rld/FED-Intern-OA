// components/Navigation.js
import styles from './Navigation.module.css';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className={styles.body}>
          <Link href="/emotions" className={styles.navbar}>
            Emotions
          </Link>
          <Link href="/manifesto" className={styles.navbar}>
            Manifesto
          </Link>
          <Link href="/test" className={styles.navbar}>
            Self-awareness test
          </Link>
          <Link href="/work" className={styles.navbar}>
            Work with us
          </Link>
          <a href="#">
            Download App
          </a>
    </nav>
  );
};

export default Navigation;
