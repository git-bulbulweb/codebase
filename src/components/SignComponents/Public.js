import React from 'react'

function Public() {
  return (
    <div className='flex flex-col justify-center items-center gap-7 bg-[#96D4D4] py-10'>
       <h1 className='text-5xl text-center max-sm:text-3xl font-bold'>Public Profile</h1>
      <p className='text-xl lg:w-[40em] text-center leading-relaxed max-sm:text-lg font-medium'>Share your coding skills with the world</p>
      <img src='https://www.w3schools.com/signup/profilepreview.png' alt="scholer" className='w-[40em]'/>
      <button className="bg-[#04AA6D] py-3 nxs:px-6 rounded-full hover:bg-[#059862] text-white  nxs:w-[14em] w-full px-2">
        Sign Up for free
      </button>
    </div>
  )
}

export default Public
