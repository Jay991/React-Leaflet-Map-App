import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Markers.css';

const iconOptions = {
	iconUrl:
		'https://images.squarespace-cdn.com/content/v1/6383473687699e73654f49d8/c70f1465-fa43-43d3-a282-ebfb80208620/Alternative-Beirut.png?format=1500w',
	iconSize: [32, 32],
};

const customIcon = new Icon(iconOptions);

function Markers({ selectedCategory }) {
	const markersData = [
		{
			position: [33.89418366422096, 35.515462526662375],
			name: 'Alternative Walking Tour',
			subHeader: '📍St. Nicholas Stairs',
			description: 'The 4-hour walking tour is a fascinating journey from East to West Beirut, unlayering 4 different neighborhoods.',
			iconUrl:
				'https://images.squarespace-cdn.com/content/v1/6383473687699e73654f49d8/c70f1465-fa43-43d3-a282-ebfb80208620/Alternative-Beirut.png?format=1500w',
			category: 'walking',
		},
		{
			position: [33.8888, 35.5254],
			name: 'Alternative Political Tour',
			subHeader: '📍Badaro Urban Market',
			description:
				'The Alternative Political Tour explores the country’s political landscape through the physical spaces that form Beirut. The tour delves deep into the city\'s tumultuous past and present, exploring the intersections of people, politics, war, and culture.',
			iconUrl:
				'https://images.squarespace-cdn.com/content/v1/6383473687699e73654f49d8/c70f1465-fa43-43d3-a282-ebfb80208620/Alternative-Beirut.png?format=1500w',
			category: 'political',
		},
		// Add more marker data as needed
	];

	// Filter markers based on selected category
	const filteredMarkers = selectedCategory === 'all'
		? markersData
		: markersData.filter(marker => marker.category === selectedCategory);

	return (
		<>
			{filteredMarkers.map((marker, index) => (
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
