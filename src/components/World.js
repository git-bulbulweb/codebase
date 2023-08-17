import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineDown } from 'react-icons/ai';


function World() {
  return (
    <div className='max-sm:hidden bg-[rgb(102,102,102)] w-[25em] flex  justify-end absolute right-[7.5em]'>
    <div className='flex flex-row items-center gap-2 bg-white w-fit text-black'>
      <FcGoogle />
      <input type="text" className='text-black ' placeholder='select your language'/>
      <AiOutlineDown />
    </div>
    </div>
  )
}

export default World
