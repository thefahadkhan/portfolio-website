import React from 'react';
import './Hero.css';
import { LuPhone } from "react-icons/lu";

import Pic1 from '../assets/Pic-1.png'


const Hero = () => {
    return (
        <div className="hero-container">
          <div className="content-wrapper">
            <div className="profile-section">
              <img src={Pic1} alt="profile" className='profile' />
              <div className="profile-text">
                <h2>Elias Norden</h2>
                <p>Digital Designer</p>
              </div>
            </div>

            <div className="hero-content">
              <h1 className="hero-heading">
                Your Digital Vision,<br />
                Perfectly Realized.
              </h1>
              <p className="hero-description">
                From concept to launch, I create websites with stunning visuals, seamless user experiences, and expert development in Webflow and Framer.
              </p>
            </div>

            <div className="cta-section">
              <button className="ctaa-button book-call-button">
                Book a Call
                <LuPhone size={18} />
              </button>
              <button className="ctaa-button view-work-button">
                View Work
              </button>
            </div>
          </div>
        </div>
    );
};

export default Hero;
