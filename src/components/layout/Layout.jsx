import Header from "../modules/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../modules/Sidebar";

const Layout = () => {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <header>
        <Header />
      </header>
      <div className="flex">
        <aside className="w-1/4">
          <Sidebar />
        </aside>
        <main className="w-3/4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
