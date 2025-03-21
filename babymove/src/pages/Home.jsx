import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ProductSection from '../components/ProductSection';
import FAQS from '../components/FAQS';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const shouldScroll = localStorage.getItem('scrollToProductos');
    if (shouldScroll === 'true') {
      const section = document.getElementById('productos');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        localStorage.removeItem('scrollToProductos');
      }
    }
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductSection />
      <FAQS />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
