import styles from './Destinations.module.css';

const destinations = [
  {
    id: 'srinagar',
    name: 'Srinagar',
    sub: 'The Summer Capital',
    img: 'https://images.pexels.com/photos/29251278/pexels-photo-29251278.jpeg',
    note: 'City of Gardens & Lakes',
  },
  {
    id: 'gulmarg',
    name: 'Gulmarg',
    sub: 'Meadow of Flowers',
    img: 'https://images.pexels.com/photos/16252950/pexels-photo-16252950.jpeg',
    note: 'Asia\'s Premier Ski Resort',
  },
  {
    id: 'pahalgam',
    name: 'Pahalgam',
    sub: 'The Shepherd\'s Village',
    img: 'https://images.pexels.com/photos/10538891/pexels-photo-10538891.jpeg',
    note: 'Valley of the Lidder River',
  },
  {
    id: 'sonamarg',
    name: 'Sonamarg',
    sub: 'Meadow of Gold',
    img: 'https://images.pexels.com/photos/34759939/pexels-photo-34759939.jpeg',
    note: 'Gateway to the Glaciers',
  },
];

export default function Destinations() {
  return (
    <section className={styles.destinations} id="destinations">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div>
            <p className={styles.label}>
              <span className={styles.labelLine} />
              Destinations
            </p>
            <h2 className={styles.title}>
              Four corners of<br /><em>the valley</em>
            </h2>
          </div>
          <p className={styles.desc}>
            Each destination in Kashmir holds its own character — from alpine
            snow to lush meadows and ancient city gardens.
          </p>
        </div>

        <div className={styles.grid}>
          {destinations.map((dest) => (
            <a key={dest.id} href="#contact" className={styles.card} id={`dest-${dest.id}`}>
              <div className={styles.cardImg}>
                <img src={dest.img} alt={dest.name} className={styles.image} />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardNote}>{dest.note}</span>
                <h3 className={styles.cardName}>{dest.name}</h3>
                <span className={styles.cardSub}>{dest.sub}</span>
                <span className={styles.arrow}>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
