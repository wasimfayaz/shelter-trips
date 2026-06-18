import styles from './Footer.module.css';

const footerLinks = {
  Packages: [
    { label: 'Honeymoon Special', href: '#packages' },
    { label: 'ABC Valley Excursion', href: '#packages' },
    { label: 'Betaab Valley Tour', href: '#packages' },
    { label: 'Customized Deals', href: '#contact' },
  ],
  Destinations: [
    { label: 'Srinagar', href: '#destinations' },
    { label: 'Gulmarg', href: '#destinations' },
    { label: 'Pahalgam', href: '#destinations' },
    { label: 'Sonamarg', href: '#destinations' },
  ],
  Services: [
    { label: 'Houseboat Stays', href: '#hotels' },
    { label: 'Heritage Hotels', href: '#hotels' },
    { label: 'Car Rentals', href: '#cabs' },
    { label: 'Private Transfers', href: '#cabs' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        {/* Top */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Shelter</span>
              <span className={styles.logoSub}>Trips</span>
            </div>
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
                      <a href={link.href} className={styles.link} id={`footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}>
                        {link.label}
                      </a>
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
            <a href="#" className={styles.bottomLink} id="footer-privacy">Privacy Policy</a>
            <a href="#" className={styles.bottomLink} id="footer-terms">Terms of Service</a>
            <a href="#contact" className={styles.bottomLink} id="footer-contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
