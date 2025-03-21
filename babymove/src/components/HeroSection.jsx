import heroImage from '../assets/carrito.png';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-white transition mt-10">
      {/* Texto */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Paseos cómodos, seguros y con estilo
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Descubre los mejores carritos para tu bebé. Diseños modernos, materiales de calidad y todo lo que necesitas para salir a pasear.
        </p>
        <a href="#productos">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition shadow-lg">
            Ver productos
          </button>
        </a>
      </div>

      {/* Imagen animada */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <img
          src={heroImage}
          alt="Carrito de bebé"
          className="w-80 md:w-[400px] object-contain drop-shadow-xl"
        />
      </motion.div>
    </section>
  );
}
