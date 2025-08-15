import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            High-Quality 3D Printing <br className="hidden md:block" /> for
            Everyone
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Fast turnaround, affordable pricing, and nationwide delivery for
            your custom 3D designs.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/custom"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Start with your file
            </Link>
            <Link
              to="/templates"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Browse Templates
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center py-6 px-4 md:py-8 md:px-6">
          <img
            src="/assets/3dprinting1.png"
            alt="3D Printer"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
