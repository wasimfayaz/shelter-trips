import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DestinationSelector from '@/components/DestinationSelector';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import EditorialStorytelling from '@/components/EditorialStorytelling';
import Packages from '@/components/Packages';
import SignatureHotels from '@/components/SignatureHotels';
import CabRentals from '@/components/CabRentals';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyButtons from '@/components/StickyButtons';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DestinationSelector />
      <Marquee />
      <About />
      <EditorialStorytelling />
      <Packages />
      <SignatureHotels />
      <CabRentals />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyButtons />
      <ScrollReveal />
    </main>
  );
}
