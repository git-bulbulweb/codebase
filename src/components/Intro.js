import React from 'react';
import { BsSearch } from "react-icons/bs";

function Intro() {
  return (
    <div className='flex flex-col justify-center text-white font-bold'>
        <div  className='flex flex-col gap-8  bg-[#282A35]  h-[65vh] justify-center items-center dark:bg-[rgb(13,23,33)]'>
            <h1 className='text-6xl max-sm:text-5xl text-center'>Learn to Code</h1>
            <h1 className='text-2xl text-[#FFC0C7] text-center'>With the world's largest web developer site</h1>
            <div className='flex flex-row justify-center items-center'>
                <input type='search' placeholder='Search our tutorials, e.g.HTML' className='w-[25em] max-sm:w-[70vw] text-center text-black h-10 rounded-l-full'/>
                <button className='bg-[#04AA6D] h-10 w-[5em] rounded-r-full pl-11 max-sm:w-[20vw] max-[300px]:pl-2'><BsSearch /></button>
            </div>
            <h1 className='text-2xl underline text-center hover:text-green-400'>Not sure Where To Begin?</h1>
        </div>
        <svg  style={{"backgroundColor":"#D9EEE1"}} width="100%" height="70" viewBox="0 0 100 100" preserveAspectRatio="none">
  <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z"  className='fill-[#282A35] dark:fill-[rgb(13,23,33)]'></path>
</svg>
    </div>
  )
}

export default Intro
