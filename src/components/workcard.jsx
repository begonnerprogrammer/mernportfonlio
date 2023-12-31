import React from 'react'
import "../workcard.css"
import { Link } from 'react-router-dom'
const Workcard = (props) => {
  return (
    <>
       <div className="project-card">
                <img src={props.img} alt="" />
                  <h2 className='project-title'>
                    {props.title}</h2>  
                    <div className="pro-details">
                        <p>{props.text}</p>
                        <div className="pro-btns">
          <Link to={props.link} className='btn'>VIEW</Link>
          
                        </div>
                        </div>         
            
            </div>
    </>
  )
}

export default Workcard
