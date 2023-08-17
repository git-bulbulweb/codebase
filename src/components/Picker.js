import React from 'react'

function Picker() {
  return (
    <div className='flex flex-col gap-6 justify-center items-center w-full font-bold text-black pt-10 text-center py-10'>
      <h1 className='text-5xl'>Color Picker</h1>
      <p className=' text-lg font-semibold'>W3Schools' famous color picker:</p>
      <img src='https://www.w3schools.com/images/colorpicker.png' alt="color picker" />
    </div>
  )
}

export default Picker
