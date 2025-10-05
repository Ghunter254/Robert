import { useContext, useState } from "react";
import { CartContext } from "../components/Cart/CartContext";
import { useNavigate } from "react-router-dom";

type ShippingDetails = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  pickupLocation: string;
};

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  // ✅ All hooks at top level (no conditional return before them)
  const [step, setStep] = useState<"summary" | "shipping" | "payment">("summary");
  const [shipping, setShipping] = useState<ShippingDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    pickupLocation: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");

  // ✅ Guard for missing context handled after hooks
  if (!cartCtx) {
    return <p>Error: CartContext not found</p>;
  }

  const { cart } = cartCtx;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.17;
  const total = subtotal + tax;

  const pickupLocations = [
    { name: "Nairobi Central", cost: 0 },
    { name: "Kisumu Depot", cost: 200 },
    { name: "Mombasa Branch", cost: 300 },
  ];

  const handleProceedFromSummary = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      navigate("/templates");
      return;
    }
    setStep("shipping");
  };

  const handleProceedFromShipping = () => {
    if (
      !shipping.firstName ||
      !shipping.lastName ||
      !shipping.email ||
      !shipping.phone ||
      !shipping.address ||
      !shipping.pickupLocation
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    setStep("payment");
  };

  const handleConfirmPayment = () => {
    if (!paymentMethod) {
      alert("Please choose a payment method.");
      return;
    }

    alert(
      `Order confirmed!\nPayment: ${paymentMethod}\nThank you, ${shipping.firstName}!`
    );
    navigate("/"); // Return to homepage
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* STEP 1: Order Summary */}
      {step === "summary" && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <ul className="divide-y">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between py-2 items-center">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax (17%): ${tax.toFixed(2)}</p>
            <p className="font-bold">Total: ${total.toFixed(2)}</p>
          </div>
          <div className="mt-6 flex justify-between">
            <button
              className="px-4 py-2 bg-gray-600 text-white rounded"
              onClick={() => navigate("/templates")}
            >
              Return to Shopping
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={handleProceedFromSummary}
            >
              Proceed
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Shipping Details */}
      {step === "shipping" && (
        <div className="space-y-4 text-black">
          <h2 className="text-xl font-semibold text-white">Shipping Details</h2>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={shipping.firstName}
              onChange={(e) => setShipping({ ...shipping, firstName: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={shipping.lastName}
              onChange={(e) => setShipping({ ...shipping, lastName: e.target.value })}
              className="border p-2 rounded"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            value={shipping.email}
            onChange={(e) => setShipping({ ...shipping, email: e.target.value })}
            className="border p-2 rounded w-full"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={shipping.phone}
            onChange={(e) => setShipping({ ...shipping, phone: e.target.value })}
            className="border p-2 rounded w-full"
          />

          <input
            type="text"
            placeholder="Shipping Address"
            value={shipping.address}
            onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
            className="border p-2 rounded w-full"
          />

          <div>
            <label className="block mb-1 text-white">Pickup Location</label>
            <select
              value={shipping.pickupLocation}
              onChange={(e) =>
                setShipping({ ...shipping, pickupLocation: e.target.value })
              }
              className="border p-2 rounded w-full"
            >
              <option value="">Select a location</option>
              {pickupLocations.map((loc) => (
                <option key={loc.name} value={loc.name}>
                  {loc.name} (+${loc.cost})
                </option>
              ))}
            </select>

            {shipping.pickupLocation && (
              <p className="text-sm text-gray-400 mt-1">
                Cost: $
                {
                  pickupLocations.find(
                    (loc) => loc.name === shipping.pickupLocation
                  )?.cost
                }
              </p>
            )}
          </div>

          <div className="mt-6 flex justify-between">
            <button
              className="px-4 py-2 bg-gray-600 text-white rounded"
              onClick={() => navigate("/templates")}
            >
              Return to Shopping
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={handleProceedFromShipping}
            >
              Proceed
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Payment */}
      {step === "payment" && (
        <div className="space-y text-black">
          <h2 className="text-xl font-semibold text-white">Payment</h2>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="">Select a payment method</option>
            <option value="Mpesa">Mpesa</option>
            <option value="Paypal">PayPal</option>
          </select>

          <div className="mt-6 flex justify-between">
            <button
              className="px-4 py-2 bg-gray-600 text-white rounded"
              onClick={() => navigate("/templates")}
            >
              Return to Shopping
            </button>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded"
              onClick={handleConfirmPayment}
            >
              Confirm Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
