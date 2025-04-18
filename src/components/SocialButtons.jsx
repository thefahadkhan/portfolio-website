import './SocialButtons.css';

import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { PiPinterestLogoLight } from "react-icons/pi";
import { FiBookOpen } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";

const SocialButtons = () => {
  return (
    <div className="social-buttons-grid">
      <button className="social-button">
        <span>Twitter</span>
        <SlSocialTwitter />
      </button>
      
      <button className="social-button">
        <span>Instagram</span>
        <FaInstagram />
      </button>
      
      <button className="social-button">
        <span>Behance</span>
        <PiPinterestLogoLight className='PinterestLogo' />
      </button>
      
      <button className="social-button">
        <span>Pinterest</span>
        <FiBookOpen />
      </button>
      
      <button className="social-button call-button">
        <span>Book a Call</span>
        <LuPhone />
      </button>
    </div>
  );
};

export default SocialButtons;