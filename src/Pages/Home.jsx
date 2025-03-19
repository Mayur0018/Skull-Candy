import React from "react";
import Home1 from "../assets/home1.jpg";
import Home2 from "../assets/home2.jpg";
import Home3 from "../assets/home3.jpg";
import Home4 from "../assets/home4.jpg";
import Home5 from "../assets/home5.jpg";
import Home6 from "../assets/home6.jpg";
import Banner from "../assets/banner.jpg";
export default function Home() {
  return (
    <div>
      <div className="flex gap-1">
        <div className="">
          <img className="" src={Home1} alt="newarival" />
        </div>
        <div className="flex gap-3 flex-col">
          <div className="">
            <img className="w-[44rem]" src={Home2} alt="mini and mightier" />
          </div>
          <div>
            <img className="w-[44rem]" src={Home3} alt="shop cursor" />
          </div>
        </div>
      </div>

      <div className="grid  grid-cols-3">
        <h1 className="absolute sm:left-165  flex jusleft-38 text-[10px] text-center sm:text-3xl font-bold text-gray-900 mt-1 sm:mt-2 sm:ml-10">
          WHAT'S HOT
        </h1>
        <div>
          <img src={Home4} alt="" />
          <button className=" absolute px-1 py-1 w-auto  mt-[-25px]  ml-8  top-auto  sm:ml-0 text-[10px] sm:left-45  sm:top-320 sm:px-5 sm:text-[12px] sm:py-2 bg-white ">
            SHOP NOW
          </button>
        </div>
        <div>
          <img src={Home5} alt="" />
          <button className=" absolute px-1 py-1 mt-[-25px]  ml-8 text-[10px]  top-auto sm:left-175 sm:top-320 sm:px-5  sm:text-[12px] sm:py-2 bg-white">
            SHOP NOW
          </button>
        </div>
        <div>
          <img src={Home6} alt="" />
          <button className=" absolute px-1 py-1 mt-[-25px]  ml-8  top-auto  text-[10px] sm:left-290 sm:top-320 sm:px-5 sm:text-[12px] sm:py-2 bg-white">
            SHOP NOW
          </button>
        </div>
      </div>

      <div>
        <img src={Banner} alt="" />
      </div>
    </div>
  );
}
