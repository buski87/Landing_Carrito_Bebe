import { useState } from 'react';

const products = [
  { id: 1, name: 'Carrito Urban Plus', price: 299, image: '/src/assets/carrito1.webp' },
  { id: 2, name: 'Carrito Compact Fold', price: 349, image: '/src/assets/carrito2.webp' },
  { id: 3, name: 'Carrito Travel Pro', price: 399, image: '/src/assets/carrito3.webp' },
  { id: 4, name: 'Carrito Eco Style', price: 279, image: '/src/assets/carrito4.webp' },
  { id: 5, name: 'Carrito Family Plus', price: 350, image: '/src/assets/carrito5.webp' },
];

export default function ProductSection() {
  const [maxPrice, setMaxPrice] = useState(400);
  const [cart, setCart] = useState([]);

  const filteredProducts = products.filter((product) => product.price <= maxPrice);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const deleteFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section id="productos" className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestros Carritos</h2>
        <p className="text-gray-600 mt-2">Explora nuestra colección de carritos modernos, seguros y funcionales.</p>
      </div>

      {/* Filtro de precio */}
      <div className="max-w-xl mx-auto mb-12">
        <label htmlFor="priceRange" className="block text-gray-800 font-medium mb-2 text-center">
          Filtrar por precio: hasta <span className="font-bold">{maxPrice}€</span>
        </label>
        <input
          id="priceRange"
          type="range"
          min="250"
          max="400"
          step="10"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Productos */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 text-left">
              <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
              <p className="text-blue-500 font-bold">{product.price}€</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p className="text-center col-span-full text-gray-500">No hay carritos en este rango de precio.</p>
        )}
      </div>

      {/* Carrito */}
      <div className="max-w-4xl mx-auto mt-10 border-t pt-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">🛒 Carrito</h3>
        {cart.length === 0 ? (
          <p className="text-gray-500">Aún no hay productos en el carrito.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 w-full justify-between">
                  <span className="font-medium">
                    {item.name} (x{item.quantity})
                  </span>
                  <div className="flex gap-2 items-center mt-2 sm:mt-0">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm px-2 py-1 border border-gray-300 rounded hover:bg-gray-200"
                    >
                      ➖
                    </button>
                    <button
                      onClick={() => deleteFromCart(item.id)}
                      className="text-sm px-2 py-1 border border-red-300 text-red-500 rounded hover:bg-red-100"
                    >
                      🗑️
                    </button>
                    <span className="font-semibold">{item.price * item.quantity}€</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-right font-bold text-lg pt-4">
              Total: {total}€
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
