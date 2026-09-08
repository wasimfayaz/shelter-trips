import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Plan Your Kashmir Trip | Custom Tour Packages — Shelter Trips',
  description: 'Fill in the form below to receive customized Kashmir tour itineraries, luxury hotel & houseboat bookings, and direct operator assistance from Shelter Trips.',
  keywords: 'Kashmir tour booking, plan Kashmir trip, Kashmir holiday package, Dal Lake houseboat, Srinagar tour operator',
  openGraph: {
    title: 'Plan Your Kashmir Trip | Custom Tour Packages — Shelter Trips',
    description: 'Fill in your travel details and our local tour operator will reach out with customized itineraries and transparent pricing.',
    url: 'https://sheltertrips.com/plan-your-trip',
    siteName: 'Shelter Trips',
  },
};

const trustFeatures = [
  {
    title: 'Registered with J&K Tourism',
    desc: 'Officially registered and recognized by Jammu & Kashmir Tourism Department. 100% verified local DMC with direct ground operations, licensed guides, and zero middlemen.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Curated Luxury Stays',
    desc: 'Hand-carved cedar houseboats on Nigeen & Dal Lakes and handpicked boutique hotels across Gulmarg & Pahalgam.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21H21" strokeLinecap="round" />
        <path d="M3 7H21V21H3V7Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 11H9V15H7V11Z" />
        <path d="M15 11H17V15H15V11Z" />
      </svg>
    ),
  },
  {
    title: '100% Bespoke Itineraries',
    desc: 'Honeymoons, family holidays, snow adventures, or peaceful retreats — fully tailored around your pace and preferences.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20H21" strokeLinecap="round" />
        <path d="M16.5 3.5C16.8978 3.10218 17.4374 2.87868 18 2.87868C18.5626 2.87868 19.1022 3.10218 19.5 3.5C19.8978 3.89782 20.1213 4.43739 20.1213 5C20.1213 5.56261 19.8978 6.10218 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: '24/7 On-Ground Support',
    desc: 'Our dedicated local concierge team is available at every step from airport pickup to your final flight back home.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 6V12L16 14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: '01',
    title: 'Submit Your Inquiry',
    desc: 'Fill in your name, group size, and destination preference in the form below. It takes under 60 seconds.',
  },
  {
    number: '02',
    title: 'Operator Connects With You',
    desc: 'Our Srinagar travel specialist reviews your details, drafts a custom itinerary, and reaches out via Call or WhatsApp.',
  },
  {
    number: '03',
    title: 'Refine & Enjoy Kashmir',
    desc: 'Customize hotels, sightseeing, or dates until it is 100% perfect. Lock in your booking with zero hidden charges.',
  },
];

const faqs = [
  {
    q: 'Are you officially registered with Jammu & Kashmir Tourism?',
    a: 'Yes, Shelter Trips is officially registered with the Department of Tourism, Government of Jammu & Kashmir, guaranteeing authentic and authorized travel services.',
  },
  {
    q: 'How fast will someone contact me after filling the form?',
    a: 'Our travel desk typically calls or messages on WhatsApp within a few hours (or 30–60 minutes during business hours) with complete details.',
  },
  {
    q: 'Is there any fee or obligation to request an itinerary?',
    a: 'None at all. Your custom quote and itinerary consultation are 100% free with no obligation to book.',
  },
  {
    q: 'Can I customize hotels, houseboats, and car types?',
    a: 'Yes, absolutely. Every tour is customized — from luxury heritage houseboats on Nigeen Lake to 4-star/5-star mountain resorts and private SUVs/Tempo Travellers.',
  },
  {
    q: 'Can I call or WhatsApp directly instead?',
    a: 'Yes! You can call or chat with our primary desk at +91 84939 24278 or secondary desk at +91 910-366-2018 at any time.',
  },
];

export default function PlanYourTripPage() {
  return (
    <main className={styles.landing}>
      <Navbar />

      {/* Top Reassurance Bar for Meta Ads Traffic */}
      <section className={styles.trustBar}>
        <div className={styles.trustBarInner}>
          <span className={styles.badge}>🛡️ Registered with J&amp;K Tourism · Official Booking Desk</span>
          <h1 className={styles.trustHeading}>
            Explore Kashmir With <em>Trusted Local Experts</em>
          </h1>
          <p className={styles.trustSub}>
            Direct ground operations, handpicked luxury houseboats, and private cabs. Tell us your plan below and our tour operator will reach out with complete package details.
          </p>
          <div className={styles.pills}>
            <span className={styles.pill} style={{ color: '#e5c99f', fontWeight: 500 }}>
              <span className={styles.pillDot}>✓</span> Registered with J&amp;K Tourism
            </span>
            <span className={styles.pill}>
              <span className={styles.pillDot}>●</span> Srinagar Direct DMC
            </span>
            <span className={styles.pill}>
              <span className={styles.pillDot}>●</span> 500+ Curated Trips
            </span>
            <span className={styles.pill}>
              <span className={styles.pillDot}>●</span> 100% Customised Itineraries
            </span>
            <span className={styles.pill}>
              <span className={styles.pillDot}>●</span> Instant WhatsApp / Call Support
            </span>
          </div>
        </div>
      </section>

      {/* The Booking Inquiry Form */}
      <Contact isStandalone={true} />

      {/* How It Works (3 Steps) */}
      <section className={styles.stepsSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} reveal`}>
            <p className={styles.sectionLabel}>SIMPLE & HASSLE-FREE</p>
            <h2 className={styles.sectionTitle}>
              How Your Trip Planning <em>Works</em>
            </h2>
          </div>

          <div className={styles.stepsGrid}>
            {steps.map((s, idx) => (
              <div key={s.number} className={`${styles.stepCard} reveal ${idx > 0 ? `revealDelay${idx}` : ''}`}>
                <span className={styles.stepNumber}>{s.number}</span>
                <h3 className={styles.stepCardTitle}>{s.title}</h3>
                <p className={styles.stepCardDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Shelter Trips */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} reveal`}>
            <p className={styles.sectionLabel}>THE SHELTER TRIPS ADVANTAGE</p>
            <h2 className={styles.sectionTitle}>
              Why Travelers <em>Choose Us</em>
            </h2>
          </div>

          <div className={styles.featuresGrid}>
            {trustFeatures.map((f, idx) => (
              <div key={f.title} className={`${styles.featureCard} reveal ${idx > 0 ? `revealDelay${idx % 3}` : ''}`}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} reveal`}>
            <p className={styles.sectionLabel}>QUESTIONS & ANSWERS</p>
            <h2 className={styles.sectionTitle}>
              Frequently Asked <em>Questions</em>
            </h2>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, idx) => (
              <div key={idx} className={`${styles.faqItem} reveal`}>
                <h3 className={styles.faqQuestion}>{faq.q}</h3>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <StickyButtons />
      <ScrollReveal />
    </main>
  );
}
