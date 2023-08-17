import React from 'react'
import BigPink from './bigbox/BigPink'
import BigYellow from './bigbox/BigYellow'
import BigWhite from './bigbox/BigWhite'
import BigLight from './bigbox/BigLight'
import BigSky from './bigbox/BigSky'

function Languages() {
  return (
    <div className='grid md:grid-cols-2 justify-center items-center bg-[#282A35] gap-8 xl:px-32 px-8 py-8 max-sm:hidden dark:bg-[rgb(13,23,33)]'>
        <BigPink heading="C++" description="A programming language" />
        <BigYellow heading="Python" description="Most popular programming language" />
        <BigWhite heading="Bootstrap" description="A CSS Framework" />
        <BigLight heading="Java" description="A programming language" />
        <BigSky heading="CSS" description="Styling Sheet" />
        <BigWhite heading="Javascript" description="A programming language" />
    </div>
  )
}

export default Languages
