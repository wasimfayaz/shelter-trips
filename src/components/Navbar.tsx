'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Packages', href: '/#packages' },
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Hotels', href: '/#hotels' },
  { label: 'Cabs', href: '/cabs' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <div className={styles.container}>
        <Link href="/" className={styles.logo} id="nav-logo">
          <span className={styles.logoText}>Shelter</span>
          <span className={styles.logoSub}>Trips</span>
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={styles.link}
                onClick={() => setMenuOpen(false)}
                id={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <Link href="/#contact" className={styles.ctaBtn} id="nav-cta">
            Book a Trip
          </Link>
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerActive : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="nav-burger"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu} id="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
              id={`mobile-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" className={styles.mobileCta} id="mobile-nav-cta">
            Book a Trip
          </Link>
        </div>
      )}
    </nav>
  );
}
