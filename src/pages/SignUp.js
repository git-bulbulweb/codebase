import React from 'react';

import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";


import Intro from '../components/SignComponents/Intro'
import Schooler from '../components/SignComponents/Schooler'
import Learning from '../components/Learning'
import Achievements from '../components/SignComponents/Achievements'
import Public from '../components/SignComponents/Public'
import Community from '../components/SignComponents/Community'
import Spaces from '../components/SignComponents/Spaces'
import Upgarde from '../components/SignComponents/Upgarde'
import Question from '../components/SignComponents/Question'
import Footer from '../components/Footer'
import Payment from '../components/SignComponents/Payment';

function SignUp() {
  return (
    <div className='relative top-[12vh]'>
      <Intro />
      <Schooler />
      <Learning />
      <Achievements />
      <Public />
      <Community />
      <Spaces />
      <Upgarde />
      <Payment />
      <Question />
      <div className="flex flex-col items-center justify-center gap-4 font-bold pt-10 dark:bg-[#1d2a35] dark:text-white w-full">
        <h1 className="">Follow us: </h1>
        <div className="text-2xl text-[#282A35] font-bold flex flex-row gap-8 max-sm:gap-1 dark:text-white">
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
      <Footer />
      
    </div>
  )
}

export default SignUp
