import React from 'react'
import img from '../components/images/working.png'
import './TC.css'
export default function TC() {
  return (
    <div>
      <h1 className='sihi'>Uner Construction</h1>
      <p className='sip'>We will be coming back soon</p>
      <img className='siimg' src={img} alt="" />
      <p>We are doing important maintenance work on the website and will be back shortly. We apologise for any inconvenience caused. If you need to get in touch with us, please use one of the options below:
      Email us:Admin@EzHire.com
      Contact Us:
      +91 6377901081
      +91 8955585938</p>
    </div>
  )
}