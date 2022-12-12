import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";


const NavbarComp = () => {
    return (  
        <div>
            <NavLink to='/'> Home </NavLink>
            <NavLink to='/about'> about </NavLink>
            <NavLink to='/product'> product </NavLink>
        </div>
    );
}
 
export default NavbarComp;
