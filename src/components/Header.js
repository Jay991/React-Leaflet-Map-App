import React from 'react';
import { Button } from 'react-bootstrap';
import './Header.css';

function Header() {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <header className="header-container">
      <img src="https://cdn-icons-png.flaticon.com/512/2849/2849907.png" alt="Logo" className="logo" />
      <div className="date-time">
        {currentDate} - {currentTime}
      </div>
      <div>
        <Button variant="primary" className="contact-button">Contact Us</Button>
      </div>
    </header>
  );
}

export default Header;