import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaBicycle, FaUserFriends, FaBuilding, FaSuitcase, FaTree, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Aeroplane from '../assets/aeroplane.png';
import Logo from '../assets/logo.png';
import './HomePage.css';
import Avatar1 from '../assets/avatar1.png';
import Avatar2 from '../assets/avatar2.png';
import Avatar3 from '../assets/avatar3.png';

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

    const teamMembers = [
        {
            name: 'Vaishnavi Kale',
            role: 'Developer',
            image: Avatar1,
            github: 'https://github.com/vaishnavi-3969',
            linkedin: 'https://www.linkedin.com/in/vaishnavi-kale-111543204/',
        },
        {
            name: 'Nidhi Berde',
            role: 'Developer',
            image: Avatar2,
            github: 'https://github.com',
            linkedin: 'https://www.linkedin.com/in',
        },
        {
            name: 'Tia Agrawal',
            role: 'Developer',
            image: Avatar3,
            github: 'https://github.com/tiaagrawal',
            linkedin: 'https://www.linkedin.com/in/tiaagrawal/',
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
                    <img src={Logo} width={200} alt='logo' />
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
            <div className="meet-the-team py-10 bg-white px-10">
                <h2 className="text-3xl font-bold text-center mb-6">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="team-member-card bg-gray-100 p-6 rounded-lg shadow-lg"
                        >
                            <motion.div
                                className="avatar-container mb-4"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="rounded-full mx-auto h-50 w-50"
                                />
                            </motion.div>
                            <motion.h3
                                className="text-xl font-bold mb-2"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                            >
                                {member.name}
                            </motion.h3>
                            <motion.p
                                className="text-gray-600"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                            >
                                {member.role}
                            </motion.p>
                            <motion.div
                                className="social-links flex justify-center mt-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                            >
                                <a href={member.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="mr-2 text-gray-600 hover:text-gray-900" />
                                </a>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-gray-600 hover:text-gray-900" />
                                </a>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
