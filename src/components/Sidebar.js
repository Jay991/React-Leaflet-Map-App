import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';


  const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="handle" onClick={handleToggle}>
          <i className={`fa ${isOpen ? 'faChevronRight' : 'faChevronLeft'}`} />
        </div>
        <div className="tabs">
          <div className="tab">Tab 1</div>
          <div className="tab">Tab 2</div>
          <div className="tab">Tab 3</div>
          <div className="tab">Tab 4</div>
          <div className="tab">Tab 5</div>
          <div className="tab">Tab 6</div>
        </div>
      </div>
    );
  };

export default Sidebar;
