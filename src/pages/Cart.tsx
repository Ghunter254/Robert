// src/pages/Cart.tsx
import { useContext } from "react";
import { CartContext } from "../components/Cart/CartContext";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  if (!cartCtx) {
    return <p>Error: CartContext not found</p>;
  }

  const { cart, removeFromCart, clearCart } = cartCtx;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>${item.price * item.quantity}</span>
                <button
                  className="ml-4 text-red-500 hover:underline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex justify-between">
            <strong>
              Total: $
              {cart.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2)}
            </strong>
            <button
              className="px-4 py-2 bg-red-600 text-white rounded"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
