import React from "react";
import { useState } from "react";
import Headphone1 from "../assets/headphone1.jpg";
import Headphone2 from "../assets/headphone2.jpg";
import Headphone3 from "../assets/headphone3.jpg";
import Headphone4 from "../assets/headphone4.jpg";
import Headphone5 from "../assets/headphone5.jpg";
import Headphone6 from "../assets/headphone6.jpg";
import Headphone7 from "../assets/headphone7.jpg";
import Headphone8 from "../assets/headphone8.jpg";
import Headphone9 from "../assets/headphone9.jpg";
import Headphone10 from "../assets/headphone10.jpg";
import Headphone11 from "../assets/headphone11.jpg";
import Headphone12 from "../assets/headphone12.jpg";
const headphoneDeatils = [
  {
    id: "1",
    image: Headphone1,
    text: "Crusher® ANC 2 Sensory Bass Headphones",
    price: "₹64,999.00",
  },
  {
    id: "2",
    image: Headphone2,
    text: "Crusher® Evo Sensory Bass Headphones ",
    price: "₹37,999.00",
  },
  {
    id: "3",
    image: Headphone3,
    text: "Hesh® ANC Noise Canceling Wireless Headphones",
    price: "₹29,999.00",
  },
  {
    id: "4",
    image: Headphone4,
    text: "Cassette™ Wireless On-Ear Headphones",
    price: "₹7,999.00",
  },
  {
    id: "5",
    image: Headphone5,
    text: "Hesh® Evo Wireless Headphones Heavy Audio Bass",
    price: "₹22,999.00",
  },
  {
    id: "6",
    image: Headphone6,
    text: "Riff® Wireless 2 On-Ear Headphones",
    price: "₹16,999.00",
  },
  {
    id: "7",
    image: Headphone7,
    text: "RaRiff On-Ear Headphone",
    price: "₹7,299.00 ₹2,199.00",
  },
  {
    id: "8",
    image: Headphone8,
    text: "Grom® Wired",
    price: "₹7,999.00",
  },
  {
    id: "9",
    image: Headphone9,
    text: "Grom® Wireless Headphones for Kids",
    price: "₹15,999.00",
  },
  {
    id: "10",
    image: Headphone10,
    text: "SLYR™ Pro Wireless HeadsetMultiplatform",
    price: "₹28,999.00",
  },
  {
    id: "11",
    image: Headphone11,
    text: "PLYR® Multi-Platform Gaming HeadsetMultiplatform  ",
    price: "₹14,999.00",
  },
  {
    id: "12",
    image: Headphone12,
    text: "SLYR® Wired Black Gaming Headset",
    price: "₹27,999.00",
  },
];
const Headphone = () => {
  const [headphone, setHeadphone] = useState(headphoneDeatils);
  console.log(headphone);
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="sm:text-5xl mt-8 font-bold">TREDNDING PRODUCTS</h1>
      </div>
      {/* select iteams */}
      <div className=" flex sm:justify-end sm:mr-36 mt-10   ">
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
        {headphone.map((items) => (
          <div className=" flex flex-col items-center" key={items.id}>
            <img className="w-72" src={items.image} alt="" />
            <h2 className="font-bold text-1xl mt-1">{items.text}</h2>
            <p>{items.price}</p>
            <button className=" bg-gray-800 text-white px-5 py-3 font-medium text-[12px] mt-3 mb-10 m-auto">
              VIEW OPTIONS
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headphone;
