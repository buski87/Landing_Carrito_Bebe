import { ShieldCheck, Baby, Brush, Car } from 'lucide-react';

const features = [
  {
    title: 'Seguridad Premium',
    description: 'Diseño seguro y homologado, con frenos reforzados y arneses acolchados.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
  },
  {
    title: 'Comodidad Total',
    description: 'Asientos acolchados, respaldo reclinable y suspensión suave para el paseo.',
    icon: <Baby className="w-8 h-8 text-green-500" />,
  },
  {
    title: 'Fácil de limpiar',
    description: 'Materiales resistentes al agua y fáciles de desmontar para limpieza rápida.',
    icon: <Brush className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: 'Compacto y Ligero',
    description: 'Diseño plegable para transportar y guardar en cualquier maletero.',
    icon: <Car className="w-8 h-8 text-purple-500" />,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-20 bg-gray-100 transition">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">¿Por qué elegir BabyMove?</h2>
        <p className="text-gray-600 mt-4">Calidad, diseño y confianza en cada paseo.</p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 px-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105 text-center border border-gray-200"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
