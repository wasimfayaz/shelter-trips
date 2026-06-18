import styles from './Tours.module.css';

const tours = [
  {
    id: 'srinagar-classic',
    title: 'Srinagar Classic',
    subtitle: 'The Houseboat Experience',
    duration: '4 Nights / 5 Days',
    price: '₹18,000',
    priceNote: 'per person',
    image: '/dalLake.png',
    highlights: ['Dal Lake shikara ride', 'Mughal Gardens', 'Floating market', 'Houseboat stay'],
    tag: 'Most Popular',
  },
  {
    id: 'gulmarg-snow',
    title: 'Gulmarg Snow',
    subtitle: 'The Alpine Adventure',
    duration: '3 Nights / 4 Days',
    price: '₹22,000',
    priceNote: 'per person',
    image: '/gulmarg.png',
    highlights: ['Gondola ride to 13,400 ft', 'Skiing & snow activities', 'Mountain meadows', 'Pine forest walks'],
    tag: 'Adventure',
  },
  {
    id: 'pahalgam-valley',
    title: 'Pahalgam Valley',
    subtitle: 'The River & Meadow Retreat',
    duration: '3 Nights / 4 Days',
    price: '₹19,500',
    priceNote: 'per person',
    image: '/pahalgam.png',
    highlights: ['Betaab Valley', 'Aru & Baisaran meadows', 'Lidder river rafting', 'Chandanwari excursion'],
    tag: 'Nature',
  },
  {
    id: 'kashmir-grand',
    title: 'Kashmir Grand Tour',
    subtitle: 'The Complete Valley Circuit',
    duration: '6 Nights / 7 Days',
    price: '₹35,000',
    priceNote: 'per person',
    image: '/sonamarg.png',
    highlights: ['Srinagar + Gulmarg + Pahalgam', 'Sonamarg glacier', 'Houseboat night', 'Private car & guide'],
    tag: 'Signature',
  },
  {
    id: 'sonamarg-glacier',
    title: 'Sonamarg Glacier',
    subtitle: 'The Meadow of Gold',
    duration: '2 Nights / 3 Days',
    price: '₹14,000',
    priceNote: 'per person',
    image: '/hero.png',
    highlights: ['Thajiwas Glacier', 'Sindh river', 'Alpine meadows', 'Mountain photography'],
    tag: 'Short Escape',
  },
  {
    id: 'heritage-hotel',
    title: 'Heritage Collection',
    subtitle: 'Bespoke Hotel Experiences',
    duration: 'Customizable',
    price: 'From ₹8,000',
    priceNote: 'per night',
    image: '/hotel.png',
    highlights: ['Curated heritage properties', 'Boutique houseboats', 'In-room experiences', 'Heritage dining'],
    tag: 'Luxury',
  },
];

export default function Tours() {
  return (
    <section className={styles.tours} id="tours">
      <div className={styles.header}>
        <div className={styles.container}>
          <p className={styles.label}>
            <span className={styles.labelLine} />
            Our Packages
          </p>
          <div className={styles.headerRow}>
            <h2 className={styles.title}>
              Curated Kashmir<br /><em>Experiences</em>
            </h2>
            <p className={styles.desc}>
              Every journey we craft begins with listening — to your dreams,
              your pace, your idea of the perfect escape.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {tours.map((tour) => (
          <article key={tour.id} className={styles.card} id={`tour-${tour.id}`}>
            <div className={styles.cardImage}>
              <div className="imagePlaceholder" style={{ height: '100%', minHeight: '260px' }}>
                <span>Placeholder: {tour.title} Image</span>
              </div>
              <div className={styles.cardOverlay} />
              <span className={styles.cardTag}>{tour.tag}</span>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.cardMeta}>
                <span className={styles.cardSubtitle}>{tour.subtitle}</span>
                <span className={styles.cardDuration}>{tour.duration}</span>
              </div>

              <h3 className={styles.cardTitle}>{tour.title}</h3>

              <ul className={styles.highlights}>
                {tour.highlights.map((h) => (
                  <li key={h} className={styles.highlight}>
                    <span className={styles.dot}>—</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className={styles.cardFooter}>
                <div className={styles.price}>
                  <span className={styles.priceNum}>{tour.price}</span>
                  <span className={styles.priceNote}>{tour.priceNote}</span>
                </div>
                <a href="#contact" className={styles.cardBtn} id={`tour-cta-${tour.id}`}>
                  Enquire
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
