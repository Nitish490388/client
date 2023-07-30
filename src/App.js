
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Categories from "./pages/categories/Categories";
import ProductDetails from "./pages/productDetails/ProductDetails"


function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Categories/>}/>
          <Route path="/products/:productId" element={<ProductDetails/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
