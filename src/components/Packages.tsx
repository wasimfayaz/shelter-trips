'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Packages.module.css';

const signatureJourney = {
  id: 'signature-journey',
  duration: '7 NIGHTS • 8 DAYS',
  title: 'The Shelter Signature Journey',
  routing: 'Srinagar • Gulmarg Peaks • Pahalgam River Valley • Deluxe Houseboat',
  tag: 'SIGNATURE COLLECTION',
  image: 'https://images.pexels.com/photos/10701431/pexels-photo-10701431.jpeg',
  price: '₹42,000 / Person',
  link: '/packages/signature-journey'
};

const packagesList = [
  {
    id: 'honeymoon-special',
    duration: '6 Nights • 7 Days',
    title: 'Kashmir Honeymoon Special',
    routing: 'Srinagar • Gulmarg • Pahalgam • Romantic Nigeen Houseboat',
    tag: 'HONEYMOON SPECIAL',
    image: 'https://images.pexels.com/photos/7113990/pexels-photo-7113990.jpeg',
    price: '₹24,500 / Person',
    link: '/packages/honeymoon-special',
    categories: ['kashmir', 'honeymoon']
  },
  {
    id: 'abc-valley',
    duration: '5 Nights • 6 Days',
    title: "Pahalgam & ABC Valley Excursion",
    routing: 'Srinagar • Aru, Betaab & Chandanwari Meadows • Houseboat',
    tag: 'VALLEY EXCURSION',
    image: 'https://images.pexels.com/photos/27435043/pexels-photo-27435043.jpeg',
    price: '₹19,250 / Person',
    link: '/packages/abc-valley',
    categories: ['kashmir']
  },
  {
    id: 'betaab-valley',
    duration: '4 Nights • 5 Days',
    title: 'Betaab Meadow Retreat',
    routing: 'Srinagar • Pahalgam Exploration • Private Houseboat Stay',
    tag: 'MEADOW TOUR',
    image: 'https://images.pexels.com/photos/17488043/pexels-photo-17488043.jpeg',
    price: '₹15,500 / Person',
    link: '/packages/betaab-valley',
    categories: ['kashmir', 'adventure']
  },
  {
    id: 'shikara-ride',
    duration: '3 Nights • 4 Days',
    title: 'Floating Lake Escape',
    routing: 'Extended Shikara Cruises • Deluxe Nigeen Lake Houseboat',
    tag: 'SHIKARA SPECIAL',
    image: 'https://images.pexels.com/photos/10701431/pexels-photo-10701431.jpeg',
    price: '₹12,500 / Person',
    link: '/packages/shikara-ride',
    categories: ['kashmir']
  },
  {
    id: 'supper-chaijai',
    duration: '5 Nights • 6 Days',
    title: 'Kashmiri Heritage & Culture',
    routing: 'Mughal Gardens • High Tea at ChaiJai • Gulmarg Peaks',
    tag: 'CULTURAL ESCAPE',
    image: 'https://images.pexels.com/photos/27468879/pexels-photo-27468879.jpeg',
    price: '₹21,000 / Person',
    link: '/packages/supper-chaijai',
    categories: ['kashmir', 'adventure']
  },
  {
    id: 'ladakh-classic',
    duration: '5 Nights • 6 Days',
    title: 'Ladakh Heights Caravan',
    routing: 'Leh • Shey & Thiksey Monasteries • Sham Valley Tour',
    tag: 'MOUNTAIN CARAVAN',
    image: 'https://images.pexels.com/photos/33021518/pexels-photo-33021518.jpeg',
    price: '₹28,500 / Person',
    link: 'https://ladakhtourpackage.com',
    categories: ['ladakh', 'adventure']
  },
  {
    id: 'ladakh-expedition',
    duration: '6 Nights • 7 Days',
    title: 'Nubra & Pangong Overland Expedition',
    routing: 'Leh • Khardung La Pass • Hunder Dunes • Pangong Tso Lake',
    tag: 'OVERLAND EXPEDITION',
    image: 'https://images.pexels.com/photos/27435043/pexels-photo-27435043.jpeg',
    price: '₹34,000 / Person',
    link: 'https://ladakhtourpackage.com',
    categories: ['ladakh', 'adventure']
  },
  {
    id: 'ladakh-honeymoon',
    duration: '6 Nights • 7 Days',
    title: 'Ladakh Romantic Getaway',
    routing: 'Leh • Indus-Zanskar Confluence • Nubra Valley Double-Hump Camels',
    tag: 'HONEYMOON SPECIAL',
    image: 'https://images.pexels.com/photos/7113990/pexels-photo-7113990.jpeg',
    price: '₹36,000 / Person',
    link: 'https://ladakhtourpackage.com',
    categories: ['ladakh', 'honeymoon']
  },
  {
    id: 'design-package',
    duration: 'Bespoke Timeline',
    title: 'Create Your Custom Journey',
    routing: 'Tailored specifically to your timeline, pace, and stay desires.',
    tag: 'TAILORED EXCLUSIVE',
    image: 'https://images.pexels.com/photos/33021518/pexels-photo-33021518.jpeg',
    price: 'Bespoke Pricing',
    link: '/packages/design-package',
    categories: ['custom']
  }
];

