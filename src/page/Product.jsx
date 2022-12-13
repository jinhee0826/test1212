import { useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
    const [name, setName] = useState();
    return (  
        <div>
            <h3>값을 입력받아서 페이지를 이동합니다</h3>
            {/** input으로 값을 입력받아서 주소로 값을 건네줌 
             * 1. params 값으로 보내기 : /page/1
             * 2. 쿼리스트링으로 보내기 : ?name=사과 
             * >>> params 값으로 보내는 방식 사용
             * 1) App.js에 주소 지정 필요 : /page/:id
             * 2) 값을 주소의 :id위치에 전달 : /page/1
             */}
            <input type="text"  onChange={(e)=>{setName(e.target.value)}}/>
            <Link to={`/product/${name}`}
            // ${name}처럼 변수로 들고 와야함 
            >페이지 이동</Link>

        </div>
    );
}
 
export default Product;