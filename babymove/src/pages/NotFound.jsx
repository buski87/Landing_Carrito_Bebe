import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-5xl font-bold text-blue-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">¡Oops! Página no encontrada.</p>
      <Link
        to="/"
        className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
