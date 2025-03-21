import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ProductSection from './components/ProductSection';
import FAQS from './components/FAQS';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import { CartProvider } from './context/CartContext'; // Asegúrate de importar el proveedor del carrito

function App() {
  return (
    <CartProvider> {/* ✅ Envuelve toda la app en el CartProvider */}
      <div className="bg-gray-100 text-gray-900 min-h-screen font-sans transition-colors duration-300">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <ProductSection />
        <CartModal /> {/* El modal del carrito debe estar aquí */}
        <FAQS />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </CartProvider> 
  );
}

export default App;
