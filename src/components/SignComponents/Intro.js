import React from "react";

function Intro() {
  return (
    <div className="flex flex-col dark:bg-[#1d2a35]">
    <div className=" bg-hero-pattern w-full flex flex-col py-[8em] h-full items-center justify-center gap-[2em] text-white font-bold px-2">
      <h1 className="text-5xl text-center">Sign Up For Free</h1>
      <p className="text-lg text-center">
        Create a Free W3Schools Account to Improve Your Learning Experience
      </p>
      <button className="bg-[#04AA6D] py-3 nxs:px-6 rounded-full hover:bg-[#059862] text-white  nxs:w-[14em] w-full px-2">
        Sign Up for free
      </button>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2  justify-center items-center lg:gap-4 gap-10 w-full pt-10 px-10">
        
        <div className="flex flex-row gap-3 items-start justify-center">
          <img
            src="https://www.w3schools.com/signup/star.svg"
            alt="star"
            className="w-[3em]"
          />
          <div>
            <h1 className=" text-lg text-[#D9EEE1]">Track</h1>
            <h1 className="text-sm">your lerning</h1>
          </div>
        </div>
        <div className="flex flex-row gap-3   items-start justify-center">
          <img
            src="https://www.w3schools.com/signup/upload.svg"
            alt="upload"
            className="w-[3em]"
          />
          <div>
            <h1 className=" text-lg text-[#D9EEE1]">Share</h1>
            <h1 className="text-sm">your skills</h1>
          </div>
        </div>
        <div className="flex flex-row gap-3  items-start justify-center">
          <img
            src="https://www.w3schools.com/signup/chat.svg"
            alt="chat"
            className="w-[3em]"
          />
          <div>
            <h1 className=" text-lg text-[#D9EEE1]">connect</h1>
            <h1 className="text-sm">with society</h1>
          </div>
        </div>
        <div className="flex flex-row gap-3  items-start justify-center">
          <img
            src="https://www.w3schools.com/signup/window.svg"
            alt="window"
            className="w-[3em]"
          />
          <div>
            <h1 className=" text-lg text-[#D9EEE1]">Code</h1>
            <h1 className="text-sm">In browser</h1>
          </div>
          
        </div>
      </div>

    </div>
    <svg  className="w-[100%] mt-[-1.4em] dark:fill-[#1d2a35]" viewBox="0 0 5001 216" fill="none">
                    <path id="wavepath1" d="M5001 152.929L4723.16 137.162C4445.33 121.395 3889.69 89.8608 3334.01 58.3264C2778.34 26.7919 2222.68 -4.74254 1667 0.594104C1111.33 4.96047 0 68.7574 0 68.7574L1.25366e-05 215.999C362.922 215.995 -359.449 216.003 283.045 215.999C838.715 215.999 1111.33 215.998 1667 215.998C2222.68 215.998 2778.34 215.998 3334.01 215.998C3889.69 215.998 4445.33 215.998 4723.16 215.998H5001V152.929Z" className="fill-white dark:fill-[#1d2a35]">
                </path></svg>
    
    </div>
  );
}

export default Intro;
