import React, { useState } from 'react'
import Card from './Card'
import { GrUserWorker } from "react-icons/gr";
import { IoMdPerson } from "react-icons/io";
import img1 from '../components/images/img1.jpeg';
import img2 from '../components/images/img2.jpg';
import img3 from '../components/images/img3.jpeg';
import img4 from '../components/images/img4.jpeg';
import img5 from '../components/images/img5.jpeg';
import img6 from '../components/images/img6.jpeg';
import './HowItWorks.css'
import HowItWorksCard from './HowItWorksCard';
export default function HowItWorks() {
  const [selectedRole, setSelectedRole] = useState('client');
  const handleClientClick = () => setSelectedRole('client');
  const handleConstructorClick = () => setSelectedRole('constructor');
  const handleWorkerClick = () => setSelectedRole('worker');

  return (
    <div className='hiwmain' id='hiw'>
      <h2 className='hitp'>HOW IT WORKS? </h2>
      <div className='hitcard'>
      <Card title={"Client ?"} desc={"Are you seeing contractors or workers for your work. This is site is for you."}/>
      <Card title={"Constructor"} desc={"Do you need workers for your team you can explore here or if you need a client."}/>
      <Card title={"Worker"} desc={"If you want to earn money or searching for work so this website is for you."}/>
      </div>
      <div className='hitnav'>
        <button onClick={handleClientClick}><IoMdPerson/> For Client</button>
        <button onClick={handleConstructorClick}><GrUserWorker/> For Constructor</button>
        <button onClick={handleWorkerClick}><GrUserWorker/> For Worker</button>
      </div>
      {selectedRole === 'client' && (<HowItWorksCard
      t1={"You want to hire constructor"} 
      d1={"As a client looking to bring your project to life, finding the right constructor is crucial to ensuring quality,efficiency, and a successful outcome. Whether you’re building a new home, renovating a space, or undertaking a commercial construction project, hiring a skilled constructor will provide you with the expertise needed to navigate the complexities of the construction process.Our platform connects you with experienced constructors who understand your vision, manage the project from start to finish, and deliver results that meet your expectations. Trust us to help you find the perfect constructor to turn your plans into reality. "} 
      t2={"You want to hire any worker"} 
      d2={"As a client ready to execute your project, having a reliable team of workers is essential to achieving your goals on time and within budget. Whether you're undertaking a small renovation or a large-scale construction, hiring skilled workers ensures that every task is completed with precision and care. Our platform makes it easy for you to connect with experienced and dedicated workers who can bring your vision to life. From general laborers to specialized trades, you'll find the right talent to get the job done efficiently and effectively. Let us help you build the team you need to turn your project into a success."}
      img1={img1}
      img2={img2}
      />)}
      {selectedRole === 'constructor' && (<HowItWorksCard
      t1={"You want to hire worker"} 
      d1={"As a client ready to execute your project, having a reliable team of workers is essential to achieving your goals on time and within budget. Whether you're undertaking a small renovation or a large-scale construction, hiring skilled workers ensures that every task is completed with precision and care. Our platform makes it easy for you to connect with experienced and dedicated workers who can bring your vision to life. From general laborers to specialized trades, you'll find the right talent to get the job done efficiently and effectively. Let us help you build the team you need to turn your project into a success. "} 
      t2={"You want to any projects"} 
      d2={"As a constructor eager to showcase your skills and expertise, finding the right projects and clients is key to growing your business and reputation. Whether you specialize in residential, commercial, or industrial construction, our platform connects you with clients seeking experienced professionals who can bring their visions to life. By joining our network, you gain access to a steady stream of project opportunities, allowing you to focus on what you do best—delivering high-quality work on time and within budget. Let us help you secure the projects that will take your construction business to new heights."}
      img1={img3}
      img2={img4}
      />)}
      {selectedRole === 'worker' && (<HowItWorksCard
      t1={"You want to work"} 
      d1={"As a skilled worker seeking new opportunities, connecting with the right clients is essential to advancing your career and securing steady work. Whether you’re a general laborer, carpenter, electrician, or specialize in any other trade, our platform links you with clients who value your expertise and dedication. By joining our network, you can find a variety of projects that match your skills, allowing you to focus on delivering quality work and building a strong reputation. Let us help you find the right clients who appreciate your talent and provide you with the work opportunities you deserve."} 
      t2={"You want to any projects"} 
      d2={"As a skilled worker looking to collaborate with experienced constructors, finding the right opportunities is crucial for honing your craft and ensuring steady employment. Whether you're a tradesperson, laborer, or specialist, working with a reputable constructor allows you to contribute to larger projects, gain valuable experience, and be part of a successful team. Our platform connects you with constructors seeking dedicated workers like you, enabling you to showcase your abilities and secure the jobs that match your expertise. Join us and take the next step in your career by working alongside top constructors who value your skills and dedication."}
      img1={img5}
      img2={img6}
      />)}
    </div>
  )
}