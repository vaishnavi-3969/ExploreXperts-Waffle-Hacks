import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaUser, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { Dialog, Transition } from '@headlessui/react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import Confetti from 'react-confetti';
import Car from '../../assets/car.gif';
import CityTour from '../../assets/city-tour.gif'
import NatureExpedition from '../../assets/nature-expedition.gif'
import MorningCommute from '../../assets/morning-commute.gif';

const Carpooling = () => {
  const carpoolingData = [
    {
      id: 1,
      title: 'Morning Commute',
      description: 'Join others for a sustainable morning commute to work.',
      driver: 'John Doe',
      location: 'New York City',
      date: 'June 30, 2023',
      seats: 3,
      image: MorningCommute,
    },
    {
      id: 2,
      title: 'Weekend Getaway',
      description: 'Explore nearby attractions with fellow travelers.',
      driver: 'Jane Smith',
      location: 'San Francisco',
      date: 'July 5, 2023',
      seats: 2,
      image: Car,
    },
    {
      id: 3,
      title: 'City Tour',
      description: 'Discover the best sights of the city with a local guide.',
      driver: 'Michael Johnson',
      location: 'London',
      date: 'August 15, 2023',
      seats: 4,
      image: CityTour,
    },
    {
      id: 4,
      title: 'Nature Expedition',
      description: 'Embark on a thrilling adventure through scenic landscapes.',
      driver: 'Emily Thompson',
      location: 'Vancouver',
      date: 'September 1, 2023',
      seats: 5,
      image: NatureExpedition,
    },
  ];

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = () => {
    setBookingConfirmed(true);
  };

  return (
    <div className="carpooling">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-10 py-10">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Carpooling</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-900">
            {carpoolingData.map((carpool) => (
              <motion.div
                key={carpool.id}
                className="carpool-card bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBooking}
              >
                <img src={carpool.image} alt={carpool.title} className="w-[480] h-48 object-cover mx-auto px-2 py-1" />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{carpool.title}</h2>
                  <p className="text-gray-600 mb-4">{carpool.description}</p>
                  <div className="flex items-center mb-2">
                    <FaCar className="text-gray-500 mr-2" />
                    <span>{carpool.driver}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <FaMapMarkerAlt className="text-gray-500 mr-2" />
                    <span>{carpool.location}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <FaCalendarAlt className="text-gray-500 mr-2" />
                    <span>{carpool.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUser className="text-gray-500 mr-2" />
                    <span>{carpool.seats} seats available</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <Transition.Root show={bookingConfirmed} as={React.Fragment}>
            <Dialog
              as="div"
              className="fixed z-10 inset-0 overflow-y-auto"
              onClose={() => setBookingConfirmed(false)}
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
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
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
                  <div className="bg-white rounded-lg p-6 w-64 text-center">
                    <Confetti
                      width={200}
                      height={200}
                      recycle={false}
                      numberOfPieces={200}
                      gravity={0.2}
                    />
                    <h3 className="text-xl font-bold mb-4">Booking Confirmed!</h3>
                    <p>Your carpool booking has been confirmed.</p>
                    <button
                      className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                      onClick={() => setBookingConfirmed(false)}
                    >
                      Close
                    </button>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
      </div>
    </div>
  );
};

export default Carpooling;
