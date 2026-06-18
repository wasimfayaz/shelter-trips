import styles from './Testimonials.module.css';

const reviews = [
  {
    id: 'r1',
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    text: 'Shelter Trips made our Kashmir honeymoon absolutely magical. The houseboat they arranged was breathtaking — carved ceilings, warm hospitality, and the most peaceful mornings on Dal Lake I could ever imagine.',
    trip: 'Srinagar Classic · 2024',
  },
  {
    id: 'r2',
    name: 'Ahmed Al-Farsi',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'The Gulmarg gondola experience was life-changing. Our guide knew every hidden path, and the hotel they booked had the most spectacular mountain views. Every detail was handled perfectly.',
    trip: 'Gulmarg Snow · 2024',
  },
  {
    id: 'r3',
    name: 'Sarah & Michael Chen',
    location: 'Singapore',
    rating: 5,
    text: 'We did the 7-day Kashmir Grand Tour and it was worth every rupee. From the shikara rides at sunrise to the meadows of Pahalgam — Shelter Trips crafted an itinerary that felt personal and unhurried.',
    trip: 'Kashmir Grand Tour · 2023',
  },
  {
    id: 'r4',
    name: 'Arjun Nair',
    location: 'Bengaluru, India',
    rating: 5,
    text: 'What impressed me most was their local knowledge. We found hidden gems that no other agency would have taken us to. The car driver was punctual, friendly, and knew the valley like the back of his hand.',
    trip: 'Pahalgam Valley · 2024',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <p className={styles.label}>
            <span className={styles.labelLine} />
            Guest Stories
          </p>
          <h2 className={styles.title}>
            Words from those who<br /><em>have been there</em>
          </h2>
          <div className={styles.ratingBadge}>
            <span className={styles.ratingNum}>4.9</span>
            <div className={styles.ratingStars}>★★★★★</div>
            <span className={styles.ratingNote}>500+ Reviews</span>
          </div>
        </div>

        <div className={styles.grid}>
          {reviews.map((r) => (
            <div key={r.id} className={styles.card} id={`review-${r.id}`}>
              <div className={styles.stars}>
                {'★'.repeat(r.rating)}
              </div>
              <blockquote className={styles.quote}>
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <div className={styles.author}>
                <div className={styles.authorInitial}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className={styles.authorName}>{r.name}</p>
                  <p className={styles.authorMeta}>{r.location} · {r.trip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
