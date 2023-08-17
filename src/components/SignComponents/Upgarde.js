import React from "react";

function Upgarde() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#04AA6D] text-white w-full">
      <div className="flex flex-col justify-center items-center gap-8 py-10  ">
        <h1 className="text-5xl text-center max-sm:text-3xl font-bold">
          Want to Upgrade?
        </h1>
        <p className="text-xl lg:w-[40em] text-center leading-relaxed max-sm:text-lg font-medium">
          You Can Also Upgrade Your Account
        </p>
        <p className="text-xl lg:w-[40em] text-center leading-relaxed max-sm:text-lg font-medium">
          To Unlock Powerful Features:
        </p>
        <div className="flex lg:flex-row flex-col justify-center items-center gap-12">
          <div className="flex flex-col gap-2 items-center justify-center font-bold">
            <div className="max-uxs:w-[10em] max-uxs:h-[10em] w-[15em] h-[15em] rounded-full flex  bg-[#d9eee150] justify-center items-center">
              <img
                src="https://www.w3schools.com/signup/adfree.png"
                alt=""
                className="w-[12em] max-uxs:w-[8em]"
              />
            </div>
            <h1 className="text-lg">Ad Free Learning</h1>
            <h1>No distractions</h1>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center font-bold">
            <div className="max-uxs:w-[10em] max-uxs:h-[10em] w-[15em] h-[15em] rounded-full flex  bg-[#d9eee150] justify-center items-center">
              <img
                src="https://www.w3schools.com/signup/video.png"
                alt=""
                className="w-[13em] max-uxs:w-[8em]"
              />
            </div>
            <h1 className="text-lg">HTML Video Tutorial</h1>
            <h1>Learn HTML by Video</h1>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center font-bold">
            <div className="max-uxs:w-[10em] max-uxs:h-[10em] w-[15em] h-[15em] rounded-full flex  bg-[#d9eee150] justify-center items-center">
              <img
                src="https://www.w3schools.com/signup/spacesupgrade.png"
                alt=""
                className="w-[13em] max-uxs:w-[8em] bg-center"
              />
            </div>
            <h1 className="text-lg">Ad Free Learning</h1>
            <h1>No distractions</h1>
          </div>
        </div>
        <button className="bg-white py-3 nxs:px-6 rounded-full hover:bg-[#f1f1f1] text-black nxs:w-[14em] px-2 w-full">
          Read More
        </button>
      </div>
      <svg viewBox="0 0 5060 308" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="wavepath4"  d="M5060 41.9665V407.664L0 407.664V239.936C562.222 270.528 1124.44 270.528 1686.67 217.08C1934.84 194.108 2183.02 160.036 2431.19 125.965C2745.24 82.8493 3059.29 39.734 3373.33 19.1103C3935.56 -17.8111 4497.78 10.3195 4778.89 26.8463L5060 41.9665Z" fill="white" className="fill-white dark:fill-[#1d2a35] "></path>
            </svg>
    </div>
  );
}

export default Upgarde;
