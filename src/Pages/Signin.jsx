import React from "react";
import logoskull from "../assets/logo.png";
import skullbg from "../assets/skullbg.png";
const Signin = () => {
  return (
    <div
      className="bg-cover bg-fixed bg-gradient-to-br from-[#7337FF] via-[#000000] to-[#0C7EA8]  h-screen flex justify-center items-center backdrop-brightness-50"
      style={{
        backgroundImage: `url(${skullbg})`,
      }}
    >
      <div className="flex flex-col items-center">
        <div>
          <img
            src={logoskull}
            alt="TyBot Logo"
            className="cursor-pointer w-64 sm:w-72"
          />
        </div>
        <div
          className="rounded-[20px] w-80 p-8 bg-black shadow-lg"
          style={{ boxShadow: "-6px 3px 20px 4px #0000007d" }}
        >
          <h1 className="text-white text-3xl font-bold mb-4">Login</h1>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Email address"
              className="bg-white w-full p-2.5 rounded-md placeholder:text-gray-400 shadow-md shadow-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-white w-full p-2.5 rounded-md placeholder:text-gray-400 shadow-md shadow-black"
            />
          </div>
          <div className="mb-4">
            <span className="text-gray-400  text-[10px] ml-2 cursor-pointer">
              Forget Password?
            </span>
          </div>
          <div className="flex justify-center mb-4">
            <button className="h-10 w-full cursor-pointer text-white rounded-md bg-gradient-to-br from-black to-white shadow-md shadow-white-950">
              Sign In
            </button>
          </div>
          <div className="text-gray-300 text-center">
            Don't have an account?
            <span className="text-white cursor-pointer"> Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
