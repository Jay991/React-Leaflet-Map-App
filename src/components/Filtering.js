import React, { useState } from 'react';
import Markers from './Markers';

function Filtering() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div>
        <h2>Filtering</h2>
        <div>
          <label>
            <input
              type="radio"
              name="category"
              value="all"
              checked={selectedCategory === 'all'}
              onChange={() => handleCategoryChange('all')}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="walking"
              checked={selectedCategory === 'walking'}
              onChange={() => handleCategoryChange('walking')}
            />
            Alternative Walking Tours
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="political"
              checked={selectedCategory === 'political'}
              onChange={() => handleCategoryChange('political')}
            />
            Alternative Political Tours
          </label>
        </div>
      </div>
      <div>
        <Markers selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default Filtering;
