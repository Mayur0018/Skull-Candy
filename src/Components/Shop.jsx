import React from "react";
import skullbg from "../assets/skullbg.png";
import skullbg2 from "../assets/skullbg2.png";
import skullbg3 from "../assets/skullbg3.png";
import skullbg5 from "../assets/skullbg5.png";
import skullbg6 from "../assets/skullbg6.png";
const Shop = () => {
  return (
    <div>
      <div className="">
        <img className="" src={skullbg} alt="" />
        <h1 className="absolute sm:top-80 text-white top-50 left-10  font-bold sm:left-15 sm:text-6xl ">
          Working at 6,434 <br></br> feet.
        </h1>
      </div>

      {/* our culture */}

      <div className="sm:flex flex justify-center bg-black">
        <h1 className="text-white text-4xl sm:text-7xl font-bold py-12">
          OUR CULTURE
        </h1>
      </div>

      {/* skull image-2 */}
      <div>
        <img src={skullbg2} alt="" />
      </div>

      {/* skull image-3 */}
      <div className="bg-black sm:flex sm:items-center">
        <img className="w-200" src={skullbg3} alt="" />
        <p className="text-white px-15 py-15 sm:px-20 font-medium">
          Our office in Park City, Utah, proudly sits in the heart of the
          Wasatch Mountains at exactly 6,434 feet. Since we're the kind of
          people who tend to be inspired by skyscrapers of the natural variety,
          we can think of no better place to work.
        </p>
      </div>

      {/* skull image-3 */}
      
     
        <div className="bg-black sm:flex sm:items-center sm:flex-row-reverse">
        <img className="w-200" src={skullbg5} alt="" />
        <p className="text-white px-15 py-15 sm:px-20 font-medium">
          Our office in Park City, Utah, proudly sits in the heart of the
          Wasatch Mountains at exactly 6,434 feet. Since we're the kind of
          people who tend to be inspired by skyscrapers of the natural variety,
          we can think of no better place to work.
        </p>
      </div>

      {/* skull image-3 */}
      <div className="bg-black sm:flex sm:items-center pb-10">
        <img src={skullbg6} alt="" />
      </div>
      <div className="flex justify-center sm:pb-20 pb-10 bg-black">
        <button className="absolute text-black sm:font-bold font-medium py-2 px-2 rounded-md bg-white sm:px-15 sm:py-4 cursor-pointer">
          BROWSE CAREERS
        </button>
      </div>
    </div>
  );
};

export default Shop;
