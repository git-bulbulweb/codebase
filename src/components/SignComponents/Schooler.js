import React from 'react'

function Schooler() {
  return (
    <div className='flex flex-col items-center justify-center gap-10 w-full text-black dark:bg-[#1d2a35] dark:text-white   pt-28'>
        <img src="https://www.w3schools.com/signup/lynxlogo.svg" alt="" className='w-[10em]'/>
        <div className='flex flex-col gap-4 items-center justify-center text-center'>
            <h1 className='text-4xl font-bold'>Become a W3Schooler</h1>
            <p className=' font-medium'>Learn with proven training materials used by millions</p>
        </div>
        <p className='text-lg font-semibold w-[70%] text-center'>We have been helping people learn to code for over 23 years. Start learning with our constantly updated and improved learning material. Join our online community and get started today!</p>
        <div className='grid sm:grid-cols-3 justify-center items-center gap-10 w-full lg:px-64 px-7 '>
            <div className='text-white font-white flex flex-col justify-start items-start bg-[#282A35] dark:bg-black p-4 rounded-md gap-2'>
                <h1 className='text-xl'>70 <span className='text-base'>Million +</span></h1>
                <h1 className='text-xs'>Monthly Visits</h1>
            </div>
            <div className='text-white font-white flex flex-col justify-start items-start bg-[#282A35] dark:bg-black p-4 rounded-md gap-2'>
                <h1 className='text-xl'>3 <span className='text-base'>Billion +</span></h1>
                <h1 className='text-xs'>yearly Page Visits</h1>
            </div>
            <div className='text-white font-white flex flex-col justify-start items-start bg-[#282A35] dark:bg-black p-4 rounded-md gap-2'>
                <h1 className='text-xl'>5 <span className='text-base'>Million +</span></h1>
                <h1 className='text-xs'>Spaces Created</h1>
            </div>
        </div>

        <button className="bg-[#04AA6D] py-3 nxs:px-6 rounded-full hover:bg-[#059862] text-white  nxs:w-[14em] w-full px-2">
        Sign Up for free
      </button>
      <svg className='w-full' viewBox="0 0 5060 374" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M140.556 238.55L0 245.763V373.051H140.556H843.333H1686.67H2530H3373.33H4216.67H5060V40.8298C4778.89 -8.81241 4497.78 -8.81241 4216.67 19.6152C3967.87 43.2731 3719.07 92.5228 3470.27 141.772C3437.96 148.169 3405.64 154.565 3373.33 160.905C3352.81 164.931 3332.3 168.979 3311.78 173.028C3051.18 224.447 2790.59 275.866 2530 280.979C2333.05 286.033 2136.11 266.72 1939.16 247.407C1855 239.154 1770.83 230.9 1686.67 224.548C1405.56 203.334 1124.44 203.334 843.333 210.547C642.946 214.479 442.559 224.232 293.084 231.507C232.87 234.438 180.917 236.966 140.556 238.55Z" fill="#D9EEE1"></path>
            </svg>
    </div>
  )
}

export default Schooler
