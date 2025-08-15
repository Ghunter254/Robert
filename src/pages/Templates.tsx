import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Search from "@/components/shared/Search";
import { useState } from "react";
import { Link } from "react-router-dom";
import templates from "@/data/templateData";

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [sortOption, setSortOption] = useState("");

  // Filter search results
  let filteredTemplates = templates.filter((t) =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Apply sorting
  if (sortOption === "priceLowHigh") {
    filteredTemplates.sort((a, b) => a.cost - b.cost);
  } else if (sortOption === "priceHighLow") {
    filteredTemplates.sort((a, b) => b.cost - a.cost);
  } else if (sortOption === "alphabetical") {
    filteredTemplates.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className="bg-black min-h-screen py-10 px-6 text-white font-sans relative">
      <div className="max-w-7xl mx-auto">
        {/* Top Controls */}
        <div className="flex justify-between items-center mb-8">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <button
            onClick={() => setShowFilter(true)}
            className="bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-700 transition-colors"
          >
            Filters
          </button>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blank Upload Card */}
        <div className="overflow-hidden border border-gray-800 bg-[#0d1117] text-white transform transition-transform duration-300 hover:scale-110 cursor-pointer flex flex-col justify-center items-center h-112 rounded-none">
        <Link to="/custom">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-semibold">
                Upload Custom File
              </CardTitle>
              <CardDescription className="text-gray-300 mt-2">
                Click here to upload your own design and start printing.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        </div>
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((item) => (
              <Link key={item.id} to={`/item/${item.id}`}>
                <Card className="overflow-hidden border border-gray-800 bg-[#0d1117] text-white transition-transform duration-300 hover:scale-105 rounded-none">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-none"
                  />
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <div className="bg-blue-600 text-white text-center py-2 font-semibold text-sm">
                    {item.cost} Ksh
                  </div>
                </Card>
              </Link>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center mt-6">
              No templates found.
            </p>
          )}
        </div>
      </div>

      {/* Filter Drawer */}
      {showFilter && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setShowFilter(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          ></div>

          {/* Drawer */}
          <div className="fixed top-0 right-0 w-72 h-full bg-[#0d1117] p-6 z-50 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Filter Templates</h2>

            {/* Example Filter: Category */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Category</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Modern
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Classic
                </label>
              </div>
            </div>

            {/* Sort Options */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Sort By</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sort"
                    value="priceLowHigh"
                    checked={sortOption === "priceLowHigh"}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="mr-2"
                  />
                  Price: Low to High
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sort"
                    value="priceHighLow"
                    checked={sortOption === "priceHighLow"}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="mr-2"
                  />
                  Price: High to Low
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sort"
                    value="alphabetical"
                    checked={sortOption === "alphabetical"}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="mr-2"
                  />
                  Alphabetical
                </label>
              </div>
            </div>

            <button
              onClick={() => setShowFilter(false)}
              className="w-full bg-blue-600 py-2 mt-4 hover:bg-blue-700 font-semibold"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Templates;
