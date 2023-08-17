import React from 'react'

function Template() {
  return (
    <div className='flex flex-col gap-8 justify-center items-center  bg-[#E7E9EB] text-black font-bold text-center py-24 px-8 dark:bg-[#38444d] dark:text-white'>
      <h1 className='text-5xl'>Web Templates</h1>
      <p className='text-lg'>Browse our selection of free responsive HTML Templates</p>
      <img src="https://www.w3schools.com/w3css_templates.jpg" alt="template" className='lg:w-[60%]'/>
      <button className='text-white hover:bg-black bg-[#282A35] lg:w-[40%] w-full rounded-full py-3'>Browse Template</button>
    </div>
    
  )
}

export default Template
