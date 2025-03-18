import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { FaRegUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import indianflag from "../assets/indianflag.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

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
      <div className="flex justify-evenly items-center text-white sm:h-12 px-4 sm:px-24">
        <Link to="/">
          <img className="w-48" src={Logo} alt="Skull logo" />
        </Link>

        {/* Mobile Menu Button */}
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
          <p>Support</p>
          <img
            src={indianflag}
            alt="Indian Flag"
            className="w-7 rounded-full"
          />
          <FaRegUser className="text-2xl cursor-pointer" />
          <IoIosSearch className="text-2xl cursor-pointer" />
          <BiShoppingBag className="text-2xl cursor-pointer" />
        </div>
      </div>

      {/* Offer Banner */}
      <h1 className="bg-black text-yellow-300 flex justify-center font-bold sm:text-[20px] pb-3 text-[10px]">
        GET FLAT RS 500 VOUCHER ON YOUR NEXT PURCHASE MINIMUM ORDER VALUE RS
        1898. <span className="text-blue-700">*T&C APPLY</span>
      </h1>
    </header>
  );
};

export default Header;
