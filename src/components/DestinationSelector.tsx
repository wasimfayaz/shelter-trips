'use client';

import Link from 'next/link';
import styles from './DestinationSelector.module.css';

export default function DestinationSelector() {
  return (
    <section className={styles.selector} id="destinations">
      <div className="container">
        
        <div className={`${styles.header} reveal`}>
          <p className="section-label">Select Your Destination</p>
          <h2 className="section-title">Two Worlds. <em>One Extraordinary Journey.</em></h2>
          <p className={styles.subtitle}>
            Explore the contrast of Kashmir’s lush floating gardens and heritage waters, or Ladakh’s high-altitude desert sanctuaries and monastic tranquility.
          </p>
        </div>

        <div className={styles.grid}>
          
          {/* Kashmir Card */}
          <Link href="/kashmir" className={`${styles.card} reveal`} id="dest-card-kashmir">
            <div className={styles.imageOverlay} />
            <div className={styles.imageBg} style={{ backgroundImage: `url('/gulmarg.png')` }} />
            <div className={styles.cardContent}>
              <span className={styles.cardTag}>THE VALLEYS OF PARADISE</span>
              <h3 className={styles.cardTitle}>Kashmir</h3>
              <div className={styles.dividerLine} />
              <ul className={styles.itemList}>
                <li>✦ Deluxe Cedarwood Houseboats</li>
                <li>✦ Boutique Heritage Stays</li>
                <li>✦ Private Shikara Cruises</li>
                <li>✦ Alpine Pine Forests</li>
              </ul>
              <span className={styles.exploreBtn}>Discover Kashmir ➔</span>
            </div>
          </Link>

          {/* Ladakh Card */}
          <Link href="/ladakh" className={`${styles.card} reveal revealDelay1`} id="dest-card-ladakh">
            <div className={styles.imageOverlay} />
            <div className={styles.imageBg} style={{ backgroundImage: `url('/sonamarg.png')` }} />
            <div className={styles.cardContent}>
              <span className={styles.cardTag}>THE ROOF OF THE WORLD</span>
              <h3 className={styles.cardTitle}>Ladakh</h3>
              <div className={styles.dividerLine} />
              <ul className={styles.itemList}>
                <li>✦ High-Altitude Glamping</li>
                <li>✦ Private Mountain Expeditions</li>
                <li>✦ Sacred Monasteries</li>
                <li>✦ High-Pass Custom Charters</li>
              </ul>
              <span className={styles.exploreBtn}>Discover Ladakh ➔</span>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}
