'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import styles from './page.module.css';
import { sendEmailToShelterTrips } from '@/utils/sendEmail';

const packagesDetails: { [key: string]: any } = {
  'signature-journey': {
    title: 'SHELTER SIGNATURE | FREE EXCURSION TO ABC VALLEY PAHALGAM',
    duration: '5N 6D | SIGNATURE COLLECTION',
    routing: '2N Srinagar • 1N Gulmarg • 1N Pahalgam • 1N Houseboat',
    tag: 'Signature Journey',
    price: 'From ₹26,500 / Person',
    image: 'https://images.pexels.com/photos/10701431/pexels-photo-10701431.jpeg',
    highlights: [
      'Free Excursion to ABC Valley (Aru, Betaab, Chandanwari) via Union Cab',
      'Sonmarg Day Excursion to enjoy scenic Sindh River & valley landscapes',
      'Gulmarg overnight stay with beautiful meadows and pine trails',
      'Traditional houseboat stay on Dal Lake with evening Shikara ride',
      'Srinagar local sightseeing of famous Mughal Gardens & Shankaracharya Temple'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Srinagar Local Sightseeing', desc: 'Arrival at Srinagar Airport/Railway Station/Bus Stand and transfer to the hotel. Visit Nishat Bagh, Shalimar Bagh, Chashma Shahi, and Shankaracharya Temple. In the evening, enjoy a relaxing Shikara ride on Dal Lake. Dinner & overnight stay in Srinagar.' },
      { day: 'Day 2', title: 'Sonmarg Day Excursion', desc: 'Approx. 85 km | 3 hours one way. After breakfast, proceed towards Sonmarg. Enroute enjoy the scenic Sindh River, Ganderbal, and valley landscapes. Optional visit to Thajiwas Glacier and Zero Point (at own cost). Return to Srinagar. Dinner & overnight stay in Srinagar.' },
      { day: 'Day 3', title: 'Srinagar to Gulmarg', desc: 'Approx. 50 km | 2–3 hours. After breakfast, proceed towards Gulmarg. Enjoy the beautiful meadows, mountain views, and optional Gondola Ride. Spend the evening at leisure exploring the surroundings. Dinner & overnight stay in Gulmarg.' },
      { day: 'Day 4', title: 'Gulmarg to Pahalgam', desc: 'Approx. 140–150 km | 4–5 hours. After breakfast, check out and proceed towards Pahalgam. Enroute enjoy the scenic Kashmiri countryside. Upon arrival, relax and explore the Pahalgam Main Market. Spend the evening at leisure by the Lidder River. Dinner & overnight stay in Pahalgam.' },
      { day: 'Day 5', title: 'Pahalgam ABC Valley & Srinagar Houseboat', desc: 'After breakfast, proceed for ABC Valley – Aru Valley, Betaab Valley & Chandanwari via Union Cab (at own cost/included in package package). Enjoy the breathtaking natural beauty of Pahalgam. Later, return to Srinagar and check in to a traditional houseboat. Enjoy a peaceful evening on the lake. Dinner & overnight stay in Srinagar Houseboat.' },
      { day: 'Day 6', title: 'Departure', desc: 'After breakfast, check out from the houseboat. Transfer to Srinagar Airport/Railway Station/Bus Stand for your onward journey.' }
    ],
    inclusions: [
      '5 Nights accommodation (Double sharing)',
      'Daily Breakfast and Dinner in all hotels & houseboat',
      'Free ABC Valley Excursion (Aru, Betaab, Chandanwari) via local Union Cab',
      'Private Sedan/SUV for all inter-city transfers and sightseeing',
      '1 Hour Shikara ride on Dal Lake',
      'All toll taxes, parking fees, and driver allowances'
    ],
    exclusions: [
      'Flights or train tickets to/from Srinagar',
      'Lunches and personal expenditures',
      'Pony rides, local guides, Zero Point / Thajiwas Glacier local cabs in Sonmarg',
      'Gulmarg Gondola tickets'
    ]
  },
  'honeymoon-special': {
    title: 'SHELTER EXCLUSIVE | FREE HONEYMOON SETUP',
    duration: '4N 5D | PREMIUM PACKAGE',
    routing: '2N Srinagar • 1N Pahalgam • 1N Houseboat',
    tag: 'Honeymoon Special',
    price: 'From ₹24,500 / Person',
    image: 'https://images.pexels.com/photos/7113990/pexels-photo-7113990.jpeg',
    highlights: [
      'Free Romantic Honeymoon Setup (Candlelight dinner, cake & flower decoration)',
      'Free Excursion to ABC Valley (Aru, Betaab, Chandanwari) via Union Cab',
      'Day trip excursion to Gulmarg with optional Gondola Ride',
      'Traditional houseboat stay on Dal Lake with evening Shikara ride',
      'Enroute visit to Saffron Fields, Apple Orchards & Cricket Bat Factory'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Srinagar Sightseeing', desc: 'Arrival at Srinagar Airport/Railway Station/Bus Stand and transfer to the hotel. Visit Nishat Bagh, Shalimar Bagh, Chashma Shahi, and Shankaracharya Temple. In the evening, enjoy a relaxing Shikara ride on Dal Lake. Dinner & overnight stay in Srinagar.' },
      { day: 'Day 2', title: 'Gulmarg Day Excursion', desc: 'Approx. 50 km | 2–3 hours one way. After breakfast, proceed towards Gulmarg. Enjoy the beautiful meadows and panoramic mountain views. Experience the famous Gulmarg Gondola Ride (at own cost). Spend some leisure time in Gulmarg and enjoy optional activities. Return to Srinagar in the evening. Dinner & overnight stay in Srinagar.' },
      { day: 'Day 3', title: 'Srinagar to Pahalgam', desc: 'Approx. 90 km | 2–3 hours. After breakfast, proceed towards Pahalgam. Enroute visit Saffron Fields, Apple Orchards (seasonal), Dry Fruit Outlet, and the famous Cricket Bat Factory. Upon arrival, enjoy a relaxed evening in Pahalgam. Explore the Main Market and spend some peaceful time around the Lidder River. Dinner & overnight stay in Pahalgam.' },
      { day: 'Day 4', title: 'Pahalgam ABC Valley & Srinagar Houseboat', desc: 'After breakfast, proceed for ABC Valley – Aru Valley, Betaab Valley & Chandanwari via Union Cab (at own cost/included in package). Enjoy the scenic beauty and peaceful surroundings of Pahalgam. Later, proceed directly to Srinagar. Check in to a traditional houseboat and enjoy a relaxing evening on the lake. Dinner & overnight stay in Srinagar Houseboat.' },
      { day: 'Day 5', title: 'Departure', desc: 'After breakfast, check out from the houseboat. Transfer to Srinagar Airport/Railway Station/Bus Stand for departure.' }
    ],
    inclusions: [
      '4 Nights accommodation (Double sharing)',
      'Daily Breakfast and Dinner in all hotels & houseboat',
      'Free Honeymoon Setup: Flower decoration, Candlelight dinner, Cake on Houseboat',
      'Free ABC Valley Excursion (Aru, Betaab, Chandanwari) via local Union Cab',
      '1 Hour Shikara ride on Dal Lake',
      'Private Sedan/SUV for all inter-city transfers and sightseeing'
    ],
    exclusions: [
      'Flights or train tickets to/from Srinagar',
      'Lunches, snacks, and personal beverages',
      'Pony rides or local guide charges',
      'Gulmarg Gondola tickets',
      'Travel insurance and medical expenses'
    ]
  },
  'family-gondola': {
    title: 'SHELTER FAMILY | FREE GONDOLA TICKETS',
    duration: '6N 7D | FAMILY COLLECTION',
    routing: '2N Srinagar • 1N Gulmarg • 2N Pahalgam • 1N Houseboat',
    tag: 'Family Special',
    price: 'From ₹28,500 / Person',
    image: 'https://images.pexels.com/photos/27435043/pexels-photo-27435043.jpeg',
    highlights: [
      'Free pre-booked Gulmarg Gondola Phase 1 tickets for the family',
      'Free excursion to ABC Valley (Aru, Betaab, Chandanwari) via Union Cab',
      'Beautiful Doodhpathri Day Excursion along Doodh Ganga River',
      'Srinagar local shopping at Lal Chowk and Polo View Market',
      'Traditional houseboat stay on Dal Lake with evening Shikara ride'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Srinagar Local Sightseeing', desc: 'Arrival at Srinagar Airport/Railway Station/Bus Stand. Visit Nishat Bagh, Shalimar Bagh, Chashma Shahi, and Shankaracharya Temple. In the evening, enjoy a relaxing Shikara ride on Dal Lake. Dinner & overnight stay in Srinagar.' },
      { day: 'Day 2', title: 'Doodhpathri Day Excursion', desc: 'After breakfast, proceed towards Doodhpathri. Enjoy the beautiful Doodh Ganga River, lush green meadows, and peaceful mountain surroundings. Later, return to Srinagar. Dinner & overnight stay in Srinagar.' },
      { day: 'Day 3', title: 'Gulmarg Overnight Stay', desc: 'After breakfast, proceed towards Gulmarg (approx. 50 km / 2–3 hours). Enjoy the famous Gulmarg Gondola Ride (Phase 1 tickets included). Spend leisure time exploring the meadows and enjoying the scenic Himalayan views. Dinner & overnight stay in Gulmarg.' },
      { day: 'Day 4', title: 'Gulmarg to Pahalgam', desc: 'After breakfast, check out and proceed towards Pahalgam (approx. 140–150 km / 4–5 hours). Enroute enjoy the beautiful Kashmiri countryside. On arrival, relax and enjoy the scenic surroundings of Pahalgam and the Lidder River. Dinner & overnight stay in Pahalgam.' },
      { day: 'Day 5', title: 'Pahalgam ABC Valley', desc: 'After breakfast, proceed for ABC Valley – Aru Valley, Betaab Valley & Chandanwari via Union Cab (at own cost/included in package). Enjoy the breathtaking landscapes and natural beauty of Pahalgam. Return to the hotel and spend the evening at leisure. Dinner & overnight stay in Pahalgam.' },
      { day: 'Day 6', title: 'Pahalgam to Srinagar – Shopping & Houseboat', desc: 'After breakfast, check out from Pahalgam and proceed towards Srinagar (approx. 90 km / 2–3 hours). Visit Lal Chowk and Polo View Market for shopping and exploring the local market. Later, check in to a traditional Srinagar Houseboat. Enjoy a peaceful evening on the lake. Dinner & overnight stay in Srinagar Houseboat.' },
      { day: 'Day 7', title: 'Departure', desc: 'After breakfast, check out from the houseboat. Transfer to Srinagar Airport/Railway Station/Bus Stand for your onward journey. Tour Ends with Beautiful Memories of Kashmir.' }
    ],
    inclusions: [
      '6 Nights accommodation (Double/Family sharing)',
      'Daily Breakfast and Dinner in all hotels & houseboat',
      'Free Phase 1 Gondola Ride tickets for the family',
      'Free ABC Valley Excursion (Aru, Betaab, Chandanwari) via local Union Cab',
      '1 Hour Shikara ride on Dal Lake',
      'Comfortable family vehicle (SUV/MUV like Innova/Tavera) for all transfers'
    ],
    exclusions: [
      'Flights or train tickets to/from Srinagar',
      'Lunches, snacks, and personal beverages',
      'Gulmarg Gondola Phase 2 tickets',
      'Pony rides or extra activity charges'
    ]
  },
  'design-package': {
    title: 'DESIGN YOUR PACKAGE | CREATE YOUR OWN STORY',
    duration: 'CUSTOMIZABLE DURATION',
    routing: 'Choose Srinagar • Gulmarg • Pahalgam • Sonamarg • Yusmarg',
    tag: 'Tailored',
    price: 'Bespoke Pricing',
    image: 'https://images.pexels.com/photos/33021518/pexels-photo-33021518.jpeg',
    highlights: [
      'Itinerary customized specifically for your travel pace',
      'Select your preferred properties (Heritage, Luxury, Standard)',
      'Flexible transportation options (SUV, Sedan, MUV)',
      'Dedicated local travel concierge guide'
    ],
    itinerary: [
      { day: 'Step 1', title: 'Submit Your Preferences', desc: 'Use the inquiry builder on the right to choose your preferred destinations, number of travel days, stays, and budget.' },
      { day: 'Step 2', title: 'Consult With Local Experts', desc: 'Our Kashmiri travel concierge will contact you via WhatsApp or Call within a few hours to refine the itinerary details.' },
      { day: 'Step 3', title: 'Confirm & Book', desc: 'Receive a finalized PDF itinerary with all flight connections, hotel details, and private transport breakdowns. Confirm and pay securely.' }
    ],
    inclusions: [
      'Tailored accommodations according to choice',
      'Customized meal plans (Breakfast, dinner or fully catered)',
      'Dedicated personal vehicle and driver',
      'Custom experiences: Gondola bookings, horse riding, local food tours'
    ],
    exclusions: [
      'Dependant on your final choices'
    ]
  }
};

