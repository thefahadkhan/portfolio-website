import React from 'react';
import './ClientFeedback.css'; // Import the CSS file

import clientImage1 from '../assets/img1.png';
import clientImage2 from '../assets/img2.png';
import client3 from '../assets/clientImage3.png';
import client4 from '../assets/clientImage4.png';
import client5 from '../assets/clientImage5.png';
import client6 from '../assets/clientImage6.png';
import client7 from '../assets/clientImage7.png';
import client8 from '../assets/clientImage8.png';

import { FaArrowDownLong } from "react-icons/fa6";


function ClientFeedback() {
  return (
    <div className="client-feedback-container">
      <div className="testimonials-heading-box">
        <h2 className="testimonials-heading">
            Testimonials 
            <FaArrowDownLong />
        </h2>
      </div>
      <div className="feedback-grid">
        <div className="feedback-card">
          <div className="rating">★★★★★</div>
          <div className="image-container">
            <img src={clientImage1} alt="Website Preview" className="feedback-image" />
            <img src={clientImage2} alt="Website Preview" className="feedback-image" />
          </div>
          <h3 className="feedback-title">Amazing design work exceeded our expectations</h3>
          <p className="feedback-text">Elias delivered a stunning website tailored perfectly to our brand. The process was smooth, and results were outstanding.</p>
          <div className="client-info">
            <img src={client3} alt="Client Avatar" className="client-avatar" />
            <div className="client-details">
              <p className="client-name">Sarah Jenkins</p>
              <p className="client-company">Bloom</p>
            </div>
          </div>
        </div>

        <div className="feedback-card">
          <div className="rating">★★★★★</div>
          <h3 className="feedback-title">Seamless collaboration with incredible results</h3>
          <p className="feedback-text">Elias's expertise in Webflow transformed our site into a high-performing masterpiece. Clients constantly compliment our sleek design.</p>
          <div className="client-info">
            <img src={client4} alt="Client Avatar" className="client-avatar" />
            <div className="client-details">
              <p className="client-name">James Miller</p>
              <p className="client-company">Horizon</p>
            </div>
          </div>
        </div>

        <div className="feedback-card">
          <div className="rating">★★★★★</div>
          <h3 className="feedback-title">Truly a web design expert!</h3>
          <p className="feedback-text">Elias understood our needs and delivered an intuitive, beautiful Framer website. Exceptional skills and attention to detail!</p>
          <div className="client-info">
            <img src={client5} alt="Client Avatar" className="client-avatar" />
            <div className="client-details">
              <p className="client-name">Laura Campos</p>
              <p className="client-company">Vista</p>
            </div>
          </div>
        </div>

        <div className="feedback-card">
          <div className="rating">★★★★★</div>
          <div className="image-container">
            <img src={clientImage1} alt="Website Preview" className="feedback-image-single" />
            <img src={clientImage2} alt="Website Preview" className="feedback-image-single" />
          </div>
          <h3 className="feedback-title">Outstanding creativity and professional service</h3>
          <p className="feedback-text">Working with Elias was a breeze. Our website looks stunning, and the entire experience was flawless.</p>
          <div className="client-info">
            <img src={client6} alt="Client Avatar" className="client-avatar" />
            <div className="client-details">
              <p className="client-name">Emily Ross</p>
              <p className="client-company">Edge</p>
            </div>
          </div>
        </div>

        <div className="feedback-card">
          <div className="rating">★★★★★</div>
          <div className="image-container">
            <img src={clientImage1} alt="Website Preview" className="feedback-image-single" />
            <img src={clientImage2} alt="Website Preview" className="feedback-image-single" />
          </div>
          <h3 className="feedback-title">Brought our vision to life beautifully</h3>
          <p className="feedback-text">From start to finish, Elias crafted a user-friendly website that perfectly aligned with our goals. Highly recommended!</p>
          <div className="client-info">
            <img src={client7} alt="Client Avatar" className="client-avatar" />
            <div className="client-details">
              <p className="client-name">David Carter</p>
              <p className="client-company">Elevate</p>
            </div>
          </div>
        </div>

        <div className="feedback-card">
          <div className="rating">★★★★★</div>
          <h3 className="feedback-title">Effortless process with fantastic outcomes!</h3>
          <p className="feedback-text">Working with Elias was an absolute pleasure. From start to finish, the process was seamless, and the results exceeded all our expectations. His expertise in UI design truly elevated our online presence.</p>
          <div className="client-info">
            <img src={client8} alt="Client Avatar" className="client-avatar" />
            <div className="client-details">
              <p className="client-name">Mark Robinson</p>
              <p className="client-company">Innovate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientFeedback;










// import React from 'react';
// import './ClientFeedback.css';

// import image1 from '../assets/img1.png';
// import image4 from '../assets/img2.png';
// import image5 from '../assets/img3.png';

// import { FaArrowDownLong } from "react-icons/fa6";

// const ClientFeedback = () => {
//   return (
//     <div className="cf-container">
//       <div className="cf-heading-box">
//         <h2 className="cf-subheading">
//             Testimonials
//             <FaArrowDownLong />
//         </h2>
//       </div>


//       <div className="cf-grid">
//         {/* Card 1 */}
//         <div className="cf-card">
//           <img src={image1} alt="Testimonial visual" className="cf-image" />
//           <h2 className="cf-card-title">Amazing design work exceeded our expectations</h2>
//           <p className="cf-card-content">This delivered a stunning weather-tail map perfectly to our own, and produces new smooths and results more outstanding.</p>
//           <h3 className="cf-card-author">Such Janite Room</h3>
//           <div className="cf-divider"></div>
//         </div>

//         {/* Card 2 */}
//         <div className="cf-card">
//           <h2 className="cf-card-title">Truly & web design experts</h2>
//           <p className="cf-card-content">Ellas understood our needs and experience in this book. Don't allow them to be able to complete the details!</p>
//           <h3 className="cf-card-author">Luna Canyon Villa</h3>
//           <div className="cf-divider"></div>
//         </div>

//         {/* Card 3 */}
//         <div className="cf-card">
//           <h2 className="cf-card-title">Brought our vision to life beautifully</h2>
//           <p className="cf-card-content">From time to time, Ellas continues to feel confident that we are working well with our unique technology and will help you understand it!</p>
//           <h3 className="cf-card-author">David Carter Devlin</h3>
//           <div className="cf-divider"></div>
//         </div>

//         {/* Card 4 */}
//         <div className="cf-card">
//           <img src={image4} alt="Testimonial visual" className="cf-image" />
//           <h2 className="cf-card-title">Seamless collaboration with incredible results</h2>
//           <p className="cf-card-content">Ellas's experience in Videology transformed our site into a high-performing marketplace. Clients constantly completed our team design.</p>
//           <h3 className="cf-card-author">James Miller Holland</h3>
//           <div className="cf-divider"></div>
//         </div>

//         {/* Card 5 */}
//         <div className="cf-card">
//           <img src={image5} alt="Testimonial visual" className="cf-image" />
//           <h2 className="cf-card-title">Outstanding creativity and professional service</h2>
//           <p className="cf-card-content">Working with Ellas was a theme. Our website looks stunning, and the user experiences it involves.</p>
//           <h3 className="cf-card-author">Emily Rose Cage</h3>
//           <div className="cf-divider"></div>
//         </div>

//         {/* Card 6 */}
//         <div className="cf-card">
//           <h2 className="cf-card-title">Effortless process with fantastic outcomes</h2>
//           <p className="cf-card-content">Working with Ellas was an absolute pleasure. From start to finish, the process was seamless, and the results succeeded in its expectations. He expanded his UK design style across four online presence.</p>
//           <h3 className="cf-card-author">Mark Robinson Investor</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientFeedback;
