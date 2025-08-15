import { Link } from "react-router-dom";
import Selector from "@/components/shared/Selector";

const CustomFile = () => {
  return (
    <div className="bg-[#0b0f1a] text-white min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        
        {/* Left Side - Drag & Drop Box */}
        <div className="flex-1 flex flex-col items-start">
          <div
            className="w-full max-w-lg h-80 border-2 border-dashed border-gray-500 rounded-md flex flex-col justify-center items-center cursor-pointer"
          >
            <p className="text-lg text-gray-300">Drag & Drop your STL file here</p>
            <p className="text-sm text-gray-500 mt-2">or click to browse</p>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-6">Custom STL Upload</h1>
          <p className="text-lg text-gray-300 mt-2">
            Upload your 3D model in STL format and customize your print options.
          </p>

          {/* New explanatory text + button */}
          <p className="text-gray-400 mt-6">
            Don’t have your own STL file? Browse our collection of ready-made templates and customize them to your needs.
          </p>
          <Link
            to="/templates"
            className="mt-3 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg text-white font-medium transition"
          >
            Browse Templates
          </Link>
        </div>

        {/* Right Side - Selector */}
        <div className="flex-1 bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <Selector />
        </div>
      </div>
    </div>
  );
};

export default CustomFile;
