import Link from 'next/link';
import styles from './SignatureHotels.module.css';

const hotelProperties = [
  {
    id: 'shelter-group-houseboats',
    name: 'The Shelter Group of Houseboats',
    tag: '5★ Deluxe Houseboat',
    desc: 'Bespoke cedarwood houseboats offering hand-carved luxury and scenic tranquility on the waters of Srinagar.',
    location: 'Dal Lake, Srinagar',
    price: '₹5,999',
    img: '/hotels/shelter group of houseboats.webp',
  },
  {
    id: 'shelter-heritage',
    name: 'Hotel Shelter Heritage',
    tag: '4★ Boutique Hotel',
    desc: 'Classic Kashmiri architecture combined with modern hospitality, situated in the heart of Srinagar city.',
    location: 'Srinagar, Kashmir',
    price: '₹4,999',
    img: '/hotels/sheter heritage.webp',
  },
  {
    id: 'wonder-hills',
    name: 'Hotel Wonder Hills',
    tag: '4★ Alpine Resort',
    desc: 'Cozy pinewood resort overlooking snow-capped peaks and the roaring Lidder River valley in Pahalgam.',
    location: 'Pahalgam, Kashmir',
    price: '₹5,999',
    img: '/hotels/wonder hills.webp',
  },
];

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
  { id: 'shamas-residency', name: 'The Shamas Residency', img: 'https://theshamasresidency.com/images/uploads/logos/3040_logo_shamas.png' },
  { id: 'instagram-partner', name: 'Partner Logo', img: 'https://instagram.fsxr1-2.fna.fbcdn.net/v/t51.2885-19/490491913_1323206568940493_2355601723810509700_n.jpg?stp=dst-jpg_s150x150_tt6&cb=8438d1d6-89aba764&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby44ODEuYzIifQ&_nc_ht=instagram.fsxr1-2.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2gFYWcFy7qH2xgbjSUoyDXRElOtSxfkwASlVxNhNyZgrPC-Pp5tRTK9JNLVkS6oii7I&_nc_ohc=fU7tZb6wi7YQ7kNvwGzipcj&_nc_gid=z-gXN_V5TTXClRPtE_8-lA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Af_BSssEIIYsLGUim4-yJZEsexwt6U8_6UpOt0bLIhkgWQ&oe=6A39A45D&_nc_sid=7a9f4b' }
];

export default function SignatureHotels() {
  return (
    <section className={styles.hotels} id="hotels">
      <div className={styles.container}>
        {/* Signature Stays Grid */}
        <div className="reveal" style={{ marginBottom: '56px' }}>
          <p className={styles.partnersLabel} style={{ justifyContent: 'flex-start' }}>Signature Stays</p>
          <h2 className={styles.partnersTitle} style={{ textAlign: 'left', marginBottom: '24px', letterSpacing: '-0.02em' }}>
            Shelter Group <em>Stays</em>
          </h2>
          <p style={{ color: '#6a6a6a', fontSize: '15px', maxWidth: '600px', fontWeight: '300', fontFamily: 'var(--font-sans)', lineHeight: '1.8' }}>
            We host guests in our own curated signature properties. Experience heritage wood carvings on Dal Lake or fresh pine breezes in Pahalgam.
          </p>
        </div>

        <div className={styles.grid} style={{ marginBottom: '100px' }}>
          {hotelProperties.map((hotel) => (
            <article key={hotel.id} className={`${styles.card} reveal`} id={`hotel-${hotel.id}`}>
              <div className={styles.cardImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={hotel.img} alt={hotel.name} className={styles.image} />
                <span className={styles.cardTag}>{hotel.tag}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{hotel.name}</h3>
                <p className={styles.cardDesc}>{hotel.desc}</p>
                <div className={styles.cardMeta}>
                  <div className={styles.location}>
                    <span className={styles.locIcon}>📍</span>
                    <span className={styles.locText}>{hotel.location}</span>
                  </div>
                  <div className={styles.price}>
                    <span className={styles.priceLabel}>Starting From</span>
                    <span className={styles.priceValue}>{hotel.price}</span>
                  </div>
                </div>
                <Link href={`/hotels/${hotel.id}`} className={styles.btnBook} id={`hotel-btn-${hotel.id}`} style={{ borderRadius: '30px' }}>
                  View Rooms & Suites
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Partners Marquee */}
        <div className={`${styles.partnersSection} reveal`}>
          <p className={styles.partnersLabel}>Hospitality Partners</p>
          <h2 className={styles.partnersTitle}>OUR HOSPITALITY PARTNERS</h2>
          
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              {[...partners, ...partners].map((partner, index) => (
                <a 
                  href="/#contact" 
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
