import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartModal from './components/CartModal';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import NotFound from './pages/NotFound';

function App() {
  return (
    <CartProvider>
      <div className="bg-gray-100 text-gray-900 min-h-screen font-sans transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmacion" element={<Confirmation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CartModal />
      </div>
    </CartProvider>
  );
}

export default App;
