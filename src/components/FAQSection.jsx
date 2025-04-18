import React, { useState } from "react";
import "./FAQSection.css";

import { FaArrowDownLong } from "react-icons/fa6";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What is included in the Landing Page package?",
      answer:
        "Our Landing Page package includes custom design, responsive layout, basic SEO optimization, contact form integration, and up to 5 content sections. We also provide basic analytics setup and one round of revisions.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Most landing page projects are completed within 2-3 weeks. More complex websites may take 4-6 weeks. The timeline depends on the project scope and how quickly you provide feedback during the revision stages.",
    },
    {
      question: "Do you provide website maintenance after delivery?",
      answer:
        "Yes, we offer website maintenance packages that include regular updates, security monitoring, content updates, and technical support. These can be purchased on a monthly or annual basis after your project is completed.",
    },
    {
      question: "Can I request revisions during the design process?",
      answer:
        "Our process includes dedicated revision phases. The standard package includes two rounds of revisions, but additional revision rounds can be added if needed for an extra fee.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes, all our websites are built with a mobile-first approach. They are fully responsive and optimized for all devices including smartphones, tablets, laptops, and desktop computers.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h2>FAQ</h2>
        <FaArrowDownLong />
      </div>

      <div className="faq-items">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <span className="icon">{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
