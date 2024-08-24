import React from 'react'
import './Home.css';
import Footer from './Footer';
import HowItWorks from './HowItWorks';
import Advantage from './Advantage';
export default function Home() {
  return (
    <>
    <div className='homediv'>
      <div className='homediv1'>
      <p>India's first platform for the poor workers who are unemployed and search for work.</p>
      <p>Welcome to EzHire, where we connect workers or constructors within location. Our platform ensures employment to the poor and as well easy going platform for the clients and contructors . 
      Workers can also apply to be the worker for the client or the customer, all rigorously verified. Experience seamless hiring and employment advancement with us.</p>
      </div>
      <div>
        <img src="https://th.bing.com/th/id/OIP.6MldFSLNNmClpQXAgZHXqgHaFj?rs=1&pid=ImgDetMain" alt="" />
      </div>
    </div>
    <HowItWorks/>
    <Advantage/>
    <Footer/>
    </>
  )
}