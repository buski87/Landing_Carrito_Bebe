import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ProductSection from '../components/ProductSection';
import FAQS from '../components/FAQS';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CartModal from '../components/CartModal';

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen font-sans transition-colors duration-300">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductSection />
      <FAQS />
      <Testimonial />
      <Contact />
      <Footer />
      <CartModal /> {/* ✅ Importante para que el modal del carrito siempre esté disponible */}
    </div>
  );
}
