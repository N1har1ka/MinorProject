import React from 'react'
import './HowItWorksCard.css'
export default function HowItWorksCard(props) {
  return (
    <div>
      <div className='hitc'>
        <div>
          <p><h2>{props.t1}</h2></p>
          <div>{props.d1}</div>
        </div>
        <img src={props.img1} alt="" width={350} height={250}/>
      </div>
      <div className='hitc'>
        <img src={props.img2} alt="" width={350} height={250} />
        <div>
          <p><h2>{props.t2}</h2></p>
          <div>{props.d2}</div>
        </div>
      </div>
    </div>
  )
}