import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import BookingTermsClient from './BookingTermsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Booking Terms, Cancellation & Payment Policy | Shelter Trips',
  description: 'Official Guest Booking Terms & Conditions, Cancellation Policy, Check-in Timings, Payment Policy, and UPI/Bank Transfer Details for Shelter Trips.',
};

export default function BookingTermsPage() {
  return (
    <main style={{ backgroundColor: '#fafafa', minHeight: '100vh', color: '#0a0a0a' }}>
      <div className="noPrint">
        <Navbar />
      </div>
      <BookingTermsClient />
      <div className="noPrint">
        <Footer />
        <StickyButtons />
      </div>
    </main>
  );
}
