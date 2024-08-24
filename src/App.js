import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/Signup';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Footer from './components/Footer';
import './App.css';
import Card from './components/Card';
import HowItWorks from './components/HowItWorks';
import TC from './components/TC';

const App = () => {
  return (
    <Router>
      <Header />
      <MainRoutes />
    </Router>
  );
};
const MainRoutes = () => {
  const location = useLocation();
  const hideFooterPaths = ['/about', '/login', '/signup', '/dashboard', '/create-account', '/profile'];

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tc" element={<TC />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-account" element={<AccountCreation />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      {/* {!hideFooterPaths.includes(location.pathname) && <Footer />} */}
    </>
  );
};

export default App;