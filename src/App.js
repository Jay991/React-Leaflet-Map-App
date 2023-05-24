import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Map from './components/Map';
import './styles.css';
import './assets/fonts/fonts.css';

function App() {
  return (
    <div>
      <Header />
      <Map />
    </div>
  );
}

export default App;
