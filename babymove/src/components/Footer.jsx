export default function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-700 py-10 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h5 className="font-bold mb-3">BabyMove</h5>
            <p>Carritos modernos y funcionales para los paseos más cómodos.</p>
          </div>
          <div>
            <h5 className="font-bold mb-3">Legal</h5>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Política de privacidad</a></li>
              <li><a href="#" className="hover:underline">Términos y condiciones</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-3">Enlaces</h5>
            <ul className="space-y-1">
              <li><a href="#features" className="hover:underline">Características</a></li>
              <li><a href="#productos" className="hover:underline">Productos</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
              <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-3">Redes</h5>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
            </ul>
          </div>
        </div>
  
        <div className="text-center text-xs text-gray-500 mt-10">
          © {new Date().getFullYear()} BabyMove. Todos los derechos reservados.
        </div>
      </footer>
    );
  }
  