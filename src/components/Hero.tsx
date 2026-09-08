'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from './Marquee';
import styles from './Hero.module.css';

import { sendEmailToShelterTrips } from '@/utils/sendEmail';

export default function Hero() {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    travelers: '',
    arrivalDate: '',
    duration: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const triggerDatePicker = () => {
    const el = dateInputRef.current;
    if (el) {
      const inputEl = el as HTMLInputElement;
      if (typeof (inputEl as any).showPicker === 'function') {
        try {
          (inputEl as any).showPicker();
        } catch {
          inputEl.focus();
        }
      } else {
        inputEl.focus();
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendEmailToShelterTrips({
        formType: 'Concierge Request',
        customSubject: 'Plan my trip Inquiry',
        name: form.name,
        phone: form.phone,
        travelers: form.travelers,
        arrivalDate: form.arrivalDate,
        duration: form.duration,
      });
    } catch (err) {
      console.error('Concierge form error:', err);
    } finally {
      setSubmitted(true);
    }
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.imageWrapper}>
        <img
          src="https://images.pexels.com/photos/36096325/pexels-photo-36096325.jpeg"
          alt="Shelter Trips Kashmir Experience"
          className={styles.heroImg}
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
              🛡️ Registered with J&K Tourism
            </span>
          </div>

          <h1 className={styles.headline}>
            <span className={styles.headlineMain}>
              Kashmir’s
            </span>
            <span className={styles.headlineItalic}>Best Tour</span>
            <span className={styles.headlineAwaits}>Packages</span>
          </h1>

          <p className={styles.subtext}>
            Explore beautiful luxury stays, customized tour packages, and private cab services across Kashmir and Ladakh.
          </p>

          <div className={styles.ctas}>
            <Link href="/plan-your-trip" className={styles.btnPrimary} id="hero-btn-plan">
              <span>Plan Your Trip</span>
            </Link>
            <a href="#packages" className={styles.btnSecondary} id="hero-btn-dest">
              <span>View Packages</span>
            </a>
            <a href="/b2b" className={styles.btnB2bHighlight} id="hero-btn-b2b">
              <span>ARE YOU A B2B AGENT?</span> ➔
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
              <span className={styles.statLabel}>Customized Trips</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>24/7</span>
              <span className={styles.statLabel}>Local Support</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.formSuccess} id="hero-form-success">
                <span className={styles.successIcon}>✓</span>
                <h3>Request Received</h3>
                <p>Thank you! Our travel team will contact you shortly on phone or WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} id="hero-concierge-request">
                <div className={styles.formHeader}>
                  <h3>Plan Your Trip</h3>
                  <p className={styles.formHeaderSub}>SEND US YOUR TRAVEL DETAILS</p>
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
                        placeholder="Total Guests"
                        value={form.travelers}
                        onChange={handleChange}
                        className={styles.input}
                        id="hero-input-travelers"
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <div 
                        className={styles.dateInputWrapper} 
                        onClick={triggerDatePicker}
                      >
                        {!form.arrivalDate && (
                          <span className={styles.datePlaceholder}>Arrival Date</span>
                        )}
                        <input
                          ref={dateInputRef}
                          type="date"
                          name="arrivalDate"
                          value={form.arrivalDate}
                          onChange={handleChange}
                          className={`${styles.input} ${styles.dateInput} ${!form.arrivalDate ? styles.emptyDateInput : ''}`}
                          id="hero-input-date"
                        />
                        <svg className={styles.whiteCalendarIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </div>
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
                  <span>Submit Trip Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className={styles.heroMarquee}>
        <Marquee />
      </div>
    </section>
  );
}

