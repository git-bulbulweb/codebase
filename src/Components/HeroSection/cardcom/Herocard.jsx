import React from 'react'
import './herocard.css';
const Herocard = ({item,index}) => {
   
    return (
        <div className='main_hero_item' key={index}>
            <div className="herocardsitem">
                <div className="card-content">
                    <h2>{item.heading}</h2>
                    <p>{item.desc}</p>
                    {
                         item.buttons.map((item,index)=>{
                              return <button key={index} className={`btn btn-`+index }>{item.btn}</button>
                         })

                    }
                </div>
                <div className="card-code">
                    <h4>{item.example}</h4>
                    <pre>{item.code}</pre>
                    <button>{item.trybtn}</button>
                </div>
            </div>
            </div>
    )
}

export default Herocard
