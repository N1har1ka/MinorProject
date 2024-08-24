import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div className='Footer'>
    <hr />
     <div className='mainfooter'>
      <div>
        <ul>
          <div>
          <p>EZHIRE <hr className='hr'></hr></p>
          </div>
          <li className=''><Link to="/tc">Contact Us</Link></li>
          <li>UPES</li>
          <li>Services</li>
          <li>LogOut</li>
        </ul>
      </div>
      <div>
        <ul>
          <p>ABOUT<hr className='hr'></hr></p>
          <li>Founders</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>User Guide</li>
        </ul>
      </div>
      <div>
        <ul>
          <p>SUPPORT <hr className='hr'></hr></p>
          <li>Pricing</li>
          <li>Feedback</li>
          <li>Contact Us</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div>
        <ul>
          <p>COMMUNITY <hr className='hr'></hr></p>
          <li>Instagram</li>
          <li>Discord</li>
          <li>Linkedln</li>
          <li>Facebook</li>
        </ul>
      </div>
      </div> 
    </div>
  )
}