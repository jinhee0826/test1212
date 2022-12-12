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
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/product/:name' element={<ProductName />}></Route>
        </Route>
      </Routes>
      

    </div>
  );
}

export default App;
