import { useState } from 'react';
import { useCart } from '../context/CartContext'; // Importamos el contexto del carrito

const products = [
  {
    id: 1,
    name: 'Carro de bebé Bugaboo Fox 5 Renew',
    price: 1299,
    image: '/src/assets/carrito1.webp',
    extra: 'Comparar',
  },
  {
    id: 2,
    name: 'Carro de bebé Stokke Chasis Negro',
    price: 599,
    image: '/src/assets/carrito2.webp',
    extra: 'REGALO PACK TEXTIL 6+',
  },
  {
    id: 3,
    name: 'Carro de bebé Stokke Chasis Azul',
    price: 639,
    image: '/src/assets/carrito3.webp',
    extra: 'Envío rápido',
  },
  {
    id: 4,
    name: 'Carro de bebé Stokke Chasis Beig',
    price: 599,
    image: '/src/assets/carrito4.webp',
    extra: 'REGALO PACK TEXTIL 6+',
  },
  {
    id: 5,
    name: 'Carro de bebé Cybex Balios S Lux',
    price: 679,
    image: '/src/assets/carrito5.webp',
    extra: 'Descuento 10%',
  },
  {
    id: 6,
    name: 'Carro de bebé Inglesina Aptica',
    price: 899,
    image: '/src/assets/carrito6.webp',
    extra: 'Envío en 24h',
  },
  {
    id: 7,
    name: 'Carro de bebé Chicco Best Friend Pro',
    price: 349,
    image: '/src/assets/carrito7.webp',
    extra: 'Comparar',
  },
  {
    id: 8,
    name: 'Carro de bebé Jané Muum Pro',
    price: 799,
    image: '/src/assets/carrito8.webp',
    extra: 'Edición especial',
  },
];

export default function ProductSection() {
  const [maxPrice, setMaxPrice] = useState(1500);
  const { addToCart, setIsCartOpen } = useCart(); // Obtenemos la función para añadir al carrito y abrirlo

  const filteredProducts = products.filter((product) => product.price <= maxPrice);

  return (
    <section id="productos" className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestros Carritos</h2>
        <p className="text-gray-600 mt-2">Encuentra el modelo perfecto para tu bebé.</p>
      </div>

      {/* Filtro de precio */}
      <div className="max-w-xl mx-auto mb-12">
        <label htmlFor="priceRange" className="block text-gray-800 font-medium mb-2 text-center">
          Filtrar por precio: hasta <span className="font-bold">{maxPrice}€</span>
        </label>
        <input
          id="priceRange"
          type="range"
          min="300"
          max="1500"
          step="50"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
          <div key={product.id} className="text-left">
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-cover rounded-lg"
            />
            <h3 className="mt-2 font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-900 font-bold">{product.price}€</p>
            {product.extra && (
              <p className="text-green-600 text-sm">{product.extra}</p>
            )}
            <button
              onClick={() => {
                addToCart(product);
                setIsCartOpen(true); // Abrir el modal del carrito
              }}
              className="mt-2 bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600 transition w-full"
            >
              Añadir al carrito
            </button>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p className="text-center col-span-full text-gray-500">No hay carritos en este rango de precio.</p>
        )}
      </div>
    </section>
  );
}
