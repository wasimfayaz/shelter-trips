'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import styles from './page.module.css';

const packagesDetails: { [key: string]: any } = {
  'signature-journey': {
    title: 'THE SHELTER SIGNATURE JOURNEY',
    duration: '7N 8D | PREMIUM COLLECTION',
    routing: '2N Srinagar • 2N Gulmarg • 2N Pahalgam • 1N Houseboat',
    tag: 'Signature Journey',
    price: 'From ₹42,000 / Person',
    image: 'https://images.pexels.com/photos/10701431/pexels-photo-10701431.jpeg',
    highlights: [
      '2 Nights at the premium Jhelum riverbank hotel',
      'Private 4x4 transfers across mountain passes',
      'Phase 1 & Phase 2 Gulmarg Gondola tickets pre-booked',
      'Special 12-course slow-cooked Kashmiri Wazwan dinner',
      'Sunset houseboat deck tea experience with local host'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Srinagar & River Retreat stay', desc: 'Welcome to Kashmir. Transfer to your luxury boutique hotel on the Jhelum river bank. Enjoy a traditional Wazwan welcome dinner. Overnight in Srinagar.' },
      { day: 'Day 2', title: 'Mughal Gardens Tour & High Tea', desc: 'Sightseeing of Shalimar and Nishat Gardens, followed by the Hazratbal Shrine. Evening sunset Shikara ride with high tea. Overnight in Srinagar.' },
      { day: 'Day 3', title: 'Srinagar to Gulmarg Peak Transfer', desc: 'Drive to Gulmarg. Experience Asia\'s highest Gondola ride up to Apharwat peak (Phase 1 & 2 tickets included). Overnight in Gulmarg.' },
      { day: 'Day 4', title: 'Gulmarg Meadows and Pine Trails', desc: 'Full day at leisure in Gulmarg. Optional skiing, pony riding, or trekking through the pine forest trails. Overnight in Gulmarg.' },
      { day: 'Day 5', title: 'Gulmarg to Pahalgam (River Valley)', desc: 'Travel to Pahalgam. Enroute, visit saffron fields and Jhelum river ruins. Check-in to hotel. Overnight in Pahalgam.' },
      { day: 'Day 6', title: 'Aru & Betaab Valleys Local Tour', desc: 'Embark on a private 4x4 cab tour of Aru Valley, Betaab Valley, and Chandanwari. Picnic lunch by the Lidder River. Overnight in Pahalgam.' },
      { day: 'Day 7', title: 'Pahalgam to Srinagar Deluxe Houseboat', desc: 'Drive back to Srinagar. Check-in to a luxury hand-carved cedar houseboat. Relax on Nigeen Lake. Farewell candlelight dinner. Overnight on Houseboat.' },
      { day: 'Day 8', title: 'Departure Transfer', desc: 'Breakfast on the houseboat. Transfer to Srinagar Airport.' }
    ],
    inclusions: [
      '7 Nights accommodation in luxury boutique properties',
      'Daily Breakfast and Dinner in all hotels',
      'Sunset Shikara high tea experience',
      'Gulmarg Gondola Phase 1 & 2 pre-booked tickets',
      'Private 4x4 vehicle for all transit',
      '12-Course traditional Kashmiri Wazwan dinner'
    ],
    exclusions: [
      'Flights or train tickets to/from Srinagar',
      'Lunches and personal expenditures',
      'Pony rides or local portage charges'
    ]
  },
  'honeymoon-special': {
    title: 'ALL ABOUT SHELTER | HONEYMOON SPECIAL',
    duration: '6N 7D | PREMIUM PACKAGE',
    routing: '2N Srinagar • 1N Gulmarg • 2N Pahalgam • 1N Houseboat',
    tag: 'Honeymoon Special',
    price: 'From ₹24,500 / Person',
    image: 'https://images.pexels.com/photos/7113990/pexels-photo-7113990.jpeg',
    highlights: [
      'Private 1-hour sunset Shikara Ride on Dal Lake',
      'Romantic Candlelight Dinner on Houseboat',
      'Traditional Bed Decoration & Welcome Kehwa',
      'Gulmarg Gondola Ride tickets (Phase 1 included)',
      'Free union cab excursion to Aru & Betaab Valleys',
      'All transfers in private luxury Sedan'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Srinagar & Dal Lake Houseboat stay', desc: 'Welcome to the summer capital of Jammu & Kashmir. Meet our representative at Srinagar Airport and transfer to your luxury houseboat. Enjoy a romantic 1-hour Shikara ride on Dal Lake during sunset. Spend the evening relaxing on the houseboat deck. Candlelight dinner and overnight stay on board.' },
      { day: 'Day 2', title: 'Srinagar Local Mughal Gardens Excursion', desc: 'After breakfast, transfer to your hotel. Visit the famous Mughal Gardens built by Emperor Jehangir: Nishat Bagh (Garden of Pleasure), Shalimar Bagh (Abode of Love), and Chashme Shahi (Royal Spring). Visit the historic Shankaracharya Temple for panoramic city views. Overnight in Srinagar.' },
      { day: 'Day 3', title: 'Srinagar to Gulmarg (The Meadow of Flowers)', desc: 'Drive to Gulmarg, the premier ski destination in Asia. Enjoy scenic mountain views enroute. Check-in to your hotel. Experience the thrilling Gulmarg Gondola Ride (Phase 1 included) up to Kongdori. Spend the evening walking through the pine forests. Overnight in Gulmarg.' },
      { day: 'Day 4', title: 'Gulmarg to Pahalgam (The Valley of Shepherds)', desc: 'Travel to Pahalgam. Enroute, visit the historical Avantipur Ruins and the fragrant saffron fields at Pampore. Check-in to your hotel in Pahalgam. Walk along the Lidder River and soak in the serene mountain atmosphere. Overnight in Pahalgam.' },
      { day: 'Day 5', title: 'Betaab, Aru Valley & Chandanwari Exploration', desc: 'Embark on a local cab tour to explore Aru Valley (a scenic shepherd village), Betaab Valley (where Bollywood movies are filmed), and Chandanwari (the starting point of the Amarnath Yatra). Return to the hotel for a cozy evening. Overnight in Pahalgam.' },
      { day: 'Day 6', title: 'Pahalgam to Srinagar & Local Shopping', desc: 'Return to Srinagar. Check-in to your hotel. Spend the afternoon shopping for world-famous Kashmiri carpets, Pashmina shawls, saffron, and dry fruits in Lal Chowk and local bazaars. Enjoy a traditional Kashmiri dinner. Overnight in Srinagar.' },
      { day: 'Day 7', title: 'Departure from Srinagar Airport', desc: 'After a hearty breakfast, check out from the hotel. Transfer to the Srinagar Airport for your return flight with unforgettable memories of your Kashmir honeymoon.' }
    ],
    inclusions: [
      '6 Nights accommodation (double sharing)',
      'Daily Breakfast and Dinner in all hotels',
      'Welcome drinks on arrival (Kashmiri Kehwa)',
      '1 Hour Shikara ride on Dal Lake',
      '1 Candlelight dinner & flower bed decoration',
      'Gulmarg Gondola Ride Phase 1 tickets',
      'All toll taxes, parking fees, and driver allowances'
    ],
    exclusions: [
      'Flights or train tickets to/from Srinagar',
      'Lunch, snacks, and personal beverages',
      'Pony rides or local guide charges',
      'Gulmarg Gondola Phase 2 tickets',
      'Travel insurance and medical expenses'
    ]
  },
  'abc-valley': {
    title: "WAY TO SHELTER | FREE EXCURSION TO ABC VALLEY'S PAHALGAM",
    duration: '5N 6D | VALLEYS SPECIAL',
    routing: '2N Srinagar • 2N Pahalgam • 1N Houseboat',
    tag: 'Valley Excursion',
    price: 'From ₹19,250 / Person',
    image: 'https://images.pexels.com/photos/27435043/pexels-photo-27435043.jpeg',
    highlights: [
      'Excursion to Aru, Betaab and Chandanwari valleys included',
      'Luxury Houseboat experience on Dal Lake',
      'Mughal Gardens sightseeing tour in Srinagar',
      'Enroute saffron fields & ruins tour',
      '1-Hour complementary Shikara ride'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Srinagar Arrival & Hotel Check-in', desc: 'Arrive at Srinagar airport. Meet our driver and transfer to your premium hotel. In the evening, enjoy a peaceful Shikara ride on Dal Lake, visiting the floating market. Dinner and overnight stay in Srinagar.' },
      { day: 'Day 2', title: 'Srinagar to Pahalgam (River Valley)', desc: 'After breakfast, drive to Pahalgam. Enjoy the spectacular views of pine forests and the Lidder River. Spend the day exploring the local golf course and Pahalgam market. Overnight in Pahalgam.' },
      { day: 'Day 3', title: 'Full Day ABC Valley Excursion', desc: 'Board a local union cab for a scenic drive to the famous ABC Valleys: Aru Valley, Betaab Valley, and Chandanwari. Walk through meadows, take photographs by alpine streams, and enjoy a picnic. Overnight in Pahalgam.' },
      { day: 'Day 4', title: 'Pahalgam to Srinagar & Gardens Tour', desc: 'Return to Srinagar. Check-in to your hotel. Visit the Shalimar and Nishat Mughal Gardens, followed by the beautiful Hazratbal Shrine on the banks of Dal Lake. Overnight in Srinagar.' },
      { day: 'Day 5', title: 'Check-in to Luxury Houseboat', desc: 'Check-in to a luxury houseboat. Rest of the day is at leisure for personal activities, shopping, or taking an optional day trip to Sonamarg. Dinner and overnight on board the houseboat.' },
      { day: 'Day 6', title: 'Departure Transfer', desc: 'Breakfast on the houseboat. Transfer to Srinagar Airport for your flight back home.' }
    ],
    inclusions: [
      '5 Nights accommodation (sharing base)',
      'Breakfast & Dinner in all properties',
      'Private vehicle for all road transfers',
      'ABC Valley local union cab excursion',
      '1 Hour Shikara ride'
    ],
    exclusions: [
      'Lunch, entry fees to Mughal Gardens',
      'Pony rides or local portage',
      'Flights/Trains',
      'Personal guide'
    ]
  },
  'betaab-valley': {
    title: 'WANDERING SHELTER | FREE EXCURSION TO BEHTAB VALLEY',
    duration: '4N 5D | ADVENTURE TOUR',
    routing: '2N Srinagar • 1N Pahalgam • 1N Houseboat',
    tag: 'Meadow Tour',
    price: 'From ₹15,500 / Person',
    image: 'https://images.pexels.com/photos/17488043/pexels-photo-17488043.jpeg',
    highlights: [
      'Free excursion to Betaab Valley',
      '1 Night in a luxury houseboat on Dal Lake',
      'Srinagar local sightseeing & Mughal gardens',
      'Scenic drives along Lidder and Jhelum rivers'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Srinagar & Houseboat Stay', desc: 'Arrive at Srinagar Airport and transfer to a luxury houseboat. Enjoy a traditional welcome drink and a 1-hour sunset Shikara ride. Overnight on Houseboat.' },
      { day: 'Day 2', title: 'Srinagar to Pahalgam & Betaab Valley', desc: 'Travel to Pahalgam. Enjoy scenic stops at saffron fields and Awantipora. Afternoon excursion to the majestic Betaab Valley, surrounded by snow-capped peaks. Overnight in Pahalgam.' },
      { day: 'Day 3', title: 'Pahalgam to Srinagar City Tour', desc: 'Return to Srinagar. Explore the city, visiting Shalimar Bagh, Nishat Bagh, and the old wooden bridges. Overnight in Srinagar.' },
      { day: 'Day 4', title: 'Day Trip to Gulmarg', desc: 'Embark on a day trip to Gulmarg. Explore the snow meadows, enjoy optional skiing or take a ride on the famous Gondola. Return to Srinagar for overnight.' },
      { day: 'Day 5', title: 'Srinagar Departure', desc: 'After breakfast, checkout and transfer to the airport for departure.' }
    ],
    inclusions: [
      '4 Nights accommodation',
      'Half-board meals (Breakfast & Dinner)',
      'Airport pick up & drop off',
      'Betaab Valley excursion fees',
      'Shikara ride on Dal Lake'
    ],
    exclusions: [
      'Garden entry tickets, Gulmarg Gondola tickets',
      'Lunches & personal expenditures',
      'Pony/Sledge rentals'
    ]
  },
  'shikara-ride': {
    title: 'SHELTER STORY | FREE SHIKARA RIDE',
    duration: '3N 4D | QUICK ESCAPE',
    routing: '1N Srinagar • 2N Houseboat',
    tag: 'Shikara Special',
    price: 'From ₹12,500 / Person',
    image: 'https://images.pexels.com/photos/10701431/pexels-photo-10701431.jpeg',
    highlights: [
      '2 Nights on a deluxe houseboat on Dal Lake',
      'Extended Shikara Ride with floating tea garden experience',
      'Srinagar city tour and Mughal Gardens',
      'Perfect short getaway package'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Srinagar Arrival & Houseboat Stay', desc: 'Arrive in Srinagar and check-in to your houseboat. Relax on the carved cedarwood balcony. Enjoy a 2-hour Shikara ride exploring floating markets and lily pads. Overnight on Houseboat.' },
      { day: 'Day 2', title: 'Mughal Gardens Sightseeing', desc: 'Visit Nishat Bagh and Shalimar Bagh. In the afternoon, take a walking tour of old Srinagar. Overnight on Houseboat.' },
      { day: 'Day 3', title: 'Day Trip to Gulmarg or Pahalgam', desc: 'Choice of a full day trip to either Gulmarg to see snow valleys or Pahalgam to see the Lidder River. Return to Srinagar for check-in at hotel. Overnight in Srinagar.' },
      { day: 'Day 4', title: 'Departure Transfer', desc: 'Check out after breakfast. Transfer to Srinagar Airport.' }
    ],
    inclusions: [
      '3 Nights stay (2N Houseboat, 1N Hotel)',
      'Daily Breakfast & Dinner',
      'Extended 2-hour Shikara Ride',
      'Private vehicle for transfers'
    ],
    exclusions: [
      'Lunches, Gondola rides, pony rides',
      'Flights/trains',
      'Garden entry passes'
    ]
  },
  'supper-chaijai': {
    title: 'BEST OF SHELTER | FREE SUPPER AT CHAIJAI',
    duration: '5N 6D | CULTURAL TOUR',
    routing: '2N Srinagar • 1N Gulmarg • 1N Pahalgam • 1N Houseboat',
    tag: 'Cultural Escape',
    price: 'From ₹21,000 / Person',
    image: 'https://images.pexels.com/photos/27468879/pexels-photo-27468879.jpeg',
    highlights: [
      'Complementary high-tea & supper at the iconic ChaiJai Tea Room',
      'Stay at premium hotel in Gulmarg & Pahalgam',
      'Dal Lake houseboat stay with Shikara ride',
      'All major destinations covered'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Srinagar Hotel', desc: 'Arrive at Srinagar and transfer to hotel. Free evening to walk around the Boulevard Road. Overnight in Srinagar.' },
      { day: 'Day 2', title: 'Mughal Gardens & Supper at ChaiJai', desc: 'Sightseeing of Shalimar and Nishat Gardens. In the afternoon, enjoy a premium traditional supper experience with bakery and Nun-Chai/Kehwa at the famous ChaiJai Tea Room by the Jhelum River. Overnight in Srinagar.' },
      { day: 'Day 3', title: 'Srinagar to Gulmarg', desc: 'Drive to Gulmarg. Take the Gondola ride to Apharwat peaks. Enjoy the snow landscapes. Overnight in Gulmarg.' },
      { day: 'Day 4', title: 'Gulmarg to Pahalgam', desc: 'Transfer to Pahalgam. Enjoy Lidder river side parks and check-in to hotel. Overnight in Pahalgam.' },
      { day: 'Day 5', title: 'Pahalgam to Srinagar Houseboat', desc: 'Return to Srinagar. Check-in to a luxury houseboat. Enjoy a sunset Shikara ride. Overnight on Houseboat.' },
      { day: 'Day 6', title: 'Departure', desc: 'Transfer to Srinagar Airport.' }
    ],
    inclusions: [
      '5 Nights accommodation',
      'Breakfast and Dinner daily',
      'Traditional supper at ChaiJai Tea Room',
      'Private road transfers',
      '1 Hour Shikara ride'
    ],
    exclusions: [
      'Flights, lunches, personal expenses',
      'Entry tickets, Gondola tickets, local cabs in Pahalgam'
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
    message: ''
  });
  const [sent, setSent] = useState(false);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions'>('itinerary');

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
      <header className={styles.hero} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.75)), url(${pkg.image})` }}>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <span className={styles.heroTag}>{pkg.tag}</span>
            <span className={styles.heroDuration}>{pkg.duration}</span>
            <h1 className={styles.heroTitle}>{pkg.title}</h1>
            <p className={styles.heroRouting}>{pkg.routing}</p>
            <div className={styles.priceBadge}>{pkg.price}</div>
          </div>
        </div>
      </header>

      {/* Page Body Grid */}
      <section className={styles.detailsSection}>
        <div className={styles.container}>
          <div className={styles.detailsGrid}>
            
            {/* Left Content */}
            <div className={styles.contentLeft}>
              
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

                    <div className={styles.inputRow}>
                      <div className={styles.inputGroup}>
                        <label htmlFor="pkg-date">Start Date</label>
                        <input 
                          type="date" 
                          id="pkg-date" 
                          name="date" 
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
                      href={`https://wa.me/919103662018?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20itinerary.`}
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
