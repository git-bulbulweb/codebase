import React, { useState } from "react";
import { ImCross } from 'react-icons/im';

import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineGift } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

import Tutorials from "../pages/Tutorials";
import Exercise from "../pages/Exercise";
import Certified from "../pages/Certified";
import Services from "../pages/Services";

const options =["BootCamps","Videos","Shop"];

function Menu({setShowNavLink}) {
  const [menuLink, setMenuLink] = useState([]);
  const handleMenuLink = (id) => {
    
      if (menuLink.includes(id)) {
        let filters = menuLink.filter((el) => el !== id);
        setMenuLink(filters);
      } else {
        setMenuLink([...menuLink,id]);
      }
  };
  
  return (
    <div className="fixed top-[8vh] z-40 w-full overflow-y-auto h-full">
      <div className="flex flex-col gap-8 items-start justify-center px-6 bg-white py-20 font-medium">
        <div className="flex flex-row gap-2 justify-end items-center w-full">
        <div className="border-2 w-fit top-[5em] right-[2em] flex flex-row items-center gap-2 justify-center " onClick={()=>setShowNavLink('')}>
          <h1 className="text-xl">close</h1>
          <ImCross />
        </div>
        </div>
      <div className="flex flex-col gap-3 items-start justify-start bg-white w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <div
            className={`${
              menuLink.includes("tutorial") && "bg-[#282A35] text-white"
            } flex flex-row items-center justify-between text-sm hover:bg-[#04AA6D] hover:text-white h-full  gap-1 cursor-pointer w-full p-2`}
            onClick={() => handleMenuLink("tutorial")}
          >
            <h1 className="text-xl ">Tutorials</h1>
            <AiFillCaretDown />
          </div>
          {menuLink.includes("tutorial") && <Tutorials />}
        </div>


        <div className="flex flex-col items-center justify-center w-full">
          <div
            className={`${
              menuLink.includes("exercise") && "bg-[#282A35] text-white"
            } flex flex-row items-center justify-between text-sm hover:bg-[#04AA6D] hover:text-white h-full  gap-1 cursor-pointer w-full p-2`}
            onClick={() => handleMenuLink("exercise")}
          >
            <h1 className="text-xl ">Exercise</h1>
            <AiFillCaretDown />
          </div>
          {menuLink.includes("exercise") && <Exercise />}
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <div
            className={`${
              menuLink.includes("certified") && "bg-[#282A35] text-white"
            } flex flex-row items-center justify-between text-sm hover:bg-[#04AA6D] hover:text-white h-full  gap-1 cursor-pointer w-full p-2`}
            onClick={() => handleMenuLink("certified")}
          >
            <h1 className="text-xl ">Get Certified</h1>
            <AiFillCaretDown />
          </div>
          {menuLink.includes("certified") && <Certified />}
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <div
            className={`${
              menuLink.includes("services") && "bg-[#282A35] text-white"
            } flex flex-row items-center justify-between text-sm hover:bg-[#04AA6D] hover:text-white h-full  gap-1 cursor-pointer w-full p-2`}
            onClick={() => handleMenuLink("services")}
          >
            <h1 className="text-xl ">Services</h1>
            <AiFillCaretDown />
          </div>
          {menuLink.includes("services") && <Services />}
        </div>
        
      </div>
      <div className="flex flex-col gap-4 items-start justify-start p-2">
            <h1 className="text-xl">Spaces</h1>
            <h1 className="text-xl">Sign up</h1>
      </div>
      <div className="flex flex-col gap-4 items-start justify-start p-2 w-full">
            {options.map((opt)=>(
              <div
              className={`
                flex flex-row items-center justify-between text-sm hover:bg-[#04AA6D] hover:text-white h-full  gap-1 cursor-pointer w-full  text-xl w-full`}
              onClick={() => handleMenuLink("tutorial")}
            >
              <h1 className="">{opt}</h1>
              <AiOutlineGift />
            </div>
            ))}
      </div>
      <div className="text-2xl text-[#282A35] font-bold flex flex-row gap-8 max-sm:gap-1 dark:text-white">
          <div className="p-2 hover:bg-black hover:text-white">
            <FaFacebookSquare />
          </div>
          <div className="p-2 hover:bg-black hover:text-white">
            <AiOutlineInstagram />
          </div>
          <div className="p-2 hover:bg-black hover:text-white">
            <AiFillLinkedin />
          </div>
          <div className="p-2 hover:bg-black hover:text-white">
            <BsDiscord />
          </div>
        </div>
      
      </div>

    </div>
  );
}

export default Menu;
