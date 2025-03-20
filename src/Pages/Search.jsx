import React, { useState } from "react";
import { trendProductdetails } from "../Data/Product";
import { Earbudsdetails } from "../Data/EarBuds";
import { FestivalDetails } from "../Data/Festival";
import { headphoneDeatils } from "../Data/HeadPhone";
import { addToCart } from "../Store/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Search = () => {
  const allProducts = [
    ...trendProductdetails,
    ...Earbudsdetails,
    ...FestivalDetails,
    ...headphoneDeatils,
  ];

  //   filter all products data
  const [quary, setQuary] = useState("");
  const [filteredData, setFilteredData] = useState(allProducts);

  const handleInputChnage = (event) => {
    const value = event.target.value;
    setQuary(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setFilteredData(allProducts);
      return;
    }

    const filterd = allProducts.filter((items) => {
      return items.text.toLowerCase().includes(lowerCaseValue);
    });
    setFilteredData(filterd);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCardclick = (id) => {
    navigate(`/card/${id}`);
  };
  return (
    <div>
      <div className="flex justify-center mt-16">
        <h1 className="font-bold text-5xl sm:text-6xl">Search</h1>
      </div>

      {/* search inputs */}
      <div className="flex items-center  justify-center mt-12 border w-fit ml-12 sm:ml-130">
        <input
          className="sm:pr-48 pl-2 py-2 border-none outline-none"
          type="text"
          value={quary}
          placeholder="Search....."
          onChange={handleInputChnage}
        ></input>
        <BsSearch className=" py-2  text-4xl font-bold cursor-pointer" />
      </div>

      {/* product List */}
      <div className="grid grid-cols-2 sm:grid-cols-4 mt-24 ">
        {filteredData.map((items) => (
          <div className=" flex flex-col items-center" key={items.id}>
            <img
              className="w-72"
              src={items.image}
              alt=""
              onClick={() => handleCardclick(items.id)}
            />
            <h2 className="font-bold text-1xl mt-1">{items.text}</h2>
            <p>{items.price}</p>
            <button
              className=" bg-gray-800 text-white px-5 py-3 font-medium text-[12px] mt-3 mb-10 m-auto cursor-pointer"
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

export default Search;
