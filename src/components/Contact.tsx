'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

import { sendEmailToShelterTrips } from '@/utils/sendEmail';

export default function Contact({ isStandalone = false }: { isStandalone?: boolean } = {}) {
  const [form, setForm] = useState({
    name: '',
    inquiryType: '',
    phone: '',
    destination: '',
    travelers: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendEmailToShelterTrips({
        formType: 'Trip Inquiry',
        customSubject: 'Booking Form Inquiry',
        name: form.name,
        inquiryType: form.inquiryType,
        phone: form.phone,
        destinationNeeded: form.destination,
        travelers: form.travelers,
        message: form.message,
      });
    } catch (err) {
      console.error('Contact form error:', err);
    } finally {
      setSent(true);
    }
  };

  return (
    <section className={`${styles.contact} ${isStandalone ? styles.standalone : ''}`} id="contact">
      <div className={styles.container}>
        <div className={`${styles.left} reveal`}>
          <p className={styles.label}>
            <span className={styles.labelLine} />
            Registered with J&amp;K Tourism · Start Planning
          </p>
          <h2 className={styles.title}>
            Fill in the form below.<br /><em>Our tour operator will reach out to you.</em>
          </h2>
          <p className={styles.desc}>
            Share your travel plans to get customized itineraries and pricing. Our local tour experts are available seven days a week to help you plan every detail.
          </p>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem} id="contact-govt-reg">
              <span className={styles.infoIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" fill="currentColor"/>
                </svg>
              </span>
              <div>
                <span className={styles.infoLabel}>Authenticity &amp; Trust</span>
                <span className={styles.infoValue}>Registered with J&amp;K Tourism</span>
              </div>
            </div>

            <a href="tel:+918493924278" className={styles.infoItem} id="contact-phone-1">
              <span className={styles.infoIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                </svg>
              </span>
              <div>
                <span className={styles.infoLabel}>Primary Call / WhatsApp</span>
                <span className={styles.infoValue}>+91 84939 24278</span>
              </div>
            </a>

            <a href="tel:+919103662018" className={styles.infoItem} id="contact-phone-2">
              <span className={styles.infoIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                </svg>
              </span>
              <div>
                <span className={styles.infoLabel}>Secondary Call / WhatsApp</span>
                <span className={styles.infoValue}>+91 910-366-2018</span>
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
                <span className={styles.infoValue}>Srinagar, India</span>
              </div>
            </div>
          </div>

          <div className={styles.social}>
            <span className={styles.socialLabel}>Follow our journeys</span>
            <div className={styles.socialLinks}>
              <a href="https://www.instagram.com/thesheltertrips/" className={styles.socialLink} target="_blank" rel="noopener noreferrer" id="social-instagram">Instagram</a>
              <a href="https://facebook.com/sheltertrips" className={styles.socialLink} target="_blank" rel="noopener noreferrer" id="social-facebook">Facebook</a>
              <a href="https://wa.me/918493924278" className={styles.socialLink} target="_blank" rel="noopener noreferrer" id="social-whatsapp">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className={`${styles.right} reveal revealDelay1`}>
          {sent ? (
            <div className={styles.successMsg} id="form-success">
              <div className={styles.successIcon}>✓</div>
              <h3>Enquiry Received</h3>
              <p>Our travel expert will reach out to you within 24 hours to begin crafting your perfect journey.</p>
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
                  <label htmlFor="inquiryType" className={styles.formLabel}>Inquiry Type *</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    className={styles.formInput}
                    value={form.inquiryType}
                    onChange={handleChange}
                  >
                    <option value="">Select inquiry type</option>
                    <option value="Honeymoon Package">Honeymoon Package</option>
                    <option value="Family Holiday">Family Holiday</option>
                    <option value="Group Tour">Group Tour</option>
                    <option value="Adventure Holiday">Adventure Holiday</option>
                    <option value="Hotel Reservation">Hotel Reservation</option>
                    <option value="Car Rental">Car Rental</option>
                    <option value="Customized Tour">Customized Tour</option>
                  </select>
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
                  <label htmlFor="travelers" className={styles.formLabel}>Total Guests</label>
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
                  <option value="Jammu — Vaishno Devi, Patnitop, Bahu Fort, etc.">Jammu — Vaishno Devi, Patnitop, Bahu Fort, etc.</option>
                  <option value="Kashmir — Gulmarg, Sonamarg, Pahalgam, etc.">Kashmir — Gulmarg, Sonamarg, Pahalgam, etc.</option>
                  <option value="Ladakh — Leh, Pangong Lake, Nubra, etc.">Ladakh — Leh, Pangong Lake, Nubra, etc.</option>
                  <option value="Customise Itinerary">Customise Itinerary</option>
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
                We typically respond within a few hours. Officially registered with J&amp;K Tourism · All enquiries handled personally.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
