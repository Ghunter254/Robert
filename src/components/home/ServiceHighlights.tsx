import React from "react";

const highlights = [
  {
    icon: "/assets/Delivery.png",
    title: "Fast Delivery",
    description: "Quick turnaround times so your project stays on track.",
  },
  {
    icon: "/assets/Spanner.png",
    title: "Custom Designs",
    description: "Tailored 3D printing to match your exact needs.",
  },
  {
    icon: "/assets/Money.png",
    title: "Affordable Pricing",
    description: "High-quality prints without breaking the bank.",
  },
  {
    icon: "/assets/Kenya.png",
    title: "Nationwide Shipping",
    description: "We deliver anywhere in the country.",
  },
];

const ServiceHighlights = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg bg-gray-900 shadow hover:shadow-lg transition"
          >
            <div className="w-16 h-16 mb-4">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceHighlights;
