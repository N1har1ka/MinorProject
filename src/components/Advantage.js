import React from 'react'
import { CgProfile } from "react-icons/cg";
import './Advantage.css';
export default function Advantage() {
  return (
    <div className='hiwdiv'>
      <p className='hiwdivp'>Everything you need to Hire and get Hired</p>
      <div className='hiwcard'>
        <h1 className='hiwcardh1'><CgProfile/></h1>
        <h2 className='hiwcardh2'>Profile Verification</h2>
        <p className='hiwcardp'>You can get easily verified by the help of our system. you just need to register properly.</p>
      </div>
    </div>
    
  )
}