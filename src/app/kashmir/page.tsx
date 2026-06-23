'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import styles from './page.module.css';

const kashmirStays = [
  {
    id: 'shelter-group-houseboats',
    name: 'THE SHELTER GROUP OF HOUSEBOATS',
    tag: '5★ DELUXE HOUSEBOAT',
    desc: 'Bespoke hand-carved cedar wood houseboats floating on Nigeen and Dal Lakes. Experience butler service, heritage Kashmiri carpets, and private shikara pick-ups.',
    price: '₹5,999',
    image: '/hotels/shelter group of houseboats.webp'
  },
  {
    id: 'shelter-heritage',
    name: 'HOTEL SHELTER HERITAGE',
    tag: '4★ BOUTIQUE HOTEL',
    desc: 'Traditional brick work and khatamband ceilings meets contemporary luxury in Rajbagh, Jhelum River Bank, Srinagar.',
    price: '₹4,999',
    image: '/hotels/sheter heritage.webp'
  }
];

export default function KashmirPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    duration: '5 Days',
    experience: 'Houseboat Stay',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className={styles.main}>
      <Navbar />

      {/* Cinematic Hero */}
      <header className={styles.hero} style={{ backgroundImage: `url('/gulmarg.png')` }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>THE VALLEYS OF PARADISE</span>
          <h1 className={styles.heroTitle}>Kashmir Stays & <em>Experiences</em></h1>
          <p className={styles.heroDesc}>
            Bespoke floating cedarwood palaces, Jhelum riverside heritage boutique retreats, and legendary snow valleys.
          </p>
        </div>
      </header>

      {/* Kashmir Stays Section */}
      <section className={styles.staysSection}>
        <div className="container">
          
          <div className={`${styles.sectionHeader} reveal`}>
            <p className="section-label">Kashmir Collection</p>
            <h2 className="section-title">Immersive Stays in <em>Kashmir</em></h2>
            <p className={styles.heroDesc} style={{ color: 'var(--gray-500)', fontSize: '15px' }}>
              We host you in our own curated signature retreats. Handcrafted carvings, cedar aroma, and personalized local hospitality.
            </p>
          </div>

          <div className={styles.gridStays}>
            {kashmirStays.map((stay) => (
              <article key={stay.id} className={`${styles.card} reveal`} id={`kashmir-stay-${stay.id}`}>
                <div className={styles.cardImage}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={stay.image} alt={stay.name} className={stay.id === 'shelter-group-houseboats' ? styles.image : styles.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span className={styles.cardTag}>{stay.tag}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{stay.name}</h3>
                  <p className={styles.cardDesc}>{stay.desc}</p>
                  <div className={styles.cardFooter}>
                    <div className={styles.price}>
                      <span>Starting From</span>
                      <span className={styles.priceValue}>{stay.price} <span style={{ fontSize: '12px', fontWeight: 300 }}>/ Night</span></span>
                    </div>
                    <Link href={`/hotels/${stay.id}`} className={styles.btnBook} id={`kashmir-btn-${stay.id}`}>
                      View Stays ➔
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Unique Experiences Section */}
      <section className={styles.expSection}>
        <div className="container">
          
          <div className={`${styles.sectionHeader} reveal`} style={{ textAlign: 'center', margin: '0 auto 80px' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Tailored Experiences</p>
            <h2 className="section-title">Kashmir <em>Curations</em></h2>
          </div>

          <div className={styles.expGrid}>
            <div className={`${styles.expCard} reveal`}>
              <span className={styles.expIcon}>⛵</span>
              <h3 className={styles.expTitle}>Sunset Shikara High-Tea</h3>
              <p className={styles.expDesc}>
                Cruise along the serene Dal and Nigeen lakes during sunset, accompanied by traditional Kehwa and snacks.
              </p>
            </div>
            <div className={`${styles.expCard} reveal revealDelay1`}>
              <span className={styles.expIcon}>🏔️</span>
              <h3 className={styles.expTitle}>Meadow Hikes & Trails</h3>
              <p className={styles.expDesc}>
                Explore the pine forests of Gulmarg, the valley of shepherds in Pahalgam, and the glacier passes of Sonamarg.
              </p>
            </div>
            <div className={`${styles.expCard} reveal revealDelay2`}>
              <span className={styles.expIcon}>🍲</span>
              <h3 className={styles.expTitle}>Traditional Wazwan Feast</h3>
              <p className={styles.expDesc}>
                Savor the famous 12-course slow-cooked Kashmiri gourmet feast prepared by master local chefs.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Concierge Booking Section */}
      <section className={styles.conciergeSection} id="concierge-inquiry">
        <div className="container">
          <div className={styles.conciergeGrid}>
            
            <div className={`${styles.conciergeText} reveal`}>
              <p className="section-label">Private Concierge</p>
              <h2 className={styles.conciergeTitle}>Design Your <em>Kashmir Journey</em></h2>
              <p className={styles.conciergeDesc}>
                Allow our local experts to tailor a luxury experience that matches your precise desires. Submit your details, and a private host will call you within 2 hours.
              </p>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <div>
                    <span className={styles.contactLabel}>Direct Inquiry Desk</span>
                    <span className={styles.contactValue}>+91 910-366-2018</span>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>✉️</span>
                  <div>
                    <span className={styles.contactLabel}>Email Dispatch</span>
                    <span className={styles.contactValue}>info@sheltertrips.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.formContainer} reveal revealDelay1`}>
              {sent ? (
                <div className={styles.successCard} id="kashmir-booking-success">
                  <div className={styles.successIcon}>✓</div>
                  <h3>Concierge Request Logged</h3>
                  <p>Your details have been routed to our Kashmir travel desk. A host will contact you shortly via WhatsApp/Call.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="kashmir-concierge-form">
                  <h3 className={styles.formTitle}>Concierge Inquiry</h3>
                  <p className={styles.formSubtitle}>EXPERIENCE KASHMIR IN HIGHEST COMFORT</p>

                  <div className={styles.inputGroup}>
                    <label htmlFor="kash-name">Full Name *</label>
                    <input 
                      type="text" 
                      id="kash-name" 
                      name="name" 
                      required 
                      placeholder="e.g. Elizabeth Bennett" 
                      value={form.name}
                      onChange={handleChange}
                      className={styles.inputField}
                    />
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="kash-email">Email Address *</label>
                      <input 
                        type="email" 
                        id="kash-email" 
                        name="email" 
                        required 
                        placeholder="elizabeth@example.com" 
                        value={form.email}
                        onChange={handleChange}
                        className={styles.inputField}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="kash-phone">WhatsApp / Phone *</label>
                      <input 
                        type="tel" 
                        id="kash-phone" 
                        name="phone" 
                        required 
                        placeholder="+91 99999 99999" 
                        value={form.phone}
                        onChange={handleChange}
                        className={styles.inputField}
                      />
                    </div>
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="kash-date">Preferred Date</label>
                      <input 
                        type="date" 
                        id="kash-date" 
                        name="date" 
                        required
                        value={form.date}
                        onChange={handleChange}
                        className={styles.inputField}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="kash-duration">Duration</label>
                      <select 
                        id="kash-duration" 
                        name="duration" 
                        value={form.duration}
                        onChange={handleChange}
                        className={styles.inputField}
                      >
                        <option value="3 Days">3 - 4 Days</option>
                        <option value="5 Days">5 - 6 Days</option>
                        <option value="7 Days">7 - 8 Days</option>
                        <option value="9+ Days">9+ Days</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="kash-exp">Primary Interest</label>
                    <select 
                      id="kash-exp" 
                      name="experience" 
                      value={form.experience}
                      onChange={handleChange}
                      className={styles.inputField}
                    >
                      <option value="Houseboat Stay">Deluxe Houseboat Stays</option>
                      <option value="Heritage Trail">Boutique Heritage Trails</option>
                      <option value="All-Inclusive Tour">Bespoke Kashmiri Honeymoons</option>
                      <option value="Custom Flight Tours">Custom Scenic Flight Excursions</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="kash-message">Special Preferences</label>
                    <textarea 
                      id="kash-message" 
                      name="message" 
                      rows={2} 
                      placeholder="Specify flight arrival, suite preference, diet requirements..." 
                      value={form.message}
                      onChange={handleChange}
                      className={styles.inputField}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn} id="kash-submit-btn">
                    Submit Concierge Request
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <StickyButtons />
      <ScrollReveal />
    </main>
  );
}
