'use client';

import Link from 'next/link';
import styles from './Packages.module.css';

const packagesList = [
  {
    id: 'honeymoon-special',
    duration: '6 NIGHTS • 7 DAYS',
    title: 'Honeymoon Odyssey',
    routing: 'Srinagar • Gulmarg • Pahalgam • Private Luxury Houseboat',
    tag: 'HONEYMOON SPECIAL',
    image: 'https://images.pexels.com/photos/7113990/pexels-photo-7113990.jpeg',
    price: '₹48,999 / Couple'
  },
  {
    id: 'abc-valley',
    duration: '5 NIGHTS • 6 DAYS',
    title: 'Himalayan Sanctuary Trail',
    routing: 'Srinagar • Pahalgam Valley Excursions • Dal Lake Stay',
    tag: 'VALLEY EXCURSION',
    image: 'https://images.pexels.com/photos/27435043/pexels-photo-27435043.jpeg',
    price: '₹38,500 / Couple'
  },
  {
    id: 'betaab-valley',
    duration: '4 NIGHTS • 5 DAYS',
    title: 'Betaab Meadow Retreat',
    routing: 'Srinagar • Pahalgam Exploration • Private Houseboat Stay',
    tag: 'MEADOW TOUR',
    image: 'https://images.pexels.com/photos/17488043/pexels-photo-17488043.jpeg',
    price: '₹31,000 / Couple'
  },
  {
    id: 'shikara-ride',
    duration: '3 NIGHTS • 4 DAYS',
    title: 'Floating Lake Escape',
    routing: 'Extended Shikara Cruises • Deluxe Nigeen Lake Houseboat',
    tag: 'SHIKARA SPECIAL',
    image: 'https://images.pexels.com/photos/10701431/pexels-photo-10701431.jpeg',
    price: '₹24,999 / Couple'
  },
  {
    id: 'supper-chaijai',
    duration: '5 NIGHTS • 6 DAYS',
    title: 'Kashmiri Heritage & Culture',
    routing: 'Mughal Gardens • High Tea at ChaiJai • Gulmarg Peaks',
    tag: 'CULTURAL ESCAPE',
    image: 'https://images.pexels.com/photos/27468879/pexels-photo-27468879.jpeg',
    price: '₹42,000 / Couple'
  },
  {
    id: 'design-package',
    duration: 'BESPOKE TIMELINE',
    title: 'Design Your Private Journey',
    routing: 'Tailored specifically to your timeline, pace, and stay desires.',
    tag: 'TAILORED EXCLUSIVE',
    image: 'https://images.pexels.com/photos/33021518/pexels-photo-33021518.jpeg',
    price: 'Bespoke Pricing'
  }
];

export default function Packages() {
  return (
    <section className={styles.packages} id="packages">
      <div className="container">
        
        <div className={`${styles.header} reveal`}>
          <p className="section-label">Curated Journeys</p>
          <div className={styles.headerRow}>
            <h2 className={styles.title}>
              Extraordinary <em>Journeys</em>
            </h2>
            <p className={styles.desc}>
              Bespoke travel programs combining luxury accommodation, private transit, and curated local encounters through the valleys.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {packagesList.map((pkg, index) => (
            <article key={pkg.id} className={`${styles.card} reveal ${index % 3 === 0 ? '' : 'revealDelay' + (index % 3)}`} id={`pkg-${pkg.id}`}>
              <div className={styles.cardImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pkg.image} alt={pkg.tag} className={styles.image} />
                <span className={styles.cardTag}>{pkg.tag}</span>
              </div>

              <div className={styles.cardBody}>
                <span className={styles.cardDuration}>{pkg.duration}</span>
                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                <p className={styles.cardRouting}>{pkg.routing}</p>

                <div className={styles.inclusions}>
                  <div className={styles.inclusion}>
                    <span className={styles.incLabel}>✓ Handpicked Retreats</span>
                  </div>
                  <div className={styles.inclusion}>
                    <span className={styles.incLabel}>✓ Private Chauffeur</span>
                  </div>
                  <div className={styles.inclusion}>
                    <span className={styles.incLabel}>✓ Curated Guides</span>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.priceInfo}>
                    <span className={styles.priceLabel}>SEASONAL PRICE</span>
                    <span className={styles.price}>{pkg.price}</span>
                  </div>
                  
                  <div className={styles.actions}>
                    <Link href={`/packages/${pkg.id}`} className={styles.btnEnquire} id={`pkg-enq-${pkg.id}`}>
                      View ➔
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
