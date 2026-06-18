import styles from './SignatureHotels.module.css';

const hotelList = [
  {
    id: 'shelter-heritage',
    title: 'Hotel Shelter Heritage',
    location: 'Srinagar Jammu kashmir',
    desc: 'Shelter Heritage Hotel in Srinagar blends Kashmiri tradition with modern comfort, offering elegantly designed rooms, warm hospitality, and an authentic cultural experience amidst Kashmir\'s scenic beauty.',
    price: 'FROM 4,999',
    tag: 'Boutique Stay',
    image: '/hotels/sheter heritage.webp'
  },
  {
    id: 'wonder-hills',
    title: 'Hotel Wonder Hills',
    location: 'Pahalgam',
    desc: 'Nestled in the heart of a stunning natural paradise. Surrounded by lush forests, sparkling lakes, and breathtaking mountain vistas, our hotel offers a serene and tranquil retreat from the hustle and bustle of everyday life.',
    price: 'FROM 5,999',
    tag: 'Mountain View',
    image: '/hotels/wonder hills.webp'
  },
  {
    id: 'group-houseboats',
    title: 'The Shelter Group of Houseboats',
    location: 'Jhelum',
    desc: 'Shelter Heritage Houseboat on the serene Jhelum River offers a cozy Kashmiri experience, blending traditional charm with modern comforts amidst scenic views and warm hospitality.',
    price: 'FROM 5,999',
    tag: 'Floating Luxury',
    image: '/hotels/shelter group of houseboats.webp'
  }
];

export default function SignatureHotels() {
  return (
    <section className={styles.hotels} id="hotels">
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <p className={styles.label}>
            <span className={styles.labelLine} />
            Our Properties
          </p>
          <div className={styles.headerRow}>
            <h2 className={styles.title}>
              Shelter Stays – <em>Our Signature Hotels</em> in Kashmir
            </h2>
            <p className={styles.desc}>
              A curated selection of luxury properties and traditional houseboats, handpicked for exceptional design, comfort, and service.
            </p>
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
