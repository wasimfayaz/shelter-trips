'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import { sendEmailToShelterTrips } from '@/utils/sendEmail';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

const whyPartnerCards = [
  {
    title: 'Local Destination Management',
    desc: 'Direct ground management in Kashmir with deep-rooted supplier networks, zero middlemen, and complete operational transparency.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z" />
        <path d="M12 9V13L15 15" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2V4" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Instant Quotation Support',
    desc: 'Rapid turnaround on quote requests with detailed day-wise pricing breakdowns for your clients within 30 to 60 minutes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'Competitive B2B Pricing',
    desc: 'Unlock net confidential B2B rates with healthy profit margins designed specifically for travel resellers and DMCs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23" strokeLinecap="round" />
        <path d="M17 5H9.5C8.5 5 7.5 5.8 7.5 7C7.5 8.2 8.5 9 9.5 9H14.5C15.5 9 16.5 9.8 16.5 11C16.5 12.2 15.5 13 14.5 13H7" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Luxury Hotels & Houseboats',
    desc: 'Guaranteed room inventory at top-rated cedar houseboats, luxury boutique hotels, and premium alpine resorts across Kashmir.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21H21" strokeLinecap="round" />
        <path d="M3 7H21V21H3V7Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 11H9V15H7V11Z" />
        <path d="M15 11H17V15H15V11Z" />
      </svg>
    )
  },
  {
    title: 'Dedicated Relationship Manager',
    desc: 'A single point of contact assigned to your account to handle all bookings, customization, special requests, and inquiries.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 21V19C16 16.7909 14.2091 15 12 15C9.79086 15 8 16.7909 8 19V21" strokeLinecap="round" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  },
  {
    title: 'Custom Tour Packages',
    desc: 'Fully customizable itineraries tailored to honeymooners, luxury travelers, adventure groups, corporate MICE, and budget trips.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20H21" strokeLinecap="round" />
        <path d="M16.5 3.5C16.8978 3.10218 17.4374 2.87868 18 2.87868C18.5626 2.87868 19.1022 3.10218 19.5 3.5C19.8978 3.89782 20.1213 4.43739 20.1213 5C20.1213 5.56261 19.8978 6.10218 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'Airport Transfers',
    desc: 'Seamless, flight-tracked private airport pick-ups and drop-offs in luxury sedans, SUVs, and Tempo Travellers.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 17H21C21.6 17 22 16.6 22 16V13C22 12.1 21.3 11.3 20.5 11.1C18.7 10.6 16 10 16 10S14.7 8.6 13.8 7.7C13.3 7.3 12.7 7 12 7H5C4.4 7 3.9 7.4 3.6 7.9L2.2 10.8C2.1 11.1 2 11.5 2 12V16C2 16.6 2.4 17 3 17H5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7.5" cy="16.5" r="2.5" />
        <circle cx="16.5" cy="16.5" r="2.5" />
      </svg>
    )
  },
  {
    title: '24/7 On-Ground Assistance',
    desc: 'Round-the-clock local field support in Srinagar, Gulmarg, Pahalgam, and Sonamarg for guest peace of mind.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 6V12L16 14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

const benefitsList = [
  'Exclusive B2B rates',
  'Fast itinerary preparation',
  'White-label services',
  'Reliable transport network',
  'Luxury and budget options',
  'Experienced local team',
  'Emergency support',
  'Flexible payment options'
];

const processSteps = [
  {
    step: '01',
    title: 'Register',
    desc: 'Submit your agency credentials and contact details through our quick registration form.'
  },
  {
    step: '02',
    title: 'Verification',
    desc: 'Our B2B manager verifies your travel business profile within 2 hours.'
  },
  {
    step: '03',
    title: 'Receive B2B Pricing',
    desc: 'Access net confidential rates, custom itinerary templates, and direct WhatsApp support.'
  },
  {
    step: '04',
    title: 'Start Booking',
    desc: 'Confirm client reservations seamlessly with guaranteed local execution.'
  }
];

const faqList = [
  {
    q: 'How do I receive B2B rates?',
    a: 'Once your agency details are verified by our team, we will send you our confidential B2B tariff sheet and grant access to direct B2B enquiry dispatches.'
  },
  {
    q: 'Is there any registration fee?',
    a: 'No, registering as a travel partner with Shelter Trips is 100% free with no hidden maintenance or subscription fees.'
  },
  {
    q: 'Can I customize itineraries?',
    a: 'Absolutely. We build bespoke itineraries based on your client’s exact requirements, stay preferences, budget, and flight schedules.'
  },
  {
    q: 'How quickly do you respond?',
    a: 'Our dedicated B2B relationship desk responds to all quote and customization requests within 30 to 60 minutes during business hours.'
  }
];

const serviceOptions = [
  'Hotels',
  'Houseboats',
  'Transportation',
  'Luxury Tours',
  'Budget Tours',
  'Corporate Groups',
  'MICE',
  'Adventure Tours',
  'Honeymoon Packages',
  'Student Groups',
  'FIT (Individual Travel)',
  'GIT (Group Travel)'
];

export default function B2BPartnerPage() {
  const [form, setForm] = useState({
    fullName: '',
    designation: '',
    companyName: '',
    phone: '',
    email: '',
    cityState: '',
    destinationNeeded: '',
    servicesInterested: [] as string[],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setForm((prev) => {
      const exists = prev.servicesInterested.includes(service);
      if (exists) {
        return { ...prev, servicesInterested: prev.servicesInterested.filter((s) => s !== service) };
      } else {
        return { ...prev, servicesInterested: [...prev.servicesInterested, service] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendEmailToShelterTrips({
        formType: 'B2B Registration',
        customSubject: 'B2B Inquiry',
        name: form.fullName,
        designation: form.designation,
        companyName: form.companyName,
        phone: form.phone,
        email: form.email,
        cityState: form.cityState,
        destinationNeeded: form.destinationNeeded,
        servicesInterested: form.servicesInterested,
        message: form.message,
      });
    } catch (err) {
      console.error('B2B Form submission error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const scrollToForm = () => {
    document.getElementById('b2b-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main className={styles.main}>
      <Navbar />

      {/* ==========================================
          1. HERO SECTION
         ========================================== */}
      <section 
        className={styles.hero}
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/10701431/pexels-photo-10701431.jpeg')`
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={`${styles.container} ${styles.heroContent}`}>
          <span className={`${styles.badge} reveal`}>B2B Travel Partner Program</span>
          <h1 className={`${styles.heroHeading} reveal revealDelay1`}>
            Partner With Kashmir&apos;s Trusted <em>Local Destination Experts</em>
          </h1>
          <p className={`${styles.heroSubheading} reveal revealDelay2`}>
            We help travel agencies deliver unforgettable Kashmir experiences through reliable ground operations, luxury accommodations, transportation, customized itineraries, and dedicated local support.
          </p>
          <div className={`${styles.heroButtons} reveal revealDelay3`}>
            <button onClick={scrollToForm} className={styles.btnPrimary} id="b2b-hero-primary-btn">
              <span>Become a Partner</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a 
              href="https://wa.me/918493924278?text=Hi%20Shelter%20Trips%2C%20I%20am%20a%20travel%20agent%2Fpartner%20looking%20for%20an%20instant%20B2B%20enquiry." 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.btnWhatsappInstant}
              id="b2b-hero-whatsapp-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.486 1.332 5.006l-1.417 5.176 5.297-1.389c1.472.802 3.134 1.224 4.774 1.225h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.039-5.176-2.926-7.064-1.887-1.887-4.394-2.926-7.063-2.926zm0 1.677c2.219 0 4.305.864 5.872 2.433 1.567 1.568 2.43 3.655 2.43 5.874 0 4.583-3.729 8.312-8.313 8.312h-.003c-1.43 0-2.833-.377-4.062-1.09l-.291-.173-3.023.792.806-2.943-.19-.303c-.783-1.246-1.196-2.694-1.196-4.185 0-4.582 3.73-8.312 8.314-8.312zm-2.42 4.417c-.15 0-.395.056-.602.282-.207.226-.79.772-.79 1.883 0 1.111.809 2.184.922 2.335.113.151 1.583 2.417 3.837 3.39.536.231.954.369 1.28.472.538.17.1027.146 1.414.067.432-.088 1.331-.544 1.519-1.07.188-.526.188-.977.132-1.07-.056-.094-.207-.15-.433-.264-.226-.113-1.331-.657-1.538-.732-.207-.075-.357-.113-.508.113-.15.226-.583.733-.715.884-.132.151-.264.17-.49.057-.226-.113-.954-.352-1.817-1.121-.672-.6-1.126-1.34-1.258-1.566-.132-.226-.014-.348.099-.46.102-.102.226-.264.339-.395.113-.132.151-.226.226-.376.075-.151.038-.283-.019-.395-.056-.113-.508-1.223-.696-1.674-.183-.441-.368-.38-.508-.387-.132-.007-.282-.007-.432-.007z" />
              </svg>
              <span>WhatsApp for Instant B2B Enquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. WHY PARTNER WITH US
         ========================================== */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} reveal`}>
            <p className={styles.sectionLabel}>WHY PARTNER WITH US</p>
            <h2 className={styles.sectionTitle}>
              Reliable Local Transport & <em>B2B Services</em>
            </h2>
            <p className={styles.sectionDesc}>
              Empowering travel agents with direct local execution, luxury stays, and fast 24/7 responsiveness.
            </p>
          </div>

          <div className={styles.whyGrid}>
            {whyPartnerCards.map((card, idx) => (
              <div 
                key={card.title} 
                className={`${styles.whyCard} reveal ${idx % 4 === 0 ? '' : 'revealDelay' + (idx % 4)}`}
                id={`why-card-${idx}`}
              >
                <div className={styles.cardIcon}>{card.icon}</div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          3. SIMPLE PROCESS (TIMELINE)
         ========================================== */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} reveal`}>
            <p className={styles.sectionLabel}>HOW IT WORKS</p>
            <h2 className={styles.sectionTitle}>
              Simple 4-Step <em>Partnership Process</em>
            </h2>
            <p className={styles.sectionDesc}>
              Get onboarded in less than 24 hours and start offering your clients premium Kashmir itineraries.
            </p>
          </div>

          <div className={styles.timelineGrid}>
            {processSteps.map((step, idx) => (
              <div key={step.step} className={`${styles.stepCard} reveal ${idx % 4 === 0 ? '' : 'revealDelay' + (idx % 4)}`}>
                <div className={styles.stepBadge}>{step.step}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          4. B2B REGISTRATION FORM
         ========================================== */}
      <section className={styles.formSection} id="b2b-form">
        <div className={styles.container}>
          
          <div className={`${styles.formCard} reveal`}>
            <div className={styles.formHeader}>
              <p className={styles.sectionLabel}>REGISTER AS A PARTNER</p>
              <h2 className={styles.sectionTitle}>
                B2B Partner <em>Registration</em>
              </h2>
              <p className={styles.sectionDesc}>
                Fill in your agency details and our team will get back to you within 2 hours with B2B rates and package information.
              </p>
            </div>

            {submitted ? (
              <div className={styles.successCard} id="b2b-form-success">
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>Registration Received</h3>
                <p className={styles.successDesc}>
                  Thank you! Our B2B partner desk will review your details and reach out within 2 hours with wholesale rates and package information.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className={styles.btnPrimary}
                  style={{ margin: '0 auto' }}
                >
                  <span>Submit Another Registration</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.formGrid} id="b2b-partner-registration-form">
                
                <div className={styles.formGroup}>
                  <label htmlFor="fullName">YOUR FULL NAME *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleInputChange}
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="designation">DESIGNATION</label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    placeholder="Director / Manager / Owner"
                    value={form.designation}
                    onChange={handleInputChange}
                    className={styles.inputField}
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="companyName">AGENCY / COMPANY NAME *</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    placeholder="Your Travel Agency Name"
                    value={form.companyName}
                    onChange={handleInputChange}
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">PHONE / WHATSAPP *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleInputChange}
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@agency.com"
                    value={form.email}
                    onChange={handleInputChange}
                    className={styles.inputField}
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="cityState">CITY / STATE</label>
                  <input
                    type="text"
                    id="cityState"
                    name="cityState"
                    placeholder="Delhi / Mumbai / etc."
                    value={form.cityState}
                    onChange={handleInputChange}
                    className={styles.inputField}
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="destinationNeeded">B2B DESTINATION NEEDED</label>
                  <select
                    id="destinationNeeded"
                    name="destinationNeeded"
                    value={form.destinationNeeded}
                    onChange={handleInputChange}
                    className={styles.selectField}
                  >
                    <option value="">Select Destination</option>
                    <option value="Kashmir Only">Kashmir Only</option>
                    <option value="Ladakh Only">Ladakh Only</option>
                    <option value="Both Kashmir & Ladakh">Both Kashmir & Ladakh</option>
                  </select>
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <span className={styles.checkboxGroupLabel}>SERVICES INTERESTED IN</span>
                  <div className={styles.checkboxGrid}>
                    {serviceOptions.map((service) => (
                      <label key={service} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={form.servicesInterested.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className={styles.checkboxInput}
                        />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="message">MESSAGE / REQUIREMENTS</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your B2B requirements — group sizes, preferred hotels, special setups, etc..."
                    value={form.message}
                    onChange={handleInputChange}
                    className={styles.textareaField}
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <button 
                    type="submit" 
                    className={styles.submitBtn} 
                    id="b2b-submit-btn"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Submitting Registration...' : 'Submit B2B Registration'}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* ==========================================
          5. PARTNERSHIP BENEFITS (SPLIT)
         ========================================== */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.benefitsGrid}>
            
            {/* Left Image */}
            <div className={`${styles.benefitsImageWrapper} reveal`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.pexels.com/photos/7113990/pexels-photo-7113990.jpeg" 
                alt="Luxury Kashmir Travel Experience"
                className={styles.benefitsImage}
              />
              <div className={styles.imageOverlayBadge}>
                <span className={styles.badgeNumber}>10+</span>
                <span className={styles.badgeText}>Years of Local Ground Experience in Kashmir & Ladakh</span>
              </div>
            </div>

            {/* Right Content */}
            <div className={`${styles.benefitsContent} reveal revealDelay1`}>
              <div className={styles.benefitsContentHeader}>
                <p className={styles.sectionLabel}>PARTNERSHIP BENEFITS</p>
                <h2 className={styles.sectionTitle}>
                  Why Travel Agents <em>Choose Us</em>
                </h2>
                <p className={styles.sectionDesc}>
                  From white-label guest support to guaranteed luxury houseboats and competitive net pricing, we handle the details so you can grow your business.
                </p>
              </div>

              <div className={styles.benefitsBullets}>
                {benefitsList.map((benefit, idx) => (
                  <div key={idx} className={styles.benefitBullet} id={`benefit-item-${idx}`}>
                    <span className={styles.bulletIcon}>✓</span>
                    <span className={styles.bulletText}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          6. TRUST / STATS SECTION
         ========================================== */}
      <section className={styles.trustSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            
            <div className={`${styles.statItem} reveal`}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Successful Tours</div>
            </div>

            <div className={`${styles.statItem} reveal revealDelay1`}>
              <div className={styles.statNumber}>120+</div>
              <div className={styles.statLabel}>Travel Partners</div>
            </div>

            <div className={`${styles.statItem} reveal revealDelay2`}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Partner Satisfaction</div>
            </div>

            <div className={`${styles.statItem} reveal revealDelay3`}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Support</div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          7. FAQ SECTION
         ========================================== */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          
          <div className={`${styles.sectionHeader} reveal`}>
            <p className={styles.sectionLabel}>FREQUENTLY ASKED QUESTIONS</p>
            <h2 className={styles.sectionTitle}>
              Everything You Need to <em>Know</em>
            </h2>
          </div>

          <div className={`${styles.faqContainer} reveal revealDelay1`}>
            <div className={styles.faqList}>
              {faqList.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={faq.q} 
                    className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}
                    id={`faq-item-${idx}`}
                  >
                    <button 
                      className={styles.faqQuestion}
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                    >
                      <span>{faq.q}</span>
                      <span className={styles.faqIcon}>{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className={styles.faqAnswer}>
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          8. CTA SECTION
         ========================================== */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={`${styles.ctaBox} reveal`}>
            <h2 className={styles.ctaTitle}>
              Let&apos;s <em>Grow Together</em>
            </h2>
            <p className={styles.ctaText}>
              Become our travel partner and offer your clients unforgettable Kashmir experiences backed by a trusted local team.
            </p>
            <button onClick={scrollToForm} className={styles.btnPrimary} id="b2b-cta-btn">
              <span>Become a B2B Partner</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollReveal />
    </main>
    <StickyButtons isB2b />
    </>
  );
}
