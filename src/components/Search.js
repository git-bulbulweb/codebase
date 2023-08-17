import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';



function Search() {
  return (
    <div className='max-sm:hidden flex flex-row z-50 absolute right-[5em]'>
      <input type="search" className='w-[20em]  '/>
      <div className='w-[4em] flex items-center justify-center bg-[#4D90FE] text-white text-lg '>
            <AiOutlineSearch />
      </div>
    </div>
  )
}

export default Search
