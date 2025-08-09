import Card from "@/components/shared/Card";
import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";
import Search from "@/components/shared/Search";
import { useState } from "react";
import { Link } from 'react-router-dom';
import templates from "@/data/templateData"; // path depends on where the file is

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <Navigation />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="grid gap-4 mt-6">
          {templates.map((item) => (
            <Link key={item.id} to={`/item/${item.id}`}>
              <Card
                title={item.title}
                image={item.image}
                description={item.description}
              />
            </Link>
          ))}
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default Home;
