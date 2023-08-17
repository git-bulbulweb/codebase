import React, { useState } from 'react'
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

function Question() {
    const [showQuestion,setShowQuestion]=useState([])
    const handleQuestion = (id) => {
    
        if (showQuestion.includes(id)) {
          let filters = showQuestion.filter((el) => el !== id);
          setShowQuestion(filters);
        } else {
          setShowQuestion([...showQuestion,id]);
        }
    };
  return (
    <div className='flex flex-col  justify-center items-center bg-[#282a35] w-full text-black'>
        <div className='flex flex-col gap-8 justify-center items-center py-10 md:px-16 px-6 w-full'>
            <h1 className='text-3xl text-white font-bold'>Frequently Asked Questions</h1>
            <div className='flex flex-col items-start justify-start lg:w-[60%] w-[98%] bg-white  rounded-md'>
                <div className={`${showQuestion.includes("free") && "bg-[#FFF4A3]"} text-lg flex flex-row gap-2 items-center sm:h-[3em] font-medium hover:bg-[#FFF4A3] w-full p-4 `} onClick={()=>handleQuestion("free")}>
                    {showQuestion.includes("free") ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    <h1 >Is my learning free?</h1>
                </div>
                {showQuestion.includes("free") && <p className='text-sm font-medium lg:h-[4em] px-4 py-1'>Both My Learning and W3Schools Public Profile are completely free of charge, however there are available upgrade plans that can enhance your learning experience.</p>}
            </div>
            <div className='flex flex-col items-start justify-start lg:w-[60%] w-[98%] bg-white  rounded-md'>
                <div className={`${showQuestion.includes("find") && "bg-[#FFF4A3]"} text-lg flex flex-row gap-2 items-center sm:h-[3em] font-medium hover:bg-[#FFF4A3] w-full p-4 `} onClick={()=>handleQuestion("find")}>
                {showQuestion.includes("find") ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    <h1 >Where can I find My Learning?</h1>
                </div>
                {showQuestion.includes("find") && <p className='text-sm font-medium lg:h-[4em] px-4 p-1'>You can access your My Learning profile through the upper right corner on any W3Schools page.</p>}
            </div>
            <div className='flex flex-col items-start justify-start lg:w-[60%] w-[98%] bg-white rounded-md'>
                <div className={`${showQuestion.includes("certified") && "bg-[#FFF4A3]"} text-lg flex flex-row gap-2 items-center sm:h-[3em] font-medium hover:bg-[#FFF4A3] w-full p-4 `} onClick={()=>handleQuestion("certified")}>
                {showQuestion.includes("certified") ? <AiFillCaretUp /> : <AiFillCaretDown />}
                <h1 >How can I get certified?</h1>
                </div>
                {showQuestion.includes("certified") && <p className='text-sm font-medium lg:h-[4em] px-4 py-1'>All of our certifications can be found and purchased at campus.w3schools.com</p>}
            </div>
            <div className='flex flex-col items-start justify-start lg:w-[60%] w-[98%] bg-white  rounded-md'>
                <div className={`${showQuestion.includes("stars") && "bg-[#FFF4A3]"} text-lg flex flex-row gap-2 items-center sm:h-[3em] font-medium hover:bg-[#FFF4A3] w-full p-4 `} onClick={()=>handleQuestion("stars")}>
                {showQuestion.includes("stars") ? <AiFillCaretUp /> : <AiFillCaretDown />}
                <h1 >How to collect stars?</h1>
                </div>
                {showQuestion.includes("stars") && <p className='text-sm font-medium lg:h-[4em] px-4 py-1'>Stars can be collected by completing to read the tutorial, finishing exercises and taking the quiz of the topic you have been learning.</p>}
            </div>
            <h1 className='text-white text-lg font-bold'>Have any questions? <span className='underline hover:text-[#059862] cursor-pointer'>Visit our support page</span></h1>
        </div>
      
    </div>
  )
}

export default Question
