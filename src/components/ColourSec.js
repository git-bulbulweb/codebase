import React from 'react'

function ColourSec({heading, description,p1,p2,p3,p4,p5,p6,p7,color,dark}) {
  return (
    <div className={`flex lg:flex-row flex-col justify-center items-center bg-[${color}] gap-[5em]  lg:h-[80vh] ${color==='#282A35' && "text-white"} p-8 px-4 dark:bg-[${dark ? dark:color}]`}>
         <div className='flex flex-col gap-8 items-center justify-center lg:min-w-[29em] '>
            <h1 className='text-6xl max-sm:text-3xl font-bold text-center'>{heading}</h1>
            <p className='text-2xl max-sm:texl-lg font-semibold text-center'>{description}</p>
            <div className='flex flex-col gap-8 font-semibold text-lg'>
            <button className='max-[350]:w-[12em] bg-[#04AA6D] hover:bg-green-600 text-white text-center rounded-full p-2'>Learn {heading}</button>
            <button className={`max-[350]:w-[12em] ${color==='#FFF4A3' && "hidden"} bg-yellow-300 hover:bg-yellow-400 text-black text-center rounded-full p-2`}>Video Tutorial</button>
            <button className={`max-[350]:w-[12em] ${color==='#282A35' && "hidden"} bg-[#282A35] text-white text-center rounded-full p-2 hover:bg-black`}>{heading} Reference</button>
            <button className='max-[350]:w-[12em] bg-[#FFC0C7] text-black hover:bg-rose-300 text-center rounded-full p-2'>Get Certified</button>
            </div>
        </div>
        <div className='max-sm:hidden flex flex-col h-[29em] bg-[#E7E9EB] lg:w-[27em] w-[90%] justify-center items-start gap-4 shadow-2xl rounded-xl dark:bg-[#38444d] dark:text-white text-black pl-6'>
            <h1 className=' text-base  font-semibold text-left relative '>{heading} Example</h1>
            <div className={`flex flex-col w-[95%] bg-[#fff] h-[20em] lg:w-[24em] shadow-md border-l-4 border-l-[#04AA6D] items-start gap-4 p-2  dark:bg-[rgb(21,32,43)]`}>
                <p>{p1}</p>
                <p>{p2}</p>
                <p>{p3}</p>
                <p>{p4}</p>
                <p>{p5}</p>
                <p>{p6}</p>
                <p>{p7}</p>
            </div>
            <button className='bg-[#04AA6D] px-4 py-2 rounded-full text-white font-semibold'>Try it Yourself</button>
        </div>
    </div>
  )
}

export default ColourSec
