import React from 'react';
import { ImCross } from 'react-icons/im';


const html=["HTML","CSS","Canvas","Graphics","Bootstrap","MUI","Sass"]
const js= ["JavaScript","React","AJAX","Vue","Angular","JSON"]
const backend=["Nodejs","Express","Django","MySQL","C#","C++","Kotlin","Go","ASP","Git","MongoDB","R","XML","PHP","JAVA"]
const DA=["Excel","Scipy","Machine Learning","AI","Bard","ChatGPT","Google Sheets","Numpy","Pandas"];
const Web = ["Create a Website","Web Certificates","Web Templates","Web Development","Play a Code Game","Web Statitics","Where To Start","Accessibility","Join Our Newsletter"]

function Tutorials({setShowNavLink}) {
  return (
    <div className='md:fixed md:top-[8vh] md:z-40 w-full overflow-y-auto h-full'>
    <div className='flex flex-col items-center justify-center bg-[rgb(40,42,53)] w-full py-16 sm:px-10 gap-[3em]' id="tutorial">
        <div className='flex flex-col gap-[3em] items-start al justify-center w-fit'>
            <h1 className='text-[#FFF4A3] text-3xl max-sm:text-xl font-bold'>Tutorials and References</h1>
            <div className='max-md:hidden text-white text-xl absolute top-[2em] right-[2em] cursor-pointer'  onClick={()=>{setShowNavLink("")}}>

            <ImCross />
            </div>
        
      <div className='grid lg:grid-cols-3 max-sm:grid-cols-1 grid-cols-2 gap-12 items-start justify-center'>
        <div className='flex flex-col gap-10 items-start justify-start'>
            <div className='flex flex-col gap-4 items-start justify-start'>
                <h1 className='text-xl font-medium text-[#FFF4A3]'>HTML and CSS</h1>
                <div className='flex flex-col items-start justify-start gap-2'>
                    {html.map((lang)=>(
                        <div key={`tutorial-${lang}`} className='flex flex-row gap-1 items-center justify-center flex-shrink'>
                            <p className='text-white text-xs hover:bg-white p-1 hover:text-black hover:rounded-md'>Learn <span className='text-base sm:px-1 font-semibold max-sm:text-xs'>{lang}</span>  </p>
                            <p className='text-[#FFF4A3] underline cursor-pointer hover:bg-[#04AA6D] hover:text-white text-xs sm:p-1 hover:rounded-md max-exs:hidden'>Tutorial</p> 
                            <p className='text-[#FFF4A3] underline cursor-pointer hover:bg-[#04AA6D] hover:text-white text-xs sm:p-1 hover:rounded-md max-ixs:hidden'> Reference</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-4 items-start justify-start'>
                <h1 className='text-xl font-medium text-[#FFF4A3]'>Data Analytics</h1>
                <div className='flex flex-col items-start justify-start gap-2'>
                    {DA.map((lang)=>(
                        <div key={`tutorial-${lang}`} className='flex flex-row gap-1 items-center justify-center'>
                            <p className='text-white text-xs hover:bg-white p-1 hover:text-black hover:rounded-md'>Learn <span className='text-base sm:px-1 font-semibold  max-sm:text-xs'>{lang}</span> </p>
                            <p className='text-[#FFF4A3] underline cursor-pointer hover:bg-[#04AA6D] hover:text-white text-xs sm:p-1 hover:rounded-md max-exs:hidden'>Tutorial</p> 
                            <p className='text-[#FFF4A3] underline cursor-pointer hover:bg-[#04AA6D] hover:text-white text-xs sm:p-1 hover:rounded-md max-ixs:hidden'> Reference</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-10 items-start justify-start'>
            <div className='flex flex-col gap-4 items-start justify-start'>
                <h1 className='text-xl font-medium text-[#FFF4A3]'>JavaScript</h1>
                <div className='flex flex-col items-start justify-start gap-2'>
                    {js.map((lang)=>(
                        <div key={`tutorial-${lang}`} className='flex flex-row gap-1 items-center justify-center'>
                            <p className='text-white text-xs hover:bg-white p-1 hover:text-black hover:rounded-md'>Learn <span className='text-base sm:px-1 font-semibold  max-sm:text-xs'>{lang}</span> </p>
                            <p className='text-[#FFF4A3] underline cursor-pointer hover:bg-[#04AA6D] hover:text-white text-xs sm:p-1 hover:rounded-md max-exs:hidden'>Tutorial</p> 
                            <p className='text-[#FFF4A3] underline cursor-pointer hover:bg-[#04AA6D] hover:text-white text-xs sm:p-1 hover:rounded-md max-ixs:hidden'> Reference</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-4 items-start justify-start'>
                <h1 className='text-xl font-medium text-[#FFF4A3]'>Web Building</h1>
                <div className='flex flex-col items-start justify-start gap-2'>
                    {Web.map((lang)=>(
                        <div key={`tutorial-${lang}`} className='flex flex-row gap-1 items-center justify-center'>
                            <p className='text-white text-xs hover:bg-white p-1 hover:text-black hover:rounded-md'><span className='text-base sm:px-1 font-semibold  max-sm:text-xs'>{lang}</span> </p>
                            
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
                            <p className='text-white text-xs hover:bg-white p-1 hover:text-black hover:rounded-md'>Learn <span className='text-base sm:px-1 font-semibold  max-sm:text-xs'>{lang}</span> </p>
                            <p className='text-[#FFF4A3] underline cursor-pointer hover:bg-[#04AA6D] hover:text-white text-xs sm:p-1 hover:rounded-md max-exs:hidden'>Tutorial</p> 
                            <p className='text-[#FFF4A3] underline cursor-pointer hover:bg-[#04AA6D] hover:text-white text-xs sm:p-1 hover:rounded-md max-ixs:hidden'> Reference</p>
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

export default Tutorials
