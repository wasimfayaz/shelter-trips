'use client';

import styles from './EditorialStorytelling.module.css';

const experiencesList = [
  {
    id: 'shikara',
    tag: 'FLOAT',
    title: 'Private Shikara Cruises',
    desc: 'Glide through Nigeen Lake’s quiet morning mist, enjoying a traditional Kashmiri high tea served on board a hand-carved cedar boat.',
    img: 'https://images.pexels.com/photos/10701431/pexels-photo-10701431.jpeg'
  },
  {
    id: 'expeditions',
    tag: 'EXPLORE',
    title: 'High Pass Expeditions',
    desc: 'Traverse the wild deodar forests of Pahalgam or cross high-altitude Ladakh passes in premium private transport with personal guides.',
    img: 'https://images.pexels.com/photos/27435043/pexels-photo-27435043.jpeg'
  },
  {
    id: 'dining',
    tag: 'SAVOUR',
    title: 'Gourmet Himalayan Dining',
    desc: 'Relish curated 12-course Wazwan feasts on floating decks, or experience organic farm-to-table dining under the Ladakhi stars.',
    img: 'https://images.pexels.com/photos/27468879/pexels-photo-27468879.jpeg'
  },
  {
    id: 'wellness',
    tag: 'RESTORE',
    title: 'Monastic Wellness & Healing',
    desc: 'Reconnect at sacred monastery retreats with sunrise meditation, sound bath healing sessions, and traditional herbal therapies.',
    img: 'https://images.pexels.com/photos/17488043/pexels-photo-17488043.jpeg'
  }
];

export default function EditorialStorytelling() {
  return (
    <section className={styles.storytelling}>
      
      {/* The Art of Slow Travel Section */}
      <div className={styles.slowTravel}>
        <div className="container">
          <div className={styles.slowTravelGrid}>
            
            <div className={`${styles.slowTravelImage} reveal`}>
              <div className={styles.frameDecoration} />
              <div className={styles.imageWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://images.pexels.com/photos/7113990/pexels-photo-7113990.jpeg" 
                  alt="Slow travel in Kashmir" 
                  className={styles.imgSlow}
                />
              </div>
            </div>

            <div className={`${styles.slowTravelContent} reveal revealDelay1`}>
              <p className="section-label">Our Philosophy</p>
              <h2 className="section-title">The Art of <em>Slow Travel</em></h2>
              <div className={styles.goldLine} />
              <p className={styles.paragraph}>
                We believe travel is not about checking destinations off a list, but about leaving behind the noise of the modern world to breathe the air of ancient pine forests and still mountain lakes.
              </p>
              <p className={styles.paragraph}>
                At Shelter Trips, we curate slow, mindful journeys that allow you to truly experience the culture, heritage, and wilderness of Kashmir and Ladakh. From the moment your private shikara pulls away from the pier, time begins to stretch, opening up space for genuine connection and wonder.
              </p>
              <div className={styles.quoteBlock}>
                <p className={styles.quote}>
                  &ldquo;To travel slowly is to allow the soul to catch up with the body.&rdquo;
                </p>
                <span className={styles.quoteAuthor}>— Himalayan Wisdom</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Experiences Beyond Accommodation Section */}
      <div className={styles.beyondStays}>
        <div className="container">
          
          <div className={`${styles.beyondHeader} reveal`}>
            <p className="section-label">Beyond Stays</p>
            <h2 className="section-title">Experiences <em>Beyond Accommodation</em></h2>
            <p className={styles.beyondDesc}>
              A room is just the starting point. We design once-in-a-lifetime experiences that connect you directly to the heartbeat of the Himalayas.
            </p>
          </div>

          <div className={styles.expGrid}>
            {experiencesList.map((exp, index) => (
              <article key={exp.id} className={`${styles.expCard} reveal ${index % 2 === 0 ? '' : 'revealDelay1'}`}>
                <div className={styles.expImageContainer}>
                  <div className={styles.expImageBg} style={{ backgroundImage: `url(${exp.img})` }} />
                </div>
                <div className={styles.expCardBody}>
                  <span className={styles.expCardTag}>{exp.tag}</span>
                  <h3 className={styles.expCardTitle}>{exp.title}</h3>
                  <p className={styles.expCardDesc}>{exp.desc}</p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
