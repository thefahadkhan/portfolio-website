import React from "react";
import "./PricingSection.css";
import { FaArrowDownLong } from "react-icons/fa6";
import { BsInfoCircle } from "react-icons/bs";

const pricingOptions = [
  {
    title: "Landing Page",
    price: "$2500",
    description: "Perfect for showcasing your brand with a simple, impactful page",
    features: [
      { text: "Design + Development", hasInfoIcon: true },
      { text: "1 Week Delivery" },
      { text: "Figma / Webflow" },
      { text: "Figma File Included" },
    ],
  },
  {
    title: "Multi-page Website",
    price: "$3500",
    description: "Comprehensive websites designed to meet all your content and functionality needs",
    features: [
      { text: "Design + Development", hasInfoIcon: true },
      { text: "3-4 Weeks Delivery" },
      { text: "Up to 4 Pages / $250 page" },
      { text: "Figma / Webflow" },
    ],
  },
];

const PricingSection = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h2>Pricing</h2>
        <FaArrowDownLong />
      </div>

      {pricingOptions.map((option, index) => (
        <div className="pricing-card" key={index}>
          <h3 className="card-title">{option.title}</h3>
          <div className="price">{option.price}</div>
          <p className="description">{option.description}</p>

          <div className="features-list">
            {option.features.map((feature, idx) => (
              <div className="feature-item" key={idx}>
                <div className="bullet"></div>
                <span>{feature.text}</span>
                {feature.hasInfoIcon && <div className="info-icon"><BsInfoCircle /></div>}
              </div>
            ))}
          </div>

          <button className="cta-button">Start Now</button>
        </div>
      ))}
    </div>
  );
};

export default PricingSection;
