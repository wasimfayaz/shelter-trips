'use client';

import styles from './Testimonials.module.css';

const reviews = [
  {
    id: 'r1',
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    text: 'Our floating deck high-tea was simply magical. The houseboat was curated with hand-woven silk carpets and cedarwood paneling, reminding us of Aman’s exquisite style.',
    trip: 'Honeymoon Odyssey Guest',
  },
  {
    id: 'r2',
    name: 'Ahmed Al-Farsi',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'A truly extraordinary expedition. The private 4x4 transfers and personal local guides made crossing the high Passes of Ladakh feel effortless and safe.',
    trip: 'Ladakh Charter Guest',
  },
  {
    id: 'r3',
    name: 'Sarah & Michael Chen',
    location: 'Singapore',
    rating: 5,
    text: 'Unforgettable. The Thiksey monastery sunrise meditation followed by traditional sound bath healing was one of the most serene wellness experiences of our lives.',
    trip: 'Wellness Retreat Guest',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="container">
        
        <div className={`${styles.headerRow} reveal`}>
          <p className="section-label">Guest Stories</p>
          <h2 className="section-title">Words from our <em>Discerning Guests</em></h2>
          <div className={styles.ratingBadge}>
            <span className={styles.ratingNum}>4.9/5</span>
            <div className={styles.ratingStars}>✦✦✦✦✦</div>
            <span className={styles.ratingNote}>Luxury Travel Recognition</span>
          </div>
        </div>

        <div className={styles.grid}>
          {reviews.map((r) => (
            <div key={r.id} className={`${styles.card} reveal`} id={`review-${r.id}`}>
              <div className={styles.stars}>
                {'✦'.repeat(r.rating)}
              </div>
              <blockquote className={styles.quote}>
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <div className={styles.author}>
                <span className={styles.bullet}>—</span>
                <div>
                  <p className={styles.authorName}>{r.name}</p>
                  <p className={styles.authorMeta}>{r.location} &bull; {r.trip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
