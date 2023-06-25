import React from 'react';
import { motion } from 'framer-motion';
import GreenHavenResort from '../../assets/green haven resort.jpg';
import NatureRetreatLodge from '../../assets/nature retreat lodge.jpg';
import OceanViewEcoVillas from '../../assets/ocean view ecovillas.jpg';
import SustainableSafariCamp from '../../assets/sustainable safari camp.jpg';
import EcoTreeHouseRetreat from '../../assets/eco treehouse retreat.jpg';
import SustainableMoutainLodge from '../../assets/sustainable mountain lodge.jpg';
import GreenOasisResort from '../../assets/green oasis resort.png';
import FarmStayCottages from '../../assets/farm stay cottages.jpg';
import Bird2 from '../../assets/bird2.png';
import Bird3 from '../../assets/bird3.png';


const EcoAccommodation = () => {
    const accommodations = [
        {
            id: 1,
            name: 'Green Haven Resort',
            location: 'San Francisco, United States',
            rating: 4.8,
            reviews: 32,
            description: 'Experience eco-friendly luxury at its finest. Our resort is committed to sustainability and offers a range of eco-conscious amenities.',
            image: GreenHavenResort,
        },
        {
            id: 2,
            name: 'Nature Retreat Lodge',
            location: 'London, United Kingdom',
            rating: 4.6,
            reviews: 18,
            description: 'Escape to the tranquility of our eco-lodge nestled in the heart of nature. Immerse yourself in sustainable living while enjoying modern comforts.',
            image: NatureRetreatLodge,
        },
        {
            id: 3,
            name: 'Oceanview Eco Villas',
            location: 'Bali, Indonesia',
            rating: 4.9,
            reviews: 27,
            description: 'Indulge in the breathtaking views from our eco-friendly villas located by the ocean. Relax and rejuvenate while treading lightly on the environment.',
            image: OceanViewEcoVillas,
        },
        {
            id: 4,
            name: 'Sustainable Safari Camp',
            location: 'Maasai Mara, Kenya',
            rating: 4.7,
            reviews: 42,
            description: 'Embark on a once-in-a-lifetime safari experience at our sustainable camp. Immerse yourself in the wilderness while supporting local conservation efforts.',
            image: FarmStayCottages,
        },
        {
            id: 5,
            name: 'Eco Treehouse Retreat',
            location: 'Oregon, United States',
            rating: 4.5,
            reviews: 12,
            description: 'Escape to our secluded eco-friendly treehouses nestled in the lush forests. Experience a unique and sustainable getaway with stunning views.',
            image: EcoTreeHouseRetreat,
        },
        {
            id: 6,
            name: 'Sustainable Mountain Lodge',
            location: 'Swiss Alps, Switzerland',
            rating: 4.9,
            reviews: 36,
            description: 'Immerse yourself in the beauty of the Swiss Alps at our sustainable mountain lodge. Enjoy eco-conscious activities and breathtaking landscapes.',
            image: SustainableMoutainLodge,
        },
        {
            id: 7,
            name: 'Green Oasis Resort',
            location: 'Costa Rica',
            rating: 4.7,
            reviews: 23,
            description: 'Discover a green oasis in the heart of Costa Rica. Our resort combines luxury and sustainability, offering a harmonious retreat in nature.',
            image: GreenOasisResort,
        },
        {
            id: 8,
            name: 'Organic Farmstay Cottages',
            location: 'Tuscany, Italy',
            rating: 4.8,
            reviews: 41,
            description: 'Immerse yourself in the Tuscan countryside at our organic farmstay cottages. Experience sustainable farming and savor farm-to-table delights.',
            image: SustainableSafariCamp,
        },

    ];

    return (
        <div className='bg-gradient-to-r from-green-400 to-blue-500'>
            <div className="eco-accommodation-container px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="gradient-background"
                >
                    <div className='flex text-center justify-center'>

                        <img src={Bird3} className='h-20' alt='bird'/>
                        <h2 className="text-3xl font-bold mb-8">Eco-Friendly Accommodations</h2>

                        <img src={Bird2} className='h-20' alt='bird'/>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        {accommodations.map((accommodation) => (
                            <motion.div
                                key={accommodation.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="accommodation-card bg-white rounded-lg shadow-lg hover:shadow-xl"
                            >
                                <div className="accommodation-image-container">
                                    <img src={accommodation.image} alt={accommodation.name} className="accommodation-image" />
                                </div>
                                <div className="accommodation-details p-4">
                                    <h3 className="text-xl font-bold mb-2">{accommodation.name}</h3>
                                    <p className="text-gray-600 mb-2">{accommodation.location}</p>
                                    <p className="text-gray-600 mb-2">
                                        Rating: {accommodation.rating} ({accommodation.reviews} reviews)
                                    </p>
                                    <p className="text-gray-600 mb-4">{accommodation.description}</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                        Book Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default EcoAccommodation;
