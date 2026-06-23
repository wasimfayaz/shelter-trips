'use client';

import { useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    travelers: '',
    arrivalDate: '',
    duration: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.imageWrapper}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroVideo}
          src="https://www.pexels.com/download/video/33333520/"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          
          {/* Ladakh Redirect Segment */}
          <div className={styles.ladakhRedirect}>
            <span className={styles.redirectText}>Looking for Ladakh Packages?</span>
            <a 
              href="https://ladakhtourpackage.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.redirectLink}
              id="hero-ladakh-redirect"
            >
              Visit ladakhtourpackage.com ➔
            </a>
          </div>

          <div className={styles.topMeta}>
            <span className={styles.badge}>
              Himalayan Sanctuaries
            </span>
          </div>

          <h1 className={styles.headline}>
            <span className={styles.headlineMain}>
              Kashmir’s
            </span>
            <span className={styles.headlineItalic}>Most Extraordinary</span>
            <span className={styles.headlineAwaits}>Escapes</span>
          </h1>

          <p className={styles.subtext}>
            Curated luxury stays, private mountain expeditions, and slow journeys through the valleys of paradise. Designed for the discerning traveller.
          </p>

          <div className={styles.ctas}>
            <a href="#packages" className={styles.btnPrimary} id="hero-btn-dest">
              <span>View Kashmir Packages</span>
            </a>
            <a href="#story" className={styles.btnSecondary} id="hero-btn-stays">
              Our Story
            </a>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statNum}>5★</span>
              <span className={styles.statLabel}>Luxury Rating</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Bespoke Itineraries</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>24/7</span>
              <span className={styles.statLabel}>Onboard Host Service</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.formSuccess} id="hero-form-success">
                <span className={styles.successIcon}>✓</span>
                <h3>Request Logged</h3>
                <p>Your details have been routed to our private concierge desk. A dedicated travel host will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} id="hero-concierge-request">
                <div className={styles.formHeader}>
                  <h3>Private Concierge</h3>
                  <p className={styles.formHeaderSub}>REQUEST A TAILORED JOURNEY</p>
                </div>

                <div className={styles.formInputs}>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Full Name"
                      value={form.name}
                      onChange={handleChange}
                      className={styles.input}
                      id="hero-input-name"
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Phone / WhatsApp Number"
                      value={form.phone}
                      onChange={handleChange}
                      className={styles.input}
                      id="hero-input-phone"
                    />
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <input
                        type="text"
                        name="travelers"
                        placeholder="Travelers Count"
                        value={form.travelers}
                        onChange={handleChange}
                        className={styles.input}
                        id="hero-input-travelers"
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <input
                        type="text"
                        name="arrivalDate"
                        placeholder="Arrival Date"
                        value={form.arrivalDate}
                        onChange={handleChange}
                        className={styles.input}
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => e.target.type = 'text'}
                        id="hero-input-date"
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      name="duration"
                      placeholder="Duration (e.g. 7 Days)"
                      value={form.duration}
                      onChange={handleChange}
                      className={styles.input}
                      id="hero-input-duration"
                    />
                  </div>
                </div>

                <button type="submit" className={styles.formSubmitBtn} id="hero-form-submit">
                  <span>Enquire Journey</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden>
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}

