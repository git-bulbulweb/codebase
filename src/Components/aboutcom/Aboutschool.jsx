import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import './aboutschool.css'
const MoreLanguages = [
    {
        className: "span_hero_card",
        lang: "C"
    },
    {
        className: "span_hero_card",
        lang: "C#"
    },
    {

        lang: "R"
    },
    {
        lang: "Kotlin"
    }, {
        lang: "Node.js"
    }, {
        lang: "React"
    }, {
        lang: "JSON"
    }, {
        lang: "Vue"
    }, {
        lang: "MySQL"
    }, {
        lang: "XML"
    }, {
        lang: "Sass"
    }, {
        lang: "Icons"
    }, {
        lang: "RWD"
    }, {
        lang: "Graphics"
    }, {
        lang: "SVG"
    }, {
        lang: "Canvas"
    }, {
        lang: "Raspberry Pi"
    }, {
        lang: "Cyber Security"
    }, {
        lang: "Colors"
    }, {
        lang: "Git"
    }, {
        lang: "Matplotlib"
    }, {
        lang: "NumPy"
    }, {
        lang: "Pandas"
    }, {
        lang: "SciPy"
    }, {
        lang: "ASP"
    }, {
        lang: "AngularJS"
    }, {
        lang: "AppML"
    }, {
        lang: "Go"
    }, {
        lang: "TypeScript"
    }, {
        lang: "Django"
    }, {
        lang: "MongoDB"
    }, {
        lang: "Statistics"
    }, {
        lang: "Data Science"
    }, {
        lang: "Typing Speed"
    }, {
        lang: "HowTo"
    }, {
        lang: "Code Game"
    }, {
        lang: "Spaces"
    },
    {
        lang: "PostgreSQL"
    }, {
        className: "span_hero_card",
        lang: "Excel"
    }, {
        className: "span_hero_card",
        lang: "Google Sheets"
    }, {
        className: "span_hero_card",
        lang: "Machine Learning"
    }, {
        className: "span_hero_card",
        lang: "Artificial Intelligence"
    },

]
const Aboutschool = () => {
    return (
        <div className='About_us_container'>
           
            <div className="header-content">
                <h2>About W3Schools</h2>
                <div className="buttons">
                   <Link to="/about/Aboutprivacy">Prev</Link>
                    <Link to="/about/Abouterms">Next</Link>
                </div>
                <div className="largest_community">
                    <p>The largest web developer site on the internet.</p>
                    <p>3 billion pages displayed each year.</p>
                    <p>70 million visitors each month.</p>
                </div>
                <div className="what_is_school">
                    <div className="what_header">
                        <h2>What is W3Schools?</h2>
                    </div>
                    <div className="what_ans">
                        <p>We create simplified and interactive learning experiences.</p>
                        <p>Learning web development should be easy to understand and available for everyone, everywhere!</p>
                        <p>W3Schools is a school for web developers, covering all the aspects of web development:</p>
                    </div>
                    <div className="what_languages">
                        {
                            MoreLanguages.map((item, index) => {
                                return <Link key={index}>{item.lang}</Link>
                            })
                        }
                    </div>
                    <div className="when_created">
                        <p>W3Schools was created in 1998, and derives its name from the World Wide Web (WWW) but is not affiliated with the W3C.</p>
                    </div>
                </div>
                <div className="easy_learning">
                    <div className="heading_learn">
                        <h2>Easy Learning</h2>
                    </div>
                    <div className='answer_learn'>
                        <p>W3Schools has focus on simplicity.</p>
                        <p>W3Schools practice easy learning.</p>
                        <p>W3Schools uses simple code examples and simple illustrations of how to use it.</p>
                        <p>W3Schools' tutorials start from basic level and move all the way up to professional references.</p>
                    </div>

                </div>
                <div className="try_yourself">
                    <div className="heading_try">
                        <h2>Try It Yourself</h2>
                    </div>
                    <div className="answer_try">
                        <p>W3schools presents thousands of code examples.</p>
                        <p>By using our online editor, Try it Yourself, you can edit examples and execute computer code experimentally, to see what works and what does not, before implementing it.</p>
                    </div>
                </div>
                <div className="school_free">
                    <div className="heading_school">
                        <h2>W3Schools is Free</h2>
                        <p>W3Schools is, and will always be, a completely free developers resource.</p>
                    </div>
                </div>
                <div className="chat_gpt">
                    <div className="heading_gpt">
                        <h2>ChatGPT</h2>
                    </div>
                    <div className="chat_gpt_content">
                        <p>This is how ChatGPT describes W3Schools:</p>
                        <p><i>"W3Schools is a popular online platform that provides web development tutorials and references for various web technologies. It serves as a comprehensive resource for individuals who are learning or looking to enhance their skills in HTML, CSS, JavaScript, and other related technologies.</i></p>
                        <p><i>The website offers a wide range of educational materials, including beginner-friendly tutorials, interactive examples, and hands-on exercises. These resources are designed to help users understand the fundamentals of web development and gain practical experience. Users can learn about topics such as web design, front-end development, back-end development, database management, and more.</i></p>
                         <p><i>One of the notable features of W3Schools is its "Try it Yourself" editor, which allows users to experiment with code directly within their web browser. This interactive environment enables learners to test out different code snippets, modify them, and see the results in real-time, providing an effective way to practice and reinforce their understanding.</i></p>
                         <p><i>In addition to tutorials, W3Schools also provides comprehensive references for various web technologies, which serve as handy guides for developers when they need quick information or syntax references. The platform covers a wide range of subjects, including HTML elements, CSS properties, JavaScript functions, SQL queries, and more.</i></p>
                         <p><i>Overall, W3Schools is a well-regarded resource that has been utilized by numerous individuals seeking to learn web development concepts or refresh their knowledge. However, it's worth noting that while W3Schools is a valuable learning platform, it is not affiliated with the official World Wide Web Consortium (W3C), the international standards organization for the web."</i></p>
                    </div>
                </div>
                <div className="you_help">
                     <div className="head_help">
                        <h2>You Can Help</h2>
                     </div>
                     <div className="help_content">
                         <p>Many people work very hard to ensure w3schools remains useful, updated, and interesting.</p>
                         <p>If you find an error, or a broken link, please tell us about it.</p>
                         <p>Use the link "REPORT ERROR" at the bottom of each page.</p>
                     </div>
                </div>
                <div className="demographics">
                       <div className="heading_demo">
                          <h2>W3Schools Demographics</h2>
                       </div>
                       <div className="demo_content">
                            <table>
                                  <tr>
                                      <th>Origin</th>
                                      <th>Percent</th>
                                  </tr>
                                  <tr>
                                       <td>Asia</td>
                                       <td>38 %</td>
                                  </tr>
                                  <tr>
                                       <td>America</td>
                                       <td>30 %</td>
                                  </tr>
                                  <tr>
                                       <td>Europe</td>
                                       <td>27 %</td>
                                  </tr>
                                  <tr>
                                       <td>Africa</td>
                                       <td>3 %</td>
                                  </tr>
                                  <tr>
                                       <td>Oceania</td>
                                       <td>2 %</td>
                                  </tr>
                            </table>
                              <p>Source: Google Analytics</p>
                       </div>

                </div>
                <div className="buttons">
                <Link to="/about/Aboutprivacy">Prev</Link>
                     <button className='login_btn'>Login to track Process</button>
                    <Link to="/about/Abouterms">Next</Link>
                   
                </div>
            <Footer/>
            </div>
        </div>
    )
}

export default Aboutschool