export default function PackageDetailClient({ id }: { id: string }) {
  const pkg = packagesDetails[id] || packagesDetails['honeymoon-special'];

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    travelers: '2',
    category: 'Deluxe',
    message: ''
  });
  const [sent, setSent] = useState(false);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions'>('itinerary');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendEmailToShelterTrips({
        formType: 'Package Inquiry',
        name: form.name,
        email: form.email,
        phone: form.phone,
        inquiryType: 'Customized Tour',
        destinationNeeded: `${pkg.title} (${form.category} Category)`,
        arrivalDate: form.date,
        travelers: form.travelers,
        message: form.message,
      });
    } catch (err) {
      console.error('Package inquiry error:', err);
    } finally {
      setSent(true);
    }
  };

  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Header */}
      <header className={styles.hero} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.75)), url(${pkg.image})` }}>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <span className={styles.heroTag}>{pkg.tag}</span>
            <span className={styles.heroDuration}>{pkg.duration}</span>
            <h1 className={styles.heroTitle}>{pkg.title}</h1>
            <p className={styles.heroRouting}>{pkg.routing}</p>
          </div>
        </div>
      </header>

      {/* Page Body Grid */}
      <section className={styles.detailsSection}>
        <div className={styles.container}>
          <div className={styles.detailsGrid}>
            
            {/* Left Content */}
            <div className={styles.contentLeft}>
              
              {/* Hotel Categories Info */}
              <div style={{
                background: '#f8f9fa',
                borderLeft: '4px solid var(--black, #000)',
                padding: '16px 20px',
                marginBottom: '32px',
                borderRadius: '4px'
              }}>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '14px', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#111' }}>Accommodations & Tier Variations</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#666', lineHeight: '1.5' }}>
                  This itinerary plan remains identical, but overall cost varies based on your choice of hotel categories: <strong>Deluxe</strong>, <strong>Super Deluxe</strong>, or <strong>Premium</strong>. You can choose your preferred level of stay in the custom quote form.
                </p>
              </div>

              {/* Tab Selector */}
              <div className={styles.tabs}>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'itinerary' ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab('itinerary')}
                  id="tab-itinerary"
                >
                  Itinerary
                </button>
                <button 
                  className={`${styles.tabBtn} ${activeTab === 'inclusions' ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab('inclusions')}
                  id="tab-inclusions"
                >
                  Inclusions & Exclusions
                </button>
              </div>

              {activeTab === 'itinerary' ? (
                <div className={styles.itineraryList} id="itinerary-content">
                  {pkg.itinerary.map((item: any, idx: number) => (
                    <div key={idx} className={styles.itineraryItem}>
                      <div className={styles.itineraryDay}>
                        <span className={styles.dayNum}>{item.day}</span>
                        <div className={styles.dayLine} />
                      </div>
                      <div className={styles.itineraryBody}>
                        <h3 className={styles.itineraryTitle}>{item.title}</h3>
                        <p className={styles.itineraryDesc}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.inclusionsBox} id="inclusions-content">
                  <div className={styles.incColumn}>
                    <h3 className={styles.incHeader}>Inclusions</h3>
                    <ul className={styles.incList}>
                      {pkg.inclusions.map((item: string, idx: number) => (
                        <li key={idx} className={styles.incItem}>
                          <span className={styles.incCheck}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.excColumn}>
                    <h3 className={styles.excHeader}>Exclusions</h3>
                    <ul className={styles.excList}>
                      {pkg.exclusions.map((item: string, idx: number) => (
                        <li key={idx} className={styles.excItem}>
                          <span className={styles.excCross}>✕</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Highlights Section */}
              <div className={styles.highlightsBox}>
                <h3 className={styles.highlightsTitle}>Package Highlights</h3>
                <ul className={styles.highlightsList}>
                  {pkg.highlights.map((h: string, idx: number) => (
                    <li key={idx} className={styles.highlightItem}>
                      <span className={styles.bullet}>◆</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className={styles.contentRight}>
              <div className={styles.stickyCard}>
                {sent ? (
                  <div className={styles.successCard} id="pkg-booking-success">
                    <div className={styles.successIcon}>✓</div>
                    <h3>Itinerary Enquiry Sent</h3>
                    <p>Our Kashmir travel expert will contact you within a few hours on WhatsApp/Call to begin crafting your journey.</p>
                    <button 
                      onClick={() => setSent(false)} 
                      className={styles.resetBtn}
                    >
                      Enquire Again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.glassForm} id="pkg-booking-form">
                    <h3 className={styles.formTitle}>Request Custom Quote</h3>
                    <p className={styles.formSubtitle}>Send us details and get a tailored itinerary</p>
                    
                    <div className={styles.inputGroup}>
                      <label htmlFor="pkg-name">Full Name *</label>
                      <input 
                        type="text" 
                        id="pkg-name" 
                        name="name" 
                        required 
                        placeholder="John Doe" 
                        value={form.name}
                        onChange={handleChange}
                        className={styles.inputField}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="pkg-email">Email Address *</label>
                      <input 
                        type="email" 
                        id="pkg-email" 
                        name="email" 
                        required 
                        placeholder="john@example.com" 
                        value={form.email}
                        onChange={handleChange}
                        className={styles.inputField}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="pkg-phone">WhatsApp / Phone *</label>
                      <input 
                        type="tel" 
                        id="pkg-phone" 
                        name="phone" 
                        required 
                        placeholder="+91 99999 99999" 
                        value={form.phone}
                        onChange={handleChange}
                        className={styles.inputField}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="pkg-category">Hotel Category *</label>
                      <select 
                        id="pkg-category" 
                        name="category" 
                        value={form.category}
                        onChange={handleChange}
                        className={styles.inputField}
                      >
                        <option value="Deluxe">Deluxe Category</option>
                        <option value="Super Deluxe">Super Deluxe Category</option>
                        <option value="Premium">Premium Category</option>
                      </select>
                    </div>

                    <div className={styles.inputRow}>
                      <div className={styles.inputGroup}>
                        <label htmlFor="pkg-date">Start Date</label>
                        <input 
                          type="text" 
                          id="pkg-date" 
                          name="date" 
                          placeholder="e.g. 15 Oct or DD/MM/YYYY"
                          value={form.date}
                          onChange={handleChange}
                          className={styles.inputField}
                        />
                      </div>
                      <div className={styles.inputGroup}>
                        <label htmlFor="pkg-travelers">Travelers</label>
                        <select 
                          id="pkg-travelers" 
                          name="travelers" 
                          value={form.travelers}
                          onChange={handleChange}
                          className={styles.inputField}
                        >
                          <option value="1">1 (Solo)</option>
                          <option value="2">2 (Couple)</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5+">5+</option>
                        </select>
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="pkg-message">Special Requirements / Custom Details</label>
                      <textarea 
                        id="pkg-message" 
                        name="message" 
                        rows={3} 
                        placeholder="Preferred stays, special celebrations, flights..." 
                        value={form.message}
                        onChange={handleChange}
                        className={styles.inputField}
                      />
                    </div>

                    <button type="submit" className={styles.submitBtn} id="pkg-detail-submit">
                      Get Free Itinerary Plan
                    </button>

                    <div className={styles.orDivider}>OR</div>

                    <a 
                      href={`https://wa.me/918493924278?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20itinerary.`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.whatsappBtn}
                      id="pkg-whatsapp-enq"
                    >
                      Chat on WhatsApp
                    </a>
                  </form>
                )}
              </div>
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
