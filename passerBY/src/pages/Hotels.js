// File: src/pages/Hotels.js

import React, { useState } from 'react';
import './Hotels.css';

const sampleHotels = [
  { id: 1, name: 'Royal Inn', menu: 'Indian, Continental' },
  { id: 2, name: 'Budget Lodge', menu: 'Fast Food, Snacks' },
  { id: 3, name: 'Luxury Stay', menu: 'Multi-Cuisine' },
  { id: 4, name: 'Traveler’s Rest', menu: 'Breakfast Specials' },
];

const Hotels = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHotels = sampleHotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="hotels-page">
      <h2>Find Hotels</h2>
      <input
        type="text"
        placeholder="Search hotels..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul className="hotel-list">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <li key={hotel.id} className="hotel-item">
              <h3>{hotel.name}</h3>
              <p>{hotel.menu}</p>
            </li>
          ))
        ) : (
          <p className="no-results">No hotels found</p>
        )}
      </ul>
    </div>
  );
};

export default Hotels;
