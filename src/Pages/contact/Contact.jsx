import React, { useState } from 'react'
import "./contact.css";
import { ImCross } from 'react-icons/im'
import Navbar from '../../Components/navbar/Navbar';
import Footer from '../../Components/footer/Footer';
const Contact = () => {


    return (
        <div>
           <Navbar/>
            <div className='contact_us'>
                <div className="heading">
                    <h2>Contact Us</h2>
                </div>
                <form action="" className='contact_form'>
                    <label htmlFor="Message">Your Message</label>
                    <textarea name="" id="Message" >
                    </textarea>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="" id="name" />
                    <label htmlFor='email'>Your email</label>
                    <input type="email" name="" id="email" />
                    <input type="button" value="Send" className='btn-send' />
                </form>

            </div>
           <Footer/>

        </div>


    )
}

export default Contact
