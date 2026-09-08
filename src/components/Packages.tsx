'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Packages.module.css';

const packagesList = [
  {
    id: 'signature-journey',
    duration: '5 Nights • 6 Days',
    title: 'Shelter Signature | Free Excursion to ABC Valley Pahalgam',
    routing: 'Srinagar • Sonmarg Excursion • Gulmarg Meadows • Pahalgam ABC Valley • Houseboat',
    tag: 'SIGNATURE COLLECTION',
    image: 'https://images.pexels.com/photos/10701431/pexels-photo-10701431.jpeg',
    price: '₹26,500 / Person',
    link: '/packages/signature-journey',
    categories: ['kashmir']
  },
  {
    id: 'honeymoon-special',
    duration: '4 Nights • 5 Days',
    title: 'SHELTER Exclusive | Free Honeymoon Setup',
    routing: 'Srinagar • Gulmarg Day Excursion • Pahalgam ABC Valley • Houseboat Stay',
    tag: 'HONEYMOON SPECIAL',
    image: 'https://images.pexels.com/photos/7113990/pexels-photo-7113990.jpeg',
    price: '₹24,500 / Person',
    link: '/packages/honeymoon-special',
    categories: ['kashmir', 'honeymoon']
  },
  {
    id: 'family-gondola',
    duration: '6 Nights • 7 Days',
    title: 'Shelter Family | FREE Gondola Tickets',
    routing: 'Srinagar • Doodhpathri • Gulmarg Stay & Gondola • Pahalgam ABC Valley • Houseboat',
    tag: 'FAMILY COLLECTION',
    image: 'https://images.pexels.com/photos/27435043/pexels-photo-27435043.jpeg',
    price: '₹28,500 / Person',
    link: '/packages/family-gondola',
    categories: ['kashmir']
  },
  {
    id: 'design-package',
    duration: 'Flexible Days',
    title: 'Create Your Custom Trip',
    routing: 'Customized completely according to your dates and preferences.',
    tag: 'CUSTOM TRIP',
    image: 'https://images.pexels.com/photos/33021518/pexels-photo-33021518.jpeg',
    price: 'Custom Pricing',
    link: '/packages/design-package',
    categories: ['custom']
  }
];

const tabs = [
  { id: 'kashmir', name: 'Kashmir Packages' },
  { id: 'honeymoon', name: 'Honeymoon' },
  { id: 'custom', name: 'Custom Builder' }
];

export default function Packages() {
  const [activeTab, setActiveTab] = useState('kashmir');

  const filteredPackages = packagesList.filter((pkg) => pkg.categories.includes(activeTab));

  return (
    <section className={styles.packages} id="packages">
      <div className="container">
        
        <div className={`${styles.header} reveal`}>
          <p className="section-label">Tour Packages</p>
          <div className={styles.headerRow}>
            <h2 className={styles.title}>
              Featured Tour <em>Packages</em>
            </h2>
            <p className={styles.desc}>
              Handpicked travel packages combining luxury hotels, private cab transport, and smooth itineraries across Kashmir and Ladakh.
            </p>
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
                className={`${styles.card} reveal revealed`} 
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
