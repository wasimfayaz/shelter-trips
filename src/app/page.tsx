import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Packages from '@/components/Packages';
import Destinations from '@/components/Destinations';
import SignatureHotels from '@/components/SignatureHotels';
import CabRentals from '@/components/CabRentals';
import Experiences from '@/components/Experiences';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Packages />
      <SignatureHotels />
      <CabRentals />
      <Destinations />
      <Experiences />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
