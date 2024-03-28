import React from 'react';
import "./Home.css"; 
import footer from "./Footer"
import homeImage from "../asserts/app.jpg";
import image from "../asserts/building.jpeg"
// import images from "../asserts/one.jpeg"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="home-container">
      <h1>Discover your dream home<br />
        with prices starting from 50L🏚️⚡!<br />
        Don't miss out on our exclusive offers<br />
        for premium apartments</h1>
      <img src={homeImage} alt="Home Image" className="home-image" />
       <img src={image} alt="image" className='image'/>
     {/*} <img src={images} alt="images" className='images' /> */}
     <Footer/>
    </div>
  );
};

export default Home;
