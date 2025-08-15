import { useParams } from "react-router-dom";
import templates from "@/data/templateData";
import Selector from "@/components/shared/Selector";

const TempDetails = () => {
  const { id } = useParams();
  const item = templates.find((t) => t.id === id);

  if (!item) return <div className="text-white p-6">Item not found</div>;

  return (
    <div className="bg-[#0b0f1a] text-white min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Side - Image, Title, Description */}
        <div className="flex-1 flex flex-col items-start">
          <img
            src={item.image}
            alt={item.title}
            className="w-full max-w-lg object-cover rounded-md mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{item.title}</h1>
          <p className="text-lg text-gray-300">{item.description}</p>
        </div>

        {/* Right Side - Selector */}
        <div className="flex-1 bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <Selector />
        </div>
      </div>
    </div>
  );
};

export default TempDetails;
