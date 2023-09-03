import React from 'react'
import "../Home/Home.css"
import heroImage from "../../assets/hero.svg"

const Home = () => {
  return (
    <div>
        <div className="hero">
            <h1 className='heroTitle1'>
                Citizen
            </h1>
            <h1 className="heroTitle2">
                Needs Mapping
            </h1>
            <p className='heroContent'>Discover, Understand, and Address the Needs of  Citizens</p>
            <button className="heroButton">Attempt Survey</button>
        </div>
    </div>
  )
}

export default Home
