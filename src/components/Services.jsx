// App.js
import React from 'react';
import './Services.css';

import { FaArrowDownLong } from "react-icons/fa6";

function App() {
  const services = [
    {
      title: "Web Design",
      description: "Creating stunning, user-centric, high-performing, responsive, and visually engaging websites that truly represent, elevate, and empower your brand's online presence.Creating stunning.",
    },
    {
      title: "UX/UI Deign",
      description: "Designing seamless, intuitive, and impactful digital experiences that captivate users, boost retention, enhance engagement, strengthen brand loyalty, and drive measurable, long-term results.",
    },
    {
      title: "Framer",
      description: "Building interactive, responsive, and visually compelling websites using Framer — optimized for performance, accessibility, and seamless user experience across all devices.ractive, responsive websites using Framer.",
    },
    {
      title: "Webflow",
      description: "Crafting scalable, high-performing, and beautifully designed websites with Webflow — built for flexibility, SEO optimization, seamless animations, and exceptional user experience.",
    },
  ];

  return (
    <section className="services-section">
      {/* Services Header */}
      <div className="services-header">
        <h2>Services</h2>
        <FaArrowDownLong />
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-title">{service.title}</div>
            <div className="service-content">
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;