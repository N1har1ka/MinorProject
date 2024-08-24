import React from 'react'
import './Login.css';
export default function Login() {
  return (
    <div className='formdiv'>
      <form action="">
        <p className='signin'>SIGN IN</p> 
        <label htmlFor="email">Email</label><br />
        <input className='inputep' type="text" name="email" id="email" /> <br />
        <label htmlFor="password">Password</label><br />
        <input className='inputep' type="password" name="password" id="password" />
        <div className='rmdiv'>
          <div className='rmdivi'>
          <input type="checkbox" name="rm" id="rm" />
          <p htmlFor="rm">Remember Me</p>
          </div>
          <p>Forgot Password?</p>
        </div>
        <button className='signbtn'>Sign In</button>
        <p className='signlp'>Don't have an Account? Sign Up</p>
      </form>
    </div>
  )
}