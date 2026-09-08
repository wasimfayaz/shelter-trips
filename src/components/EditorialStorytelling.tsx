'use client';

import styles from './EditorialStorytelling.module.css';

export default function EditorialStorytelling() {
  return (
    <section className={styles.storytelling} id="story">
      {/* Our Story Section */}
      <div className={styles.slowTravel}>
        <div className="container">
          <div className={`${styles.slowTravelContent} reveal`}>
            <p className={styles.sectionLabel}>
              <span className={styles.labelLine} />
              Our Story
              <span className={styles.labelLine} />
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
                { title: 'Customized', desc: 'Every tour is made for your preferences, not a template.' },
                { title: 'Local Guides', desc: 'Born & raised in Kashmir. We know all the best places.' },
                { title: '24/7 Support', desc: 'Personal support from planning until your return home.' },
              ].map((p) => (
                <div key={p.title} className={styles.pillar}>
                  <span className={styles.pillarIcon}>✦</span>
                  <div className={styles.pillarTextGroup}>
                    <h3 className={styles.pillarTitle}>{p.title}</h3>
                    <p className={styles.pillarDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
