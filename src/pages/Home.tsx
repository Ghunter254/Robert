import Hero from "@/components/home/Hero";
import ServiceHighlights from "@/components/home/ServiceHighlights";

const Home = () => {

  return (
    <main className="min-h-screen bg-white  py-10">
      <div className="max-w-6xl">
        <div className="mb-4">
          <Hero />
          <ServiceHighlights/>
        </div>
      </div>
    </main>
  );
};

export default Home;
