import React from 'react';
import "./TestimonialSection.css";
import mockup1 from "../assets/mockup1.png";
import mockup2 from "../assets/mockup2.png";
import profile from "../assets/profile.png";

function App() {
    return (
        <div className="testimonial-container">
            <div className="testimonial-left">
                <div className="screen-mockup laptop">
                    <img src={mockup1} alt="Laptop mockup" className="mockup-image" />
                </div>
                <div className="screen-mockup tablet">
                    <img src={mockup2} alt="Tablet mockup" className="mockup-image" />
                </div>
            </div>
            <div className="testimonial-right">
                <blockquote className="testimonial-quote">
                    'Outstanding creativity & professional<br /> service from Elias.'
                </blockquote>
                <div className="testimonial-author">
                    <div className="author-image">
                        <img src={profile} alt="Sarah Jenkins" className="profile-image" />
                    </div>
                    <div className="author-details">
                        <div className="stars">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                        <div className="author-name">Sarah Jenkins</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;