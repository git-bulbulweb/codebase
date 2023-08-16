import React from 'react'
import { AiOutlineSearch, AiOutlineCaretDown } from 'react-icons/ai';
import logo from '../../assets/W3Schools_logo.svg.png'
import './Navbar.css'
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import { ImCross } from 'react-icons/im'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    console.log(showMenu);

    return (
        <div>
            <div className="main-nav flex">
                <div className="nav-links">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul className='flex mobileMenu'>
                        <li > <Link  onClick={()=>setShowMenu(true)} >Menu <span> <AiOutlineCaretDown /></span></Link></li>
                            {showMenu &&
                              <div className="showonmobile">
                                 <ImCross className='close-btn' onClick={()=>setShowMenu(false)}/>
                                <Sidebar />
                            </div>
                            }
                           
                    </ul>


                    <ul className='flex main_desktop'>
                        <li><NavLink className='link' to="/" >Home<span className='rotate'><AiOutlineCaretDown /></span></NavLink></li>
                        <li><NavLink className='link' to="/contact" >Contact us <span className='rotate'><AiOutlineCaretDown /></span></NavLink></li>
                        <li><NavLink className='link' to="/about" >About<span className='rotate'><AiOutlineCaretDown /></span></NavLink></li>
                        
                    </ul>

                </div>

                <div className="search-btn flex">
                    <ul className='flex'>
                        <li><Link href="">Bootcamps</Link></li>
                        <li><Link href="">Spaces</Link></li>
                    </ul>
                    <div className="buttons-right">
                        <button>Sign in</button>
                        <button>login in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
