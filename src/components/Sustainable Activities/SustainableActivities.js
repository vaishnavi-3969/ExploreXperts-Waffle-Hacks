import React from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const redIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const SustainableActivities = () => {
  const activities = [
    {
      id: 1,
      name: 'Organic Farm Tour',
      location: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    {
      id: 2,
      name: 'Hiking and Tree Planting',
      location: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    {
      id: 3,
      name: 'Beach Cleanup',
      location: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    {
      id: 4,
      name: 'Nature Trail Exploration',
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    {
      id: 5,
      name: 'Community Garden Volunteering',
      location: {
        latitude: 52.5200,
        longitude: 13.4050,
      },
    },
    {
      id: 6,
      name: 'River Cleanup',
      location: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    },
    {
      id: 7,
      name: 'National Park Visit',
      location: {
        latitude: 40.7128,
        longitude: -74.0060,
      },
    },
    {
      id: 8,
      name: 'Wildlife Conservation',
      location: {
        latitude: 35.6895,
        longitude: 139.6917,
      },
    },
  ];

  const mapStyle = {
    height: '200px',
    width: '100%',
  };

  const mapOptions = {
    zoomControl: false,
  };

  return (
    <div className="p-6 bg-gradient-to-r from-green-400 to-blue-500">
      <h2 className="text-3xl font-bold mb-4">Sustainable Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="activity-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold mb-2">{activity.name}</h3>
            <div className="activity-map">
              <MapContainer
                center={[activity.location.latitude, activity.location.longitude]}
                zoom={13}
                style={mapStyle}
                {...mapOptions}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                  position={[activity.location.latitude, activity.location.longitude]}
                  icon={redIcon}
                />
              </MapContainer>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SustainableActivities;
