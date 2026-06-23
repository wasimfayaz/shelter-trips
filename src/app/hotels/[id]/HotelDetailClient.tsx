'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

const hotelsDetails: { [key: string]: any } = {
  'shelter-group-houseboats': {
    name: 'THE SHELTER GROUP OF HOUSEBOATS',
    location: 'Nigeen Lake / Dal Lake, Srinagar, Kashmir',
    tag: '5★ Deluxe Houseboat',
    price: 'From ₹5,999 / Night',
    image: '/hotels/shelter group of houseboats.webp',
    aboutTitle: 'Built for the water. Designed around heritage.',
    aboutParagraphs: [
      'The Shelter Group of Houseboats stands afloat on the serene Nigeen & Dal Lake in Srinagar — Kashmir\'s most romantic and historic water corridor. Below the cedar deck, the lake water runs calm and clear. Above, the snow-capped Zabarwan peaks look down on the floating gardens.',
      'The houseboats were not just built; they were crafted. Cedar-beamed ceilings, hand-carved walnut wood panels, and hand-knotted Kashmiri silk carpets — each element speaks the same language as the valley beyond the windows. The cedar-scented air and floating mist are the design.',
      'We are heritage by choice. A single family, four generations, hosting travelers with white-glove Kashmiri hospitality. Small enough to know exactly how you like your Kehwa in the morning, and proud to keep the legacy intact.'
    ],
    tableDetails: [
      { label: 'LOCATION', value: 'Nigeen Lake West, Srinagar, Kashmir' },
      { label: 'ALTITUDE', value: '1,585 metres above sea level' },
      { label: 'LAKE', value: 'Nigeen Lake & Dal Lake' },
      { label: 'CHECK-IN', value: '12:00 PM · Check-out 11:30 AM' },
      { label: 'RECEPTION', value: '24 hour onboard host service' },
      { label: 'CONNECTIVITY', value: 'Highspeed Wi-Fi onboard' },
      { label: 'PARKING', value: 'Secured parking near Ghat on site' },
      { label: 'TRANSFERS', value: 'Private Shikara transfers from Ghat' },
      { label: 'DINING', value: 'Complimentary breakfast & wazwan dinners' },
      { label: 'CONTACT', value: '+91 9103662018' }
    ],
    mapsLink: 'https://maps.google.com/?q=Nigeen+Lake+Srinagar+Kashmir',
    rooms: [
      { name: 'Deluxe Cedar Room', price: '₹5,999', capacity: '2 Adults + 1 Child', features: ['King size bed', 'Cedar wall panels', 'Attached modern bath', 'Lake view window'] },
      { name: 'Luxury Royal Suite', price: '₹8,500', capacity: '2 Adults + 1 Child', features: ['Private sitout area', 'Traditional chandelier', 'Bathtub & premium toiletries', 'Extended lake view'] },
      { name: 'Grand Family Suite', price: '₹12,000', capacity: '4 Adults + 2 Children', features: ['Two interconnected bedrooms', 'Dining room access', 'All modern amenities', 'Front deck view'] }
    ],
    amenities: ['High-speed WiFi', '24/7 Hot & Cold water', 'Electric blankets & Room heating', 'Private dining deck', 'En-suite luxury washrooms', 'Shikara transfers']
  },
  'shelter-heritage': {
    name: 'HOTEL SHELTER HERITAGE',
    location: 'Srinagar City Center, Kashmir',
    tag: '4★ Boutique Hotel',
    price: 'From ₹4,999 / Night',
    image: '/hotels/sheter heritage.webp',
    aboutTitle: 'Built for the city. Designed around elegance.',
    aboutParagraphs: [
      'Hotel Shelter Heritage stands in the heart of Srinagar city center — a perfect blend of historic architecture and contemporary comfort. Just steps away from the bund of the Jhelum River, it offers an oasis of quiet in the bustling summer capital.',
      'The hotel features brick-lined corridors, hand-woven crewel curtains, and traditional wooden Khatamband ceilings. Every corridor tells a story of the valley\'s craft heritage, combined with modern central heating and plush beds.',
      'We are cozy by intention. Designed to be your warm refuge after a long day of sightseeing, trekking, or bargaining in the old city bazaars. Relax by the fireplace with a cup of warm Kehwa.'
    ],
    tableDetails: [
      { label: 'LOCATION', value: 'Rajbagh Jhelum Bank, Srinagar, Kashmir' },
      { label: 'ALTITUDE', value: '1,585 metres above sea level' },
      { label: 'REGION', value: 'Jhelum River Valley' },
      { label: 'CHECK-IN', value: '2:00 PM · Check-out 12:00 PM' },
      { label: 'RECEPTION', value: '24 hour concierge host service' },
      { label: 'CONNECTIVITY', value: 'Highspeed Wi-Fi throughout' },
      { label: 'PARKING', value: 'Private secured parking on site' },
      { label: 'TRANSFERS', value: 'Private airport transfer from Srinagar' },
      { label: 'DINING', value: 'Multi-cuisine heritage dining room' },
      { label: 'CONTACT', value: '+91 9103662018' }
    ],
    mapsLink: 'https://maps.google.com/?q=Rajbagh+Srinagar+Kashmir',
    rooms: [
      { name: 'Heritage Classic Room', price: '₹4,999', capacity: '2 Adults', features: ['Queen size bed', 'Garden view', 'LCD Television', 'Room heating'] },
      { name: 'Premier Garden View Room', price: '₹6,500', capacity: '2 Adults + 1 Child', features: ['King size bed', 'Private balcony', 'Mini bar', 'Tea & coffee maker'] },
      { name: 'Presidential Heritage Suite', price: '₹9,999', capacity: '3 Adults', features: ['Spacious living room', 'Bathtub with shower', 'Premium decor', 'Mountain view'] }
    ],
    amenities: ['Centrally heated rooms', 'In-room mini bar', '24-Hour Room Service', 'Complimentary Breakfast', 'Free valet parking', 'High-speed internet']
  },
  'wonder-hills': {
    name: 'HOTEL WONDER HILLS',
    location: 'Pahalgam Pine Valley, Kashmir',
    tag: '4★ Alpine Resort',
    price: 'From ₹5,999 / Night',
    image: '/hotels/wonder hills.webp',
    aboutTitle: 'Built for the valley. Designed around tranquility.',
    aboutParagraphs: [
      'Hotel Wonder Hills stands at 2,200 metres in Pahalgam — overlooking the majestic Lidder Valley. Below the pine garden, the Lidder river stream runs ice-cold and clear. Above, ancient deodar cedar forests climb toward passes that open onto the high alpine valleys.',
      'The resort was not built to dominate this landscape. It was drawn from it. Pinewood-beamed ceilings, local river stone chimneys, and warm woolen crewel curtains — each element speaks the same language as the valley beyond the windows. The sound of the river is the design.',
      'We are small by intention. Twelve rooms, a cozy common fireplace lounge, and an outdoor bonfire garden. Small enough that we know how you take your tea by the second morning, and that the tranquility you traveled this far to find remains intact.'
    ],
    tableDetails: [
      { label: 'LOCATION', value: 'Pine Valley, Pahalgam, Kishtwar District, Kashmir' },
      { label: 'ALTITUDE', value: '2,200 metres above sea level' },
      { label: 'VALLEY', value: 'Lidder Valley · Greater Himalayan Range' },
      { label: 'CHECK-IN', value: '2:00 PM · Check-out 11:00 AM' },
      { label: 'RECEPTION', value: '24 hour resort host service' },
      { label: 'CONNECTIVITY', value: 'Highspeed Wi-Fi throughout' },
      { label: 'PARKING', value: 'Complimentary private parking on site' },
      { label: 'TRANSFERS', value: 'Private transfer from Srinagar' },
      { label: 'DINING', value: 'Organic farm-to-table meals' },
      { label: 'CONTACT', value: '+91 9103662018' }
    ],
    mapsLink: 'https://maps.google.com/?q=Pahalgam+Pine+Valley+Kashmir',
    rooms: [
      { name: 'Pine Wood Deluxe Room', price: '₹5,999', capacity: '2 Adults', features: ['Double bed', 'Pinewood walls', 'Forest view window', 'Room heater'] },
      { name: 'Valley View Balcony Room', price: '₹8,000', capacity: '2 Adults + 1 Child', features: ['King size bed', 'Private glass balcony', 'Lidder river view', 'Modern washroom'] },
      { name: 'Mountain Luxury Suite', price: '₹11,500', capacity: '3 Adults + 1 Child', features: ['Interconnected living lounge', ' fireplace decor', 'Panoramic mountain view', 'Bathtub'] }
    ],
    amenities: ['Private balconies', 'Room heaters', 'LED flat screens', 'In-room tea maker', 'Mountain tour desk', 'Laundry service']
  }
};

