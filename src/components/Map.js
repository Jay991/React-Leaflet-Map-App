import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './Markers';

function Map() {
  const parisCoordinates = [48.8566, 2.3522]; // Paris coordinates
  const zoomLevel = 15;

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MapContainer
        center={parisCoordinates}
        zoom={zoomLevel}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Markers />
      </MapContainer>
    </div>
  );
}

export default Map;
