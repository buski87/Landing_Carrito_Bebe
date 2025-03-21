import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products'; // Exporta tus productos aquí

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl">Producto no encontrado</h2>
        <Link to="/" className="text-blue-500">Volver</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={product.image} alt={product.name} className="w-full rounded" />
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-lg text-gray-600 mt-2">{product.price}€</p>
      {product.extra && <p className="text-sm mt-1 text-green-600">{product.extra}</p>}
      <Link to="/" className="inline-block mt-6 bg-blue-500 text-white py-2 px-4 rounded">Volver a productos</Link>
    </div>
  );
}
