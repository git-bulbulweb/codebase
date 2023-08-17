import React, { useState } from "react";

function Editor() {
  const [frontend, setFrontend] = useState(true);
  const frontendSet = () => {
    setFrontend(true);
  };
  const backendSet = () => {
    setFrontend(false);
  };
  return (
    <div className="flex flex-col gap-8 justify-center items-center py-8 bg-[#282A35] h-full w-full dark:bg-[rgb(13,23,33)]">
      <h1 className="text-5xl max-sm:text-3xl text-white font-bold">Code Editor</h1>
      <p className="text-lg max-sm:text-sm text-white font-semibold">
        With our online code editor, you can edit code and view the result in
        your browser
      </p>
      <div className="flex flex-col gap-6 sm:px-8 px-2 justify-center max-lg:w-screen">
        <div className="lg:h-[20em] lg:w-[50em] bg-[#F1F1F1] flex flex-col rounded-xl w-full h-full">
          <div className='flex flex-row justify-between sm:px-6 py-4 gap-8 w-full px-1'>
            <div className='flex gap-1 overflow-hidden'>
                <div className='h-4 w-4 bg-red-700 rounded-full'></div>
                <div className='h-4 w-4 bg-yellow-300 rounded-full'></div>
                <div className='h-4 w-4 bg-green-600 rounded-full'></div>
            </div>
            <div className='lg:w-[30em] w-full max-md:text-xs overflow-hidden  bg-white lg:mr-24 text-left text-sm md:px-4'>
                <p className="overflow-x-hidden">www.w3schools.com/tryit/</p>
            </div>
        </div>
        <div className='flex flex-row  font-semibold text-base overflow-hidden '>
            <h1 className={`hover:bg-[#E7E9EB] p-2 ${frontend && "bg-[#E7E9EB]"} cursor-pointer max-sm:text-xs `} onClick={frontendSet}>Frontend</h1>
            <h1 className={`hover:bg-[#E7E9EB] p-2 ${!frontend && "bg-[#E7E9EB]"} cursor-pointer overflow-hidden max-sm:text-xs `} onClick={backendSet}>Backend</h1>
        </div>
        <div>
          {frontend ? (
                <div>
                    <img src='https://www.w3schools.com/codeeditor.gif' alt="frontend"/>
                </div>) : 
                (<div>
                    <img src='https://www.w3schools.com/tryit/best2.gif' alt="backend" />
                </div>)}
          </div>
        </div>
        <div className="text-white font-semibold flex flex-col items-start gap-4 overflow-hidden px-2">
          <button className="bg-[#04AA6D] hover:bg-green-700 px-6 rounded-md py-2 overflow-hidden max-sm:w-full">
            Try Frontend Editor
          </button>
          <button className="bg-yellow-200 text-black px-6 rounded-md py-2 hover:bg-yellow-300 overflow-hidden max-sm:w-full">
            Try Backend Editor
          </button>
        </div>
      </div>
    </div>
  );
}

export default Editor;
