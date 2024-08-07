import React from 'react'
import './Hero.css';
import { FaHandPeace } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import heroImg from "../Assets/home-img.png"



const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <FaHandPeace className='hand-img'/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
              <div>Latest Collection</div>
              <FaLocationArrow/>
            </div>
        </div>
        <div className="hero-right">
          <img src={heroImg} alt="hero-img" />
        </div>
    </div>
  )
}

export default Hero
