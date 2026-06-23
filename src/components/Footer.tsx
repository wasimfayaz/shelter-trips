import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
  Packages: [
    { label: 'Honeymoon Special', href: '/packages/honeymoon-special' },
    { label: 'ABC Valley Excursion', href: '/packages/abc-valley' },
    { label: 'Betaab Valley Tour', href: '/packages/betaab-valley' },
    { label: 'Customized Deals', href: '/packages/design-package' },
  ],
  Destinations: [
    { label: 'Srinagar', href: '/#destinations' },
    { label: 'Gulmarg', href: '/#destinations' },
    { label: 'Pahalgam', href: '/#destinations' },
    { label: 'Sonamarg', href: '/#destinations' },
  ],
  Services: [
    { label: 'Houseboat Stays', href: '/hotels/shelter-group-houseboats' },
    { label: 'Heritage Hotels', href: '/hotels/shelter-heritage' },
    { label: 'Car Rentals', href: '/cabs' },
    { label: 'Private Transfers', href: '/cabs' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        {/* Top */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>Shelter</span>
              <span className={styles.logoSub}>Trips</span>
            </Link>
            <p className={styles.brandDesc}>
              Premium Kashmir travel experiences since 2015. Houseboats,
              heritage hotels, curated itineraries — all crafted with love
              for the valley.
            </p>
            <div className={styles.certBadge}>
              <span>🏆</span>
              <span>Certified Local Operator · Kashmir Tourism</span>
            </div>
          </div>

          <div className={styles.linksGrid}>
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className={styles.linkCol}>
                <h3 className={styles.colTitle}>{section}</h3>
                <ul className={styles.linkList}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.link} id={`footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Shelter Trips. All rights reserved. · Srinagar, Kashmir, India
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink} id="footer-privacy">Privacy Policy</Link>
            <Link href="/terms" className={styles.bottomLink} id="footer-terms">Terms of Service</Link>
            <Link href="/#contact" className={styles.bottomLink} id="footer-contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
