import React, { useState } from 'react';
import { FaCar, FaBicycle, FaUserFriends, FaBuilding, FaSuitcase, FaTree, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const featureCards = [
    {
      icon: FaHome,
      title: 'Home',
      link: '/',
    },
    {
      icon: FaCar,
      title: 'Carpooling',
      link: '/carpooling',
    },
    {
      icon: FaBicycle,
      title: 'Cycling Options',
      link: '/cycling-options',
    },
    {
      icon: FaUserFriends,
      title: 'Local Guides',
      link: '/local-guides',
    },
    {
      icon: FaBuilding,
      title: 'Eco-Friendly Accommodation',
      link: '/accomodation',
    },
    {
      icon: FaSuitcase,
      title: 'Packing Tips',
      link: '/packing-tips',
    },
    {
      icon: FaTree,
      title: 'Sustainable Activities',
      link: '/sustainable-activities',
    },
  ];

  return (
    <div className="homepage bg-gradient-to-r from-green-400 to-blue-500 px-10 py-10">

    <div className={`dropdown relative ${dropdownOpen ? 'open' : ''}`}>
      <button
        className="dropdown-toggle flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring focus:ring-opacity-50 hover:bg-gray-200"
        onClick={toggleDropdown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {dropdownOpen && (
        <div className="dropdown-menu absolute top-full right-0 bg-white shadow-lg rounded-md">
          <ul className="dropdown-menu-items py-2">
            {featureCards.map((card, index) => (
              <li key={index} className="dropdown-menu-item">
                <Link to={card.link} className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <card.icon className="mr-2" />
                  <span>{card.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default Dropdown;
