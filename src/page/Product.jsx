import { useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
    const [name, setName] =useState();
    return (  
        <div>
            <h3>값을 입력받아서 페이지를 이동합니다</h3>
            <input type="text"  onChange={(e)=>{setName(e.target.value)}}/>
            <Link to={`/product/${name}`}>페이지 이동</Link>

        </div>
    );
}
 
export default Product;