import Link from 'next/link';
import styles from './StickyButtons.module.css';

interface StickyButtonsProps {
  isB2b?: boolean;
  offsetBottom?: boolean;
}

export default function StickyButtons({ isB2b = false, offsetBottom = false }: StickyButtonsProps) {
  const whatsappUrl = isB2b
    ? "https://wa.me/918493924278?text=Hi%20Shelter%20Trips%2C%20I%20am%20a%20travel%20agent%2Fpartner%20looking%20for%20an%20instant%20B2B%20enquiry."
    : "https://wa.me/918493924278";

  const whatsappLabel = isB2b
    ? "Instant B2B WhatsApp Enquiry"
    : "Chat on WhatsApp";

  const callLabel = isB2b
    ? "Call B2B Desk +91 84939 24278"
    : "Call +91 84939 24278";

  return (
    <div className={styles.stickyContainer} style={offsetBottom ? { bottom: '96px' } : undefined}>
      {/* 1. Phone Call */}
      <a
        href="tel:+918493924278"
        className={`${styles.stickyBtn} ${styles.callBtn}`}
        id="sticky-call"
        aria-label={callLabel}
      >
        <span className={styles.label}>{callLabel}</span>
        <div className={styles.iconWrapper}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
      </a>

      {/* 2. Official WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.stickyBtn} ${styles.whatsappBtn}`}
        id="sticky-whatsapp"
        aria-label={whatsappLabel}
      >
        <span className={styles.label}>{whatsappLabel}</span>
        <div className={styles.iconWrapper}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001l-1.416 5.17 5.291-1.387c1.472.803 3.133 1.226 4.78 1.226h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.667-1.037-5.176-2.923-7.062a9.923 9.923 0 0 0-7.067-2.948zm.003 1.667c2.22 0 4.309.866 5.88 2.438a8.273 8.273 0 0 1 2.435 5.877c-.001 4.586-3.733 8.318-8.318 8.318a8.26 8.26 0 0 1-3.987-1.026l-.286-.17-2.961.776.79-2.886-.186-.297a8.272 8.272 0 0 1-1.246-4.391c.001-4.586 3.733-8.319 8.319-8.319zm-3.568 4.298c-.19 0-.498.071-.758.356-.26.284-.995.972-.995 2.373 0 1.401 1.019 2.753 1.161 2.943.142.19 2.006 3.063 4.86 4.297.679.293 1.21.468 1.624.599.682.217 1.303.186 1.794.113.548-.082 1.684-.689 1.921-1.354.237-.665.237-1.234.166-1.354-.071-.119-.261-.19-.545-.332-.284-.142-1.684-.83-1.945-.925-.261-.095-.45-.142-.64.142-.19.285-.735.925-.901 1.115-.166.19-.332.213-.616.071-.284-.142-1.202-.443-2.289-1.412-.846-.755-1.417-1.687-1.583-1.972-.166-.285-.018-.439.124-.58.128-.127.284-.332.427-.498.142-.166.19-.285.284-.474.095-.19.047-.356-.024-.498-.071-.142-.64-1.542-.877-2.111-.231-.555-.466-.479-.64-.488l-.545-.009z" />
          </svg>
        </div>
      </a>

      {/* 3. B2B (Placed below WhatsApp) */}
      <Link
        href={isB2b ? "#b2b-form" : "/b2b"}
        className={`${styles.stickyBtn} ${styles.b2bBtn}`}
        id="sticky-b2b"
        aria-label="ARE YOU A B2B AGENT?"
      >
        <span className={styles.label}>
          {isB2b ? "B2B Partner Registration" : "ARE YOU A B2B AGENT?"}
        </span>
        <div className={styles.iconWrapper}>
          <span className={styles.b2bTextIcon}>B2B</span>
        </div>
      </Link>
    </div>
  );
}