const tabs = [
  { id: 'kashmir', name: 'Kashmir' },
  { id: 'ladakh', name: 'Ladakh' },
  { id: 'honeymoon', name: 'Honeymoon' },
  { id: 'adventure', name: 'Adventure' },
  { id: 'custom', name: 'Custom' }
];

export default function Packages() {
  const [activeTab, setActiveTab] = useState('kashmir');

  const filteredPackages = packagesList.filter((pkg) => pkg.categories.includes(activeTab));

  return (
    <section className={styles.packages} id="packages">
      <div className="container">
        
        <div className={`${styles.header} reveal`}>
          <p className="section-label">Curated Journeys</p>
          <div className={styles.headerRow}>
            <h2 className={styles.title}>
              Curated Travel <em>Collection</em>
            </h2>
            <p className={styles.desc}>
              Bespoke travel programs combining luxury accommodations, private transit, and slow-paced itineraries through Kashmir and Ladakh.
            </p>
          </div>
        </div>

        {/* 1. Signature Journey Featured Banner */}
        <div className={`${styles.featuredCard} reveal`} id={`pkg-${signatureJourney.id}`}>
          <div className={styles.featuredImage}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={signatureJourney.image} alt={signatureJourney.tag} />
            <span className={styles.featuredBadge}>{signatureJourney.tag}</span>
          </div>
          <div className={styles.featuredBody}>
            <div>
              <span className={styles.featuredDuration}>{signatureJourney.duration}</span>
              <h3 className={styles.featuredTitle}>{signatureJourney.title}</h3>
              <p className={styles.featuredRouting}>{signatureJourney.routing}</p>
              
              <div className={styles.featuredAmenities}>
                <div className={styles.amenity} title="Premium Stays Included">
                  <div className={styles.amenityIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 7v11M21 7v11M3 11h18M3 15h18M6 8v3M10 8v3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className={styles.amenityLabel}>Luxury Stays</span>
                </div>
                <div className={styles.amenity} title="Private Cab Transfers Included">
                  <div className={styles.amenityIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.1 2 11.5 2 12v4c0 .6.4 1 1 1h2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="7.5" cy="16.5" r="2.5" />
                      <circle cx="16.5" cy="16.5" r="2.5" />
                    </svg>
                  </div>
                  <span className={styles.amenityLabel}>Private Cabs</span>
                </div>
                <div className={styles.amenity} title="Gourmet Meals Included">
                  <div className={styles.amenityIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2v20M5 5c0 3 1.5 5 3.5 5h0C10.5 10 12 8 12 5V2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 17v5M19 2v10c0 1.5-.8 3-2.5 3h0c-1.7 0-2.5-1.5-2.5-3V2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className={styles.amenityLabel}>Gourmet Meals</span>
                </div>
              </div>
            </div>

            <div className={styles.featuredFooter}>
              <div className={styles.priceInfo}>
                <span className={styles.priceLabel}>SEASONAL PRICE</span>
                <span className={styles.price}>{signatureJourney.price}</span>
              </div>
              <Link href={signatureJourney.link} className={styles.btnFeaturedView} id={`pkg-enq-${signatureJourney.id}`}>
                View Signature Experience ➔
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Category Tabs */}
        <div className={`${styles.tabsWrapper} reveal`}>
          <div className={styles.tabsList}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab.id)}
                id={`pkg-tab-${tab.id}`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Grid of Standard Filtered Packages */}
        <div className={styles.grid}>
          {filteredPackages.map((pkg, index) => {
            const isExternal = pkg.link.startsWith('http');
            const CardLink = isExternal ? 'a' : Link;
            const linkProps = isExternal 
              ? { href: pkg.link, target: '_blank', rel: 'noopener noreferrer' }
              : { href: pkg.link };

            return (
              <article 
                key={pkg.id} 
                className={`${styles.card} reveal ${index % 4 === 0 ? '' : 'revealDelay' + (index % 4)}`} 
                id={`pkg-${pkg.id}`}
              >
                <div className={styles.cardImage}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={pkg.image} alt={pkg.tag} className={styles.image} />
                  <span className={styles.cardTag}>{pkg.tag}</span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardDurationRow}>
                    <span className={styles.cardDuration}>{pkg.duration}</span>
                  </div>
                  
                  <h3 className={styles.cardTitle}>
                    <CardLink {...(linkProps as any)} className={styles.titleLink}>
                      {pkg.title}
                    </CardLink>
                  </h3>
                  
                  {/* Itinerary in a single compact line */}
                  <p className={styles.cardRouting} title={pkg.routing}>
                    {pkg.routing}
                  </p>

                  <div className={styles.cardFooter}>
                    <div className={styles.priceInfo}>
                      <span className={styles.price}>{pkg.price}</span>
                    </div>
                    
                    <div className={styles.actions}>
                      <CardLink {...(linkProps as any)} className={styles.btnEnquire} id={`pkg-enq-${pkg.id}`}>
                        View ➔
                      </CardLink>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
