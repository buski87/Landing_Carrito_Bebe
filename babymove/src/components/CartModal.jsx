import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

export default function CartModal() {
  const {
    cart,
    addToCart,
    removeFromCart,
    deleteFromCart,
    isCartOpen,
    setIsCartOpen
  } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-96 p-6 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto"
      >
        <h2 id="cart-title" className="text-xl font-bold mb-4">🛒 Carrito</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Tu carrito está vacío.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-grow px-3">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.price}€</p>
                </div>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-2 py-1 border rounded hover:bg-gray-200"
                    title="Quitar uno"
                  >
                    ➖
                  </button>

                  <span className="font-semibold">{item.quantity}</span>

                  <button
                    onClick={() => addToCart(item)}
                    className="px-2 py-1 border rounded hover:bg-gray-200"
                    title="Añadir uno más"
                  >
                    ➕
                  </button>

                  <button
                    onClick={() => deleteFromCart(item.id)}
                    className="px-2 py-1 border border-red-500 text-red-500 rounded hover:bg-red-100"
                    title="Eliminar del carrito"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}

            <div className="text-right font-bold text-lg pt-4">
              Total: {total}€
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setIsCartOpen(false)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cerrar
          </button>
          {cart.length > 0 && (
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Finalizar compra
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
