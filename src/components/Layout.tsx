import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="app-content">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;