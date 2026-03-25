import { Outlet } from "react-router";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div className=" flex flex-col">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;
