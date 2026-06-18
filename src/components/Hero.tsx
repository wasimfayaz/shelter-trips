'use client';

import { useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    travelers: '',
    arrivalDate: '',
    duration: '',
    pickup: ''
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
          <h1 className={styles.headline}>
            <span className={styles.headlineMain}>The&nbsp;Valley</span>
            <span className={styles.headlineItalic}>of Paradise</span>
            <span className={styles.headlineAwaits}>Awaits You</span>
          </h1>

          <p className={styles.subtext}>
            Bespoke Kashmir experiences — from floating palaces on Dal Lake to
            snow-crowned peaks of Gulmarg. Crafted for those who seek the extraordinary.
          </p>

          <div className={styles.ctas}>
            <a href="#packages" className={styles.btnPrimary} id="hero-explore-packages">
              <span>Explore Packages</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className={styles.btnSecondary} id="hero-plan-journey">
              Plan My Journey
            </a>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statNum}>500<sup>+</sup></span>
              <span className={styles.statLabel}>Happy Travellers</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>10</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>4.9</span>
              <span className={styles.statLabel}>Average Rating</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.formSuccess} id="hero-form-success">
                <span className={styles.successIcon}>✓</span>
                <h3>Request Sent!</h3>
                <p>Your custom itinerary request has been received. Our team will reach out within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} id="hero-query-form">
                <div className={styles.formHeader}>
                  <div className={styles.formHeaderTitle}>
                    <span className={styles.checkIcon}>✓</span>
                    <h3>Get My Free Itinerary</h3>
                  </div>
                  <p className={styles.formHeaderSub}>100% free · No commitment · Reply within 2 hours</p>
                </div>

                <div className={styles.formInputs}>
                  <div className={styles.inputGroup}>
                    <span className={styles.inputIcon}>👤</span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <span className={styles.inputIcon}>📞</span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 9876543210"
                      value={form.phone}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <span className={styles.inputIcon}>👥</span>
                      <input
                        type="text"
                        name="travelers"
                        placeholder="No. of travelers"
                        value={form.travelers}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <span className={styles.inputIcon}>📅</span>
                      <input
                        type="text"
                        name="arrivalDate"
                        placeholder="Arrival date"
                        value={form.arrivalDate}
                        onChange={handleChange}
                        className={styles.input}
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => e.target.type = 'text'}
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <span className={styles.inputIcon}>⏱</span>
                    <input
                      type="text"
                      name="duration"
                      placeholder="Trip duration (e.g. 5 Days)"
                      value={form.duration}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <span className={styles.inputIcon}>📍</span>
                    <select
                      name="pickup"
                      value={form.pickup}
                      onChange={handleChange}
                      className={styles.input}
                    >
                      <option value="">Pick-up point</option>
                      <option value="srinagar-airport">Srinagar Airport</option>
                      <option value="jammu-station">Jammu Railway Station</option>
                      <option value="custom">Other / Custom Location</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className={styles.formSubmitBtn} id="hero-form-submit">
                  <span>GET MY FREE KASHMIR ITINERARY</span>
                  <span className={styles.submitArrow}>➔</span>
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
