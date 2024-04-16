import React, { useState } from 'react';
import "./Home.css";
import Footer from "../components/Footer";
import img1 from "../asserts/img 1.jpeg";
import img2 from "../asserts/img 2.jpeg";
import img3 from "../asserts/img 3.jpeg";
import img4 from "../asserts/img 4.jpeg";
import img5 from "../asserts/img 5.jpeg";
import img6 from "../asserts/img 6.jpeg";
import save from "../asserts/save.png";
import like from "../asserts/like.png";
import { Link } from 'react-router-dom';

const Home = () => {
  const [selectedRange, setSelectedRange] = useState('');
  const [showAllImages, setShowAllImages] = useState(true); // Initially, show all images

  const handleGoClick = () => {
    setShowAllImages(false); // Hide all images when Go button is clicked
  };

  return (
    <div className="home-container">
      <h1>Discover your dream home<br />
        with prices starting from 50L🏚️⚡!<br />
        Don't miss out on our exclusive offers<br />
        for premium apartments</h1>

      <div className="search-box-container">
        <div className="search-box">
          <select value={selectedRange} onChange={(e) => setSelectedRange(e.target.value)}>
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
        <div className="search-box">
          <button onClick={handleGoClick}>Go</button>
        </div>
      </div>

      <div className="image-grid">
        {(showAllImages || (selectedRange === '50L' && !showAllImages)) && (
          <Link to="/Image1">
            <div className="grid-item" style={{backgroundImage: `url(${img1})`}}>
              <img src={img1} alt="" />
              <Link to="/favourite">
                <div className="favorite-button">
                  <img src={like} alt="Favorite" />
                </div>
              </Link>
              <div className="cart-button">
                <Link to="/cart">
                  <img src={save} alt="Cart" />
                </Link>
              </div>
            </div>
          </Link>
        )}
        {(showAllImages || (selectedRange === '100L' && !showAllImages)) && (
          <Link to="/Image2">
            <div className="grid-item" style={{backgroundImage: `url(${img2})`}}>
              <img src={img2} alt="" />
              <Link to="/favourite">
                <div className="favorite-button">
                  <img src={like} alt="Favorite" />
                </div>
              </Link>
              <div className="cart-button">
                <Link to="/cart">
                  <img src={save} alt="Cart" />
                </Link>
              </div>
            </div>
          </Link>
        )}
        {(showAllImages || (selectedRange === '150L' && !showAllImages)) && (
          <>
            <Link to="/Image3">
              <div className="grid-item" style={{backgroundImage: `url(${img3})`}}>
                <img src={img3} alt="" />
                <Link to="/favourite">
                  <div className="favorite-button">
                    <img src={like} alt="Favorite" />
                  </div>
                </Link>
                <div className="cart-button">
                  <Link to="/cart">
                    <img src={save} alt="Cart" />
                  </Link>
                </div>
              </div>
            </Link>
            <Link to="/Image4">
              <div className="grid-item" style={{backgroundImage: `url(${img4})`}}>
                <img src={img4} alt="" />
                <Link to="/favourite">
                  <div className="favorite-button">
                    <img src={like} alt="Favorite" />
                  </div>
                </Link>
                <div className="cart-button">
                  <Link to="/cart">
                    <img src={save} alt="Cart" />
                  </Link>
                </div>
              </div>
            </Link>
            <Link to="/Image5">
              <div className="grid-item" style={{backgroundImage: `url(${img5})`}}>
                <img src={img5} alt="" />
                <Link to="/favourite">
                  <div className="favorite-button">
                    <img src={like} alt="Favorite" />
                  </div>
                </Link>
                <div className="cart-button">
                  <Link to="/cart">
                    <img src={save} alt="Cart" />
                  </Link>
                </div>
              </div>
            </Link>
            <Link to="/image6">
              <div className="grid-item" style={{backgroundImage: `url(${img6})`}}>
                <img src={img6} alt="" />
                <Link to="/favourite">
                  <div className="favorite-button">
                    <img src={like} alt="Favorite" />
                  </div>
                </Link>
                <div className="cart-button">
                  <Link to="/cart">
                    <img src={save} alt="Cart" />
                  </Link>
                </div>
              </div>
            </Link>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
