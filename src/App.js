import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './Pages/home/Home';
import Contact from './Pages/contact/Contact';
import About from './Pages/about/About';
import Aboutschool from './Components/aboutcom/Aboutschool';
import Abouterms from './Components/aboutcom/Abouterms'
import Aboutprivacy from './Components/aboutcom/Aboutprivacy'
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />}></Route>

        {/* <Route path='/' element={}></Route> */}
        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/about" element={<About />}>
               <Route  path="/about" element={<Aboutschool/>}></Route>
               <Route  path="Abouterms" element={<Abouterms/>}></Route>
               <Route  path="Aboutprivacy" element={<Aboutprivacy/>}></Route>
              
        </Route>


      

      </Routes>
    </BrowserRouter>


  );
}

export default App;
