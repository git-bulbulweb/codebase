import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch, AiOutlineCaretDown } from 'react-icons/ai';
import './sidebar.css'
const Sidebar = () => {
    return (
        <div className='sidebar'>

            <ul className='flex desktop'>
                <li><Link className='link' to="/" >Home<span className='rotate'><AiOutlineCaretDown /></span></Link></li>
                <li><Link className='link' to="/contact" >Contact us <span className='rotate'><AiOutlineCaretDown /></span></Link></li>
                <li><Link className='link' to="/about" >About<span className='rotate'><AiOutlineCaretDown /></span></Link></li>
                <li><Link href="">Bootcamps</Link></li>
                <li><Link href="">Spaces</Link></li>
                <li><Link href="">Sign Up</Link></li>

            </ul>

        </div>
    )
}

export default Sidebar
