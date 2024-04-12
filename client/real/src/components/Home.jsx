import React from 'react';
import "./Home.css";
import Footer from "../components/Footer";
import img1 from "../asserts/img 1.jpeg";
import img2 from "../asserts/img 2.jpeg";
import img3 from "../asserts/img 3.jpeg";
import img4 from "../asserts/img 4.jpeg";
import img5 from "../asserts/img 5.jpeg";
import img6 from "../asserts/img 6.jpeg";
import{Link} from 'react-router-dom'


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
      
      
      <div className="image-grid">
        <Link to="/Image1">
          <div className="grid-item" style={{backgroundImage: `url(${img1})`}}>
            <img src={img1} alt="" />
          </div>
        </Link>
        <Link to="/image2">
          <div className="grid-item" style={{backgroundImage: `url(${img2})`}}>
            <img src={img2} alt="" />
          </div>
        </Link>
        <Link to="/image3">
          <div className="grid-item" style={{backgroundImage: `url(${img3})`}}>
            <img src={img3} alt="" />
          </div>
        </Link>
        <Link to="/image4">
          <div className="grid-item" style={{backgroundImage: `url(${img4})`}}>
            <img src={img4} alt="" />
          </div>
        </Link>
        <Link to="/image5">
          <div className="grid-item" style={{backgroundImage: `url(${img5})`}}>
            <img src={img5} alt="" />
          </div>
        </Link>
        <Link to="/image6">
          <div className="grid-item" style={{backgroundImage: `url(${img6})`}}>
            <img src={img6} alt="" />
          </div>
        </Link>
      </div>


      
      <Footer />
    </div>
  );
};

export default Home;
