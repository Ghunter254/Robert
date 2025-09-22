import { useState } from "react";
import { Link } from "react-router-dom";
import Selector from "@/components/shared/Selector";
import Fileinput1 from "@/components/custom/Fileinput1";

const CustomFile = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  return (
    <div className="bg-[#0b0f1a] text-white min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        
        {/* Left Side - File Upload */}
        <div className="flex-1 flex flex-col items-start">
          <div className="w-full max-w-lg h-80 border-2 border-dashed border-gray-500 rounded-md flex flex-col justify-center items-center cursor-pointer">
            <Fileinput1
              Title="Upload your STL files"
              onFilesSelect={setUploadedFiles}
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-6">Custom STL Upload</h1>
          <p className="text-lg text-gray-300 mt-2">
            Upload your 3D model(s) in STL format and customize your print options.
          </p>

          <p className="text-gray-400 mt-6">
            Don't have your own STL file? Browse our collection of ready-made templates.
          </p>
          <Link
            to="/templates"
            className="mt-3 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg text-white font-medium transition"
          >
            Browse Templates
          </Link>
        </div>

        {/* Right Side - One Selector for all uploaded files */}
        <div className="flex-1 bg-[#1e293b] p-6 rounded-lg shadow-lg">
          {uploadedFiles.length > 0 ? (
            <Selector files={uploadedFiles} />
          ) : (
            <p className="text-gray-400">Upload one or more files to configure options.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomFile;
