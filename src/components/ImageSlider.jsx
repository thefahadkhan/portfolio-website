import React from 'react';
import './ImageSlider.css';

import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';


function ImageSlider() {
    return (
        <div className="slider-section">
            <div className="slider-heading-box">
                <h2 className="slider-heading">Creative Projects</h2>
            </div>

            <div className="slider-wrapper">
                <div className="slider-track">
                    <img src={img1} alt="Project 1" className="slider-image" />
                    <img src={img2} alt="Project 2" className="slider-image" />
                    <img src={img3} alt="Project 3" className="slider-image" />
                    <img src={img4} alt="Project 4" className="slider-image" />
                    <img src={img5} alt="Project 5" className="slider-image" />
                    
                    {/* Duplicate images for looping */}
                    <img src={img1} alt="Project 1" className="slider-image" />
                    <img src={img2} alt="Project 2" className="slider-image" />
                    <img src={img3} alt="Project 3" className="slider-image" />
                    <img src={img4} alt="Project 4" className="slider-image" />
                    <img src={img5} alt="Project 5" className="slider-image" />
                </div>
            </div>
        </div>
    );
}

export default ImageSlider;
