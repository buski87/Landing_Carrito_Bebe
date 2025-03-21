const testimonials = [
    {
      name: 'Laura M.',
      message: 'El carrito es precioso y súper ligero. ¡Mi bebé va encantado!',
      image: '/src/assets/client1.webp',
    },
    {
      name: 'Carlos G.',
      message: 'Muy fácil de plegar y cabe perfecto en el maletero. Lo recomiendo.',
      image: '/src/assets/client2.webp',
    },
    {
      name: 'Marta S.',
      message: 'Excelente calidad y el envío fue rapidísimo. Muy satisfechos.',
      image: '/src/assets/client3.webp',
    },
  ];
  
  export default function TestimonialsSection() {
    return (
      <section className="px-6 py-20 bg-white" id="testimonios">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Testimonios</h2>
          <p className="text-gray-600 mt-4">Opiniones reales de nuestros clientes satisfechos.</p>
        </div>
  
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow text-left">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full mb-4 object-cover"
              />
              <h4 className="font-semibold text-gray-800">{t.name}</h4>
              <p className="text-gray-600 text-sm mt-2">“{t.message}”</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  