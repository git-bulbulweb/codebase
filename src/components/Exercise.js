import React from 'react'

function Exercise() {
  return (
    <div className='flex flex-col justify-center items-center gap-8 md:px-16 py-16 px-6 dark:bg-[rgb(13,23,33)] font-bold text-white bg-[#282A35] w-full text-center'>
        <h1 className='text-5xl'>Exercises and Quizzes</h1>
        <p className=' text-lg'>Test your skills</p>
        <div className='grid sm:grid-cols-2 gap-10 justify-center items-center font-bold  text-3xl w-full px-1 overflow-hidden'>
            <div className='flex items-center justify-center bg-[#04AA6D] hover:bg-green-400  text-white rounded-md text-center h-[6em] max-sm:w-screen'>Exercises</div>
            <div className='flex items-center justify-center bg-[#FFF4A3] hover:bg-yellow-200 text-black rounded-md text-center h-[6em] w-full'>Quizzes</div>
        </div>
      
    </div>
  )
}

export default Exercise
