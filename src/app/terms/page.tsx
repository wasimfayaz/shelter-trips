import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Shelter Trips',
  description: 'Website Terms of Service for Shelter Trips.',
};

export default function TermsOfServicePage() {
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
            WEBSITE TERMS & CONDITIONS
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0 }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: '13px', color: '#888888', marginTop: '16px' }}>Last Updated: June 18, 2026</p>
        </header>

        <section style={{ display: 'flex', flexDirection: 'column', gap: '32px', fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: '#333333' }}>
          <p>
            Welcome to Shelter Trips. By using our website or browsing our holiday itineraries, hotels, houseboats, and car rental services through us, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
          </p>

          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, color: '#0a0a0a', marginBottom: '14px' }}>
              1. Website Usage
            </h2>
            <p>
              All content provided on this website is for informational and booking purposes only. Images, text, and itineraries are property of Shelter Trips and may not be reproduced without written permission.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, color: '#0a0a0a', marginBottom: '14px' }}>
              2. Booking Terms & Payment Policy
            </h2>
            <p>
              For detailed Guest Booking Terms, Cancellation Policies, Check-in/Check-out Rules, and Direct Bank/UPI Payment information, please refer to our dedicated <Link href="/booking-terms" style={{ color: '#bfa370', textDecoration: 'underline' }}>Booking Terms & Payment Policy Page</Link>.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, color: '#0a0a0a', marginBottom: '14px' }}>
              3. Force Majeure & Local Disruptions
            </h2>
            <p>
              Kashmir is a high-altitude alpine zone. Shelter Trips is not liable for itinerary changes or cancellations caused by force majeure conditions, such as sudden winter road closures (e.g. at Zojila or Jammu National Highway), landslides, flight cancellations due to low visibility at Srinagar Airport, or government orders. We will construct alternative plans to ensure client safety.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, color: '#0a0a0a', marginBottom: '14px' }}>
              4. Code of Conduct & Guest Safety
            </h2>
            <p>
              Guests are expected to respect local customs and regulations. When staying onboard houseboats or in hotels, guidelines regarding check-in timings, waste management, and safety protocols must be followed.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, color: '#0a0a0a', marginBottom: '14px' }}>
              5. Governing Law
            </h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Jammu & Kashmir, India, and any disputes will be subject to the exclusive jurisdiction of the courts in Srinagar.
            </p>
          </div>
        </section>

      </article>

      <Footer />
      <StickyButtons />
    </main>
  );
}
