import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  const handleBackToCatalog = () => {
    localStorage.setItem('scrollToProductos', 'true'); // ✅ importante
    navigate('/');
  };

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl">Producto no encontrado</h2>
        <button
          onClick={handleBackToCatalog}
          className="text-blue-500 hover:underline"
        >
          ← Volver al catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 object-cover rounded-lg"
        />

        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-700">{product.price}€</p>
          {product.extra && (
            <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded">
              {product.extra}
            </span>
          )}

          {/* Descripción */}
          {product.description && (
            <div>
              <h3 className="font-semibold text-gray-800 mt-4">Descripción:</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          )}

          {/* Accesorios */}
          {product.accessories && (
            <div>
              <h3 className="font-semibold text-gray-800 mt-4">Accesorios incluidos:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {product.accessories.map((acc, i) => (
                  <li key={i}>{acc}</li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={() => addToCart(product)}
            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Añadir al carrito
          </button>
        </div>
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={handleBackToCatalog}
          className="text-blue-500 hover:underline"
        >
          ← Volver al catálogo
        </button>
      </div>
    </div>
  );
}
