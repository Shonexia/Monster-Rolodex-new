import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange, label, image }) => (
  <div className="search-box">
  <img src={image} alt="placeholderImage" className="search-image" />
    <span>{label}:</span>
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
)