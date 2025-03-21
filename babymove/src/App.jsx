import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ProductSection from './components/ProductSection';
import FAQS from './components/FAQS';

function App() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen font-sans transition-colors duration-300">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductSection />
      <FAQS />

     
    </div>
  );
}

export default App;
