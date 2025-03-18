import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Headphone from "./Components/Headphone";
import Footer from "./Components/Footer";
import Earbuds from "./Components/Earbuds";
import FestivalCollections from "./Components/FestivalCollections";
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
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
