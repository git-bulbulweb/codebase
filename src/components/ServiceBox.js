import React from 'react'

function ServiceBox({heading,paragraph}) {
  return (
    <div className='bg-[#ffffff1a] font-bold px-8 py-4 rounded-md hover:bg-black flex flex-col items-start justify-center gap-2 '>
      <h1 className='text-md text-[#FFF4A3]'>{heading}</h1>
      <p className='text-sm text-white'>{paragraph}</p>
    </div>
  )
}

export default ServiceBox
