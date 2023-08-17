import React from 'react'

function BigSky({heading,description}) {
  return (
    <div className={`h-[15em] rounded-lg flex flex-col bg-[#96D4D4] gap-4 justify-center items-center max-md:w-[85vw] px-4`}>
        <h1 className='text-5xl font-bold'>{heading}</h1>
        <p className='text-lg font-semibold'>{description}</p>
        <button className='bg-[#282A35] w-[10em] rounded-full hover:bg-black text-center py-2 px-4 text-white'>Learn {heading}</button>      
    </div>
  )
}

export default BigSky
