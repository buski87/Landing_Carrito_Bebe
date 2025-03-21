import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'tarjeta',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simular pago
  const handlePayment = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setCart([]); // Vaciar carrito tras pago
      navigate('/confirmacion'); // Redirigir a página de confirmación
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Finalizar Compra</h2>

      {/* Resumen del carrito */}
      <div className="mb-6 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-semibold">Resumen del pedido</h3>
        {cart.length === 0 ? (
          <p className="text-gray-500">No hay productos en el carrito.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between py-2 border-b">
                <span>{item.name} (x{item.quantity})</span>
                <span className="font-bold">{item.price * item.quantity}€</span>
              </li>
            ))}
            <li className="flex justify-between font-bold text-lg mt-4">
              <span>Total:</span>
              <span>{total}€</span>
            </li>
          </ul>
        )}
      </div>

      {/* Formulario de datos del comprador */}
      <form onSubmit={handlePayment} className="space-y-4">
        <div>
          <label className="block font-medium">Nombre Completo</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Dirección de Envío</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Método de Pago</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="tarjeta">Tarjeta de crédito</option>
            <option value="paypal">PayPal</option>
            <option value="transferencia">Transferencia bancaria</option>
          </select>
        </div>

        {/* Botón de pago */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 mt-4 text-white font-bold rounded-lg transition ${
            isSubmitting ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {isSubmitting ? 'Procesando pago...' : 'Pagar'}
        </button>
      </form>
    </div>
  );
}
