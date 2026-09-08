import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EditorialStorytelling from '@/components/EditorialStorytelling';
import WhyChooseUs from '@/components/WhyChooseUs';
import Packages from '@/components/Packages';
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
      <EditorialStorytelling />
      <WhyChooseUs />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyButtons />
      <ScrollReveal />
    </main>
  );
}

