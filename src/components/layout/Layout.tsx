import Header from "../modules/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../modules/Sidebar";

const Layout = () => {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <div className="flex">
     
        <Sidebar />
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
