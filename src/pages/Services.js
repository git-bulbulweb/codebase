import React from 'react'
import { ImCross } from 'react-icons/im';
import ServiceBox from '../components/ServiceBox';

import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

function Services({setShowNavLink}) {
  return (
    <div className='md:fixed md:top-[8vh] z-40 w-full overflow-y-auto h-full'>
    <div className='flex flex-col gap-10 items-center justify-center bg-[rgb(40,42,53)] w-full py-16 md:px-[7em] gap-[3em] px-4 z-[40] '>
        <div className='flex flex-col gap-[3em] items-start al justify-center w-fit'>
            <div className='flex flex-col gap-10 '>
                <h1 className='text-[#FFF4A3] text-3xl max-sm:text-xl font-bold'>All Our Services</h1>
                <p className='text-white text-lg max-sm:text-sm font-bold lg:w-[60%] font-light'>W3Schools offers a wide range of services and products for beginners and professionals,helping millions of people everyday to learn and master new skills.</p>
                <div className='max-md:hidden text-white text-xl absolute top-[2em] right-[2em] cursor-pointer' onClick={()=>{setShowNavLink("")}}>

            <ImCross />
            </div>
            </div>
            <div className='grid md:grid-cols-3 sm::grid-cols-2 max-sm:grid justify-start items-start gap-10'>

                <ServiceBox heading={"Free Tutorials"} paragraph={"Enjoy our free tutorials like millions of other internet users since 1999"}/>
                <ServiceBox heading={"Exercises"} paragraph={"Test your skills with different exercises"}/>
                <ServiceBox heading={"Log in / Sign Up"} paragraph={"Create a free w3school Account to improve your learning Experience"}/>
                <ServiceBox heading={"Create a Website"} paragraph={"Create Your own Website- no setup required"}/>
                <ServiceBox heading={"References"} paragraph={"A reference is a detailed documentation of different web technologies and programming languages."}/>
                <ServiceBox heading={"Quizzes"} paragraph={"Test yourself with multiple choice question"}/>
                <ServiceBox heading={"Upgrade"} paragraph={"Track your learning progress at W3Schools and collect rewards"}/>
                <ServiceBox heading={"Get Certified"} paragraph={"Document your Knowledge"}/>
                <ServiceBox heading={"My Learning"} paragraph={"Track your learning progress at W3Schools and collect rewards"}/>
                <ServiceBox heading={"Code Editor (Try it)"} paragraph={"With our online code editor, you can edit code and view the result in your browser"}/>
                <ServiceBox heading={"Videos"} paragraph={"Learn the basics of HTML in a fun and engaging video tutorial"}/>
                <ServiceBox heading={"Web Hosting"} paragraph={"Host your own website, and share it to the world with w3school"}/>
            </div>
            <div className=" text-2xl text-white flex flex-row-reverse items-end font-bold  gap-8 max-sm:gap-1 dark:text-white w-full">
          <div className="p-2 hover:bg-black hover:text-white">
            <FaFacebookSquare />
          </div>
          <div className="p-2 hover:bg-black hover:text-white">
            <AiOutlineInstagram />
          </div>
          <div className="p-2 hover:bg-black hover:text-white">
            <AiFillLinkedin />
          </div>
          <div className="p-2 hover:bg-black hover:text-white">
            <BsDiscord />
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Services
