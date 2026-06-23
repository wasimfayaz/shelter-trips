'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

const cabFleet = [
  {
    id: 'sedan',
    type: 'SEDAN',
    title: 'SEDANS FOR COMFORTABLE RIDES',
    desc: 'Experience luxury and comfort with our premium sedan cars (Etios, Dzire) in Kashmir. Perfect for couples or small families, these rides offer a smooth ride and modern amenities for your travel needs.',
    seats: 'CUSTOMER SEATS (4)',
    priceLocal: '₹2,200',
    priceOutstation: '₹2,600',
    popularRoutes: [
      { route: 'Srinagar to Gulmarg Transfer', price: '₹2,500' },
      { route: 'Srinagar to Pahalgam Transfer', price: '₹3,000' },
      { route: 'Srinagar to Sonamarg Day Excursion', price: '₹3,200' }
    ]
  },
  {
    id: 'suv',
    type: 'SUV',
    title: 'SUVS FOR ADVENTUROUS JOURNEYS',
    desc: 'Travel through the majestic landscapes of Kashmir in our spacious premium SUVs (Innova Crysta, Scorpio). Ideal for off-road mountain trips and group adventures, providing ample room and stability.',
    seats: 'CUSTOMER SEATS (7)',
    priceLocal: '₹3,500',
    priceOutstation: '₹4,200',
    popularRoutes: [
      { route: 'Srinagar to Gulmarg Transfer', price: '₹3,800' },
      { route: 'Srinagar to Pahalgam Transfer', price: '₹4,500' },
      { route: 'Srinagar to Sonamarg Day Excursion', price: '₹4,800' }
    ]
  },
  {
    id: 'muv',
    type: 'MUV',
    title: 'MUVS FOR VERSATILE TRAVEL',
    desc: 'Enjoy the perfect blend of comfort, space, and utility with our MUVs (Ertiga, Tavera, Chevrolet Enjoy) in Kashmir. Ideal for medium-sized groups or families, designed for both city transit and scenic routes.',
    seats: 'CUSTOMER SEATS (6)',
    priceLocal: '₹2,800',
    priceOutstation: '₹3,400',
    popularRoutes: [
      { route: 'Srinagar to Gulmarg Transfer', price: '₹3,000' },
      { route: 'Srinagar to Pahalgam Transfer', price: '₹3,600' },
      { route: 'Srinagar to Sonamarg Day Excursion', price: '₹3,800' }
    ]
  },
  {
    id: 'minibus',
    type: 'MINI BUS',
    title: 'MINI BUSES FOR GROUP TRAVEL',
    desc: 'Discover Kashmir with our mini buses and tempo travellers (12-26 Seater options), perfect for family reunions and large group excursions. Designed for high comfort and convenience with custom overhead carriers.',
    seats: 'CUSTOMER SEATS (11-22)',
    priceLocal: '₹5,000',
    priceOutstation: '₹6,000',
    popularRoutes: [
      { route: 'Srinagar to Gulmarg Transfer', price: '₹5,500' },
      { route: 'Srinagar to Pahalgam Transfer', price: '₹6,500' },
      { route: 'Srinagar to Sonamarg Day Excursion', price: '₹7,000' }
    ]
  }
];

export default function CabRentalPage() {
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

  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Header */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <span className={styles.heroTag}>Car Rentals</span>
            <h1 className={styles.heroTitle}>KASHMIR CAB SERVICES</h1>
            <p className={styles.heroDesc}>
              Premium taxi services in Srinagar, Gulmarg, Pahalgam, and Sonamarg. Secure online booking, professional local drivers, and clean verified fleet.
            </p>
          </div>
        </div>
      </header>

      {/* Red Promo Banner */}
      <div className={styles.promoBanner} id="cab-page-promo">
        <div className={styles.bannerContainer}>
          <span className={styles.bannerText}>
            🏆 Book verified local cabs with Shelter Trips – Best price guarantee & verified professional local drivers.
          </span>
        </div>
      </div>

      {/* Fleet & Rates Section */}
      <section className={styles.fleetSection}>
        <div className={styles.container}>
          
          <div className={`${styles.sectionHeader} reveal`}>
            <p className={styles.sectionLabel}><span className={styles.labelLine} />Our Fleet</p>
            <h2 className={styles.sectionTitle}>CHOOSE YOUR RIDE</h2>
          </div>

          <div className={styles.grid}>
            {cabFleet.map((cab, index) => (
              <article key={cab.id} className={`${styles.card} reveal ${index % 2 === 0 ? '' : 'revealDelay1'}`} id={`cab-fleet-${cab.id}`}>
                
                <div className={styles.cardHeader}>
                  <span className={styles.cabTag}>{cab.type}</span>
                  <h3 className={styles.cardTitle}>{cab.title}</h3>
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.cardDesc}>{cab.desc}</p>
                  
                  {/* Rates */}
                  <div className={styles.ratesBox}>
                    <div className={styles.rateRow}>
                      <span className={styles.rateLabel}>Srinagar Local (per day):</span>
                      <span className={styles.rateValue}>{cab.priceLocal}</span>
                    </div>
                    <div className={styles.rateRow}>
                      <span className={styles.rateLabel}>Outstation Tour (per day):</span>
                      <span className={styles.rateValue}>{cab.priceOutstation}</span>
                    </div>
                  </div>

                  {/* Route Table */}
                  <div className={styles.routesBox}>
                    <span className={styles.routesTitle}>Popular Transfer Routes:</span>
                    <ul className={styles.routesList}>
                      {cab.popularRoutes.map((r, idx) => (
                        <li key={idx} className={styles.routeItem}>
                          <span className={styles.routeName}>{r.route}</span>
                          <span className={styles.routePrice}>{r.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardFooter}>
                    <span className={styles.seats}>👥 {cab.seats}</span>
                    <button 
                      onClick={() => {
                        setForm(prev => ({ ...prev, cabType: cab.id }));
                        document.getElementById('cab-booking-form-box')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={styles.bookBtn}
                      id={`cab-btn-select-${cab.id}`}
                    >
                      Enquire Car
                    </button>
                  </div>

                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Booking Form Section */}
      <section className={styles.formSection} id="cab-booking-form-box">
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
      </section>

      <Footer />
      <StickyButtons />
      <ScrollReveal />
    </main>
  );
}
