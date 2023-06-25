import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Dialog, Transition } from '@headlessui/react';
import Cycle from '../../assets/cycling.png';


const CyclingOptions = () => {
    const [cyclingRoutes, setCyclingRoutes] = useState([
        {
            id: 1,
            name: 'Coastal Ride',
            distance: '15 miles',
            difficulty: 'Intermediate',
            bookings: 10,
            city: 'San Francisco',
            country: 'United States',
        },
        {
            id: 2,
            name: 'Mountain Trail',
            distance: '10 miles',
            difficulty: 'Advanced',
            bookings: 5,
            city: 'Whistler',
            country: 'Canada',
        },
        {
            id: 3,
            name: 'City Tour',
            distance: '8 miles',
            difficulty: 'Beginner',
            bookings: 3,
            city: 'Amsterdam',
            country: 'Netherlands',
        },
        {
            id: 4,
            name: 'Countryside Loop',
            distance: '20 miles',
            difficulty: 'Intermediate',
            bookings: 7,
            city: 'London',
            country: 'United Kingdom',
        },
        {
            id: 5,
            name: 'Forest Explorer',
            distance: '12 miles',
            difficulty: 'Intermediate',
            bookings: 8,
            city: 'Vancouver',
            country: 'Canada',
        },
        {
            id: 6,
            name: 'Historic Trail',
            distance: '6 miles',
            difficulty: 'Beginner',
            bookings: 2,
            city: 'Paris',
            country: 'France',
        },
        {
            id: 7,
            name: 'Lake Loop',
            distance: '18 miles',
            difficulty: 'Advanced',
            bookings: 4,
            city: 'Zurich',
            country: 'Switzerland',
        },
        {
            id: 8,
            name: 'Mountain Challenge',
            distance: '25 miles',
            difficulty: 'Advanced',
            bookings: 6,
            city: 'Aspen',
            country: 'United States',
        },
        {
            id: 9,
            name: 'Beachside Cruise',
            distance: '10 miles',
            difficulty: 'Beginner',
            bookings: 1,
            city: 'Sydney',
            country: 'Australia',
        },
        {
            id: 10,
            name: 'Hilltop View',
            distance: '14 miles',
            difficulty: 'Intermediate',
            bookings: 9,
            city: 'Cape Town',
            country: 'South Africa',
        },
        {
            id: 11,
            name: 'Riverside Ride',
            distance: '8 miles',
            difficulty: 'Beginner',
            bookings: 3,
            city: 'Berlin',
            country: 'Germany',
        },
        {
            id: 12,
            name: 'Island Adventure',
            distance: '16 miles',
            difficulty: 'Intermediate',
            bookings: 5,
            city: 'Bali',
            country: 'Indonesia',
        },
        {
            id: 13,
            name: 'Mountain Village',
            distance: '22 miles',
            difficulty: 'Advanced',
            bookings: 7,
            city: 'Innsbruck',
            country: 'Austria',
        },
        {
            id: 14,
            name: 'Coastline Escape',
            distance: '11 miles',
            difficulty: 'Intermediate',
            bookings: 6,
            city: 'Lisbon',
            country: 'Portugal',
        },
        {
            id: 15,
            name: 'Country Roads',
            distance: '19 miles',
            difficulty: 'Intermediate',
            bookings: 10,
            city: 'Tokyo',
            country: 'Japan',
        },
        {
            id: 16,
            name: 'Lakefront Trail',
            distance: '9 miles',
            difficulty: 'Beginner',
            bookings: 4,
            city: 'Chicago',
            country: 'United States',
        },
        {
            id: 17,
            name: 'Mountain Pass',
            distance: '17 miles',
            difficulty: 'Advanced',
            bookings: 8,
            city: 'Vail',
            country: 'United States',
        },
        {
            id: 18,
            name: 'City Skyline',
            distance: '7 miles',
            difficulty: 'Beginner',
            bookings: 2,
            city: 'New York City',
            country: 'United States',
        },
        {
            id: 19,
            name: 'Waterfront Ride',
            distance: '13 miles',
            difficulty: 'Intermediate',
            bookings: 5,
            city: 'Melbourne',
            country: 'Australia',
        },
        {
            id: 20,
            name: 'Cultural Tour',
            distance: '10 miles',
            difficulty: 'Beginner',
            bookings: 3,
            city: 'Barcelona',
            country: 'Spain',
        },
    ]);
    const [selectedRoute, setSelectedRoute] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [bookingData, setBookingData] = useState({ name: '', email: '' });
    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    const handleRouteClick = (route) => {
        setSelectedRoute(route);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setBookingData({ name: '', email: '' });
        setBookingConfirmed(false);
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        console.log('Booking submitted:', bookingData);
        setBookingConfirmed(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="cycling-options min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">

            <h1 className="text-4xl font-bold text-white mb-6">Cycling Options</h1>
            <div >
                <motion.div
                    initial={{ x: '-100vw', y: '50%' }}
                    animate={{ x: '100vw', y: '50%' }}
                    transition={{ duration: 7, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
                    className="absolute top-0 left-0"
                >
                    <motion.img
                        src={Cycle}
                        alt="Cycle"
                        className="w-30 h-auto"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    />
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cyclingRoutes.map((route) => (
                    <motion.div
                        key={route.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="cycling-route-card bg-white rounded-lg shadow-lg p-4 cursor-pointer"
                        onClick={() => handleRouteClick(route)}
                    >
                        <h2 className="text-xl font-bold mb-2">{route.name}</h2>
                        <p className="text-gray-600 mb-2">
                            Distance: {route.distance} | Difficulty: {route.difficulty}
                        </p>
                        <p className="text-gray-600 mb-2">Bookings: {route.bookings}</p>
                    </motion.div>
                ))}
            </div>

            <Transition.Root show={showModal} as={React.Fragment}>
                <Dialog
                    as="div"
                    className="fixed z-10 inset-0 overflow-y-auto"
                    onClose={handleCloseModal}
                >
                    <div className="flex items-center justify-center min-h-screen">
                        <Transition.Child
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                        </Transition.Child>

                        <Transition.Child
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="bg-white rounded-lg p-4 max-w-sm mx-auto">
                                <Dialog.Title
                                    as="h2"
                                    className="text-2xl font-bold mb-2 text-center"
                                >
                                    {selectedRoute?.name}
                                </Dialog.Title>
                                <p className="text-gray-600 mb-2">
                                    Distance: {selectedRoute?.distance} | Difficulty:{' '}
                                    {selectedRoute?.difficulty}
                                </p>
                                <p className="text-gray-600 mb-2">
                                    Bookings: {selectedRoute?.bookings}
                                </p>
                                <p className="text-gray-600 mb-2">
                                    City: {selectedRoute?.city}
                                </p>
                                <p className="text-gray-600 mb-2">
                                    Country: {selectedRoute?.country}
                                </p>

                                {bookingConfirmed ? (
                                    <div className="text-center">
                                        <p className="text-green-500 font-semibold mb-2">
                                            Booking Confirmed!
                                        </p>
                                        <button
                                            className="btn btn-primary"
                                            onClick={handleCloseModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleBookingSubmit} className="mt-4">
                                        <div className="mb-4">
                                            <label
                                                htmlFor="name"
                                                className="block font-medium mb-1"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={bookingData.name}
                                                onChange={handleInputChange}
                                                className="border border-gray-300 px-3 py-2 rounded-md w-full"
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="email"
                                                className="block font-medium mb-1"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={bookingData.email}
                                                onChange={handleInputChange}
                                                className="border border-gray-300 px-3 py-2 rounded-md w-full"
                                                required
                                            />
                                        </div>
                                        <div className="flex justify-end">
                                            <button
                                                type="button"
                                                className="btn btn-secondary mr-2"
                                                onClick={handleCloseModal}
                                            >
                                                Cancel
                                            </button>
                                            <button type="submit" className="btn btn-primary">
                                                Book
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <Confetti numberOfPieces={100} recycle={false} />

            <div className="leaderboard text-white mt-8">
                <h2 className="text-2xl font-bold mb-2">Leaderboard</h2>
                <ol className="list-decimal pl-6">
                    {cyclingRoutes.map((route) => (
                        <li key={route.id} className="text-gray-600 mb-2">
                            {route.city}, {route.country} ({route.bookings} bookings)
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default CyclingOptions;