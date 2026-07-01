import { Outlet } from "react-router-dom";

import Navbar from "../../organisms/Navbar";
import Footer from "../../organisms/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
