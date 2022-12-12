import NavbarComp from "../components/NavbarComp";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return ( 
        <div>
            <NavbarComp />
            <hr />
            <Outlet />
        </div>
        );
}
 
export default Layout;