import { useNavigate } from "react-router";

const About = () => {
    const navigate = useNavigate();
    return (  
        <div>
            <p>아래의 버튼을 누르면 Home으로 돌아갑니다</p>
            <button onClick={()=>{
                navigate('/')
            }} >Home으로가기</button>
        </div>
    );
}
 
export default About;