import React, { useState } from "react";
import logo from "../w3-removebg-preview.png";

import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineGift } from "react-icons/ai";

import { Link } from "react-router-dom";

function Navbar({setShowNavLink,showNavLink}) {
  const home = ["Tutorials", "Exercises", "Get Certified", "Sevices"];
  // const Company=["Job Seeker","Login","Signup"];
  const handleNavLink= (id) => {

    setShowNavLink((prev)=>{
      if (prev===id){
        setShowNavLink("")
      }
      else{
        setShowNavLink(id)
      }
    })
  };
  // const location=useLocation();
  return (
    <div
      className={`fixed top-0 w-full h-[8vh] bg-white flex flex-row  items-center justify-between gap-10 px-6 max-sm:px-0 dark:bg-[#1d2a35] dark:text-white z-40 `}
    >
      <div className="flex flex-row text-3xl font-bold items-center gap-2">
        <div className="">
          <Link to="/"><img src={logo} width={"70"} onClick={()=>{window.scrollTo(0, 0);}}/></Link>
        </div>
        <div className="max-md:hidden flex flex-row  font-normal h-[8vh]">
          <div
           
            className={`${showNavLink==="tutorial" && "bg-[#282A35] text-white"} flex flex-row items-center text-sm hover:bg-[#04AA6D] hover:text-white h-full px-2 gap-1 cursor-pointer`}
            onClick={()=>handleNavLink("tutorial")}
          >
            <h1 className="text-base">Tutorials</h1>
            {showNavLink==="tutorial" ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </div>
          <div
            
            className={`${showNavLink==="exercise" && "bg-[#282A35] text-white"} flex flex-row items-center text-sm hover:bg-[#04AA6D] hover:text-white h-full px-2 gap-1 cursor-pointer`}
            onClick={()=>handleNavLink("exercise")}
          >
            <h1 className="text-base">Exercises</h1>
            {showNavLink==="exercise" ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </div>
          <div
           
            className={`${showNavLink==="certified" && "bg-[#282A35] text-white"} flex flex-row items-center text-sm hover:bg-[#04AA6D] hover:text-white h-full px-2 gap-1 max-lg:hidden cursor-pointer`}
            onClick={()=>handleNavLink("certified")}
          >
            <h1 className="text-base">Get Certified</h1>
            {showNavLink==="certified" ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </div>
          <div
            
            className={`${showNavLink==="services" && "bg-[#282A35] text-white"} flex flex-row items-center justify-center text-sm hover:bg-[#04AA6D] hover:text-white h-full px-2 gap-1 cursor-pointer`}
            onClick={()=>handleNavLink("services")}
          >
            <h1 className="text-base">Sevices</h1>
            {showNavLink==="services" ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </div>
        </div>
        <div className="md:hidden h-[8vh]">
        <div
            
            className={`flex flex-row items-center justify-center text-sm hover:bg-[#04AA6D] hover:text-white h-full px-1 gap-1 font-normal`}
            onClick={()=>handleNavLink("menu")}
          >
            <h1 className="text-base">Menu</h1>
            <AiFillCaretDown />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="max-lg:hidden text-2xl text-green-600 flex flex-row gap-1 px-2 hover:bg-gray-100 py-2 rounded-full items-center dark:hover:bg-[#38444d]">
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
            <path
              d="M6.65723 6.24707C6.76704 5.91764 7.233 5.91765 7.34281 6.24707L7.98828 8.1835C8.276 9.04666 8.95332 9.72399 9.81648 10.0117L11.7529 10.6572C12.0824 10.767 12.0824 11.233 11.7529 11.3428L9.81649 11.9883C8.95332 12.276 8.27599 12.9533 7.98828 13.8165L7.34281 15.7529C7.233 16.0823 6.76704 16.0823 6.65723 15.7529L6.01173 13.8165C5.72401 12.9533 5.04669 12.276 4.18353 11.9883L2.24707 11.3428C1.91764 11.233 1.91764 10.767 2.24707 10.6572L4.18353 10.0117C5.04669 9.72399 5.72401 9.04667 6.01173 8.18352L6.65723 6.24707Z"
              fill="#9763f6"
            ></path>
            <path
              d="M2.79434 1.14824C2.86023 0.950586 3.1398 0.950587 3.20569 1.14824L3.59297 2.3101C3.7656 2.828 4.172 3.2344 4.6899 3.40703L5.85177 3.79432C6.04942 3.86021 6.04942 4.13978 5.85177 4.20567L4.6899 4.59296C4.172 4.76559 3.7656 5.17199 3.59297 5.68989L3.20569 6.85176C3.13981 7.04941 2.86023 7.04942 2.79434 6.85176L2.40704 5.68988C2.23441 5.17198 1.82801 4.76559 1.31012 4.59296L0.148241 4.20567C-0.0494137 4.13978 -0.0494138 3.86021 0.148241 3.79432L1.31012 3.40703C1.82802 3.2344 2.23441 2.82801 2.40704 2.31011L2.79434 1.14824Z"
              fill="#9763f6"
            ></path>
            <path
              d="M9.8629 0.0988265C9.90682 -0.032943 10.0932 -0.0329419 10.1371 0.098828L10.3953 0.873401C10.5104 1.21867 10.7813 1.4896 11.1266 1.60469L11.9012 1.86288C12.0329 1.9068 12.0329 2.09319 11.9012 2.13711L11.1266 2.39531C10.7813 2.51039 10.5104 2.78133 10.3953 3.12659L10.1371 3.90117C10.0932 4.03294 9.90682 4.03294 9.8629 3.90117L9.6047 3.12659C9.48961 2.78132 9.21868 2.5104 8.87342 2.39531L8.09883 2.13711C7.96706 2.09319 7.96706 1.9068 8.09883 1.86288L8.87342 1.60469C9.21868 1.4896 9.48961 1.21867 9.6047 0.873408L9.8629 0.0988265Z"
              fill="#9763f6"
            ></path>
          </svg>
          <h1 className="text-base text-black dark:text-white">Bootcamps</h1>
        </div>
        <div className="max-lg:hidden text-2xl text-green-600 flex flex-row gap-1 px-2 hover:bg-gray-100 py-2 rounded-full dark:hover:bg-[#38444d]">
          <AiOutlineGift />
          <h1 className="text-base text-black dark:text-white ">Spaces</h1>
        </div>
        <div className="flex flex-row relative right-8">
           <Link to="/signup"><button className="relative left-8 bg-[#04AA6D] py-2 px-4 rounded-full hover:bg-green-700 text-white max-sm:text-sm max-nxs:hidden">Signup</button></Link> 
           <Link to="login"> <button className=" bg-[#D9EEE1] py-2 px-4 rounded-full w-[6em] text-end hover:bg-green-700 hover:text-white max-sm:text-sm max-nxs:text-center max-nxs:w-fit text-black">Login</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
