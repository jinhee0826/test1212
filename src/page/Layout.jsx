import NavbarComp from "../components/NavbarComp";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return ( 
        <div>
            <NavbarComp />
            <hr />
            <Outlet
            // 레이아웃 안 outlet자리에 들어갈 공간을 만들어줌 
            />
        </div>
        );
}
 
export default Layout;