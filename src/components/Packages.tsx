import styles from './Packages.module.css';

const packagesList = [
  {
    id: 'honeymoon-special',
    duration: '6N 7D | PACKAGE',
    title: 'ALL ABOUT SHELTER | HONEYMOON SPECIAL',
    routing: '2N Srinagar • 1N Gulmarg • 2N Pahalgam • 1N Houseboat',
    tag: 'Honeymoon Special',
    image: 'https://images.pexels.com/photos/10701431/pexels-photo-10701431.jpeg'
  },
  {
    id: 'abc-valley',
    duration: '5N 6D | PACKAGE',
    title: "WAY TO SHELTER | FREE EXCURSION TO ABC VALLEY'S PAHALGAM",
    routing: '2N Srinagar • 2N Pahalgam • 1N Houseboat',
    tag: 'Valley Excursion',
    image: 'https://images.pexels.com/photos/27435043/pexels-photo-27435043.jpeg'
  },
  {
    id: 'betaab-valley',
    duration: '4N 5D | PACKAGE',
    title: 'WANDERING SHELTER | FREE EXCURSION TO BEHTAB VALLEY',
    routing: '2N Srinagar • 1N Pahalgam • 1N Houseboat',
    tag: 'Meadow Tour',
    image: 'https://images.pexels.com/photos/17488043/pexels-photo-17488043.jpeg'
  },
  {
    id: 'shikara-ride',
    duration: '3N 4D | PACKAGE',
    title: 'SHELTER STORY | FREE SHIKARA RIDE',
    routing: '1N Srinagar • 2N Houseboat',
    tag: 'Shikara Special',
    image: 'https://images.pexels.com/photos/7113990/pexels-photo-7113990.jpeg'
  },
  {
    id: 'supper-chaijai',
    duration: '5N 6D | PACKAGE',
    title: 'BEST OF SHELTER | FREE SUPPER AT CHAIJAI',
    routing: '2N Srinagar • 1N Gulmarg • 1N Pahalgam • 1N Houseboat',
    tag: 'Cultural Escape',
    image: 'https://images.pexels.com/photos/27468879/pexels-photo-27468879.jpeg'
  },
  {
    id: 'design-package',
    duration: 'DESIGN YOUR PACKAGE',
    title: 'CREATE YOUR OWN STORY',
    routing: 'Customized according to your needs and travel pace.',
    tag: 'Tailored',
    image: 'https://images.pexels.com/photos/33021518/pexels-photo-33021518.jpeg'
  }
];

export default function Packages() {
  return (
    <section className={styles.packages} id="packages">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>
            <span className={styles.labelLine} />
            Exclusive Deals
          </p>
          <div className={styles.headerRow}>
            <h2 className={styles.title}>
              Kashmir Holiday <em>Packages</em>
            </h2>
            <p className={styles.desc}>
              Timeless itineraries offering a blend of traditional houseboat stays, local experiences, dining, and premium logistics.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {packagesList.map((pkg) => (
            <article key={pkg.id} className={styles.card} id={`pkg-${pkg.id}`}>
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
                    <div className={styles.incCircle}>🏨</div>
                    <span className={styles.incLabel}>Hotel</span>
                  </div>
                  <div className={styles.inclusion}>
                    <div className={styles.incCircle}>✨</div>
                    <span className={styles.incLabel}>Fun</span>
                  </div>
                  <div className={styles.inclusion}>
                    <div className={styles.incCircle}>🍽️</div>
                    <span className={styles.incLabel}>Meal</span>
                  </div>
                  <div className={styles.inclusion}>
                    <div className={styles.incCircle}>🚗</div>
                    <span className={styles.incLabel}>Cab</span>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <a href="#contact" className={styles.btnEnquire} id={`pkg-enq-${pkg.id}`}>
                    Enquire Now
                  </a>
                  <a 
                    href="https://wa.me/917006655655" 
                    className={styles.btnWhatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    id={`pkg-wa-${pkg.id}`}
                  >
                    <span>WhatsApp</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.59 2.016 14.12 1.01 11.998 1.01c-5.444 0-9.866 4.372-9.87 9.802 0 1.714.459 3.39 1.33 4.882l-.99 3.613 3.7-.94z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
