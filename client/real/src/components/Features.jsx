import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import pri from "../asserts/pri.webp";
import dior from "../asserts/dior.webp";
import tranquil from "../asserts/tranquil.webp";
import classes from "./Features.module.css";
import luxeria from "../asserts/luxeria.webp";
import eco from "../asserts/eco.webp";
import vistaz from "../asserts/vistaz.jpg";

const Features = () => {
  // Include all imported images into the images array
  const images = [pri, dior, tranquil, luxeria, eco, vistaz];
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
              {/* Wrap the images with Link component */}
              {images.map((image, index) => (
                <Link key={index} to={`/Bestseller${index}`}>
                  <img src={image} alt={`Bestseller${index}`} className={classes.propertyImage} />
                </Link>
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
