import React from 'react';
import "./Home.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Discover your dream home<br />
        with prices starting from 50L🏚️⚡!<br />
        Don't miss out on our exclusive offers<br />
        for premium apartments</h1>

      <div className="search-box-container">
        <div className="search-box">
          <select>
            <option value="">Select Price Range</option>
            <option value="50L">50L-100L</option>
            <option value="100L">300L-600L</option>
            <option value="150L">800L-1CR</option>
            <option value="150L">2CR-7CR</option>
            <option value="150L">10CR-20CR</option>
            <option value="150L">20CR above</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="search-box">
          <select>
            <option value="">Select Location</option>
            <option value="Beach">Beach</option>
            <option value="Mountain">Mountain</option>
            <option value="Village">Village</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      
      {/* Grid Box with Images */}
      <div className="image-grid">
        <div className="grid-item">
          <div className="box"></div>
        </div>
        <div className="grid-item">
          <div className="box"></div>
        </div>
        <div className="grid-item">
          <div className="box"></div>
        </div>
        <div className="grid-item">
          <div className="box"></div>
        </div>
        <div className="grid-item">
          <div className="box"></div>
        </div>
        <div className="grid-item">
          <div className="box"></div>
        </div>
        <div className="grid-item">
          <div className="box"></div>
        </div>
        <div className="grid-item">
          <div className="box"></div>
        </div>
        <div className="grid-item">
          <div className="box"></div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
