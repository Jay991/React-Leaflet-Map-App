import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Markers.css';

// Define custom icon options
const iconOptions = {
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/2849/2849907.png',
  iconSize: [32, 32],
};

// Create custom icon with the marker-icon class
const customIcon = new Icon({
  ...iconOptions,
  className: 'marker-icon',
});

function Markers() {
  const markersData = [
    {
      position: [48.8589, 2.3469], // Eiffel Tower coordinates
      name: 'Marker 1',
      subHeader: '📍 Eiffel Tower',
      description: 'One of the most famous landmarks in Paris.',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/2849/2849907.png',
    },
    {
      position: [48.8566, 2.3522], // Louvre Museum coordinates
      name: 'Marker 2',
      subHeader: '📍 Louvre Museum',
      description: 'Home to the iconic Mona Lisa painting.',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/2849/2849907.png',
    },
    // Add more marker data as needed
  ];

  return (
    <>
      {markersData.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={customIcon}>
          <Popup>
            <div className="marker-popup">
              <h4 className="marker-name">{marker.name}</h4>
              <h5 className="marker-subheader">{marker.subHeader}</h5>
              <p className="marker-description">{marker.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

export default Markers;
