import React, { useState } from 'react';
import img1 from "../asserts/img 1.jpeg";
import img2 from "../asserts/img 2.jpeg";
import best1 from "../asserts/best1.jpeg"; 
import best2 from "../asserts/best2.jpeg"; 
import best3 from "../asserts/best3.jpeg"; 
import best4 from "../asserts/best4.jpeg"; 
import best5 from "../asserts/best5.jpeg"; 

import classes from "./Features.module.css";

const Features = () => {
  const images = [img1, img2, best1, best2, best3, best4, best5];
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
              {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} className={classes.propertyImage} />
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
