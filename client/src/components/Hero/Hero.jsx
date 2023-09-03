import React from 'react'
import "../Hero/Hero.css"
import {Link} from "react-router-dom"
 
const Hero = () => {
  return (
    <div>
      <div className="hero">
        <h1 className="heroTitle1">Citizen</h1>
        <h1 className="heroTitle2">Needs Mapping</h1>
        <p className="heroContent">
          Discover, Understand, and Address the Needs of Citizens
        </p>
        <Link to="/survey">
          <button className="heroButton">Attempt Survey</button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
