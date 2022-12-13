import './App.css';
import Home from './page/Home';
import NavbarComp from './components/NavbarComp';
import { Route, Routes } from 'react-router';
import About from './page/About';
import Product from './page/Product';
import Layout from './page/Layout';
import ProductName from './page/ProductName';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}
        // element={}중괄호로 작성하지 않으면 문자열로 인식
        // -> Layout글자 나옴
        >
          <Route index element={<Home />}
          // outlet을 사용하면 Route안에 Route를 사용 => 동일한 주소에서 같이 나옴
          // 같은 주소면 path사용도 되지만 index 쓰는게 더 좋음 
          ></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/product/:name' element={<ProductName />}></Route>
        </Route>
      </Routes>
      

    </div>
  );
}

export default App;
