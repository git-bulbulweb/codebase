import React,{useState , useEffect} from 'react';
import Navbar from './components/Navbar';
import { createPortal } from 'react-dom';
import Navbar2 from './components/Navbar2';
import Home from './pages/Home';
import Modal from './components/Modal';
import Tutorials from './pages/Tutorials';
import Exercise from './pages/Exercise';
import Certified from './pages/Certified';
import Services from './pages/Services';
import Menu  from './components/Menu';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Routes,Route } from 'react-router-dom';
import {useLocation } from 'react-router-dom';
import Search from './components/Search';
import World from './components/World';

function App() {
  const [darkMode,setDarkMode]=useState(false);
  const [showNavLink,setShowNavLink]=useState("");
  if (darkMode){
    document.documentElement.classList.add('dark')
  }
  else{
    document.documentElement.classList.remove('dark')
  }
  const {pathname}=useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])
 
  return (
    <div className="">
      <Navbar setShowNavLink={setShowNavLink} showNavLink={showNavLink}/>
      <Navbar2 setDarkMode={setDarkMode} darkMode={darkMode}/>
      {showNavLink==="tutorial" && createPortal(<Tutorials setShowNavLink={setShowNavLink} />,document.body)}
      {showNavLink==="exercise" && createPortal(<Exercise setShowNavLink={setShowNavLink}/>,document.body)}
      {showNavLink==="services" && createPortal(<Services setShowNavLink={setShowNavLink}/>,document.body)}
      {showNavLink==="certified" && createPortal(<Certified setShowNavLink={setShowNavLink}/>,document.body)}
      {showNavLink==="menu" && createPortal(<Menu setShowNavLink={setShowNavLink}/>,document.body)}

     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
     </Routes>
      {/* <Home /> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
