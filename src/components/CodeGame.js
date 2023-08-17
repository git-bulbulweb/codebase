import React from 'react'

function CodeGame() {
  return (
    <div className='flex flex-col gap-8 bg-[#96D4D4] items-center justify-center py-10 font-bold text-black font-cursive'>
      <h1 className='text-5xl text-center'>Code Game</h1>
      <p className='text-xl text-center'>Help the Lynx collect pine cones!</p>
      <img src='https://www.w3schools.com/images/w3lynx_200.png' alt="code game" width={"100em"}/>
      <button className='bg-[#282A35] hover:bg-black text-white font-bold py-2 px-12 rounded-full'>Play Game</button>
    </div>
  )
}

export default CodeGame
