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
import Hero from "@/components/home/Hero";
import ServiceHighlights from "@/components/home/SreviceHighlights";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTemplates = templates.filter((t) =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white  py-10">
      <div className="max-w-6xl">
        <div className="mb-4">
          <Hero />
          <ServiceHighlights/>
        </div>
        <div className="mx-auto">
          {/* Search Bar */}
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredTemplates.length > 0 ? (
              filteredTemplates.map((item) => (
                <Link key={item.id} to={`/item/${item.id}`}>
                  <Card className="overflow-hidden border border-gray-800 bg-white text-black transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
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
      </div>
    </main>
  );
};

export default Home;
