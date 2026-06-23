'use client';

import { useState } from 'react';
import styles from './CabRentals.module.css';

const cabFleet = [
  {
    id: 'sedan',
    type: 'Sedan',
    models: 'Toyota Etios, Swift Dzire',
    capacity: '4 Seats',
    priceLocal: '₹2,200',
    priceOutstation: '₹2,600'
  },
  {
    id: 'suv',
    type: 'SUV',
    models: 'Innova Crysta, Scorpio',
    capacity: '7 Seats',
    priceLocal: '₹3,500',
    priceOutstation: '₹4,200'
  },
  {
    id: 'muv',
    type: 'MUV',
    models: 'Ertiga, Tavera',
    capacity: '6 Seats',
    priceLocal: '₹2,800',
    priceOutstation: '₹3,400'
  },
  {
    id: 'minibus',
    type: 'Mini Bus',
    models: 'Tempo Traveller',
    capacity: '12-22 Seats',
    priceLocal: '₹5,000',
    priceOutstation: '₹6,000'
  }
];

export default function CabRentals() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    days: '1',
    cabType: 'sedan',
    route: '',
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

  const handleSelectCab = (cabId: string) => {
    setForm(prev => ({ ...prev, cabType: cabId }));
    document.getElementById('cab-booking-form-box')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.cabs} id="cabs">
      {/* Black Promo Banner */}
      <div className={styles.promoBanner} id="cab-promo-banner">
        <div className={styles.bannerContainer}>
          <span className={styles.bannerText}>
            Kashmir taxi service – Book online taxi service in Kashmir with Shelter Trips
          </span>
          <button 
            onClick={() => document.getElementById('cab-booking-form-box')?.scrollIntoView({ behavior: 'smooth' })} 
            className={styles.bannerBtn}
          >
            BOOK YOUR CAR ➔
          </button>
        </div>
      </div>

      <div className={styles.container}>
        <div className={`${styles.sectionHeader} reveal`}>
          <p className={styles.sectionLabel}><span className={styles.labelLine} />Our Fleet</p>
          <h2 className={styles.sectionTitle}>CHOOSE YOUR RIDE</h2>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Vehicle Category</th>
                <th style={{ textAlign: 'left' }}>Models Available</th>
                <th style={{ textAlign: 'center' }}>Capacity</th>
                <th style={{ textAlign: 'right' }}>Local Rate / Day</th>
                <th style={{ textAlign: 'right' }}>Outstation Rate / Day</th>
                <th style={{ textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {cabFleet.map((cab) => (
                <tr key={cab.id} id={`cab-row-${cab.id}`} className="reveal">
                  <td style={{ textAlign: 'left' }}>
                    <span className={styles.tableCabTag}>{cab.type}</span>
                  </td>
                  <td style={{ textAlign: 'left' }}>
                    <span className={styles.cabModelInfo}>{cab.models}</span>
                  </td>
                  <td style={{ textAlign: 'center' }} className={styles.seatsCol}>
                    {cab.capacity}
                  </td>
                  <td style={{ textAlign: 'right' }} className={styles.rateCol}>
                    {cab.priceLocal}
                  </td>
                  <td style={{ textAlign: 'right' }} className={styles.rateCol}>
                    {cab.priceOutstation}
                  </td>
                  <td style={{ textAlign: 'center' }} className={styles.actionCol}>
                    <button 
                      onClick={() => handleSelectCab(cab.id)}
                      className={styles.tableEnquireBtn}
                      id={`cab-row-enq-${cab.id}`}
                    >
                      Enquire ➔
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className={styles.formSection} id="cab-booking-form-box">
        <div className={styles.container}>
          <div className={styles.formGrid}>
            
            <div className={`${styles.formText} reveal`}>
              <p className={styles.sectionLabel}><span className={styles.labelLine} />Instant Reservation</p>
              <h2 className={styles.formTitle}>LET&apos;S BOOK YOUR CAR</h2>
              <p className={styles.formDesc}>
                Whether you need a simple airport transfer or a multi-day private tour driver across Gulmarg, Pahalgam, and Sonamarg, we have you covered. Fill out the reservation details and lock your car.
              </p>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <div>
                    <span className={styles.contactLabel}>Call / WhatsApp Support</span>
                    <span className={styles.contactValue}>+91 910-366-2018</span>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>✉️</span>
                  <div>
                    <span className={styles.contactLabel}>Email Dispatch Desk</span>
                    <span className={styles.contactValue}>info@sheltertrips.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.formContainer} reveal revealDelay1`}>
              {sent ? (
                <div className={styles.successCard} id="cab-booking-success">
                  <div className={styles.successIcon}>✓</div>
                  <h3>Cab Booking Enquiry Sent</h3>
                  <p>Our dispatch desk has received your taxi reservation details and will contact you via WhatsApp/Call to confirm availability and lock the rate.</p>
                  <button 
                    onClick={() => setSent(false)} 
                    className={styles.resetBtn}
                  >
                    Request Another Vehicle
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.glassForm} id="cab-booking-form">
                  
                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="cab-name">Full Name *</label>
                      <input 
                        type="text" 
                        id="cab-name" 
                        name="name" 
                        required 
                        placeholder="John Doe" 
                        value={form.name}
                        onChange={handleChange}
                        className={styles.inputField}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="cab-email">Email Address *</label>
                      <input 
                        type="email" 
                        id="cab-email" 
                        name="email" 
                        required 
                        placeholder="john@example.com" 
                        value={form.email}
                        onChange={handleChange}
                        className={styles.inputField}
                      />
                    </div>
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="cab-phone">Phone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        id="cab-phone" 
                        name="phone" 
                        required 
                        placeholder="+91 99999 99999" 
                        value={form.phone}
                        onChange={handleChange}
                        className={styles.inputField}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="cab-type">Vehicle Preference</label>
                      <select 
                        id="cab-type" 
                        name="cabType" 
                        value={form.cabType}
                        onChange={handleChange}
                        className={styles.inputField}
                      >
                        <option value="sedan">Sedan (Etios / Dzire)</option>
                        <option value="suv">SUV (Innova / Scorpio)</option>
                        <option value="muv">MUV (Ertiga / Tavera)</option>
                        <option value="minibus">Mini Bus (Tempo Traveller)</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="cab-date">Travel Date</label>
                      <input 
                        type="date" 
                        id="cab-date" 
                        name="date" 
                        required
                        value={form.date}
                        onChange={handleChange}
                        className={styles.inputField}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="cab-days">No. of Days</label>
                      <select 
                        id="cab-days" 
                        name="days" 
                        value={form.days}
                        onChange={handleChange}
                        className={styles.inputField}
                      >
                        <option value="1">1 Day (Local)</option>
                        <option value="2">2 Days</option>
                        <option value="3">3 Days</option>
                        <option value="4">4 Days</option>
                        <option value="5">5 Days</option>
                        <option value="6+">6+ Days</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="cab-route">Intended Itinerary / Pickup Point</label>
                    <input 
                      type="text" 
                      id="cab-route" 
                      name="route" 
                      placeholder="e.g. Airport to Gulmarg hotel, local Srinagar tour..."
                      value={form.route}
                      onChange={handleChange}
                      className={styles.inputField}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="cab-message">Special Instructions / Flight Details</label>
                    <textarea 
                      id="cab-message" 
                      name="message" 
                      rows={3} 
                      placeholder="Flight numbers, child seat requirements, customized stop requests..." 
                      value={form.message}
                      onChange={handleChange}
                      className={styles.inputField}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn} id="cab-submit-btn">
                    Check Cab Availability
                  </button>

                  <div className={styles.orDivider}>OR</div>

                  <a 
                    href={`https://wa.me/919103662018?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20cab%20rental.`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.whatsappBtn}
                    id="cab-whatsapp-enq"
                  >
                    Quick WhatsApp Booking
                  </a>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
