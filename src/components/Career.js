import React from 'react'
import logo from '../ss-removebg-preview.png'

function Career() {
 
  
  return (
    <div className='bg-[#282A35] lg:px-12 py-16 lg:h-[30em] px-2 dark:bg-[rgb(13,23,33)]'>
    <div className='flex flex-col gap-8  justify-start items-start font-bold text-[#FFC0C7] '>
        <h1 className='text-5xl max-md:text-3xl max-sm:texl-lg'>Kickstart your career</h1>
        <h1 className='text-5xl max-md:text-3xl max-sm:texl-lg'>Get certified by completing a course</h1>
        <button className='bg-[#04AA6D] p-2 px-3 text-white rounded-full hover:bg-[#04AA60]'>Get Started</button>
      
        
        
        </div>
        <div className='relative flex  justify-end items-end max-sm:right-3  max-nxs:hidden w-full max-nl:top-[7em]'>
          <img src={logo} className='max-nl:w-[20em] '/>
        </div>
        </div>
  )
}

export default Career
