import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import img1 from "../asserts/img 1.jpeg";
import img2 from "../asserts/img 2.jpeg";
import best1 from "../asserts/best1.jpeg"; 
import best2 from "../asserts/best2.jpeg"; 
import best3 from "../asserts/best3.jpeg"; 
import best4 from "../asserts/best4.jpeg"; 
import best5 from "../asserts/best5.jpeg"; 
import best6 from "../asserts/best6.jpeg"; 
import best7 from "../asserts/best7.webp"; 
import best8 from "../asserts/best8.jpg"; 
import best9 from "../asserts/best9.jpg"; 
import best10 from "../asserts/best10.jpg"; 
import classes from "./Features.module.css";

const Features = () => {
  // Include all imported images into the images array
  const images = [img1, img2, best1, best2, best3, best4, best5, best6, best7, best8, best9, best10];
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition(prevPos => Math.max(prevPos - 1, 0));
  };

  const scrollRight = () => {
    setScrollPosition(prevPos => Math.min(prevPos + 1, images.length - 1));
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <h5>Welcome to the Best Property Selling Area</h5>
          <h2>Explore Our Featured Properties</h2>
        </div>
        <div className={classes.properties}>
          <button className={`${classes.scrollButton} ${classes.leftButton}`} onClick={scrollLeft}>{'<'}</button>
          <div className={classes.propertyGallery}>
            <div className={classes.imageContainer} style={{ transform: `translateX(-${scrollPosition * 220}px)` }}>
              {/* Wrap the first image with Link component */}
              <Link to="/Bestseller">
                <img src={images[0]} alt="Bestseller" className={classes.propertyImage} />
              </Link>
              {/* Wrap the second image with Link component */}
              <Link to="/Bestseller1">
                <img src={images[1]} alt="Bestseller1" className={classes.propertyImage} />
              </Link>
              {/* Render other images normally */}
              {images.slice(2).map((image, index) => (
                <img key={index + 2} src={image} alt={`Image ${index + 3}`} className={classes.propertyImage} />
              ))}
            </div>
          </div>
          <button className={`${classes.scrollButton} ${classes.rightButton}`} onClick={scrollRight}>{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
