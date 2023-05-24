<MapContainer center={beirutCoordinates} zoom={zoomLevel} className={`map ${mapMode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  {/* Add more map layers as needed */}
</MapContainer>;
