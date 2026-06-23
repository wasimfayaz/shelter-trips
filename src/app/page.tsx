import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import EditorialStorytelling from '@/components/EditorialStorytelling';
import Packages from '@/components/Packages';
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
      <Marquee />
      <EditorialStorytelling />
      <Packages />
      <CabRentals />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyButtons />
      <ScrollReveal />
    </main>
  );
}

