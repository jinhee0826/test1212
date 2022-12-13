import { NavLink } from "react-router-dom";



const NavbarComp = () => {
    return (  
        <div>
            <NavLink to='/' style={({isActive})=>(
                isActive 
                ? { color: "green", fontWeight: "bold" } 
                : undefined
            )}
            // isactive를 가져올 수 있음
            // 삼항연산자를 쓸 수 있음, return된 결과값을 바로 전달하기 위해 (괄호)사용 
            > Home </NavLink> {" "}

            <NavLink to='/about' style={({isActive})=>(
                isActive 
                ? { color: "green", fontWeight: "bold" } 
                : undefined
            )}> About </NavLink> {" "}

            <NavLink to='/product' style={({isActive})=>(
                isActive 
                ? { color: "green", fontWeight: "bold" } 
                : undefined
            )}> Product </NavLink> {" "}
        </div>
    );
}
 
export default NavbarComp;
