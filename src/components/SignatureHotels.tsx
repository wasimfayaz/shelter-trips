import styles from './SignatureHotels.module.css';

const partners = [
  { id: 'vivanta', name: 'Vivanta', img: 'https://dialusback.com/wp-content/uploads/2024/08/Vivanta-new.png' },
  { id: 'hill-top', name: 'Hill Top', img: 'https://dialusback.com/wp-content/uploads/2024/08/Hill-top.png' },
  { id: 'four-points', name: 'Four Points by Sheraton', img: 'https://dialusback.com/wp-content/uploads/2024/08/new-Four-points-by-sheraton-.png' },
  { id: 'bonvoy', name: 'Marriott Bonvoy', img: 'https://dialusback.com/wp-content/uploads/2024/08/New-BonVoy-.png' },
  { id: 'radisson', name: 'Radisson', img: 'https://dialusback.com/wp-content/uploads/2024/08/Radisson-New-.png' },
  { id: 'radisson-collection', name: 'Radisson Collection', img: 'https://dialusback.com/wp-content/uploads/2024/08/Raddisson-Collection-.png' },
  { id: 'ahad', name: 'Ahad Hotels & Resorts', img: 'https://dialusback.com/wp-content/uploads/2024/08/Ahad-Hotels-new.png' },
  { id: 'snowland', name: 'Snow Land Hotels & Resorts', img: 'https://dialusback.com/wp-content/uploads/2024/08/Snowland-new-.png' },
  { id: 'deewan', name: 'Hotel Deewan', img: 'https://dialusback.com/wp-content/uploads/2024/08/Deewan-new-.png' },
  { id: 'vintage', name: 'The Vintage Gulmarg', img: 'https://dialusback.com/wp-content/uploads/2024/08/New-vintage-srinagar.png' },
  { id: 'royal-castle', name: 'Hotel Royal Castle', img: 'https://dialusback.com/wp-content/uploads/2024/08/Royal-Castle-newooooo.png' },
  { id: 'rosewood', name: 'Rosewood Hotel', img: 'https://dialusback.com/wp-content/uploads/2024/08/Rosewood-newrtyuiioo.png' },
  { id: 'royal-park', name: 'Hotel Royal Park', img: 'https://dialusback.com/wp-content/uploads/2024/08/Royal-Park-.png' },
  { id: 'wwr', name: 'WelcomHeritage / WWR', img: 'https://dialusback.com/wp-content/uploads/2024/08/wwr.png' },
  { id: 'eden-resort', name: 'Eden Resort', img: 'https://dialusback.com/wp-content/uploads/2024/08/Eden-Resort.png' },
  { id: 'hotel-affarwat', name: 'Hotel Affarwat Gulmarg', img: 'https://dialusback.com/wp-content/uploads/2024/08/Hotel-Affervat-Gulmarg.png' },
  { id: 'pahalgam-hotel', name: 'Pahalgam Hotel', img: 'https://dialusback.com/wp-content/uploads/2024/08/Pahalgam-Hotel.png' },
  { id: 'mount-view', name: 'Mount View Pahalgam', img: 'https://dialusback.com/wp-content/uploads/2024/08/Mount-View-pahalgam.png' },
  { id: 'welcomheritage-gurkha', name: 'WelcomHeritage Gurkha Houseboats', img: 'https://dialusback.com/wp-content/uploads/2024/08/welcome-heritage-gurkha-.png' },
  { id: 'zaffar-houseboats', name: 'Zaffar Houseboats', img: 'https://dialusback.com/wp-content/uploads/2024/08/Logo-new-Zaffer-Hb.png' },
  { id: 'jacqueline-houseboats', name: 'Jacqueline Houseboats', img: 'https://dialusback.com/wp-content/uploads/2024/08/Jaqueline-new-logo.png' },
  { id: 'shamas-residency', name: 'The Shamas Residency', img: 'https://theshamasresidency.com/images/uploads/logos/3040_logo_shamas.png' }
];

export default function SignatureHotels() {
  return (
    <section className={styles.hotels} id="hotels">
      <div className={styles.container}>
        <div className={`${styles.partnersSection} reveal`}>
          <p className={styles.partnersLabel}>Hotels, Houseboats & Resorts</p>
          <h2 className={styles.partnersTitle}>OUR HOSPITALITY PARTNERS</h2>
          
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              {[...partners, ...partners].map((partner, index) => (
                <a 
                  href="#contact" 
                  key={`${partner.id}-${index}`} 
                  className={styles.logoItem} 
                  id={`partner-${partner.id}-${index}`}
                  title={partner.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={partner.img} alt={partner.name} className={styles.logoImage} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
