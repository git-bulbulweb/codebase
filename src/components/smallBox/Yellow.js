import React from 'react'

function Yellow({heading}) {
  return (
    <div className={`h-[6em] rounded-lg flex flex-col bg-[#FFF4A3] gap-4 justify-center items-center max-sm:w-[90vw] px-4 mt-5 hover:bg-yellow-200`}>
      <h1 className='text-2xl font-bold'>{heading}</h1>
    </div>
  )
}

export default Yellow
