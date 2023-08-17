import React from 'react'

function Light({heading}) {
  return (
    <div className={`h-[6em] rounded-lg flex flex-col bg-[#D9EEE1] gap-4 justify-center items-center max-sm:w-[90vw] px-4 mt-5 hover:bg-[#D9EED0]`}>
      <h1 className='text-2xl font-bold'>{heading}</h1>
    </div>
  )
}

export default Light
