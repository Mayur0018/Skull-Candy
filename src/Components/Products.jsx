import React, { useState, useEffect } from "react";
import { trendProductdetails } from "../Data/Product";
import { addToCart } from "../Store/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShimmerCard from "../Pages/ShimmerCard";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [showpopup, setPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setProducts(trendProductdetails);
      setLoading(false);
    }, 2000);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCardclick = (id) => {
    navigate(`/card/${id}`);
  };

  const handleAddtoCart = (item) => {
    dispatch(addToCart(item));
    setPopup(true);
    setTimeout(() => setPopup(false), 2000); // Fix applied here
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="sm:text-5xl mt-8 font-bold">TRENDING PRODUCTS</h1>
      </div>

      {/* Select items */}
      <div className="flex sm:justify-end sm:mr-36 mt-10">
        <select name="" id="" className="py-2 px-2 shadow-lg">
          <option value="">POPULARITY</option>
          <option value="">AVERAGE RATING</option>
          <option value="">LATEST</option>
          <option value="">PRICE: LOW TO HIGH</option>
          <option value="">PRICE: HIGH TO LOW</option>
        </select>
      </div>

      {/* Product details */}
      <div className="grid sm:grid-cols-3 mt-12">
        {loading
          ? [...Array(16)].map((_, index) => <ShimmerCard key={index} />)
          : products.map((item) => (
              <div className="flex flex-col items-center" key={item.id}>
                <img
                  className="w-72 cursor-pointer"
                  src={item.image}
                  alt=""
                  onClick={() => handleCardclick(item.id)}
                />
                <h2 className="font-bold text-xl mt-1">{item.text}</h2>
                <p>{item.price}</p>
                <button
                  className="bg-gray-800 text-white px-5 py-3 font-medium text-[12px] mt-3 mb-10 m-auto cursor-pointer"
                  onClick={() => handleAddtoCart(item)} // Fix applied here
                >
                  ADD TO CART
                </button>
              </div>
            ))}
      </div>

      {/* Popup Message */}
      {showpopup && (
        <div className="fixed  bottom-10 right-10 bg-green-500 text-white py-1 px-2 sm:px-4 sm:py-2 rounded-lg shadow-lg transition-opacity duration-300">
          Item added to cart!
        </div>
      )}
    </div>
  );
};

export default Products;
