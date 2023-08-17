import React from 'react'

function Spaces() {
  return (
    <div className="flex flex-col   justify-center items-center text-white font-bold bg-[#282A35]">
    <div className="flex flex-col justify-center items-center gap-8 py-8  w-full">
      <h1 className="text-5xl text-center max-sm:text-3xl">w3school Spaces</h1>
      <p className="text-xl lg:w-[40em] text-center leading-relaxed max-sm:text-lg">
        If you want to create your own website,{" "}
        <span className="underline text-[#FFC0C7]">
          {" "}
          check out W3Schools Spaces.
        </span>
        It is free to use, and does not require any setup:
      </p>

      <img
        src="https://www.w3schools.com/spaces/dynamicspaces.gif"
        alt="spaces"
        className="px-4"
      />
      <button className="bg-[#04AA6D] py-3 nxs:px-6 rounded-full hover:bg-[#059862] text-white  nxs:w-[14em] w-full px-2">
        Sign Up for free
      </button>
      <button className="bg-[#FFC0C7] py-3 nxs:px-6 rounded-full hover:bg-[#059862] text-black nxs:w-[14em] w-full px-2 ">
        Read more
      </button>
   </div>
      <svg viewBox="0 0 5060 307" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M0 41.2209V406.665H5060V239.053C4497.78 269.624 3935.56 269.624 3373.33 216.213C3125.16 193.256 2876.98 159.209 2628.81 125.161C2314.76 82.0754 2000.71 38.9901 1686.67 18.3807C1124.44 -18.5152 562.222 9.59595 281.111 26.1112L0 41.2209Z" fill="#04AA6D"></path>
            </svg>
   
   </div>
  )
}

export default Spaces
