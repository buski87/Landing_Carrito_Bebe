import { Link } from 'react-router-dom';

export default function Confirmation() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold text-green-600 mb-4">¡Compra realizada con éxito! 🎉</h2>
      <p className="text-lg text-gray-700 mb-6">
        Gracias por tu compra. Te enviaremos un correo con los detalles del pedido.
      </p>
      <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Volver al inicio
      </Link>
    </div>
  );
}
