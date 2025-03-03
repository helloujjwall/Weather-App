import React from "react";

const App = () => {
  return (
    <>
    <div className="weather-app">
      {/* Search Box */}
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <button><i className="fas fa-search"></i></button>
      </div>

      {/* Weather Display */}
      <div className="weather-display">
        <div className="weather-icon">
          <i className="fa-solid fa-sun"></i> 
        </div>
        <h2 className="temperature">28°C</h2>
        <div className="location-box">
        <i class="fa-solid fa-location-dot"></i>
        <p className="location">Delhi</p>
        </div>
      </div>

      {/* Weather Details */}
      <div className="weather-details">
        <div className="detail-box">
          <i className="fa-solid fa-droplet"></i>
          <div className="detail-content">
            <span>Humidity</span>
            <p>66%</p>
          </div>
        </div>
        <div className="detail-box">
          <i className="fa-solid fa-wind"></i>
          <div className="detail-content">
            <span>Wind Speed</span>
            <p>10 km/h</p>
          </div>
        </div>
      </div>
      
    </div>
    <footer className="footer">
        <p>Created by <a href="https://ujjwalsingh.rf.gd" target="_blank">Ujjwal Singh</a></p>
      </footer>
    </>
    
  );
};

export default App;
