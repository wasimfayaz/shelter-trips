import styles from './StickyButtons.module.css';

export default function StickyButtons() {
  return (
    <div className={styles.stickyContainer}>
      <a
        href="tel:+919103662018"
        className={`${styles.stickyBtn} ${styles.callBtn}`}
        id="sticky-call"
        aria-label="Call Us"
      >
        <span className={styles.label}>Call +91 910-366-2018</span>
        <div className={styles.iconWrapper}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
      </a>

      <a
        href="https://wa.me/919103662018"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.stickyBtn} ${styles.whatsappBtn}`}
        id="sticky-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <span className={styles.label}>Chat on WhatsApp</span>
        <div className={styles.iconWrapper}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.59 2.016 14.12 1.01 11.998 1.01c-5.444 0-9.866 4.372-9.87 9.802 0 1.714.459 3.39 1.33 4.882l-.99 3.613 3.7-.94z"/>
          </svg>
        </div>
      </a>
    </div>
  );
}
