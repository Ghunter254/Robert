import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    // AppLayout
    <div className="flex flex-col min-h-screen w-full ">
      <Navigation />
      <main className="flex-1 ml-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
