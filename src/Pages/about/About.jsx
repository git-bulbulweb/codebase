import React, { useState } from 'react'
import Aboutschool from '../../Components/aboutcom/Aboutschool'
import { BrowserRouter, Link, NavLink, Outlet } from 'react-router-dom'
import './about.css'
import Navbar from '../../Components/navbar/Navbar'
import Footer from '../../Components/footer/Footer'
import { GiHamburgerMenu } from 'react-icons/gi'

const About = () => {
    const [show, setshow] = useState(false);

    return (
        <div className='main-about'>
            <Navbar />

            <div className='about__main__page' >
                <div className="hamburger_menu">
                    <GiHamburgerMenu onClick={()=>setshow(!show)}/>
                </div>
                <div className="about__main-page">
                    {show &&
                        <div className="about__sidebar mobile_about_sidebar">

                            <h1>About us</h1>
                            <ul>

                                <li><Link to="/about" >About W3school</Link></li>
                                <li ><Link to="Abouterms" >About Terms</Link></li>
                                <li><Link to="Aboutprivacy" >About Privacy</Link></li>
                            </ul>
                        </div>
                    }

                    <div className="about__sidebar desktop_about_sidebar
                    ">

                        <h1>About us</h1>
                        <ul>

                            <li><NavLink to="/about" activeClassName = "active-new">About W3school</NavLink></li>
                            <li ><NavLink to="Abouterms" activeClassName = "active-new">About Terms</NavLink></li>
                            <li><NavLink to="Aboutprivacy" activeClassName = "active-new">About Privacy</NavLink></li>
                        </ul>
                    </div>
                    <Outlet />
                </div>

            </div>

        </div>
    )
}

export default About
