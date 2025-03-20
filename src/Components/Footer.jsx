import React from "react";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineRight } from "react-icons/ai";
import footerbg from "../assets/footer-bg.jpg";
const Footer = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid sm:grid-cols-5  bg-black text-white sm:py-12 px-4 sm:px-0 bg-cover bg-fixed"
        style={{ backgroundImage: `url(${footerbg})` }}
      >
        <div>
          <h1 className="flex justify-center font-bold text-1xl mb-8">
            HERE IT FIRST
          </h1>
          <input
            type="text"
            className="bg-white text-black border border-none px-8 py-1 mb-8"
            placeholder="Sign Up for Emails"
          />
          <button
            className="bg-black border py-4 px-2
"
          >
            <AiOutlineRight className=" shadow-lg" />
          </button>

          <p className="mb-4">
            GSTIN (Tamil Nadu):{" "}
            <span className="font-bold "> 33AAECB6490N1ZB</span>
          </p>
          <p className="mb-4">
            GSTIN (Delhi): <span className="font-bold ">07AAECB6490N1Z6</span>
          </p>
          <p className="mb-4">
            GSTIN (Karnataka):{" "}
            <span className="font-bold ">29AAECB6490N1Z0</span>{" "}
          </p>
          <p className="mb-4">
            GSTIN (Maharashtra):{" "}
            <span className="font-bold ">27AAECB6490N1Z4</span>
          </p>
        </div>
        <div>
          <h1 className=" pb-4 font-bold text-1xl">Help Center</h1>
          <p>Contact Us</p>
          <p>Product Help</p>
          <p>Warranty</p>
          <p>Order Status</p>
        </div>
        <div>
          <h1 className=" pb-4 font-bold text-1xl">Bulk Orders</h1>
          <p>Press Releases</p>
          <p>Blogs</p>
          <p>Contest</p>
        </div>
        <div>
          <h1 className=" pb-4 font-bold text-1xl">About</h1>
          <p>Born in Pc</p>
          <p>Careers</p>
        </div>
        <div>
          <h1 className="flex justify-center font-bold text-1xl mb-4">
            FOLLOW US
          </h1>
          <div className=" flex gap-10 text-2xl mb-4">
            <CiInstagram />
            <CiYoutube />
            <FaFacebookSquare />
            <CiTwitter />
          </div>
          <h1 className="flex justify-center font-bold text-1xl mb-4">
            CONTACT US
          </h1>
          <p className="mb-2">Email :- customercare@brandeyes.in</p>
          <p className="mb-2">Phone :- 011-42700400</p>
          <p className="mb-2">Mon-Fri, 10 AM – 4 PM</p>
          <h1 className=" font-bold text-1xl">Skullcandy Sole India Partner</h1>
          <p className="">
            BRAND EYES DISTRIBUTORS PVT.LTD.<br></br> 2nd Floor, 201, 67-68
            Chandra
            <br></br>Bhawan Nehru Place, New Delhi - 110019
          </p>
          <p>PAN: AAECB6490N</p>
        </div>
      </div>
      <div className="bg-black text-white sm:flex py-6 justify-center text-center text-[12px] font-medium">
        © 2025, Skullcandy <br />
        Privacy Policy Terms of Use
      </div>
    </>
  );
};

export default Footer;
