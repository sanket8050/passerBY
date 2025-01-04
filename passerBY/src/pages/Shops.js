// File: src/pages/Shops.js

import React, { useState } from 'react';
import './Shops.css';

const sampleShops = [
  { id: 1, name: 'Grocery Mart', location: 'Downtown' },
  { id: 2, name: 'Electronics Hub', location: 'Main Street' },
  { id: 3, name: 'Clothing Corner', location: 'Market Square' },
  { id: 4, name: 'Furniture World', location: 'Highway Road' },
];

const Shops = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  const filteredShops = sampleShops.filter((shop) =>
    shop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFavorite = (shop) => {
    if (favorites.includes(shop)) {
      setFavorites(favorites.filter((fav) => fav.id !== shop.id));
    } else {
      setFavorites([...favorites, shop]);
    }
  };

  return (
    <div className="shops-page">
      <h2>Find Shops</h2>
      <input
        type="text"
        placeholder="Search shops..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul className="shop-list">
        {filteredShops.length > 0 ? (
          filteredShops.map((shop) => (
            <li key={shop.id} className="shop-item">
              <h3>{shop.name}</h3>
              <p>{shop.location}</p>
              <button
                className={`favorite-btn ${
                  favorites.includes(shop) ? 'favorited' : ''
                }`}
                onClick={() => toggleFavorite(shop)}
              >
                {favorites.includes(shop) ? 'Unfavorite' : 'Favorite'}
              </button>
            </li>
          ))
        ) : (
          <p className="no-results">No shops found</p>
        )}
      </ul>
      <h3>Your Favorites</h3>
      <ul className="favorites-list">
        {favorites.map((fav) => (
          <li key={fav.id} className="favorite-item">
            {fav.name} - {fav.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shops;
