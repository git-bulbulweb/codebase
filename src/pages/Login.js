import React, { useState } from "react";

import logo from "../w3-removebg-preview.png";

import { ImCross } from "react-icons/im";
import { AiOutlineEye } from "react-icons/ai";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";


function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center gap-10 py-6 sm:px-10 max-sm:px-2 z-50 bg-white absolute w-full">
      <div className="flex flex-row items-center justify-between gap-2 w-full">
        <Link to="/"><img src={logo} alt="logo" className="w-[5em]" /></Link>
        <Link to={'/'} ><ImCross /></Link>
      </div>
      <div className="flex flex-col gap-4 items-start justify-center border-2 sm:w-[28em] py-2 px-6 rounded-md max-sm:w-full">
        <h1 className="text-2xl font-bold py-3">Log in</h1>
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="font-semibold">Email</h1>
            <p className="text-xs">
              Need an account?{" "}
              <span className="cursor-pointer text-[#04AA6D] font-medium">
                Sign up
              </span>
            </p>
          </div>
          <div className="w-full ">
            <input type="email" className="border-2 w-full p-2" />
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="font-semibold">password</h1>
            {!showPassword && (
              <div
                className="flex flex-row gap-2 justify-center items-center font-bold cursor-pointer"
                onClick={() => setShowPassword(true)}
              >
                <AiOutlineEye />
                <p>show</p>
              </div>
            )}
            {showPassword && (
              <div
                className="flex flex-row gap-2 justify-center items-center font-bold cursor-pointer"
                onClick={() => setShowPassword(false)}
              >
                <AiTwotoneEyeInvisible />
                <p>hide</p>
              </div>
            )}
          </div>
          <div className="w-full ">
            <input type="password" className="border-2 w-full p-2" />
          </div>
        </div>
        <button className="bg-[#04AA6D] py-3 px-2 rounded-full hover:bg-[#059862] text-white w-full">
          Log in
        </button>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-px my-8 bg-gray-200 border-2 " />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            or
          </span>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center w-full">
        <button className="bg-[#0d6efd] text-white border-2 py-3 px-2 rounded-full hover:bg-[#0d6ef0] w-full font-medium flex items-center justify-center gap-2">
         <BsFacebook /> Continue with Facebook
        </button>
        <button className="bg-white border-2 text-black py-3 px-2 rounded-full hover:bg-[#c2c8d0] w-full font-medium flex items-center justify-center gap-2">
        <FcGoogle /> Continue with Google
        </button>
        <button className="bg-white border-2 text-black py-3 px-2 rounded-full hover:bg-[#c2c8d0] w-full font-medium flex items-center justify-center gap-2">
         <BsGithub /> Continue with Github
        </button>
        <p className="text-sm font-medium cursor-pointer hover:text-green-400">Forget Password? </p>
        </div>
      </div>
        <p className="text-xs font-thin">All rights reserved - 2023</p>
        <button className="fixed right-0 bottom-[1em] bg-[#04AA6D] py-3 px-2 rounded-full hover:bg-[#059862] text-white flex items-center p-2 gap-2 justify-center font-bold min-w-[6em] max-nxs:hidden"><BsQuestionCircle />Help</button>
    </div>
  );
}

export default Login;
