import React from 'react'
import logo from '../w3-removebg-preview.png'
const topics = ["Spaces","Upgrade","Newsletter","Get Certified","Report Error"]

const lang= ["HTML", "CSS", "Bootstrap","Javascript","C","C++","Python","jQuery","SQL"];

function Footer() {
  return (
    <div className='flex flex-col gap-8 justify-center items-center dark:bg-[#1d2a35] py-10 w-full px-2 dark:text-white'>
        <div className='flex lg:flex-row flex-col  items-center justify-center gap-8 border-y-[0.001em] py-4 w-full '>
            {topics.map((top)=>(
                <div className='bg-[#282A35] lg:w-[10em] rounded-md text-center text-white font-white py-3 max-lg:w-[90%] hover:bg-[#04AA6D] cursor-pointer dark:bg-[rgb(13,23,33)]' key={`${top}1`}>{top}</div>
            ))}
        </div>
        <div className='grid lg:grid-cols-4  grid-cols-1 sm:grid-cols-2 justify-around gap-x-[10em] items-center max-lg:gap-x-[10em] gap-y-8 border-b-[0.01em] w-full pb-4'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className=' text-lg font-bold text-center'>Top Tutorials</h1>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    {lang.map((lan)=>(
                        <p className='text-sm hover:text-[#04AA6D] font-medium cursor-pointer text-center' key={`${lan}12`}>{lan} Tutorial</p>
                    ))}
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className=' text-lg font-bold text-center'>Top References</h1>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    {lang.map((lan)=>(
                        <p className='text-sm hover:text-[#04AA6D] font-medium cursor-pointer text-center' key={`${lan}1234`}>{lan} References</p>
                    ))}
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className=' text-lg font-bold text-center'>Top Examples</h1>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    {lang.map((lan)=>(
                        <p className='text-sm hover:text-[#04AA6D] font-medium cursor-pointer text-center'  key={`${lan}14`}>{lan} Examples</p>
                    ))}
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className=' text-lg font-bold text-center'>Get Certified</h1>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    {lang.map((lan)=>(
                        <p className='text-sm hover:text-[#04AA6D] font-medium cursor-pointer text-center' key={`${lan}15`}>{lan} Certified</p>
                    ))}
                </div>
            </div>

        </div>
        <div className='flex flex-row gap-2 items-end justify-end w-full px-8 py-5'>
            <p className="text-base hover:text-[#04AA6D] cursor-pointer border-r-2 px-2 border-r-black">FORUM</p>
            <p className="text-base hover:text-[#04AA6D] cursor-pointer">ABOUT</p>
        </div>
        <div className='w-[80%] text-center font-light'>
            <p>W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors,you agree to have read and accepted our terms of use, cookie and privacy policy.
            </p>
        </div>
        <div className='w-[40%] text-center font-light text-xs'>
            <p>Copyright 2022-2023 by Refsnes Data. All Rights Reserved.
                        W3Schools is Powered by CSS.</p>
        </div>
        <img src={logo} className='w-[4em]'/>
    </div>
  )
}

export default Footer
