import styles from './CabRentals.module.css';

const cabList = [
  {
    id: 'sedan',
    title: 'SEDANS FOR COMFORTABLE RIDES',
    desc: 'Experience luxury and comfort with our premium sedan cars in Kashmir. Perfect for couples or small families, these rides offer a smooth ride and modern amenities for your travel needs. Book now to explore the breathtaking beauty of Kashmir in style.',
    seats: 'CUSTOMER SEATS (4)',
    type: 'SEDAN'
  },
  {
    id: 'suv',
    title: 'SUVS FOR ADVENTUROUS JOURNEYS',
    desc: 'Travel through the majestic landscapes of Kashmir in our spacious SUVs. Ideal for off-road trips and group adventures, our SUVs provide ample room and a reliable ride for an unforgettable journey. Book your SUV cab today and make every mile memorable.',
    seats: 'CUSTOMER SEATS (7)',
    type: 'SUV'
  },
  {
    id: 'minibus',
    title: 'MINI BUSES FOR GROUP TRAVEL',
    desc: 'Discover Kashmir with our mini buses and tempo travellers, perfect for family reunions and group excursions. Designed for comfort, these vehicles ensure comfort and convenience for every passenger. Reserve your ride today and travel hassle-free.',
    seats: 'CUSTOMER SEATS (11-22)',
    type: 'MINI BUS'
  },
  {
    id: 'muv',
    title: 'MUVS FOR VERSATILE TRAVEL',
    desc: 'Enjoy the perfect blend of comfort, space, and utility with our MUVs in Kashmir. Ideal for medium-sized groups or families, these vehicles are designed for both city transit and scenic mountain routes. Book an MUV today for a reliable and versatile travel experience in Kashmir.',
    seats: 'CUSTOMER SEATS (6)',
    type: 'MUV'
  }
];

export default function CabRentals() {
  return (
    <section className={styles.cabs} id="cabs">
      {/* Red Promo Banner */}
      <div className={styles.promoBanner} id="cab-promo-banner">
        <div className={styles.bannerContainer}>
          <span className={styles.bannerText}>
            Kashmir taxi service – Book online taxi service in Kashmir with Shelter Trips
          </span>
          <a href="#contact" className={styles.bannerBtn}>
            BOOK YOUR CAR ➔
          </a>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {cabList.map((cab) => (
            <article key={cab.id} className={styles.card} id={`cab-${cab.id}`}>
              <div className={styles.cardImage}>
                <div className="imagePlaceholder" style={{ height: '100%', minHeight: '180px' }}>
                  <span>Placeholder: {cab.type} Vehicle Image</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{cab.title}</h3>
                <p className={styles.cardDesc}>{cab.desc}</p>
                
                <div className={styles.cardFooter}>
                  <span className={styles.seats}>{cab.seats}</span>
                  <span className={styles.type}>{cab.type}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
