import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Markers.css';

// Define custom icon options
const iconOptions = {
  iconUrl: 'https://images.squarespace-cdn.com/content/v1/6383473687699e73654f49d8/c70f1465-fa43-43d3-a282-ebfb80208620/Alternative-Beirut.png?format=1500w',
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
	    position: [33.89418366422096, 35.515462526662375], // St. Nicholas Stairs coordinates
	    name: 'Marker 1',
	    subHeader: '📍 St. Nicholas Stairs',
	    description: 'Something happed here at certain time.',
	    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2849/2849907.png',
	  },
	  {
	    position: [33.87685565423403, 35.51470581317099], // Badaro coordinates
	    name: 'Marker 2',
	    subHeader: '📍Badaro Urban Market',
	    description: 'Something happed here at certain time',
	    iconUrl:    'https://cdn-icons-png.flaticon.com/512/2849/2849907.png',
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
