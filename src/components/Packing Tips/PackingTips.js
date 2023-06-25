import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PackingTips = () => {
  const travelTypes = [
    {
      id: 1,
      type: 'Beach Vacation',
      tips: [
        'Sunscreen and sun protection',
        'Swimsuits and beachwear',
        'Beach towels',
        'Flip flops or sandals',
        'Hat and sunglasses',
        'Beach bag',
      ],
    },
    {
      id: 2,
      type: 'Hiking Trip',
      tips: [
        'Hiking boots or sturdy shoes',
        'Backpack',
        'Water bottle',
        'Map and compass',
        'Outdoor clothing layers',
        'Snacks and energy bars',
      ],
    },
    {
      id: 3,
      type: 'City Exploration',
      tips: [
        'Comfortable walking shoes',
        'Daypack or crossbody bag',
        'City map or guidebook',
        'Lightweight clothing',
        'Umbrella or raincoat',
        'Camera or smartphone',
      ],
    },
    {
        id: 4,
        type: 'Ski Trip',
        tips: [
          'Ski jacket and pants',
          'Base layers',
          'Ski gloves',
          'Beanie or hat',
          'Goggles or sunglasses',
          'Hand and toe warmers',
        ],
      },
      {
        id: 5,
        type: 'Camping Adventure',
        tips: [
          'Tent and sleeping bag',
          'Camp stove and cookware',
          'Flashlight or headlamp',
          'Insect repellent',
          'Camp chairs',
          'Firewood and matches',
        ],
      },
      {
        id: 6,
        type: 'Road Trip',
        tips: [
          'Road maps or GPS',
          'Snacks and drinks',
          'Music playlists',
          'Emergency roadside kit',
          'Pillows and blankets',
          'Car charger and cables',
        ],
      },
      {
        id: 7,
        type: 'Business Travel',
        tips: [
          'Professional attire',
          'Laptop and charger',
          'Travel-sized toiletries',
          'Business cards',
          'Travel itinerary',
          'Portable phone charger',
        ],
      },
      {
        id: 8,
        type: 'Tropical Getaway',
        tips: [
          'Lightweight clothing',
          'Swimwear and cover-ups',
          'Insect repellent',
          'Waterproof phone case',
          'Travel adapter',
          'Snorkel and mask',
        ],
      },
      {
        id: 9,
        type: 'Adventure Sports',
        tips: [
          'Protective gear (helmet, pads)',
          'Appropriate footwear',
          'Action camera',
          'Refillable water bottle',
          'First aid kit',
          'Energy snacks',
        ],
      },
      {
        id: 10,
        type: 'Family Vacation',
        tips: [
          'Children\'s essentials (diapers, wipes)',
          'Family-friendly accommodations',
          'Travel games and toys',
          'Sunscreen for kids',
          'Stroller or baby carrier',
          'Extra clothes and supplies',
        ],
      },
      {
        id: 11,
        type: 'Historical Tour',
        tips: [
          'Comfortable walking shoes',
          'Guidebooks and historical maps',
          'Camera or smartphone',
          'Reusable water bottle',
          'Umbrella or raincoat',
          'Snacks for breaks',
        ],
      },
      {
        id: 12,
        type: 'Foodie Exploration',
        tips: [
          'Food and restaurant guides',
          'Comfortable walking shoes',
          'Reservations for popular restaurants',
          'Reusable utensils and containers',
          'Local currency or cash',
          'Empty stomach for delicious meals',
        ],
      },
  ];

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (travelTypeId, tipIndex) => {
    setCheckedItems((prevCheckedItems) => {
      const key = `${travelTypeId}-${tipIndex}`;
      return { ...prevCheckedItems, [key]: !prevCheckedItems[key] };
    });
  };

  return (
    <div className="p-6 bg-gradient-to-r from-green-400 to-blue-500">
      <h2 className="text-3xl font-bold mb-4">Packing Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {travelTypes.map((travelType) => (
          <motion.div
            key={travelType.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="travel-type-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold mb-2">{travelType.type}</h3>
            <ul className="list-disc list-inside text-gray-700">
              {travelType.tips.map((tip, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`tip-${travelType.id}-${index}`}
                    checked={checkedItems[`${travelType.id}-${index}`] || false}
                    onChange={() => handleCheckboxChange(travelType.id, index)}
                    className="mr-2"
                  />
                  <label htmlFor={`tip-${travelType.id}-${index}`}>{tip}</label>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PackingTips;
