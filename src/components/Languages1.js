import React from 'react'

import Grid5 from './Grid5';
import Pink from './smallBox/Pink';
import Yellow from './smallBox/Yellow';
import Sky from './smallBox/Sky';
import White from './smallBox/White';

function Languages1() {
  return (
    <div className='flex flex-col gap-8 px-4 bg-[#282A35] py-6 dark:bg-[rgb(13,23,33)]'>
      <div className='grid md:grid-cols-2 gap-4'>
        <Pink heading={"C"} />
        <Yellow heading={"C++"} />
      </div>
      <div>
      <Grid5 />
      </div>
      <div className='grid md:grid-cols-2 gap-4'>
        <Sky  heading={"C"} />
        <Yellow heading={"C++"} />
        <Pink heading={"C#"} />
        <White heading={"Python"} />
      </div>
    </div>
  )
}

export default Languages1
