import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Guide from '../../assets/local-guide.png';

const LocalGuide = () => {
    const [guides, setGuides] = useState([
        {
            id: 1,
            name: 'John Doe',
            location: 'San Francisco, United States',
            rating: 4.8,
            reviews: 32,
            specialties: ['City Tours', 'Historical Sites'],
            image: 'https://randomuser.me/api/portraits/men/49.jpg',
        },
        {
            id: 2,
            name: 'Jane Smith',
            location: 'London, United Kingdom',
            rating: 4.6,
            reviews: 18,
            specialties: ['Museum Tours', 'Pub Crawls'],
            image: 'https://randomuser.me/api/portraits/men/75.jpg',
        },
    ]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchRandomGuides();
    }, []);

    const fetchRandomGuides = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://randomuser.me/api/?results=3');
            const data = await response.json();
            const randomGuides = data.results.map((result, index) => ({
                id: guides.length + index + 1,
                name: `${result.name.first} ${result.name.last}`,
                location: `${result.location.city}, ${result.location.country}`,
                rating: Math.floor(Math.random() * 5) + 3.5,
                reviews: Math.floor(Math.random() * 100),
                specialties: ['City Tours', 'Historical Sites', 'Adventure Tours'],
                image: result.picture.large,

            }));
            setGuides([...guides, ...randomGuides]);
        } catch (error) {
            console.error('Error fetching random guides:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmitRequest = (guideId) => {

        alert('Request send for guide with ID: ' + guideId);

    };

    return (
        <div className='bg-gradient-to-r from-green-400 to-blue-500'>
          <div className="">
                    <motion.div
                        initial={{ x: '-100vw', y: '50%' }}
                        animate={{ x: '100vw', y: '50%' }}
                        transition={{ duration: 7, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
                        className="absolute top-0 left-0"
                    >
                        <img src={Guide} alt="Guide" className="w-30 h-auto" />
                    </motion.div>
                </div>
            <div className="local-guide-container px-6">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="gradient-background"
                >
                    <h2 className="text-2xl font-bold mb-4">Local Guides</h2>
                    <div className="grid grid-cols-4 gap-7 px-7 py-7">
                        {guides.map((guide) => (
                            <motion.div
                                key={guide.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="guide-card bg-white rounded-lg shadow-lg  mb-4 px-7 py-7 hover:shadow-x1"
                            >
                                <div className="guide-info-container">
                                    <div className="guide-details">
                                        <h3 className="text-lg font-bold mb-2">{guide.name}</h3>
                                        <p className="text-gray-600 mb-2">{guide.location}</p>
                                        <p className="text-gray-600 mb-2">
                                            Rating: {guide.rating} ({guide.reviews} reviews)
                                        </p>
                                        <p className="text-gray-600 mb-2">
                                            Specialties: {guide.specialties.join(', ')}
                                        </p>
                                        <button
                                            onClick={() => handleSubmitRequest(guide.id)}
                                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                        >
                                            Send Request
                                        </button>
                                    </div>
                                    <div className="guide-image-container">
                                        <img src={guide.image} alt={guide.name} className="guide-image" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        <div className="">
                    <motion.div
                        initial={{ x: '-100vw', y: '50%' }}
                        animate={{ x: '100vw', y: '50%' }}
                        transition={{ duration: 7, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
                        className="absolute top-0 right-0"
                    >
                        <img src={Guide} alt="Guide" className="w-30 h-auto" />
                    </motion.div>
                </div>
                    </div>
                    {loading && <p>Loading...</p>}
                    <button
                        onClick={fetchRandomGuides}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                        Load More Guides
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default LocalGuide;
