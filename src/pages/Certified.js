import React from 'react';
import { ImCross } from 'react-icons/im';
import logo from "../circle-removebg-preview.png"


const html=["HTML","CSS","Bootstrap"]
const js= ["JavaScript","React","AJAX","Vue"]
const backend=["Nodejs","Express","Django","MySQL","C#","C++","Kotlin","Go","ASP","Git","MongoDB","R","XML","PHP","JAVA"]
const DA=["Excel","Scipy","AI","Bard","ChatGPT"];


function Certified({setShowNavLink}) {
  return (
    <div className='md:fixed md:top-[8vh] z-40 w-full overflow-y-auto h-full'>
    <div className=' flex flex-col items-center justify-center bg-[rgb(40,42,53)] w-full py-16 sm:px-10 gap-[3em] px-2 '>
        <div className='flex flex-col gap-[3em] items-start al justify-center w-fit'>
            <div className='flex flex-row gap-10 '>
            <h1 className='text-[#FFF4A3] text-3xl max-sm:text-xl font-bold'>Get Certified</h1>
            <img src={logo} alt="logo" className='w-[6em] max-nxs:hidden'/>
            </div>
            <div className='max-md:hidden text-white text-xl absolute top-[2em] right-[2em] cursor-pointer'  onClick={()=>{setShowNavLink("")}}>

            <ImCross />
            </div>
        
      <div className='grid lg:grid-cols-3 max-sm:grid-cols-1 grid-cols-2 gap-[7em] items-start justify-center'>
        <div className='flex flex-col gap-10 items-start justify-start'>
            <div className='flex flex-col gap-4 items-start justify-start'>
                <h1 className='text-xl font-medium text-[#FFF4A3]'>HTML and CSS</h1>
                <div className='flex flex-col items-start justify-start gap-2'>
                    {html.map((lang)=>(
                        <div key={`tutorial-${lang}`} className='flex flex-row gap-1 items-center justify-center flex-shrink'>
                            <p className='text-white text-xs hover:bg-white p-1 hover:text-black hover:rounded-md'> <span className='text-base sm:px-1 font-semibold max-sm:text-xs'>{lang}</span>  </p>
                            <p className='text-[#FFF4A3] underline cursor-pointer hover:bg-[#04AA6D] hover:text-white text-xs sm:p-1 hover:rounded-md max-exs:hidden'>Certificate</p> 
                            <p className='text-[#FFF4A3] underline cursor-pointer hover:bg-[#04AA6D] hover:text-white text-xs sm:p-1 hover:rounded-md max-ixs:hidden'>Course</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-4 items-start justify-start'>
                <h1 className='text-xl font-medium text-[#FFF4A3]'>Data Analytics</h1>
                <div className='flex flex-col items-start justify-start gap-2'>
                    {DA.map((lang)=>(
                        <div key={`tutorial-${lang}`} className='flex flex-row gap-1 items-center justify-center'>
                            <p className='text-white text-xs hover:bg-white p-1 hover:text-black hover:rounded-md'><span className='text-base sm:px-1 font-semibold  max-sm:text-xs'>{lang}</span> </p>
                            <p className='text-[#FFF4A3] underline cursor-pointer hover:bg-[#04AA6D] hover:text-white text-xs sm:p-1 hover:rounded-md max-exs:hidden'>Course</p> 
                            
                        </div>
                    ))}
                </div>
            </div>
            <div className='text-white font-medium border-2 px-1 hover:bg-white hover:text-black rounded-md sm:w-[12em] text-center'>
                <h1>What is Certificate ?</h1>
            </div>
            <div className='text-white font-medium border-2 px-1 hover:bg-white hover:text-black rounded-md sm:w-[12em] text-center'>
                <h1>What is BootCamp ?</h1>
            </div>
        </div>
        <div className='flex flex-col gap-10 items-start justify-start'>
            <div className='flex flex-col gap-4 items-start justify-start'>
                <h1 className='text-xl font-medium text-[#FFF4A3]'>JavaScript</h1>
                <div className='flex flex-col items-start justify-start gap-2'>
                    {js.map((lang)=>(
                        <div key={`tutorial-${lang}`} className='flex flex-row gap-1 items-center justify-center'>
                            <p className='text-white text-xs hover:bg-white p-1 hover:text-black hover:rounded-md'><span className='text-base sm:px-1 font-semibold  max-sm:text-xs'>{lang}</span> </p>
                            <p className='text-[#FFF4A3] underline cursor-pointer hover:bg-[#04AA6D] hover:text-white text-xs sm:p-1 hover:rounded-md max-exs:hidden'>Certificate</p> 
                            <p className='text-[#FFF4A3] underline cursor-pointer hover:bg-[#04AA6D] hover:text-white text-xs sm:p-1 hover:rounded-md max-ixs:hidden'>Course</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
        <div className='flex flex-col gap-10 items-start justify-start'>
            <div className='flex flex-col gap-4 items-start justify-start'>
                <h1 className='text-xl font-medium text-[#FFF4A3]'>JavaScript</h1>
                <div className='flex flex-col items-start justify-start gap-2 flex-shrink'>
                    {backend.map((lang)=>(
                        <div key={`tutorial-${lang}`} className='flex flex-row gap-1 items-center justify-center'>
                            <p className='text-white text-xs hover:bg-white p-1 hover:text-black hover:rounded-md'><span className='text-base sm:px-1 font-semibold  max-sm:text-xs'>{lang}</span> </p>
                            <p className='text-[#FFF4A3] underline cursor-pointer hover:bg-[#04AA6D] hover:text-white text-xs sm:p-1 hover:rounded-md max-exs:hidden'>Certificate</p> 
                            <p className='text-[#FFF4A3] underline cursor-pointer hover:bg-[#04AA6D] hover:text-white text-xs sm:p-1 hover:rounded-md max-ixs:hidden'>Course</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Certified
