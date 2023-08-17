import React from 'react'

function Sky({heading}) {
  return (
    <div className={`h-[6em] rounded-lg flex flex-col bg-[#96D4D4] gap-4 justify-center items-center max-sm:w-[90vw] px-4 mt-5 hover:bg-[#96D4C4]`}>
      <h1 className='text-2xl font-bold'>{heading}</h1>
    </div>
  )
}

export default Sky
