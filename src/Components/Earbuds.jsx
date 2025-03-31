import React from "react";
import { useState, useEffect } from "react";
import { Earbudsdetails } from "../Data/EarBuds";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import { useNavigate } from "react-router-dom";
import ShimmerCard from "../Pages/ShimmerCard";
const Earbuds = () => {
  const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [showPopup,setShoPoup] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setProducts(Earbudsdetails);
        setLoading(false);
      }, 2000);
    }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/card/${id}`);
  };
  const handleAddtocart= (item)=>{
    dispatch(addToCart(item));
    setShoPoup(true);
    setTimeout(()=> setShoPoup(false),2000)
  }
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="sm:text-5xl mt-8 font-bold">WIRED EARBUDS</h1>
      </div>
      {/* select iteams */}
      <div className=" flex sm:justify-end  sm:mr-36 mt-10 ">
        <select name="" id="" className="py-2 px-2 shadow-lg">
          <option value="">POPULARITY</option>
          <option value="">AVARAGE RATING</option>
          <option value="">LATEST</option>
          <option value="">PRICE: LOW TO HIGH</option>
          <option value="">PRICE: HIGH TO LOW</option>
        </select>
      </div>

      
      {/* products details  */}
      <div className="grid sm:grid-cols-3 mt-12">
        {loading?[...Array(16)].map((index)=> <ShimmerCard key={index}/>):
        products.map((items) => (
          <div className=" flex flex-col items-center" key={items.id}>
            <img
              className="w-72"
              src={items.image}
              alt=""
              onClick={() => handleCardClick(items.id)}
            />
            <h2 className="font-bold text-1xl mt-1">{items.text}</h2>
            <p>{items.price}</p>
            <button
              className=" bg-gray-800 text-white px-5 py-3 font-medium text-[12px] mt-3 mb-10 m-auto cursor-pointer"
              onClick={() =>handleAddtocart(items)}
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="fixed bottom-10 right-10 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300">
          Item added to cart!
        </div>
      )}
    </div>
  );
};

export default Earbuds;
