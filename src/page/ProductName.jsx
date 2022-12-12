import { useParams } from "react-router";

const ProductName = () => {
    const {name} = useParams();
    return (  
        <div>
            <h3>{name}</h3>
            <p>상품의 이름으로 상품페이지를 출력하고 있습니다</p>
        </div>
    );
}
 
export default ProductName;