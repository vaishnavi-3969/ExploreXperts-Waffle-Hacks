import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaCode } from 'react-icons/fa';
import Window1 from '../assets/window1.gif';
import Window2 from '../assets/window2.gif';
import Window3 from '../assets/window3.gif';
import Window4 from '../assets/window4.gif';

const Footer = () => {
  return (
    <footer className="relative px-10 py-3">
      <div className="flex justify-center items-center mb-6 md:mb-0">
        <img src={Window1} alt="window" className="h-26" />
        <img src={Window2} alt="window" className="h-26" />
        <img src={Window3} alt="window" className="h-26" />
        <img src={Window4} alt="window" className="h-26" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-transparent via-transparent to-blue" />
      <div className="bg-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="flex items-center mb-4 md:mb-0">
            <FaHeart className="text-red-500 text-2xl mr-2" />
            <span className="text-gray-600">Made with Love by Vaishnavi, Nidhi and Riya for WaffleHacks '23</span>
          </div>
          <div className="flex items-center ml-0 md:ml-1">
            <span className="text-gray-600 mr-2">using React JS and Tailwind CSS</span>
            <FaCode className="text-gray-600 text-2xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
