import React,{useState} from "react";
import { createPortal } from "react-dom";
import { BiWorld } from "react-icons/bi";
import { BsCircleHalf } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import Modal from "./Modal";
import Search from "./Search";
import World from "./World";

const language1 = ["HTML", "CSS", "JAVASCRIPT"];
const language6 = ["SQL", "PYTHON", "JAVA", "PHP"];

const language2 = ["BOOTSTRAP", "HOW TO", "W3.CSS"];
const language3 = ["C", "C++", "C#"];
const language4 = ["REACT", "R"];
const language5 = ["JQUERY", "DJANGO"];

function Navbar2({setDarkMode,darkMode}) {
  const [visible,setVisible]=useState(false);
  const [search, setSearch]=useState(false);
  const [language,setLanguage]=useState(false);
  const setModal = () => {
    setVisible(true);
  }
  const unsetModal = () => {
    setVisible(false)
  }
  const handleSearch = () => {
    setSearch((prev)=>!prev)
  }
  const handleLanguage = () => {
    setLanguage((prev)=>!prev)
  }
  return (
    <div className="fixed top-[8vh] w-full h-[4vh] dark:bg-[rgb(13,23,33)] bg-[#282A35] flex flex-row  items-center sm:justify-between justify-center gap-10 px-6 max-sm:px-2  z-40">
      <div className="text-white flex flex-row items-center gap-4 text-sm font-semibold h-[4vh]">
        <div className="gap-4 flex flex-row max-nsm:hidden items-center ">
          {language1.map((lang) => (
            <h1 className="hover:bg-black h-[4vh] text-center p-1" key={`${lang}1`}>{lang}</h1>
          ))}
        </div>
        <div className="gap-4 flex flex-row max-nmd:hidden h-[4vh] items-center">
          {language6.map((lang) => (
            <h1 className="hover:bg-black h-[4vh] text-center p-1" key={`${lang}2`}>{lang}</h1>
          ))}
        </div>
        <div className="gap-4 flex flex-row max-nl:hidden h-[4vh] items-center">
          {language2.map((lang) => (
            <h1 className="hover:bg-black h-[4vh] text-center p-1" key={`${lang}3`}>{lang}</h1>
          ))}
        </div>
        <div className="gap-4 flex flex-row max-nxl:hidden h-[4vh] items-center">
          {language3.map((lang) => (
            <h1 className="hover:bg-black h-[4vh] text-center p-1" key={`${lang}4`}>{lang}</h1>
          ))}
        </div>
        <div className="gap-4 flex flex-row max-xl:hidden h-[4vh] items-center">
          {language4.map((lang) => (
            <h1 className="hover:bg-black h-[4vh] text-center p-1" key={`${lang}5`}>{lang}</h1>
          ))}
        </div>
        <div className="gap-4 flex flex-row max-2xl:hidden h-[4vh] items-center">
          {language5.map((lang) => (
            <h1 className="hover:bg-black h-[4vh] text-center p-1" key={`${lang}6`}>{lang}</h1>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-8 text-lg text-white items-center">
      <div className="hover:bg-black px-2 h-[4vh] flex flex-col justify-center items-center " onMouseOver={setModal} onMouseOut={unsetModal} >
          <BsCircleHalf />
          <div className="relative top-[6px] right-4 z-10">
          {visible && <Modal setDarkMode={setDarkMode} darkMode={darkMode}/>}
          </div>
        </div>
        {language && <World />}
        <div className="hover:bg-black px-2 h-[4vh] flex items-center" onClick={handleLanguage}>
          <BiWorld />
        </div>
       
        {search && <Search />}
        <div className="hover:bg-black px-2 h-[4vh] flex items-center " onClick={handleSearch} >
          <BsSearch />
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
