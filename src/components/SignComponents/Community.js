import React from 'react'

function Community() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center w-full dark:bg-[#1d2a35] dark:text-white'>
        <div className=' bg-community-pattern w-full text-white flex flex-col items-center justify-center py-10 h-[70vh] gap-4'>
        <h1 className='text-5xl text-center max-sm:text-3xl font-bold'>W3Schools Community</h1>
      <p className='text-xl lg:w-[40em] text-center leading-relaxed max-sm:text-lg font-medium'>Join the community and connect with other W3Schoolers</p>
      <button className="bg-[#04AA6D] py-3 nxs:px-6 rounded-full hover:bg-[#059862] text-white  nxs:w-[14em] w-full px-2">
        Sign Up for free
      </button>
      </div>
      <div className='flex md:flex-row flex-col items-center justify-center gap-10 w-full text-black px-4 dark:text-white'>
          <img src='https://www.w3schools.com/signup/discord.png' alt="discord" className='w-[28em] relative bottom-[5em]'/>
          <div className='flex flex-col gap-3 font-bold relative bottom-[5em] items-start max-md:justify-center max-md:text-center'>
            <h1 className='text-lg'>Ask questions - help others </h1>
            <div >Reach your learning goals by working together with other learners.</div>
          </div>

      </div>
      <svg viewBox="0 0 5060 318" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="wavepath3" d="M4778.89 201.524L5060 224.655L5060 317.179L-0.000428702 317.178L7.82261e-05 101.172C210.562 90.1097 421.124 74.2062 631.686 58.3026C983.346 31.7421 1335.01 5.18153 1686.67 1.17503C2248.89 -6.65384 2811.11 39.608 3373.33 85.8699L4778.89 201.524Z" fill="#282A35"></path>
                    </svg>
    </div>
  )
}

export default Community
