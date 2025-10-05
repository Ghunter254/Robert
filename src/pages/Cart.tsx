// src/pages/Cart.tsx
import { useContext } from "react";
import { CartContext } from "../components/Cart/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  if (!cartCtx) {
    return <p>Error: CartContext not found</p>;
  }

  const { cart, removeFromCart, clearCart } = cartCtx;

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleCheckout = () => {
    // 👉 You can replace this with real checkout logic
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Example: Navigate to a checkout page
    navigate("/checkout");

    // Or trigger a payment flow here
    // e.g., send cart data to Appwrite / Stripe / PayPal
  };

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

          <div className="mt-4 flex justify-between items-center">
            <strong>Total: ${total.toFixed(2)}</strong>
            <div className="space-x-2">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded"
                onClick={clearCart}
              >
                Clear Cart
              </button>
              <button
                className="mt-3 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg text-white font-medium transition"
                onClick={() => navigate("/Checkout")}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
