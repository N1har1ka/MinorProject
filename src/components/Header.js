import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const handleScrollToHiW = () => {
      const hiwElement = document.getElementById('hiw');
    if (hiwElement) {
      hiwElement.scrollIntoView({ behavior: 'smooth' });
    }    
    };
    const location = useLocation();
    const isSignupPage = location.pathname === '/signup'||location.pathname==='/login';
  return (
    <>
      <nav className={`mainnav ${isSignupPage ? 'header-hidden' : ''}`}>
        <ul className='navul'>
          <li className=''><Link to="/">
           <div className='ulli1'>
            <img src='https://tse1.mm.bing.net/th?id=OIP.5EBcdJl3ADM-KQyAn25JaQHaH3&pid=Api&P=0&h=180' width={50} height={50}/>
            <p>EzHire</p>
           </div>
          </Link></li>
          <div className='navdiv2'>
           <li className=''><Link to="/about">About Us</Link></li>
           <li className=''><Link to="/login"><button className='navbtn'>Login</button></Link></li>
           {/* <li className=''><Link to="/signup"><button className='navbtn'>Sign Up</button></Link></li> */}
           <li><button className='navbtn' onClick={handleScrollToHiW}>Sign Up</button></li>
          </div>
        </ul>
      </nav>
      <div className='navhr'><hr /></div>
    </>
  );
};

export default Header;