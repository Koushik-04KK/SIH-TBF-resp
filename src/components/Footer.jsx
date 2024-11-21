import React from 'react';
import { Link } from 'react-router-dom';
import footerimg from '../assets/footerimg.png';

const Footer = () => {
  return (
    <div className="w-full h-[150px] bg-customColor-landingfooter relative overflow-hidden">
      <div className="flex justify-between items-center">
        {/* Left Section: QUICK LINKS */}
        <div className='py-4 px-20'>
          <span className="text-white font-urbanist text-lg mb-2 block">
            QUICK LINKS
          </span>
          <div className="grid grid-cols-2 gap-y-3 gap-x-60 text-white text-sm font-light">
            <Link to="/" className="font-raleway font-normal text-[15px]">
              Home
            </Link>
            <Link to="/rul-prediction" className="font-raleway font-normal text-[15px]">
              RUL Prediction
            </Link>
            <Link to="/dashboard" className="font-raleway font-normal text-[15px]">
              Dashboard
            </Link>
            <Link to="/schedules" className="font-raleway font-normal text-[15px]">
              Schedules
            </Link>
            <Link to="/chatbot" className="font-raleway font-normal text-[15px]">
              Chatbot
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <img src={footerimg} alt="Footer Image" className="w-[450px] mt-2" />
      </div>
    </div>
  );
};

export default Footer;
