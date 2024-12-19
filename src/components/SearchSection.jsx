import React from "react";

const SearchSection = ({ getWeatherDetails, searchInputRef }) => {
  const API_KEY = "aa9924debbd44e82881173841241812";
  const handleCitySearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector(".search-input");
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`;
    getWeatherDetails(API_URL);
  };

  const handleLocationSearch = () =>{
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        const {latitude, longitude} = position.coords;
        const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2`;
        getWeatherDetails(API_URL)
      },

      ()=>{
        alert("Location access denied. Please enable permission to use this feature.")
      }
    )
  }
  return (
    <div className="search-section">
      <form action="#" className="search-form" onSubmit={handleCitySearch}>
        <span className="material-symbols-outlined">search</span>
        <input
          type="search"
          placeholder="Enter a city name"
          className="search-input"
          ref={searchInputRef}
          required
        />
      </form>
      <button className="location-button" onClick={handleLocationSearch}>
        <span class="material-symbols-outlined">⚲</span>
      </button>
    </div>
  );
};

export default SearchSection;
