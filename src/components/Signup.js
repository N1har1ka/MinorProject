import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './Signup.css'
import { Link } from 'react-router-dom'
export default function Signup() {
  const navigate = useNavigate();  // Use useNavigate instead of useHistory
  const location = useLocation();
  const { title } = location.state || {};
  console.log('Title from state:', title);  // Add this in Signup component
  const handleAccountCreation = () => {
      if (title === 'Client') {
          navigate('/client-dashboard');  // Use navigate() for navigation
      } else if (title === 'Worker') {
          navigate('/worker-dashboard');  // Use navigate() for navigation
      } else if (title === 'Contractor') {
          navigate('/contractor-dashboard');  // Use navigate() for navigation
      } else {
        console.error('Unknown role:', title);  // Debug unknown role
      }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAccountCreation();
};
  return (
    <div className='signupmain'>
      <div>
      <Link to="/">
           <div className='ulli1'>
            <img src='https://tse1.mm.bing.net/th?id=OIP.5EBcdJl3ADM-KQyAn25JaQHaH3&pid=Api&P=0&h=180' width={50} height={50}/>
            <p>EzHire</p>
           </div>
      </Link>
      <div className='su1'>
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <Link to="/login"><button className='subtn'>Login</button></Link>
      </div>
      </div>
      <div className='su2'>
      <div className='formdiv'>
      <form onSubmit={handleSubmit}>
        <p className='signin'>CREATE ACCOUNT</p> 
        <label htmlFor="email">Email</label><br />
        <input className='inputep' type="text" name="email" id="email" /> <br />
        <label htmlFor="password">Create Password</label><br />
        <input className='inputep' type="password" name="password" id="password" />
        <div className='rmdiv'>
          <div className='rmdivi'>
          <input type="checkbox" name="rm" id="rm" />
          <p htmlFor="rm">Remember Me</p>
          </div>
          <p>Forgot Password?</p>
        </div>
        <button type='submit' className='signbtn'>Sign Up</button>
      </form>
    </div>
      </div>
    </div>
  )
}