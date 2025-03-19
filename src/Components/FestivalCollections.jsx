import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";
import product9 from "../assets/product9.jpg";
import product10 from "../assets/product10.jpg";
import product11 from "../assets/product11.jpg";
import product12 from "../assets/product12.jpg";
import product13 from "../assets/product13.jpg";
import product14 from "../assets/product14.jpg";
import product15 from "../assets/product15.jpg";
import product16 from "../assets/product16.jpg";

const FestivalDetails = [
  {
    id: "1",
    image: product1,
    text: "Jib™ True 2 Wireless Earbuds",
    price: "₹9,999.00",
  },
  {
    id: "2",
    image: product2,
    text: "Smokin’ Buds® True Wireless Earbuds",
    price: "₹7,999.00 – ₹8,999.00",
  },
  {
    id: "3",
    image: product3,
    text: "Dime® 3 True Wireless Earbuds",
    price: "₹9,999.00",
  },
  {
    id: "4",
    image: product4,
    text: "Riff® Wireless 2 On-Ear Headphones",
    price: "₹16,999.00",
  },
  {
    id: "5",
    image: product5,
    text: "Dime® 3 True Wireless Earbuds",
    price: "₹16,999.00",
  },
  {
    id: "6",
    image: product6,
    text: "Hesh® ANC Noise Canceling Wireless Headphones",
    price: "₹29,999.00",
  },
  {
    id: "7",
    image: product7,
    text: "Rail® True Wireless Earbuds",
    price: "₹21,999.00",
  },
  {
    id: "8",
    image: product8,
    text: "Crusher® ANC 2 Sensory Bass Headphones with Active Noise Canceling",
    price: "₹64,999.00",
  },
  {
    id: "9",
    image: product9,
    text: "Push® Play Active",
    price: "₹19,999.00",
  },
  {
    id: "10",
    image: product10,
    text: "Sesh® ANC True Wireless Earbuds",
    price: "₹21,999.00",
  },
  {
    id: "11",
    image: product11,
    text: "Rail® ANC True Wireless Earbuds",
    price: "₹29,999.00",
  },
  {
    id: "12",
    image: product12,
    text: "Push™ Active True Wireless Earbuds",
    price: "₹20,999.00",
  },
  {
    id: "13",
    image: product13,
    text: "Set® In-Ear Sport Earbuds",
    price: "₹7,999.00",
  },
  {
    id: "14",
    image: product14,
    text: "Hesh® Evo Wireless Headphones Heavy Audio Bass",
    price: "₹22,999.00",
  },
  {
    id: "15",
    image: product15,
    text: "Grom® Wireless Headphones for Kids",
    price: "₹15,999.00",
  },
  {
    id: "16",
    image: product16,
    text: "Grind® True Wireless Earbuds",
    price: "₹25,999.00",
  },
];
const FestivalCollections = () => {
  const [festivalproducts] = useState(FestivalDetails);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="sm:text-5xl mt-8 font-bold">FESTIVE COLLECTION</h1>
      </div>
      {/* select iteams */}
      <div className=" flex sm:justify-end sm:mr-36 mt-10  ">
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
        {festivalproducts.map((items) => (
          <div className=" flex flex-col items-center" key={items.id}>
            <img className="w-72" src={items.image} alt="" />
            <h2 className="font-bold text-1xl mt-1">{items.text}</h2>
            <p>{items.price}</p>
            <button
              className=" bg-gray-800 text-white px-5 py-3 font-medium text-[12px] mt-3 mb-10 m-auto  cursor-pointer"
              onClick={() => dispatch(addToCart(items))}
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FestivalCollections;