export default function HotelDetailClient({ id }: { id: string }) {
  const hotel = hotelsDetails[id] || hotelsDetails['shelter-group-houseboats'];

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    roomType: hotel.rooms[0].name,
    roomsCount: '1',
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
      <header className={styles.hero} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.75)), url('${hotel.image}')` }}>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <span className={styles.heroTag}>{hotel.tag}</span>
            <h1 className={styles.heroTitle}>{hotel.name}</h1>
            <p className={styles.heroLocation}>📍 {hotel.location}</p>
            <div className={styles.priceBadge}>{hotel.price}</div>
          </div>
        </div>
      </header>

      {/* Page Body Grid */}
      <section className={styles.detailsSection}>
        <div className={styles.container}>
          
          {/* Structured About / Property Details Section */}
          <div className={styles.aboutPropertyGrid}>
            
            {/* Left Column - Bio & Ethos */}
            <div className={`${styles.aboutLeft} reveal`}>
              <span className={styles.subTitleLabel}>ABOUT THE PROPERTY</span>
              <h2 className={styles.aboutTitle}>{hotel.aboutTitle}</h2>
              <div className={styles.goldLine} />
              
              <div className={styles.aboutParagraphs}>
                {hotel.aboutParagraphs.map((para: string, idx: number) => (
                  <p key={idx} className={styles.paraText}>{para}</p>
                ))}
              </div>

              <div className={styles.aboutActions}>
                <a href="#hotel-booking-form" className={styles.actionLink} id="hotel-action-res">MAKE A RESERVATION</a>
                <a href="tel:+919103662018" className={styles.actionLink} id="hotel-action-call">CALL US</a>
                <a href="mailto:info@sheltertrips.com" className={styles.actionLink} id="hotel-action-email">EMAIL US</a>
              </div>
            </div>

            {/* Right Column - Property Details Table */}
            <div className={`${styles.aboutRight} reveal revealDelay1`}>
              <span className={styles.subTitleLabel}>PROPERTY DETAILS</span>
              
              <div className={styles.detailsTable}>
                {hotel.tableDetails.map((detail: any, idx: number) => (
                  <div key={idx} className={styles.tableRow}>
                    <span className={styles.tableLabel}>{detail.label}</span>
                    <span className={styles.tableValue}>{detail.value}</span>
                  </div>
                ))}
              </div>

              <a 
                href={hotel.mapsLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.mapsBtn}
                id="hotel-maps-link"
              >
                OPEN IN MAPS
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px', display: 'inline-block', verticalAlign: 'middle' }}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>

          </div>

          <div className={styles.detailsGrid} style={{ marginTop: '80px' }}>
            
            {/* Left Content */}
            <div className={styles.contentLeft}>
              {/* Room Types Listing */}
              <div className={styles.roomsSection}>
                <h2 className={styles.sectionTitle}>Available Rooms & <em>Suites</em></h2>
                <div className={styles.roomsGrid}>
                  {hotel.rooms.map((room: any, idx: number) => (
                    <div key={idx} className={styles.roomCard} id={`room-${idx}`}>
                      <div className={styles.roomHeader}>
                        <h3 className={styles.roomName}>{room.name}</h3>
                        <div className={styles.roomPrice}>{room.price} <span className={styles.pricePeriod}>/ night</span></div>
                      </div>
                      <span className={styles.roomCapacity}>👥 Capacity: {room.capacity}</span>
                      <ul className={styles.roomFeatures}>
                        {room.features.map((feature: string, fidx: number) => (
                          <li key={fidx} className={styles.roomFeature}>— {feature}</li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => {
                          setForm(prev => ({ ...prev, roomType: room.name }));
                          document.getElementById('hotel-booking-form-box')?.scrollIntoView({ behavior: 'smooth' });
                        }} 
                        className={styles.selectRoomBtn}
                        id={`btn-select-${idx}`}
                      >
                        Select & Book
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities List */}
              <div className={styles.amenitiesBox}>
                <h3 className={styles.boxTitle}>Premium Amenities</h3>
                <div className={styles.amenitiesGrid}>
                  {hotel.amenities.map((item: string, idx: number) => (
                    <div key={idx} className={styles.amenityItem}>
                      <span className={styles.amenityIcon}>✦</span>
                      <span className={styles.amenityText}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sticky Reservation Sidebar */}
            <div className={styles.contentRight} id="hotel-booking-form-box">
              <div className={styles.stickyCard}>
                {sent ? (
                  <div className={styles.successCard} id="hotel-booking-success">
                    <div className={styles.successIcon}>✓</div>
                    <h3>Booking Request Sent</h3>
                    <p>Our travel desk has received your hotel reservation request and will contact you within 24 hours to finalize availability.</p>
                    <button 
                      onClick={() => setSent(false)} 
                      className={styles.resetBtn}
                    >
                      New Booking
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.glassForm} id="hotel-booking-form">
                    <h3 className={styles.formTitle}>Request Reservation</h3>
                    <p className={styles.formSubtitle}>Check availability and lock seasonal rates</p>
                    
                    <div className={styles.inputGroup}>
                      <label htmlFor="hotel-name-input">Full Name *</label>
                      <input 
                        type="text" 
                        id="hotel-name-input" 
                        name="name" 
                        required 
                        placeholder="John Doe" 
                        value={form.name}
                        onChange={handleChange}
                        className={styles.inputField}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="hotel-email-input">Email Address *</label>
                      <input 
                        type="email" 
                        id="hotel-email-input" 
                        name="email" 
                        required 
                        placeholder="john@example.com" 
                        value={form.email}
                        onChange={handleChange}
                        className={styles.inputField}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="hotel-phone-input">Phone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        id="hotel-phone-input" 
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
                        <label htmlFor="hotel-checkin">Check-In</label>
                        <input 
                          type="date" 
                          id="hotel-checkin" 
                          name="checkin" 
                          required
                          value={form.checkin}
                          onChange={handleChange}
                          className={styles.inputField}
                        />
                      </div>
                      <div className={styles.inputGroup}>
                        <label htmlFor="hotel-checkout">Check-Out</label>
                        <input 
                          type="date" 
                          id="hotel-checkout" 
                          name="checkout" 
                          required
                          value={form.checkout}
                          onChange={handleChange}
                          className={styles.inputField}
                        />
                      </div>
                    </div>

                    <div className={styles.inputRow}>
                      <div className={styles.inputGroup}>
                        <label htmlFor="hotel-roomtype">Room Type</label>
                        <select 
                          id="hotel-roomtype" 
                          name="roomType" 
                          value={form.roomType}
                          onChange={handleChange}
                          className={styles.inputField}
                        >
                          {hotel.rooms.map((room: any, idx: number) => (
                            <option key={idx} value={room.name}>{room.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className={styles.inputGroup}>
                        <label htmlFor="hotel-count">Rooms</label>
                        <select 
                          id="hotel-count" 
                          name="roomsCount" 
                          value={form.roomsCount}
                          onChange={handleChange}
                          className={styles.inputField}
                        >
                          <option value="1">1 Room</option>
                          <option value="2">2 Rooms</option>
                          <option value="3">3 Rooms</option>
                          <option value="4+">4+ Rooms</option>
                        </select>
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="hotel-message">Special Instructions / Preferences</label>
                      <textarea 
                        id="hotel-message" 
                        name="message" 
                        rows={3} 
                        placeholder="Airport pickup request, extra bed, meal preferences..." 
                        value={form.message}
                        onChange={handleChange}
                        className={styles.inputField}
                      />
                    </div>

                    <button type="submit" className={styles.submitBtn} id="hotel-detail-submit">
                      Check Availability
                    </button>

                    <div className={styles.orDivider}>OR</div>

                    <a 
                      href={`https://wa.me/919103662018?text=Hi%2C%20I%20am%20interested%20in%20booking%20at%20${encodeURIComponent(hotel.name)}.`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.whatsappBtn}
                      id="hotel-whatsapp-enq"
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
