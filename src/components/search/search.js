import React from 'react';
import Rate from '../rate';
import '../search/search.css';
import Logo from '../search/icon.png';

const SearchMovie = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
  return (
    <div className='box'>
      <img className='icon' src={Logo} alt="Logo" />
      <div className="search-container">
      
        <input
          type="text"
          placeholder="Type movie name to search"
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <div className="rating-search">
          <Rate rating={ratingSearch} setRatingSearch={setRatingSearch} />
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
