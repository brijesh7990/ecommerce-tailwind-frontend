import { Outlet } from "react-router-dom";
import NavbarComponent from "../shared/NavbarComponent";
import FooterComponent from "../shared/FooterComponent";
const Layout = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="min-h-[100vh]">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
};

export default Layout;
