import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Headphone from "./Components/Headphone";
import Footer from "./Components/Footer";
import Earbuds from "./Components/Earbuds";
import ChatBot from "./Components/Chatbot";
const FestivalCollections = React.lazy(() =>
  import("./Components/FestivalCollections")
);
import CartDetails from "./Pages/CartDetails";
import ShopingCart from "./Pages/ShopingCart";
import Shop from "./Components/Shop";
import Signin from "./Pages/Signin";
const Search = React.lazy(() => import("./Pages/Search"));
function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center mt-2 font-bold text-2xl">
            Loading Page......
          </div>
        }
      >
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
            <Route path="/chatbot" element={<ChatBot />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default App;
