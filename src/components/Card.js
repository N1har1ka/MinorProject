import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
export default function Card(props) {
  return (
    <>
    <div className='carddiv'>
        <div>
            <h3>{props.title}</h3>
            <hr />
            <p>{props.desc}</p>
            <Link to="/signup" state={{ title: props.title }}>
              <button className='cardbtn'>Create Account</button></Link>
        </div>
    </div>  
    </>
  )
}