import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';  // 👈 Importa el contexto del carrito
import { products } from '../data/products';

export default function ProductSection() {
  const { addToCart } = useCart();  // 👈 Obtiene la función desde el contexto

  return (
    <section id="productos" className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestros Carritos</h2>
        <p className="text-gray-600 mt-2">Encuentra el modelo perfecto para tu bebé.</p>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="text-left bg-white shadow-md p-4 rounded-lg">
            <Link to={`/producto/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-full object-cover rounded-lg" />
            </Link>

            <h3 className="mt-2 font-semibold text-gray-800">
              <Link to={`/producto/${product.id}`} className="hover:text-blue-500">
                {product.name}
              </Link>
            </h3>

            <p className="text-gray-900 font-bold">{product.price}€</p>
            {product.extra && <p className="text-green-600 text-sm">{product.extra}</p>}

            <Link to={`/producto/${product.id}`}>
              <button className="mt-2 bg-gray-800 text-white text-sm py-2 px-4 rounded hover:bg-gray-900 transition w-full">
                Ver detalle
              </button>
            </Link>

            {/* Botón para añadir al carrito */}
            <button
              onClick={() => addToCart(product)}  // 👈 Asegura que la función se llama con el producto
              className="mt-2 bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600 transition w-full"
            >
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
