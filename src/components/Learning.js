import React from 'react'

function Learning() {
  return (
    <div className='flex flex-col gap-8 bg-[#D9EEE1] justify-center items-center text-black w-full py-[5em]'>
      <h1 className='text-5xl text-center max-sm:text-3xl'>My Learning</h1>
      <p className='text-xl lg:w-[40em] text-center leading-relaxed max-sm:text-lg'>Track your progress with our free "My Learning" program.
Log in to your account, and start earning points!</p>
      <img src='https://www.w3schools.com/myl-green-off.png' alt="Learn map" className='px-4'/>
      <button className='bg-[#04AA6D] hover:bg-green-700 px-4 py-2 lg:w-[15em] rounded-full text-lg text-white'>Sign Up for free</button>
    </div>
  )
}

export default Learning
