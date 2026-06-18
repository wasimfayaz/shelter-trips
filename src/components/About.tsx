import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={`${styles.left} reveal`}>
          <div className={styles.imageStack}>
            <div className={styles.imgMain} style={{ overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://theurgetowander.com/wp-content/uploads/2017/06/dsc_0864-copy.jpg" alt="Kashmiri Houseboat" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className={styles.imgSecond} style={{ overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/11414716/pexels-photo-11414716.jpeg" alt="Dal Lake View" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className={styles.yearBadge}>
              <span className={styles.yearNum}>80+</span>
              <span className={styles.yearLabel}>Years Exp.</span>
            </div>
          </div>
        </div>

        <div className={`${styles.right} reveal revealDelay1`}>
          <p className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            Our Story
          </p>

          <h2 className={styles.title}>
            Kashmir is not just a destination —<br />
            <em>it&apos;s a feeling.</em>
          </h2>

          <p className={styles.body}>
            Shelter Trips was born from a deep love for Kashmir&apos;s timeless beauty.
            For over a decade, we have been curating extraordinary journeys that go
            beyond the ordinary — connecting travellers with the soul of the valley.
          </p>

          <p className={styles.body}>
            From the shimmer of Dal Lake at dawn to the pure silence of Sonamarg&apos;s
            glaciers, every itinerary we craft is a labour of love. We work with
            hand-picked local guides, heritage houseboats, and boutique hotels to
            ensure an experience that is both authentic and effortlessly luxurious.
          </p>

          <div className={styles.pillars}>
            {[
              { icon: '◆', title: 'Handcrafted', desc: 'Every tour is tailored to your vision, not a template.' },
              { icon: '◆', title: 'Local Expertise', desc: 'Born & raised in Kashmir. We know every hidden path.' },
              { icon: '◆', title: 'White Glove', desc: 'Concierge support from planning to farewell.' },
            ].map((p) => (
              <div key={p.title} className={styles.pillar}>
                <span className={styles.pillarIcon}>{p.icon}</span>
                <div>
                  <h3 className={styles.pillarTitle}>{p.title}</h3>
                  <p className={styles.pillarDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
