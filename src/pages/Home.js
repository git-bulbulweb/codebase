import React from 'react'
import Intro from '../components/Intro'
import ColourSec from '../components/ColourSec'
import Languages from '../components/Languages'
import Languages1 from '../components/Languages1'
import Editor from '../components/Editor'
import Spaces from '../components/Spaces'
import Picker from '../components/Picker'
import CodeGame from '../components/CodeGame'
import Exercise from '../components/Exercise'
import Template from '../components/Template'
import Career from '../components/Career'
import Section from '../components/Section'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='relative top-[12vh]'>
      <Intro />
      <ColourSec heading="HTML" description={"The language for building web pages"}
      p1={`<!DOCTYPE html>`} p2={`<!html>`} p3={`<title>HTML Tutorial</title>`} p4={`<body>`} p5={`<h1>This is a heading</h1>`} p6={`</body>`} p7={`</html>`} color={"#D9EEE1"}
      />
      <ColourSec heading="CSS" description={"The language for building web pages"}
      p1={`body {`} p2={`background-color: lightblue;`} p3={`color: white;`} p4={`text-align: center;`} p5={` font-family: verdana;`} p6={`}`}  color={"#FFF4A3"}
      />
      <ColourSec heading="JAVASCRIPT" description={"The language for programming web pages"}
      p1={`<button onclick="myFunction()">Click Me!`} p2={`</button>`} p3={`function myFunction() {`} p4={`console.log("hello worl");`} p5={`}`} color={"#282A35"}
      dark={"rgb(13,23,33)"} />
      <ColourSec heading="PYTHON" description={"A popular programming language"}
      p1={`if 5 > 2:`} p2={`print("Five is greater than two!")`} color={"#96D4D4"}
      />
      <Languages />
      <Languages1 />
      <Editor />
      <Spaces />
      <Picker />
      <CodeGame />
      <Exercise />
      <Template />
      <Career />
      <Section />
      <Footer />
    </div>
  )
}

export default Home
