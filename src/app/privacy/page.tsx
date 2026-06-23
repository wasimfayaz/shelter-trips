import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main style={{ backgroundColor: '#fafafa', minHeight: '100vh', color: '#0a0a0a' }}>
      <Navbar />

      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '160px 40px 100px', fontFamily: 'var(--font-sans)' }}>
        
        <Link 
          href="/" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            fontSize: '11px', 
            fontWeight: 600, 
            letterSpacing: '0.1em', 
            textTransform: 'uppercase', 
            color: '#6a6a6a', 
            marginBottom: '40px',
            borderBottom: '1px solid #bfa370',
            paddingBottom: '2px'
          }}
        >
          ← Back to Home
        </Link>

        <header style={{ marginBottom: '60px' }}>
          <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#bfa370', display: 'block', marginBottom: '12px' }}>
            PRIVACY POLICY
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0 }}>
            Your privacy is important to us.
          </h1>
          <p style={{ fontSize: '13px', color: '#888888', marginTop: '16px' }}>Last Updated: June 18, 2026</p>
        </header>

        <section style={{ display: 'flex', flexDirection: 'column', gap: '32px', fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: '#333333' }}>
          <p>
            At Shelter Trips, we are dedicated to protecting the privacy and security of our guests. This Privacy Policy details how we collect, use, and safeguard your personal information when you use our website, enquire about tour packages, book houseboats or hotels, or utilize our taxi rental services in Kashmir.
          </p>

          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, color: '#0a0a0a', marginBottom: '14px' }}>
              1. Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide to us when submitting an itinerary request form, booking a stay, or contacting our travel desk via email or WhatsApp. This includes:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Contact details: Name, email address, phone number, and mailing address.</li>
              <li>Travel specifications: Target travel dates, passenger counts, flight details, and destination choices.</li>
              <li>Preferences: Room selections, diet requirements, or customized tour details.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, color: '#0a0a0a', marginBottom: '14px' }}>
              2. How We Use Your Information
            </h2>
            <p>
              We process your details exclusively to manage and fulfill your travel arrangements in Jammu & Kashmir:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>To answer package enquiries and construct custom travel itineraries.</li>
              <li>To confirm hotel, houseboat, and vehicle availability.</li>
              <li>To contact you with reservation confirmations and updates on local transit status.</li>
              <li>To comply with regulatory tourism and police check-in requirements.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, color: '#0a0a0a', marginBottom: '14px' }}>
              3. Information Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We share limited traveler details only with essential suppliers (such as specific hospitality properties or local transport drivers) needed to perform the contracted travel booking.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, color: '#0a0a0a', marginBottom: '14px' }}>
              4. Security Measures
            </h2>
            <p>
              We employ standard technical security controls to safeguard your data. Online booking requests are processed over secure SSL connections, and access to itinerary data is restricted to authorized operations staff.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, color: '#0a0a0a', marginBottom: '14px' }}>
              5. Contact Us
            </h2>
            <p>
              If you have any questions regarding this privacy statement, please contact us at:
            </p>
            <p style={{ marginTop: '10px', fontWeight: 500 }}>
              Shelter Trips Travel Desk<br />
              Email: info@sheltertrips.com<br />
              WhatsApp/Call: +91 910-366-2018
            </p>
          </div>
        </section>

      </article>

      <Footer />
      <StickyButtons />
    </main>
  );
}
