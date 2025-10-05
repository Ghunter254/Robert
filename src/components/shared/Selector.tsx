import React, { useState } from "react";
import { useCart } from "@/components/Cart/useCart";

type SelectorProps = {
  files?: File[];
  templateId?: string;
};


const Selector = ({ files }: SelectorProps) => {
  const { addToCart } = useCart();

  // User options
  const [material, setMaterial] = useState("PLA");
  const [color, setColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const [scale, setScale] = useState(100);
  const [shipping, setShipping] = useState("Standard");

  const basePrice = 300;
  const cost = basePrice * quantity;

  function handleAddToCart() {
    files.forEach((file) => {
      addToCart({
        id: `${file.name}-${crypto.randomUUID()}`, // unique per file
        name: file.name,
        price: cost,
        quantity,
        material,
        color,
        scale,
        shipping,
      });
    });
  }

  return (
    <div>
      <ul className="space-y-6">
        {/* Options same as before */}
        <li className="flex flex-col">
          <label className="mb-2 font-semibold">Material:</label>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="bg-[#0b0f1a] border border-[#1e3a8a] text-white p-2 rounded"
          >
            <option>PLA</option>
            <option>Nylon</option>
            <option>Resin</option>
          </select>
        </li>

        <li className="flex flex-col">
          <label className="mb-2 font-semibold">Color:</label>
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="bg-[#0b0f1a] border border-[#1e3a8a] text-white p-2 rounded"
          >
            <option>Black</option>
            <option>White</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Orange</option>
          </select>
        </li>

        <li className="flex flex-col">
          <label className="mb-2 font-semibold">Quantity:</label>
          <input
            type="number"
            min="1"
            max="10"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="bg-[#0b0f1a] border border-[#1e3a8a] text-white p-2 rounded"
          />
        </li>

        <li className="flex flex-col">
          <label className="mb-2 font-semibold">Scale (%):</label>
          <input
            type="number"
            min="60"
            max="160"
            value={scale}
            onChange={(e) => setScale(Number(e.target.value))}
            className="bg-[#0b0f1a] border border-[#1e3a8a] text-white p-2 rounded"
          />
        </li>

        <li className="flex flex-col">
          <label className="mb-2 font-semibold">Shipping:</label>
          <select
            value={shipping}
            onChange={(e) => setShipping(e.target.value)}
            className="bg-[#0b0f1a] border border-[#1e3a8a] text-white p-2 rounded"
          >
            <option>Standard</option>
            <option>Express</option>
          </select>
        </li>

        <li className="text-lg font-bold">Cost per file: ${cost}</li>

        <li>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            onClick={handleAddToCart}
          >
            Add All Files to Cart
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Selector;
