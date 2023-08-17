import React from "react";
import CarouselCustomArrows from "./Slideshow";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

function Section() {
  return (
    <div className="flex flex-col justify-center py-10 items-center gap-8 w-full px-4 text-center dark:bg-[#1d2a35] dark:text-white">
      <div className="flex flex-col justify-center  items-center  gap-6">
        <h1 className="text-5xl font-bold">How To Section</h1>
        <p className=" font-semibold">
          Code snippets for HTML, CSS and JavaScript
        </p>
        <p className="font-semibold">For example, how to create a slideshow:</p>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-6 sm:px-8 px-2 justify-center items-center max-lg:w-screen">
          <div className="lg:h-[25em] xl:w-[70em] bg-[#F1F1F1] flex flex-col rounded-xl w-full h-full max-xl:w-[90%]">
            <div className="flex flex-row justify-between sm:px-6 py-4 gap-8 w-full px-1">
              <div className="flex gap-1 overflow-hidden">
                <div className="h-4 w-4 bg-red-700 rounded-full"></div>
                <div className="h-4 w-4 bg-yellow-300 rounded-full"></div>
                <div className="h-4 w-4 bg-green-600 rounded-full"></div>
              </div>
              <div className="lg:w-[80%] w-full max-md:text-xs overflow-hidden  bg-white lg:mr-24 text-left text-sm md:px-4">
                <p className="overflow-x-hidden">www.w3schools.com/howto/</p>
              </div>
            </div>
            <div className="h-[80%]  px-2 flex items-center justify-center">
              <CarouselCustomArrows />
            </div>
          </div>
        </div>

        <div className="w-[3em] bg-[#282A35] h-[4em]"></div>

        <button className="text-white font-bold text-sm md:w-[40%] w-[90%] px-3 py-4 rounded-full bg-[#282A35] dark:bg-[rgb(13,23,33)] hover:bg-[#04AA6D] ">
          Learn How To
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 font-bold pt-10">
        <h1 className="">Follow us: </h1>
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

export default Section;
