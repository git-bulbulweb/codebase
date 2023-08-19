import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import logo from '../../assets/W3Schools_logo.svg.png'
const FooterData = [
    {
        head: "Top Tutorials",
        link1: [{ link: "HTML Tutorial" }, { link: "CSS Tutorial" }, { link: "JavaScript Tutorial" }, { link: "How To Tutorial" }, { link: "SQL Tutorial" }, { link: "Python Tutorial" }, { link: "W3.CSS Tutorial" }, { link: "Bootstrap Tutorial" }, { link: "PHP Tutorial" }, { link: "Java Tutorial" }, { link: "C++ Tutorial" }, { link: "jQuery Tutorial" }]
    },
    {
        head: "Top Tutorials",
        link1: [{ link: "HTML Tutorial" }, { link: "CSS Tutorial" }, { link: "JavaScript Tutorial" }, { link: "How To Tutorial" }, { link: "SQL Tutorial" }, { link: "Python Tutorial" }, { link: "W3.CSS Tutorial" }, { link: "Bootstrap Tutorial" }, { link: "PHP Tutorial" }, { link: "Java Tutorial" }, { link: "C++ Tutorial" }, { link: "jQuery Tutorial" }]
    },
    {
        head: "Top Tutorials",
        link1: [{ link: "HTML Tutorial" }, { link: "CSS Tutorial" }, { link: "JavaScript Tutorial" }, { link: "How To Tutorial" }, { link: "SQL Tutorial" }, { link: "Python Tutorial" }, { link: "W3.CSS Tutorial" }, { link: "Bootstrap Tutorial" }, { link: "PHP Tutorial" }, { link: "Java Tutorial" }, { link: "C++ Tutorial" }, { link: "jQuery Tutorial" }]
    },
    {
        head: "Top Tutorials",
        link1: [{ link: "HTML Tutorial" }, { link: "CSS Tutorial" }, { link: "JavaScript Tutorial" }, { link: "How To Tutorial" }, { link: "SQL Tutorial" }, { link: "Python Tutorial" }, { link: "W3.CSS Tutorial" }, { link: "Bootstrap Tutorial" }, { link: "PHP Tutorial" }, { link: "Java Tutorial" }, { link: "C++ Tutorial" }, { link: "jQuery Tutorial" }]
    }
]

const Footer = () => {
    return (
        <div className='container'>
            <div className="footer_links">
                {
                    FooterData.map((item, index) => {

                        return (
                            <div className="footer_links_items" key={index}>
                                <h3>{item.head}</h3>
                                {
                                    item.link1.map((item1, index) => {
                                        return <Link key={index}>{item1.link}</Link>
                                    })
                                }
                            </div>
                        )

                    })
                }

            </div>
            <div className="form_about_links">
                <Link to="/contact">Contact Us</Link>
                <span>|</span>
                <Link>About</Link>
            </div>
            <footer className='footer_main'>
                <p>
                W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.
                 Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. 
                 While using W3Schools, you agree to have read and accepted our <Link>terms of use</Link>, <Link>cookie and privacy policy</Link>.</p>
                 <p><Link>Copyright 1999-2023</Link> by Refsnes Data. All Rights Reserved.</p>
                 <p><Link>W3Schools is Powered by W3.CSS</Link>.</p>
                 <div className="logo">
                    <Link>
                          <img src={logo} alt="" />
                    </Link>
                       
                 </div>
            </footer>
        </div>
    )
}

export default Footer
