'use client';

import styles from './WhyChooseUs.module.css';

const benefitsList = [
  'Tailor-Made Itineraries',
  'Handpicked Luxury Stays',
  '24/7 On-Ground Support',
  'Direct Local Pricing',
  'Private & Tracked Transfers',
  'Local Expert Guides',
  'Transparent & Flexible Booking',
  'Hassle-Free Trip Planning'
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section} id="why-choose-us">
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left: 9:16 Vimeo Video Container & Official Instagram Account Link */}
          <div className={`${styles.videoColumn} reveal`}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://player.vimeo.com/video/1215720530?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=0&muted=0&volume=1"
                className={styles.vimeoIframe}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Shelter Trips Travel Experience"
              />
            </div>

            <a 
              href="https://www.instagram.com/thesheltertrips/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.instaAccountBanner}
              id="why-choose-us-insta-link"
            >
              <div className={styles.instaBannerLeft}>
                <svg className={styles.instaBannerIcon} viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <div className={styles.instaBannerTextGroup}>
                  <span className={styles.instaBannerTag}>INSTAGRAM REELS & TESTIMONIALS</span>
                  <span className={styles.instaBannerHandle}>Follow @thesheltertrips</span>
                </div>
              </div>
              <span className={styles.instaBannerArrow}>↗</span>
            </a>
          </div>

          {/* Right: Content */}
          <div className={`${styles.contentColumn} reveal revealDelay1`}>
            <div className={styles.contentHeader}>
              <p className={styles.sectionLabel}>
                <span className={styles.labelLine} />
                WHY TRAVEL WITH US
              </p>
              <h2 className={styles.sectionTitle}>
                Why Travellers <em>Choose Us</em>
              </h2>
              <p className={styles.sectionDesc}>
                From bespoke itineraries and handpicked luxury stays to 24/7 on-ground support, we take care of every detail so you can experience Kashmir & Ladakh effortlessly.
              </p>
            </div>

            <div className={styles.benefitsBullets}>
              {benefitsList.map((benefit, idx) => (
                <div key={idx} className={styles.benefitBullet} id={`home-benefit-item-${idx}`}>
                  <span className={styles.bulletIcon}>✓</span>
                  <span className={styles.bulletText}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
