import React from 'react'
import './hero.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Herocard from './cardcom/Herocard'
const Herodata = [
    {
        heading: "HTML",
        desc: "The langauage for Building Web Pages",
        buttons: [{ btn: "Learn HTML" }, { btn: "HTML Reference" }, { btn: "Get Certified" }],
        example: "HTML Example",
        code: `
<!DOCTYPE html>
<html>
<title>HTML Tutorial</title>
<body>
         
<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
         `,
        trybtn: "Try it Yourself"
    },
    {
        heading: "CSS",
        desc: "The language for styling web pages",
        buttons: [{ btn: "Learn CSS" }, { btn: "CSS Reference" }, { btn: "Get Certified" }],
        example: "CSS Example:",
        code: `
body {
    background-color: lightblue;
  }
  
h1 {
    color: white;
    text-align: center;
  }
  
p {
    font-family: verdana;
  }
  
         `,
        trybtn: "Try it Yourself"
    },
    {
        heading: "JavaScript",
        desc: "The language for programming web pages",
        buttons: [{ btn: "Learn JavaScript" }, { btn: "JavaScript Reference" }, { btn: "Get Certified" }],
        example: "JavaScript Example:",
        code: `
<button onclick="myFunction()">Click Me!</button>
<script>
    function myFunction() {
      let x = document.getElementById("demo");
      x.style.fontSize = "25px";
      x.style.color = "red";
    }
</script>
         `,
        trybtn: "Try it Yourself"
    }
    ,
    {
        heading: "Python",
        desc: "A popular programming language",
        buttons: [{ btn: "Learn Python" }, { btn: "Python Reference" }, { btn: "Get Certified" }],
        example: "Python Example:",
        code: `
if 5 > 2:
  print("Five is greater than two!")
         `,
        trybtn: "Try it Yourself"
    },
    {
        heading: "SQL",
        desc: "A language for accessing databases",
        buttons: [{ btn: "Learn SQL" }, { btn: "SQL Reference" }, { btn: "Get Certified" }],
        example: "SQL Example:",
        code: `
SELECT * FROM Customers
WHERE Country='Mexico';
         `,
        trybtn: "Try it Yourself"
    }
]
const LanguageData = [
    {
        head: "PHP",
        desc: "A web sever programming language",
        button: "Learn PHP"
    },
    {
        head: "jQuery",
        desc: "A JS library for developing web pages",
        button: "Learn jQuery"
    },
    {
        head: "Java",
        desc: "A programming language",
        button: "Learn Java"
    },
    {
        head: "C++",
        desc: "A programming language",
        button: "Learn C++"
    },
    {
        head: "W3.CSS",
        desc: "A CSS framework for faster and better responsive web pages",
        button: "Learn W3.css"
    },
    {
        head: "Bootstrap",
        desc: "A CSS framework for designing better web pages",
        button: "Learn Bootstrap"
    },
]
const MoreLanguages = [
     {
         className:"span_hero_card",
         lang:"C"
     },
     {
        className:"span_hero_card",
        lang:"C#"
    },
    {
        
        lang:"R"
    },
    {
        lang:"Kotlin"
    },{
        lang:"Node.js"
    },{
        lang:"React"
    },{
        lang:"JSON"
    },{
        lang:"Vue"
    },{
        lang:"MySQL"
    },{
        lang:"XML"
    },{
        lang:"Sass"
    },{
        lang:"Icons"
    },{
        lang:"RWD"
    },{
        lang:"Graphics"
    },{
        lang:"SVG"
    },{
        lang:"Canvas"
    },{
        lang:"Raspberry Pi"
    },{
        lang:"Cyber Security"
    },{
        lang:"Colors"
    },{
        lang:"Git"
    },{
        lang:"Matplotlib"
    },{
        lang:"NumPy"
    },{
        lang:"Pandas"
    },{
        lang:"SciPy"
    },{
        lang:"ASP"
    },{
        lang:"AngularJS"
    },{
        lang:"AppML"
    },{
        lang:"Go"
    },{
        lang:"TypeScript"
    },{
        lang:"Django"
    },{
        lang:"MongoDB"
    },{
        lang:"Statistics"
    },{
        lang:"Data Science"
    },{
        lang:"Typing Speed"
    },{
        lang:"HowTo"
    },{
        lang:"Code Game"
    },{
        lang:"Spaces"
    },
    {
        lang:"PostgreSQL"
    }, {
        className:"span_hero_card",
        lang:"Excel"
    }, {
        className:"span_hero_card",
        lang:"Google Sheets"
    }, {
        className:"span_hero_card",
        lang:"Machine Learning"
    }, {
        className:"span_hero_card",
        lang:"Artificial Intelligence"
    },

]
const Hero = () => {

    return (
        <div className='heroSection'>
            <div className="learn_code">
                <h1>Learn to Code</h1>
                <h4>With the world's largest web developer site.</h4>
                <div className="searchbutton">
                    <input type="text" placeholder='Search our tutorial e.g HTML' name="" id="" />
                    <AiOutlineSearch className='searchicon' />
                </div>
                <Link className='notsure'>Not Sure Where to begin?</Link>

            </div>
            <svg className='wave' width="100%" height="70" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" fill="#282A35"></path>
            </svg>
            <div className="herocards">
                {
                    Herodata.map((item, index) => {
                       
                        return <Herocard item={item} key={index} />

                    })
                }
            </div>
            <div className="hero_languages">
                <div className="hero_language_cards">
                    {
                        LanguageData.map((item, index) => {
                            return (
                                < div className="language_card"  key={index} >
                                    <h2>{item.head}</h2>
                                    <p>{item.desc}</p>
                                    <button>{item.button}</button>
                                </div>
                            )
                        })
                    }
                </div>
               <div className="hero_language_cards"> 
                     {
                         MoreLanguages.map((item,index)=>{
                            return(
                                <div className={`language_card_item ` + item.className} key={index}>
                                    <h2>{item.lang}</h2>
                              </div>
                            )
                              
                         })
                     }
                </div>


            </div>
        </div >
    )
}

export default Hero
