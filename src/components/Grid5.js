import React from 'react'
import White from './smallBox/White'
import Light from './smallBox/Light'
import Sky from './smallBox/Sky'
import Pink from './smallBox/Pink'
import Yellow from './smallBox/Yellow'

function Grid5() {
  return (
      <div className='grid lg:grid-cols-4 grid-cols-2 max-sm:grid-cols-1 gap-4 justify-center items-center'>

        <White heading={"AI"} />
        <Light heading={"ML"} />
        <Sky heading="Blockchain" />
        <Pink heading={"Angular.js"} />

        <Yellow heading={"Matterial UI"} />
        <White heading={"Three.js"} />
        <Light heading={"Framer Motion"} />
        <Sky heading={"React.js"} />

        <Pink heading={"Colors"} />
        <Yellow heading={"CSS"} />
        <White heading={"Tailwind CSS"} />
        <Light heading={"Bootstrap"} />

        <Sky heading={"C#"} />
        <Pink heading={"TypeScript"} />
        <Yellow heading={"ASP"} />
        <White heading={"NumPy"} />

        <Light heading={"C++"} />
        <Sky heading={"C#"} />
        <Pink heading={"Python"} />
        <Yellow heading={"React.js"} />

        <White heading={"MongoDB"} />
        <Light heading={"MySQL"} />
        <Sky heading={"SQL"}  />
        <Pink heading={"PostgreSQL"} />

        <Yellow heading={"Data Science"} />
        <White heading={"Statics"} />
        <Light heading={"Typing Speed"} />
        <Sky heading={"Go"} />

        <Pink heading={"Angular.js"}  />
        <Yellow heading={"JQuery"} />
        <White heading={"SQLite"} />
        <Light heading={"Oracle"}  />

        <Sky heading={"Typing Speed"}  />
        <Pink heading={"Matplotlib"}  />
        <Yellow heading={"Django"} />
        <White heading={"ASP"} />

    </div>
  )
}

export default Grid5
