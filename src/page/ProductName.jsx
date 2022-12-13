import { useParams } from "react-router";

const ProductName = () => {
    // params으로 들고 온 모든 값은 문자열!!

    const {name} = useParams();
    // useParams()에는 값이 객체로 들어가 있음
    // app에서 지정해준 name이라는 이름에 들어가 있음 => 구조화 할당을 통해 
    // name이름 그대로 가져옴 

    return (  
        <div>
            <h3>{name}</h3>
            <p>상품의 이름으로 상품페이지를 출력하고 있습니다</p>
        </div>
    );
}
 
export default ProductName;