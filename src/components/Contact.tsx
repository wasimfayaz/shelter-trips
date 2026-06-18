'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelers: '',
    message: '',
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
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.label}>
            <span className={styles.labelLine} />
            Start Planning
          </p>
          <h2 className={styles.title}>
            Let&apos;s craft your<br /><em>perfect Kashmir</em><br />escape.
          </h2>
          <p className={styles.desc}>
            Tell us your dream — we&apos;ll handle the rest. Our travel experts
            are available seven days a week to help you plan every detail.
          </p>

          <div className={styles.contactInfo}>
            <a href="tel:+919103662018" className={styles.infoItem} id="contact-phone">
              <span className={styles.infoIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                </svg>
              </span>
              <div>
                <span className={styles.infoLabel}>WhatsApp / Call</span>
                <span className={styles.infoValue}>+91 910-366-2018</span>
              </div>
            </a>

            <a href="mailto:info@sheltertrips.com" className={styles.infoItem} id="contact-email">
              <span className={styles.infoIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
              </span>
              <div>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>info@sheltertrips.com</span>
              </div>
            </a>

            <div className={styles.infoItem} id="contact-location">
              <span className={styles.infoIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
              </span>
              <div>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>Srinagar, Kashmir, India</span>
              </div>
            </div>
          </div>

          <div className={styles.social}>
            <span className={styles.socialLabel}>Follow our journeys</span>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com/sheltertrips" className={styles.socialLink} target="_blank" rel="noopener noreferrer" id="social-instagram">Instagram</a>
              <a href="https://facebook.com/sheltertrips" className={styles.socialLink} target="_blank" rel="noopener noreferrer" id="social-facebook">Facebook</a>
              <a href="https://wa.me/919103662018" className={styles.socialLink} target="_blank" rel="noopener noreferrer" id="social-whatsapp">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          {sent ? (
            <div className={styles.successMsg} id="form-success">
              <div className={styles.successIcon}>✓</div>
              <h3>Enquiry Received</h3>
              <p>Our Kashmir travel expert will reach out to you within 24 hours to begin crafting your perfect journey.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} id="contact-form" noValidate>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={styles.formInput}
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className={styles.formInput}
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>Phone / WhatsApp</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 ..."
                    className={styles.formInput}
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="travelers" className={styles.formLabel}>No. of Travelers</label>
                  <select
                    id="travelers"
                    name="travelers"
                    className={styles.formInput}
                    value={form.travelers}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="1">Solo Traveller</option>
                    <option value="2">2 People</option>
                    <option value="3-4">3–4 People</option>
                    <option value="5+">5+ People</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="destination" className={styles.formLabel}>Destination of Interest</label>
                <select
                  id="destination"
                  name="destination"
                  className={styles.formInput}
                  value={form.destination}
                  onChange={handleChange}
                >
                  <option value="">Select a destination</option>
                  <option value="srinagar">Srinagar — Dal Lake & Houseboats</option>
                  <option value="gulmarg">Gulmarg — Snow & Gondola</option>
                  <option value="pahalgam">Pahalgam — Valleys & Rivers</option>
                  <option value="sonamarg">Sonamarg — Glaciers & Meadows</option>
                  <option value="grand">Kashmir Grand Tour (All)</option>
                  <option value="custom">Custom Itinerary</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Tell us about your dream trip</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Dates, budget, special requests, preferences..."
                  className={`${styles.formInput} ${styles.formTextarea}`}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className={styles.submitBtn} id="form-submit">
                <span>Send Enquiry</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <p className={styles.formNote}>
                We typically respond within a few hours. All enquiries are handled personally.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
