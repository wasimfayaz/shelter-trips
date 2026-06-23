'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import styles from './page.module.css';

const ladakhStays = [
  {
    id: 'tsomoriri-camp',
    name: 'THE TSOMORIRI GLAMPING RETREAT',
    tag: '5★ LUXURY GLAMPING',
    desc: 'Deluxe insulated geodome tents perched on the edge of the crystal blue Tsomoriri salt lake. Features under-floor heating, organic dining, and direct view of the high peaks.',
    price: '₹12,500',
    image: 'https://images.pexels.com/photos/17488043/pexels-photo-17488043.jpeg'
  },
  {
    id: 'thiksey-hermitage',
    name: 'THIKSEY HERMITAGE LODGE',
    tag: '5★ ALPINE RETREAT',
    desc: 'Bespoke hand-cut stone lodges sitting directly below the ancient Thiksey Monastery. Experience sacred sound healing, organic local diet curations, and private stargazing guides.',
    price: '₹15,000',
    image: 'https://images.pexels.com/photos/27435043/pexels-photo-27435043.jpeg'
  }
];

export default function LadakhPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    duration: '7 Days',
    experience: 'Monastery Retreat',
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
      <header className={styles.hero} style={{ backgroundImage: `url('/sonamarg.png')` }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>THE ROOF OF THE WORLD</span>
          <h1 className={styles.heroTitle}>Ladakh Wilderness & <em>Stays</em></h1>
          <p className={styles.heroDesc}>
            High-altitude geodome glamping, heritage monastic stone lodges, and custom private pass expeditions.
          </p>
        </div>
      </header>

      {/* Ladakh Stays Section */}
      <section className={styles.staysSection}>
        <div className="container">
          
          <div className={`${styles.sectionHeader} reveal`}>
            <p className="section-label">Ladakh Collection</p>
            <h2 className="section-title">Immersive Stays in <em>Ladakh</em></h2>
            <p className={styles.heroDesc} style={{ color: 'var(--gray-500)', fontSize: '15px' }}>
              Designed to connect you directly with the high desert skies. Private local hosts, premium transport, and deep wilderness comfort.
            </p>
          </div>

          <div className={styles.gridStays}>
            {ladakhStays.map((stay) => (
              <article key={stay.id} className={`${styles.card} reveal`} id={`ladakh-stay-${stay.id}`}>
                <div className={styles.cardImage}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={stay.image} alt={stay.name} className={styles.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                    <Link href="/#contact" className={styles.btnBook} id={`ladakh-btn-${stay.id}`}>
                      Enquire Stay ➔
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
            <h2 className="section-title">Ladakh <em>Curations</em></h2>
          </div>

          <div className={styles.expGrid}>
            <div className={`${styles.expCard} reveal`}>
              <span className={styles.expIcon}>🌌</span>
              <h3 className={styles.expTitle}>Dark Sky Stargazing</h3>
              <p className={styles.expDesc}>
                Experience pristine celestial observation with telescopes in Ladakh's high-altitude clear atmospheric valleys.
              </p>
            </div>
            <div className={`${styles.expCard} reveal revealDelay1`}>
              <span className={styles.expIcon}>🛞</span>
              <h3 className={styles.expTitle}>High pass private tours</h3>
              <p className={styles.expDesc}>
                Cross the legendary Khardung La and Chang La mountain passes in premium private 4x4 vehicles.
              </p>
            </div>
            <div className={`${styles.expCard} reveal revealDelay2`}>
              <span className={styles.expIcon}>🧘</span>
              <h3 className={styles.expTitle}>Sound Bath & Meditation</h3>
              <p className={styles.expDesc}>
                Align your energy with traditional Tibetan sound baths and monastic sunrise meditation guided by local monks.
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
              <h2 className={styles.conciergeTitle}>Design Your <em>Ladakh Journey</em></h2>
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
                <div className={styles.successCard} id="ladakh-booking-success">
                  <div className={styles.successIcon}>✓</div>
                  <h3>Concierge Request Logged</h3>
                  <p>Your details have been routed to our Ladakh travel desk. A host will contact you shortly via WhatsApp/Call.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="ladakh-concierge-form">
                  <h3 className={styles.formTitle}>Concierge Inquiry</h3>
                  <p className={styles.formSubtitle}>EXPERIENCE LADAKH IN HIGHEST COMFORT</p>

                  <div className={styles.inputGroup}>
                    <label htmlFor="lad-name">Full Name *</label>
                    <input 
                      type="text" 
                      id="lad-name" 
                      name="name" 
                      required 
                      placeholder="e.g. Darcy Fitzwilliam" 
                      value={form.name}
                      onChange={handleChange}
                      className={styles.inputField}
                    />
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="lad-email">Email Address *</label>
                      <input 
                        type="email" 
                        id="lad-email" 
                        name="email" 
                        required 
                        placeholder="darcy@example.com" 
                        value={form.email}
                        onChange={handleChange}
                        className={styles.inputField}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="lad-phone">WhatsApp / Phone *</label>
                      <input 
                        type="tel" 
                        id="lad-phone" 
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
                      <label htmlFor="lad-date">Preferred Date</label>
                      <input 
                        type="date" 
                        id="lad-date" 
                        name="date" 
                        required
                        value={form.date}
                        onChange={handleChange}
                        className={styles.inputField}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="lad-duration">Duration</label>
                      <select 
                        id="lad-duration" 
                        name="duration" 
                        value={form.duration}
                        onChange={handleChange}
                        className={styles.inputField}
                      >
                        <option value="5 Days">5 - 6 Days</option>
                        <option value="7 Days">7 - 8 Days</option>
                        <option value="9 Days">9 - 10 Days</option>
                        <option value="12+ Days">12+ Days</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="lad-exp">Primary Interest</label>
                    <select 
                      id="lad-exp" 
                      name="experience" 
                      value={form.experience}
                      onChange={handleChange}
                      className={styles.inputField}
                    >
                      <option value="Monastery Retreat">Sacred Monastery retreats</option>
                      <option value="Insulated Domes">Luxury Insulation Domes</option>
                      <option value="High Pass Tours">Custom SUV Pass Expeditions</option>
                      <option value="Charters">Private Charter Transfers</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="lad-message">Special Preferences</label>
                    <textarea 
                      id="lad-message" 
                      name="message" 
                      rows={2} 
                      placeholder="Specify flight acclimatization days, dietary needs, oxygen support requests..." 
                      value={form.message}
                      onChange={handleChange}
                      className={styles.inputField}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn} id="lad-submit-btn">
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
