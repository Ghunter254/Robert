import React from "react";

const Selector = () => {
  const cost = 300;

  return (
    <div>
      <ul className="space-y-6">
        <li className="flex flex-col">
          <label className="mb-2 font-semibold">Material:</label>
          <select className="bg-[#0b0f1a] border border-[#1e3a8a] text-white p-2 rounded focus:outline-none">
            <option>PLA</option>
            <option>Nylon</option>
            <option>Resin</option>
          </select>
        </li>

        <li className="flex flex-col">
          <label className="mb-2 font-semibold">Color:</label>
          <select className="bg-[#0b0f1a] border border-[#1e3a8a] text-white p-2 rounded focus:outline-none">
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
            defaultValue="1"
            className="bg-[#0b0f1a] border border-[#1e3a8a] text-white p-2 rounded focus:outline-none"
          />
        </li>

        <li className="flex flex-col">
          <label className="mb-2 font-semibold">Scale:</label>
          <input
            type="number"
            min="60"
            max="160"
            defaultValue="100"
            className="bg-[#0b0f1a] border border-[#1e3a8a] text-white p-2 rounded focus:outline-none"
          />
        </li>

        <li className="flex flex-col">
          <label className="mb-2 font-semibold">Standard:</label>
          <select className="bg-[#0b0f1a] border border-[#1e3a8a] text-white p-2 rounded focus:outline-none">
            <option>Standard</option>
            <option>Express</option>
          </select>
        </li>

        <li className="text-lg font-bold">Cost: ${cost}</li>

        <li>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Add to cart
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Selector;
