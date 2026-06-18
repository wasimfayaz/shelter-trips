import styles from './SignatureHotels.module.css';

const hotelList = [
  {
    id: 'radisson-collection-srinagar',
    title: 'Radisson Collection Hotel & Spa, Riverfront Srinagar',
    location: 'Rajbagh, Srinagar',
    desc: 'A luxurious riverside sanctuary blending high-end modern amenities with traditional Kashmiri architecture, overlooking the Jhelum River.',
    price: 'FROM 14,999',
    tag: '5-Star Luxury',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
  },
  {
    id: 'heevan-resort-pahalgam',
    title: 'Heevan Resort, Pahalgam',
    location: 'Lidder Valley, Pahalgam',
    desc: 'Nestled on the banks of the rushing Lidder River, Heevan Resort offers cozy wood-paneled cottages, traditional Kashmiri cuisine, and pine-forest views.',
    price: 'FROM 9,999',
    tag: 'Ahad Resorts',
    image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg'
  },
  {
    id: 'snow-land-gulmarg',
    title: 'Hotel Snow Land, Gulmarg',
    location: 'Near Gondola, Gulmarg',
    desc: 'Located close to the Gulmarg Gondola, offering centrally heated luxury suites, beautiful winter terrace dining, and direct access to ski slopes.',
    price: 'FROM 11,999',
    tag: 'Snow Land Group',
    image: 'https://images.pexels.com/photos/975761/pexels-photo-975761.jpeg'
  },
  {
    id: 'the-dewan-srinagar',
    title: 'The Dewan, Srinagar',
    location: 'Boulevard Road, Srinagar',
    desc: 'A premium boutique hotel featuring exquisite Kashmiri craftsmanship, royal-themed suites, and close proximity to the iconic Dal Lake.',
    price: 'FROM 7,499',
    tag: 'Boutique Stay',
    image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg'
  },
  {
    id: 'heevan-retreat-gulmarg',
    title: 'Heevan Retreat, Gulmarg',
    location: 'Meadow Walk, Gulmarg',
    desc: 'A cozy boutique retreat providing heated comfort, panoramic mountain vistas, and elegant dining within Gulmarg’s alpine landscape.',
    price: 'FROM 10,499',
    tag: 'Ahad Resorts',
    image: 'https://images.pexels.com/photos/1685144/pexels-photo-1685144.jpeg'
  },
  {
    id: 'shelter-group-houseboats',
    title: 'The Shelter Group of Houseboats',
    location: 'Dal Lake, Srinagar',
    desc: 'Traditional floating palaces featuring hand-carved cedar wood rooms, classic Kashmiri carpets, and private balconies overlooking the tranquil waters.',
    price: 'FROM 8,999',
    tag: 'Floating Luxury',
    image: 'https://images.pexels.com/photos/10701431/pexels-photo-10701431.jpeg'
  }
];

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

        <div className={styles.grid}>
          {hotelList.map((hotel, index) => (
            <article key={hotel.id} className={`${styles.card} reveal ${index % 3 === 0 ? '' : 'revealDelay' + (index % 3)}`} id={`hotel-${hotel.id}`}>
              <div className={styles.cardImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={hotel.image} alt={hotel.title} className={styles.image} />
                <span className={styles.cardTag}>{hotel.tag}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{hotel.title}</h3>
                <p className={styles.cardDesc}>{hotel.desc}</p>
                
                <div className={styles.cardMeta}>
                  <div className={styles.location}>
                    <span className={styles.locIcon}>📍</span>
                    <span className={styles.locText}>{hotel.location}</span>
                  </div>
                  <div className={styles.price}>
                    <span className={styles.priceLabel}>Rates from</span>
                    <span className={styles.priceValue}>₹{hotel.price.replace('FROM ', '')}</span>
                  </div>
                </div>

                <a href="#contact" className={styles.btnBook} id={`hotel-book-${hotel.id}`}>
                  Book Your Stay
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
