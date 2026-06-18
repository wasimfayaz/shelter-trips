import styles from './Experiences.module.css';

const experiences = [
  {
    id: 'houseboat',
    title: 'Houseboat Stays',
    desc: 'Float above the mirror-still Dal Lake in beautifully crafted traditional Kashmiri houseboats — each one a floating heritage property with hand-carved cedar interiors.',
    icon: '⛵',
    img: '/houseboat.png',
  },
  {
    id: 'hotel',
    title: 'Heritage Hotels',
    desc: 'Stay in hand-picked boutique properties that blend Kashmiri craftsmanship with contemporary comfort. From mountain-view suites to valley-edge resorts.',
    icon: '🏨',
    img: '/hotel.png',
  },
  {
    id: 'car-rental',
    title: 'Private Car Transfers',
    desc: 'Explore at your own pace with our fleet of premium vehicles and experienced local drivers. Comfortable, reliable, and completely at your service.',
    icon: '🚗',
    img: '/sonamarg.png',
  },
];

export default function Experiences() {
  return (
    <section className={styles.experiences} id="experiences">
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.label}>
            <span className={styles.labelLine} />
            How We Travel
          </p>
          <h2 className={styles.title}>
            Every detail,<br /><em>curated.</em>
          </h2>
          <p className={styles.desc}>
            From the first night&apos;s stay to the last transfer home, Shelter Trips
            manages every element of your Kashmir journey with meticulous care.
          </p>

          <div className={styles.cards}>
            {experiences.map((exp) => (
              <div key={exp.id} className={styles.card} id={`exp-${exp.id}`}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>{exp.icon}</span>
                  <h3 className={styles.cardTitle}>{exp.title}</h3>
                </div>
                <p className={styles.cardDesc}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imageGrid}>
            <div className={styles.img1} style={{ overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://theurgetowander.com/wp-content/uploads/2017/06/dsc_0864-copy.jpg" alt="Kashmiri Houseboat" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className={`imagePlaceholder ${styles.img2}`}>
              <span>Placeholder: Heritage Hotel Image</span>
            </div>
            <div className={styles.img3} style={{ overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/11414716/pexels-photo-11414716.jpeg" alt="Dal Lake View" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
