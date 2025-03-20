import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Headphone from "./Components/Headphone";
import Footer from "./Components/Footer";
import Earbuds from "./Components/Earbuds";
import FestivalCollections from "./Components/FestivalCollections";
import CartDetails from "./Pages/CartDetails";
import ShopingCart from "./Pages/ShopingCart";
import Shop from "./Components/Shop";
import Signin from "./Pages/Signin";
import Search from "./Pages/Search";
function App() {
  return (
    <>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/headphone" element={<Headphone />} />
          <Route path="/earbuds" element={<Earbuds />} />
          <Route path="/festival" element={<FestivalCollections />} />
          <Route path="/shopingcart" element={<ShopingCart />} />
          <Route path="/card/:id" element={<CartDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
