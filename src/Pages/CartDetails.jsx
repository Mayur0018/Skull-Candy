import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { trendProductdetails} from "../Data/Product";
import { FestivalDetails } from "../Data/Festival";
import { Earbudsdetails } from "../Data/EarBuds";
import { headphoneDeatils } from "../Data/HeadPhone";
const CartDetails = () => {
  const { id } = useParams();
  const allProductsDeatils = [...trendProductdetails,...FestivalDetails,...Earbudsdetails,...headphoneDeatils];
  const products = allProductsDeatils.find((item) => item.id === id);
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto p-8 flex flex-col md:flex-row items-center gap-8">
      {/* Product Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={products.image} alt="" className="w-96 h-auto" />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold"></h1>
        <p className="text-lg text-black font-bold mt-2">{products.text}</p>
        <div className="flex items-center mt-2">
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiOutlineStar className="text-yellow-500" />
          <span className="ml-2 text-gray-600">4.0 (320 reviews)</span>
        </div>
        <p className="text-2xl font-semibold mt-4"></p>
        <p className="text-green-600 font-semibold mt-2">In Stock</p>

        {/* Features */}
        <ul className="mt-4 text-gray-600 text-sm">
          <li>✔ Free Shipping</li>
          <li>✔ EMI Options Available</li>
          <p className="text-lg text-black font-bold mt-2">{products.price}</p>
        </ul>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md font-medium cursor-pointer"
            onClick={() => dispatch(addToCart(products))}
          >
            <BsCartPlus /> View in Cart
          </button>
          <button className="flex items-center gap-2 border border-gray-800 px-6 py-3 rounded-md font-medium">
            <FaHeart className="text-red-500" /> Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
