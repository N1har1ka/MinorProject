import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dummy authentication logic
    // Replace this with actual authentication logic
    // if (email === 'user@example.com' && password === 'password') {
      if ( password === 'password') {
      // Dummy logic to determine the dashboard based on the email
      // Replace this with your actual logic to determine the user role/section
      let dashboardPath = '/dashboard';
      if (email === 'client@example.com') {
        dashboardPath = '/client-dashboard'; // Path for client dashboard
      } else if (email === 'contractor@example.com') {
        dashboardPath = '/contractor-dashboard'; // Path for contractor dashboard
      } else {
        dashboardPath = '/worker-dashboard'; // Default path for worker dashboard
      }

      // Set user as logged in (e.g., save token or user info in localStorage or state)
      if (rememberMe) {
        localStorage.setItem('loggedIn', 'true');
      } else {
        sessionStorage.setItem('loggedIn', 'true');
      }

      // Redirect to the appropriate user dashboard
      navigate(dashboardPath);
    } else {
      // Handle login failure
      alert('Invalid email or password');
    }
  };

  return (
    <div className='formdiv'>
      <form onSubmit={handleSubmit}>
        <p className='signin'>SIGN IN</p> 
        <label htmlFor="email">Email</label><br />
        <input
          className='inputep'
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> <br />
        <label htmlFor="password">Password</label><br />
        <input
          className='inputep'
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='rmdiv'>
          <div className='rmdivi'>
            <input
              type="checkbox"
              name="rm"
              id="rm"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rm">Remember Me</label>
          </div>
          <p>Forgot Password?</p>
        </div>
        <button className='signbtn' type="submit">Sign In</button>
        <p className='signlp'>Don't have an Account? <a href="/signup">Sign Up</a></p>
      </form>
    </div>
  );
}
