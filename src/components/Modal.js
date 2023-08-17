import React,{useState} from 'react'

function Modal({darkMode,setDarkMode}) {
    
    const [darkCode,setDarkCode]=useState(false);
    const handleTheme = (e) => {
        setDarkMode((prev)=>!prev)
        
    }
  return (
    <div className=' fixed flex flex-col gap-2 text-white w-fit text-sm bg-[#282A35] font-bold justify-center items-center dark:bg-[rgb(13,23,33)] '>
    <label htmlFor='darkmode' className='flex items-center justify-center gap-2'>Dark Mode: <input type='checkbox' value="darkMode" onChange={handleTheme} id="darkmode" checked={darkMode}/>
      </label>
      <label htmlFor='darkcode' className='flex items-center justify-center gap-2'>Dark Code: <input type='checkbox' value="darkCode" id="darkcode"/>
      </label>
    </div>
  )
}

export default Modal
