import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [typingText, setTypingText] = useState('');
  const [glowAnimation, setGlowAnimation] = useState(false);

  useEffect(() => {
    const websiteName = 'Sustainable Safari';
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setTypingText((prevText) => websiteName.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === websiteName.length) {
        clearInterval(typingInterval);
        setGlowAnimation(true);
      }
    }, 100);
  }, []);
  

  return (
    <div className="homepage">
      <div className="hero-section bg-gradient-to-r from-green-400 to-blue-500 text-white py-10 px-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`hero-title text-4xl font-bold ${glowAnimation ? 'glow-animation' : ''}`}
        >
          {typingText}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-description text-lg mt-4"
        >
          Embark on eco-friendly adventures, explore nature responsibly, and experience sustainable travel at its best.
        </motion.p>
      </div>

      <div className="features-section flex justify-center items-center my-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="feature-card bg-white rounded-lg shadow-lg p-6 mx-4"
        >
          <img src="carpooling-icon.png" alt="Carpooling" className="feature-icon w-16 h-16 mb-4" />
          <h2 className="feature-title text-xl font-bold mb-2">Carpooling</h2>
          <p className="feature-description text-gray-600">Share rides with fellow travelers and reduce your carbon footprint.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="feature-card bg-white rounded-lg shadow-lg p-6 mx-4"
        >
          <img src="cycling-icon.png" alt="Cycling Options" className="feature-icon w-16 h-16 mb-4" />
          <h2 className="feature-title text-xl font-bold mb-2">Cycling Options</h2>
          <p className="feature-description text-gray-600">Discover nearby cycling routes and embrace sustainable transportation.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="feature-card bg-white rounded-lg shadow-lg p-6 mx-4"
        >
          <img src="local-guides-icon.png" alt="Local Guides" className="feature-icon w-16 h-16 mb-4" />
          <h2 className="feature-title text-xl font-bold mb-2">Local Guides</h2>
          <p className="feature-description text-gray-600">Connect with knowledgeable local guides for authentic and sustainable experiences.</p>
        </motion.div>

        
      </div>

      <div className="content-section py-10 bg-gray-100 text-center">
        <h2 className="section-title text-3xl font-bold mb-4">Explore the Beauty of Nature Responsibly</h2>
        <p className="section-description text-gray-600 leading-relaxed mx-auto max-w-lg">
          At Sustainable Safari, we believe in promoting eco-friendly travel and protecting the environment.
          Our platform offers a range of sustainable activities, farm-to-table dining experiences, and eco-friendly accommodation recommendations.
          Join us in making a positive impact while enjoying memorable adventures in nature.
        </p>
        <a href="/explore" className="explore-button inline-block px-6 py-3 mt-6 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-200">Explore Now</a>
      </div>
    </div>
  );
}

export default HomePage;
