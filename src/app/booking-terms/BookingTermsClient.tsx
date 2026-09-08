'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './booking-terms.module.css';

export default function BookingTermsClient() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handlePrintPdf = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const upiId = '8493924278-1@okbizaxis';
  const upiName = 'Shelter Trips';
  const upiUri = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(upiName)}&cu=INR`;
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=8&data=${encodeURIComponent(upiUri)}`;

  return (
    <div className={styles.container}>
      
      {/* Formal PDF Print Header */}
      <div className={styles.printHeader}>
        <div className={styles.printLogo}>SHELTER TRIPS</div>
        <div className={styles.printSub}>Official Booking Terms, Conditions & Payment Policy Document</div>
        <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>
          Contact / WhatsApp: +91 84939 24278 | Email: info@sheltertrips.com | Website: www.sheltertrips.com
        </div>
      </div>

      <article className={styles.article}>
        
        {/* Top Controls Bar */}
        <div className={`${styles.topRow} ${styles.noPrint}`}>
          <Link href="/" className={styles.backBtn} id="booking-terms-back-home">
            ← Back to Home
          </Link>
          <div className={styles.actionsGroup}>
            <button 
              onClick={handlePrintPdf} 
              className={styles.downloadPdfBtn} 
              id="booking-terms-download-pdf"
              title="Download or Print PDF document"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download PDF / Print
            </button>
          </div>
        </div>

        {/* Page Header */}
        <header className={styles.header}>
          <span className={styles.badge}>GUEST BOOKING GUIDELINES & PAYMENT PORTAL</span>
          <h1 className={styles.title}>Booking Terms & Conditions</h1>
          <p className={styles.subtitle}>
            Please review our cancellation policy, check-in timings, general travel guidelines, payment policies, and official payment details below.
          </p>
        </header>

        {/* SECTION 1: Payment Details & QR Code */}
        <section className={styles.sectionBlock} id="payment-details">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>💳</span>
            <h2 className={styles.sectionTitle}>Payment Details & Instant UPI QR</h2>
          </div>

          <div className={styles.paymentGrid}>
            
            {/* UPI QR Card */}
            <div className={styles.qrCard}>
              <div className={styles.qrCardTitle}>Instant UPI QR Payment</div>
              <div className={styles.qrImageWrapper}>
                <img 
                  src="/qr/qr.jpeg" 
                  alt="Shelter Trips Official UPI QR Code" 
                  width={220} 
                  height={220}
                  style={{ display: 'block', borderRadius: '6px', maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </div>
              <p className={styles.qrSubtext}>
                Scan with GPay, PhonePe, Paytm, BHIM or any Banking App
              </p>
              
              <div className={styles.upiDetails}>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Account Name</span>
                  <span className={styles.detailValue}>Shelter Trips</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>UPI ID</span>
                  <div className={styles.detailValueGroup}>
                    <span className={styles.detailValue}>{upiId}</span>
                    <button 
                      className={`${styles.copyBtn} ${styles.noPrint}`} 
                      onClick={() => handleCopy(upiId, 'UPI ID')}
                    >
                      {copiedItem === 'UPI ID' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Transfer Card */}
            <div className={styles.bankCard}>
              <div>
                <div className={styles.qrCardTitle}>Direct Bank Transfer (NEFT/RTGS/IMPS)</div>
                <div className={styles.detailRow} style={{ marginTop: '12px' }}>
                  <span className={styles.detailLabel}>Account Name</span>
                  <span className={styles.detailValue}>Shelter Trips</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Bank Name</span>
                  <span className={styles.detailValue}>State Bank of India (SBI)</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Account Number</span>
                  <div className={styles.detailValueGroup}>
                    <span className={styles.detailValue}>43518932506</span>
                    <button 
                      className={`${styles.copyBtn} ${styles.noPrint}`}
                      onClick={() => handleCopy('43518932506', 'Account Number')}
                    >
                      {copiedItem === 'Account Number' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>IFSC Code</span>
                  <div className={styles.detailValueGroup}>
                    <span className={styles.detailValue}>SBIN0002370</span>
                    <button 
                      className={`${styles.copyBtn} ${styles.noPrint}`}
                      onClick={() => handleCopy('SBIN0002370', 'IFSC Code')}
                    >
                      {copiedItem === 'IFSC Code' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '20px', padding: '12px', background: '#ffffff', borderRadius: '6px', border: '1px solid #eee', fontSize: '12px', color: '#555' }}>
                💡 <strong>Notice:</strong> After making a payment via UPI or Bank Transfer, please share the payment screenshot or transaction reference via WhatsApp (+91 84939 24278) or Email for immediate confirmation.
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: Check-in & Check-out */}
        <section className={styles.sectionBlock} id="checkin-policy">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>🔑</span>
            <h2 className={styles.sectionTitle}>Check-in & Check-out Timings</h2>
          </div>

          <div className={styles.checkinGrid}>
            <div className={styles.timeBox}>
              <span className={styles.timeLabel}>Check-in Window</span>
              <span className={styles.timeValue}>12:00 PM – 2:00 PM</span>
            </div>
            <div className={styles.timeBox}>
              <span className={styles.timeLabel}>Check-out Time</span>
              <span className={styles.timeValue}>11:00 AM</span>
            </div>
          </div>
        </section>

        {/* SECTION 3: Cancellation Policy */}
        <section className={styles.sectionBlock} id="cancellation-policy">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>❌</span>
            <h2 className={styles.sectionTitle}>Cancellation Policy</h2>
          </div>

          <ul className={styles.policyList}>
            <li className={styles.policyItem}>
              <span className={styles.highlightBadge}>15+ Days Prior</span>
              <strong>Cancellation made 15 days or more prior to check-in:</strong> Free cancellation.
            </li>
            <li className={styles.policyItem}>
              <span className={styles.highlightBadge}>7–14 Days Prior</span>
              <strong>Cancellation made 7–14 days prior to check-in:</strong> 50% cancellation charges will apply.
            </li>
            <li className={styles.policyItem}>
              <span className={styles.highlightBadge}>Within 7 Days</span>
              <strong>Cancellation made within 7 days of check-in:</strong> 100% cancellation charges will apply.
            </li>
            <li className={styles.policyItem}>
              <strong>No-Show Retention:</strong> In case of No-Show, 100% retention charges will be applicable.
            </li>
            <li className={styles.policyItem}>
              <strong>Early Departure:</strong> Any cancellation or early departure after check-in will be subject to charges for the entire confirmed stay.
            </li>
            <li className={styles.policyItem}>
              <strong>Refund Timeline:</strong> Eligible refunds, if any, will be processed within 7–10 working days.
            </li>
          </ul>
        </section>

        {/* SECTION 4: Payment Policy */}
        <section className={styles.sectionBlock} id="payment-policy">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>💰</span>
            <h2 className={styles.sectionTitle}>Payment Policy</h2>
          </div>

          <ul className={styles.policyList}>
            <li className={styles.policyItem}>
              <strong>Booking Confirmation:</strong> A 20% advance payment is required to confirm the booking within 24 hours.
            </li>
            <li className={styles.policyItem}>
              <strong>Second Day Payment:</strong> 30% of the total package amount must be paid on the second day of the tour.
            </li>
            <li className={styles.policyItem}>
              <strong>Final Balance:</strong> The remaining balance must be cleared before the guest's departure.
            </li>
            <li className={styles.policyItem}>
              <strong>Auto-Release:</strong> If advance payment is not received within the specified time, the booking will be automatically released without prior notice.
            </li>
            <li className={styles.policyItem}>
              <strong>Availability:</strong> All bookings are subject to availability at the time of confirmation.
            </li>
            <li className={styles.policyItem}>
              <strong>Card Charges:</strong> Credit Card payments attract 2.5% transaction charges; Debit Card payments attract 1.5% transaction charges.
            </li>
            <li className={styles.policyItem}>
              <strong>Accepted Methods:</strong> Bank transfer, UPI, and other applicable digital payment methods are accepted.
            </li>
            <li className={styles.policyItem}>
              <strong>Receipt Sharing:</strong> Guests are requested to share the payment receipt or transaction reference after making the payment for faster booking confirmation.
            </li>
            <li className={styles.policyItem}>
              <strong>Official Channels Only:</strong> All booking confirmations, amendments, cancellations, payment receipts, and official communications should be made via <strong>Email or WhatsApp only</strong>. Verbal conversations or phone calls will not be considered as official confirmation.
            </li>
          </ul>
        </section>

        {/* SECTION 5: General Terms & Conditions */}
        <section className={styles.sectionBlock} id="general-terms">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>📋</span>
            <h2 className={styles.sectionTitle}>General Terms & Conditions</h2>
          </div>

          <ul className={styles.policyList}>
            <li className={styles.policyItem}>
              Guests are responsible for carrying, handling, and taking care of their own luggage.
            </li>
            <li className={styles.policyItem}>
              The tour itinerary may be modified depending on the availability of hotels or houseboats.
            </li>
            <li className={styles.policyItem}>
              Additional sightseeing, extra vehicle usage, or any services not mentioned in the itinerary will be charged extra.
            </li>
            <li className={styles.policyItem}>
              Private vehicles are not permitted for internal sightseeing in Gulmarg, Pahalgam, Sonamarg, and Gurez, as per local union regulations.
            </li>
            <li className={styles.policyItem}>
              During heavy snowfall, vehicles may operate only up to Tangmarg for Gulmarg sightseeing.
            </li>
            <li className={styles.policyItem}>
              Oxygen cylinders, medical expenses, travel insurance, monument entry tickets, pony rides, gondola tickets, and personal expenses are not included, unless specifically mentioned in the package.
            </li>
            <li className={styles.policyItem}>
              Package pricing is based on the age of the passengers. Incorrect age details may result in additional charges at the time of travel.
            </li>
            <li className={styles.policyItem}>
              In case the mentioned hotel or houseboat is unavailable, a similar category property will be provided. Any difference in tariff, if applicable, shall be borne by the guest.
            </li>
            <li className={styles.policyItem}>
              All sightseeing, transfers, and itineraries are subject to weather conditions, road accessibility, and government/security regulations.
            </li>
            <li className={styles.policyItem}>
              Transportation will be provided in a private AC or Non-AC vehicle, as specifically mentioned in the itinerary. If air conditioning is available but not included, it can be provided at an additional charge of ₹300–₹500 per day, subject to local conditions and vehicle availability.
            </li>
            <li className={styles.policyItem}>
              No refund or claim shall be entertained due to weather conditions, natural calamities, road closures, flight delays/cancellations, or security-related restrictions beyond our control.
            </li>
            <li className={styles.policyItem}>
              Children above 12 years will be charged as an extra person.
            </li>
            <li className={styles.policyItem}>
              Children between 6 and 12 years will be considered without an extra bed, unless booked separately.
            </li>
            <li className={styles.policyItem}>
              An extra bed/mattress is mandatory for children above 12 years.
            </li>
          </ul>
        </section>

      </article>
    </div>
  );
}
