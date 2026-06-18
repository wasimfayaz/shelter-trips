import styles from './SignatureHotels.module.css';

export default function SignatureHotels() {
  return (
    <section className={styles.hotels} id="hotels">
      <div className={styles.container}>
        <div className={`${styles.partnersSection} reveal`}>
          <p className={styles.partnersLabel}>Hotels, Houseboats & Resorts</p>
          <h2 className={styles.partnersTitle}>OUR HOSPITALITY PARTNERS</h2>
          
          <div className={styles.logosGrid}>
            {/* Radisson */}
            <div className={styles.logoItem}>
              <svg viewBox="0 0 200 60" className={styles.logoSvg}>
                <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="26" fontWeight="bold" fill="#111">Radisson</text>
                <text x="50%" y="78%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="9" letterSpacing="0.1em" fill="#666">HOTELS & RESORTS</text>
              </svg>
            </div>
            {/* Radisson Collection */}
            <div className={styles.logoItem}>
              <svg viewBox="0 0 200 60" className={styles.logoSvg}>
                <text x="50%" y="30%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="11" letterSpacing="0.15em" fontWeight="bold" fill="#000">RC</text>
                <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="11" letterSpacing="0.1em" fill="#000">RADISSON COLLECTION</text>
                <text x="50%" y="80%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="6.5" letterSpacing="0.05em" fill="#666">HOTEL & SPA RIVERFRONT SRINAGAR</text>
              </svg>
            </div>
            {/* Ahad */}
            <div className={styles.logoItem}>
              <svg viewBox="0 0 200 60" className={styles.logoSvg}>
                <polygon points="100,5 82,30 118,30" fill="#A93226" />
                <polygon points="100,16 88,30 112,30" fill="#FFF" />
                <text x="50%" y="72%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="13" letterSpacing="0.15em" fontWeight="bold" fill="#A93226">AHAD</text>
                <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="7" letterSpacing="0.1em" fill="#444">HOTELS AND RESORTS</text>
              </svg>
            </div>
            {/* Snow Land */}
            <div className={styles.logoItem}>
              <svg viewBox="0 0 200 60" className={styles.logoSvg}>
                <circle cx="100" cy="22" r="14" fill="none" stroke="#222" strokeWidth="1" />
                <path d="M92,26 L100,14 L108,26" fill="none" stroke="#222" strokeWidth="1.5" />
                <path d="M96,26 L100,20 L104,26" fill="none" stroke="#222" strokeWidth="1" />
                <text x="50%" y="48%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="12" fontWeight="bold" fill="#000">SNOW LAND</text>
                <text x="50%" y="68%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="8" letterSpacing="0.08em" fill="#666">Hotels & Resorts</text>
              </svg>
            </div>
            {/* The Dewan */}
            <div className={styles.logoItem}>
              <svg viewBox="0 0 200 60" className={styles.logoSvg}>
                <rect x="85" y="2" width="30" height="24" fill="#0E3D35" rx="3" />
                <text x="100" y="16" dominantBaseline="middle" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="12" fill="#D4AF37">D</text>
                <text x="50%" y="46%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="12" letterSpacing="0.1em" fontWeight="bold" fill="#0E3D35">THE DEWAN</text>
                <text x="50%" y="64%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="7.5" letterSpacing="0.05em" fill="#555">By Royal Batoo</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
