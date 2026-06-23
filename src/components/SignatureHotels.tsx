'use client';

import Link from 'next/link';
import styles from './SignatureHotels.module.css';

const kashmirCollection = [
  {
    id: 'shelter-group-houseboats',
    name: 'The Shelter Group of Houseboats',
    tag: '5★ Deluxe Houseboat',
    desc: 'Bespoke cedarwood houseboats offering hand-carved luxury and scenic tranquility on the waters of Srinagar.',
    location: 'Dal Lake, Srinagar',
    price: '₹5,999',
    img: '/hotels/shelter group of houseboats.webp',
    isDynamic: true
  },
  {
    id: 'shelter-heritage',
    name: 'Hotel Shelter Heritage',
    tag: '4★ Boutique Hotel',
    desc: 'Classic Kashmiri architecture combined with modern hospitality, situated in the heart of Srinagar city.',
    location: 'Srinagar, Kashmir',
    price: '₹4,999',
    img: '/hotels/sheter heritage.webp',
    isDynamic: true
  },
  {
    id: 'wonder-hills',
    name: 'Hotel Wonder Hills',
    tag: '4★ Alpine Resort',
    desc: 'Cozy pinewood resort overlooking snow-capped peaks and the roaring Lidder River valley in Pahalgam.',
    location: 'Pahalgam, Kashmir',
    price: '₹5,999',
    img: '/hotels/wonder hills.webp',
    isDynamic: true
  },
];

const ladakhCollection = [
  {
    id: 'tsomoriri-camp',
    name: 'The Tsomoriri Glamping Retreat',
    tag: '5★ Luxury Glamping',
    desc: 'Deluxe insulated geodome tents perched on the edge of the crystal blue Tsomoriri salt lake.',
    location: 'Tsomoriri Lake, Ladakh',
    price: '₹12,500',
    img: 'https://images.pexels.com/photos/17488043/pexels-photo-17488043.jpeg',
    isDynamic: false,
    customLink: '/ladakh#concierge-inquiry'
  },
  {
    id: 'thiksey-hermitage',
    name: 'Thiksey Hermitage Lodge',
    tag: '5★ Luxury Retreat',
    desc: 'Bespoke hand-cut stone lodges sitting directly below the ancient Thiksey Monastery.',
    location: 'Thiksey, Ladakh',
    price: '₹15,000',
    img: 'https://images.pexels.com/photos/27435043/pexels-photo-27435043.jpeg',
    isDynamic: false,
    customLink: '/ladakh#concierge-inquiry'
  }
];

const partners = [
  { id: 'vivanta', name: 'Vivanta', img: 'https://dialusback.com/wp-content/uploads/2024/08/Vivanta-new.png' },
  { id: 'hill-top', name: 'Hill Top', img: 'https://dialusback.com/wp-content/uploads/2024/08/Hill-top.png' },
  { id: 'four-points', name: 'Four Points by Sheraton', img: 'https://dialusback.com/wp-content/uploads/2024/08/new-Four-points-by-sheraton-.png' },
  { id: 'bonvoy', name: 'Marriott Bonvoy', img: 'https://dialusback.com/wp-content/uploads/2024/08/New-BonVoy-.png' },
  { id: 'radisson', name: 'Radisson', img: 'https://dialusback.com/wp-content/uploads/2024/08/Radisson-New-.png' },
  { id: 'radisson-collection', name: 'Radisson Collection', img: 'https://dialusback.com/wp-content/uploads/2024/08/Raddisson-Collection-.png' },
  { id: 'ahad', name: 'Ahad Hotels & Resorts', img: 'https://dialusback.com/wp-content/uploads/2024/08/Ahad-Hotels-new.png' },
  { id: 'snowland', name: 'Snow Land Hotels & Resorts', img: 'https://dialusback.com/wp-content/uploads/2024/08/Snowland-new-.png' }
];

export default function SignatureHotels() {
  return (
    <section className={styles.hotels} id="hotels">
      <div className="container">
        
        {/* Main Section Header */}
        <div className={`${styles.mainHeader} reveal`}>
          <p className="section-label">Stays Collection</p>
          <h2 className="section-title">The Signature <em>Stays</em></h2>
          <p className={styles.mainDesc}>
            Bespoke sanctuaries designed to immerse you in local heritage and spectacular scenery. Explore our regional stay collections.
          </p>
        </div>

        {/* Kashmir Collection */}
        <div className={styles.collectionBlock}>
          <div className={`${styles.collectionTitleBox} reveal`}>
            <span className={styles.collectionNum}>01</span>
            <h3 className={styles.collectionTitle}>Kashmir <em>Collection</em></h3>
          </div>
          
          <div className={styles.grid}>
            {kashmirCollection.map((hotel) => (
              <article key={hotel.id} className={`${styles.card} reveal`} id={`hotel-${hotel.id}`}>
                <div className={styles.cardImage}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={hotel.img} alt={hotel.name} className={styles.image} />
                  <span className={styles.cardTag}>{hotel.tag}</span>
                </div>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>{hotel.name}</h4>
                  <p className={styles.cardDesc}>{hotel.desc}</p>
                  <div className={styles.cardMeta}>
                    <div className={styles.location}>
                      <span className={styles.locIcon}>📍</span>
                      <span className={styles.locText}>{hotel.location}</span>
                    </div>
                    <div className={styles.price}>
                      <span className={styles.priceLabel}>Starting From</span>
                      <span className={styles.priceValue}>{hotel.price} <span style={{ fontSize: '11px', fontWeight: 300 }}>/ Night</span></span>
                    </div>
                  </div>
                  <Link href={`/hotels/${hotel.id}`} className={styles.btnBook} id={`hotel-btn-${hotel.id}`}>
                    Explore Retreat ➔
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Ladakh Collection */}
        <div className={styles.collectionBlock} style={{ marginTop: '120px' }}>
          <div className={`${styles.collectionTitleBox} reveal`}>
            <span className={styles.collectionNum}>02</span>
            <h3 className={styles.collectionTitle}>Ladakh <em>Collection</em></h3>
          </div>

          <div className={styles.grid} style={{ gridTemplateColumns: '1fr 1fr' }}>
            {ladakhCollection.map((hotel) => (
              <article key={hotel.id} className={`${styles.card} reveal`} id={`hotel-${hotel.id}`}>
                <div className={styles.cardImage}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={hotel.img} alt={hotel.name} className={styles.image} />
                  <span className={styles.cardTag}>{hotel.tag}</span>
                </div>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>{hotel.name}</h4>
                  <p className={styles.cardDesc}>{hotel.desc}</p>
                  <div className={styles.cardMeta}>
                    <div className={styles.location}>
                      <span className={styles.locIcon}>📍</span>
                      <span className={styles.locText}>{hotel.location}</span>
                    </div>
                    <div className={styles.price}>
                      <span className={styles.priceLabel}>Starting From</span>
                      <span className={styles.priceValue}>{hotel.price} <span style={{ fontSize: '11px', fontWeight: 300 }}>/ Night</span></span>
                    </div>
                  </div>
                  <Link href={hotel.customLink} className={styles.btnBook} id={`hotel-btn-${hotel.id}`}>
                    Request Stay ➔
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Partners Marquee */}
        <div className={`${styles.partnersSection} reveal`} style={{ marginTop: '160px' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Hospitality Partners</p>
          <h2 className={styles.partnersTitle}>Global Recognition & <em>Partners</em></h2>
          
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
