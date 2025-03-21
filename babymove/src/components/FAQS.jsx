export default function FAQS() {
    const faqs = [
      {
        question: '¿Qué incluye el carrito al comprarlo?',
        answer: 'Incluye el chasis, capazo, silla de paseo, cubrepiés y protector de lluvia.',
      },
      {
        question: '¿Puedo devolver el carrito si no me convence?',
        answer: 'Sí, tienes 30 días para devolverlo si no estás satisfecho. Debe estar en buen estado y con el embalaje original.',
      },
      {
        question: '¿Hay garantía?',
        answer: 'Todos nuestros productos tienen 2 años de garantía oficial.',
      },
      {
        question: '¿Cuánto tarda el envío?',
        answer: 'El envío es gratuito y tarda entre 24 y 72h laborales en España peninsular.',
      },
    ];
  
    return (
      <section id="faq" className="px-6 py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Preguntas Frecuentes</h2>
          <p className="text-gray-600 mt-4">¿Tienes dudas? Aquí resolvemos las más comunes.</p>
        </div>
  
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow transition-all duration-300"
            >
              <summary className="cursor-pointer text-lg font-medium text-gray-800">
                {faq.question}
              </summary>
              <div className="mt-2 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
    );
  }
  