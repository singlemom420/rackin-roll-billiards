import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;

  return (
    <div className={styles.appShell}>
      <div className={styles.neonBackdrop} aria-hidden="true" />
      <header className={styles.header}>
        <div className={styles.logoRow}>
          <div className={styles.logoWrap}>
            <Image
              src="/rackin-roll-logo.png"
              alt="Rackin Roll Billiards logo"
              width={80}
              height={80}
              className={styles.logoImg}
              priority
            />
          </div>
          <div className={styles.brandText}>
            <h1>RACKIN ROLL BILLIARDS</h1>
            <p>Pool Tech · Mover · Refelt · Level · Sell</p>
          </div>
        </div>
        <nav className={styles.nav}>
          <Link
            href="/"
            className={`${styles.navLink} ${isActive('/') ? styles.navLinkActive : ''}`}
          >
            Home
          </Link>
          <Link
            href="/service"
            className={`${styles.navLink} ${isActive('/service') ? styles.navLinkActive : ''}`}
          >
            Service
          </Link>
          <Link
            href="/sell"
            className={`${styles.navLink} ${isActive('/sell') ? styles.navLinkActive : ''}`}
          >
            Sell
          </Link>
          <Link
            href="/about"
            className={`${styles.navLink} ${isActive('/about') ? styles.navLinkActive : ''}`}
          >
            About
          </Link>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Rackin Roll Billiards · All rights reserved.</span>
        <br/>
        <span>Website created by Kyle Justin King - (602) 413 0500</span>
      </footer>
    </div>
  );
}
