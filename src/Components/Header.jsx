import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { FaRegUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import indianflag from "../assets/indianflag.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ChatLogo from "../assets/chatbotimg.png";
import ChatBot from "./Chatbot";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModel, setshowModel] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  // Disable scrolling when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showMenu]);

  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="flex  justify-between items-center text-white sm:h-12 px-4 sm:px-24">
        <Link to="/">
          <img className="w-48" src={Logo} alt="Skull logo" />
        </Link>
        {/* Mobile Menu Button */}
        <Link to="/shopingcart" className="">
          <BiShoppingBag className="text-2xl cursor-pointer absolute sm:hidden" />
          {cartItems.length > 0 && (
            <span className="relative -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1 py-0.3 rounded-full sm:hidden">
              {cartItems.length}
            </span>
          )}
        </Link>
        <button
          className="md:hidden text-2xl"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle menu"
        >
          <IoMenu />
        </button>

        {/* Mobile Full-Screen Menu */}
        {showMenu && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white z-50"
            onClick={() => setShowMenu(false)} // Close when clicking outside
          >
            <ul className="text-center space-y-6 text-lg">
              <li>
                <Link to="/products" onClick={() => setShowMenu(false)}>
                  Trending Products
                </Link>
              </li>
              <li>
                <Link to="/festival" onClick={() => setShowMenu(false)}>
                  Festive Collection
                </Link>
              </li>
              <li>
                <Link to="/headphone" onClick={() => setShowMenu(false)}>
                  Headphones
                </Link>
              </li>
              <li>
                <Link to="/earbuds" onClick={() => setShowMenu(false)}>
                  Earbuds
                </Link>
              </li>
              <li>
                <Link to="/shop" onClick={() => setShowMenu(false)}>
                  Shop
                </Link>
              </li>
            </ul>
            <button
              className="mt-6 text-red-500 text-lg"
              onClick={() => setShowMenu(false)}
            >
              Close Menu
            </button>
          </div>
        )}

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5">
          <Link to="/products">
            <li className="hover:text-gray-400">Trending Products</li>
          </Link>
          <Link to="/festival">
            <li className="hover:text-gray-400">Festive Collection</li>
          </Link>
          <Link to="/headphone">
            <li className="hover:text-gray-400">Headphones</li>
          </Link>
          <Link to="/earbuds">
            <li className="hover:text-gray-400">Earbuds</li>
          </Link>
          <Link to="/shop">
            <li className="hover:text-gray-400">Shop</li>
          </Link>
        </ul>

        {/* Right Side Icons */}
        <div className="hidden sm:flex gap-8 items-center">
          <img
            src={indianflag}
            alt="Indian Flag"
            className="w-7 rounded-full"
          />
          <Link to="/signin">
            <FaRegUser className="text-2xl cursor-pointer" />
          </Link>
          <Link to="./search">
            <IoIosSearch className="text-2xl cursor-pointer" />
          </Link>
          <Link to="/shopingcart">
            <BiShoppingBag className="text-2xl cursor-pointer absolute top-3 " />
            {cartItems.length > 0 && (
              <span className="relative -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1 py-0.3 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Offer Banner */}
      <h1 className="bg-black text-yellow-300 flex justify-center font-bold sm:text-[20px] pb-3 text-[10px]">
        GET FLAT RS 500 VOUCHER ON YOUR NEXT PURCHASE MINIMUM ORDER VALUE RS
        1898. <span className="text-blue-700">*T&C APPLY</span>
      </h1>

      {/* chatbot  */}
      <div className="fixed bottom-25 left-5">
        
        <img
          src={ChatLogo}
          alt=""
          className=" cursor-pointer"
          onClick={() => setshowModel(true)}
        />

        {/* Modal */}
        {showModel && (
          <div className="fixed inset-0 z-50 flex items-center justify-cente bg-opacity-50 sm:ml-5">
            <div className="bg-white w-full max-w-md p-4 rounded shadow-lg relative">
              <button
                onClick={() => setshowModel(false)}
                className="absolute top-0 right-2 text-gray-600 hover:text-black"
              >
                ✕
              </button>
              <h2 className="text-lg font-bold mb-2 bg-black text-white flex  justify-center py-5">
                Chat with us
              </h2>
              <div className="h-96">
                <ChatBot />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default React.memo(Header);
