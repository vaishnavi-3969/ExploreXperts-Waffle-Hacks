import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaBicycle, FaUserFriends, FaBuilding, FaSuitcase, FaTree } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Aeroplane from '../assets/aeroplane.png';
import Logo from '../assets/logo.png';
import './HomePage.css';

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

    const featureCards = [
        {
            icon: FaCar,
            title: 'Carpooling',
            description: 'Share rides with fellow travelers and reduce your carbon footprint.',
            link: '/carpooling',
        },
        {
            icon: FaBicycle,
            title: 'Cycling Options',
            link: '/cycling-options',
            description: 'Discover nearby cycling routes and embrace sustainable transportation.',
        },
        {
            icon: FaUserFriends,
            title: 'Local Guides',
            link: '/local-guides',
            description: 'Connect with knowledgeable local guides for authentic and sustainable experiences.',
        },
        {
            icon: FaBuilding,
            title: 'Eco-Friendly Accommodation',
            link: '/accomodation',
            description: 'Find and book eco-friendly accommodations that prioritize sustainability.',
        },
        {
            icon: FaSuitcase,
            title: 'Packing Tips',
            link: '/packing-tips',
            description: 'Get expert tips on sustainable packing and minimize your environmental impact.',
        },
        {
            icon: FaTree,
            title: 'Sustainable Activities',
            link: '/sustainable-activities',
            description: 'Discover and participate in sustainable activities that promote environmental conservation.',
        },
        {
            icon: FaTree,
            title: 'Responsible Travel Planning',
            link: '/responsible-travel-planning',
            description: 'Plan your trips responsibly by considering sustainable transportation and accommodations.',
        },
    ];

    return (
        <div>
            <div className="homepage bg-gradient-to-r from-green-400 to-blue-500 text-white px-10 py-10">
                <div className="relative">
                    <motion.div
                        initial={{ x: '-100vw', y: '50%' }}
                        animate={{ x: '100vw', y: '50%' }}
                        transition={{ duration: 7, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
                        className="absolute top-0 left-0"
                    >
                        <img src={Aeroplane} alt="Airplane" className="w-30 h-auto" />
                    </motion.div>
                </div>

                <div className="hero-section py-3 px-10 ">
                <img src={Logo} width={200} alt='logo'/>
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

                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="hero-button bg-white text-blue-500 font-bold rounded-full px-6 py-3 mt-6 shadow-lg"
                    >
                        Start Exploring
                    </motion.button>
                </div>

                <div className="features-section flex justify-center items-center my-10 ">
                    <div className="grid grid-cols-3 gap-4">
                        {featureCards.map((card, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="feature-card bg-white-0  p-6 py-16"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <Link to={card.link}>
                                        <card.icon className="feature-icon text-3xl mb-2 text-red-600" />
                                        <h2 className="feature-title text-xl font-bold text-gray-900">{card.title}</h2>
                                        <p className="feature-description text-gray-800">{card.description}</p>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default HomePage;
