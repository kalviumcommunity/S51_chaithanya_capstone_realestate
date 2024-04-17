import React from 'react';
import img1 from "../asserts/img 1.jpeg";
import featureimg from "../asserts/feature1.jpeg";
import featureimg2 from "../asserts/feature2.jpeg";
import img2 from "../asserts/img 2.jpeg";
import classes from "./Features.module.css";

const Features = () => {
  return(
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <h5>Welcome to the Best Property Selling Area</h5>
          <h2>Explore Our Featured Properties</h2>
        </div>
        <div className={classes.properties}>
          <div className={classes.property}>
            <img src={featureimg} alt="Feature Image 1" />
            <h3>Modern Apartment</h3>
            <p>Located in the heart of the city, this stylish apartment offers luxury living with stunning city views.</p>
            <button>View Details</button>
          </div>
          <div className={classes.property}>
            <img src={featureimg2} alt="Feature Image 2" />
            <h3>Seaside Villa</h3>
            <p>Escape to this beautiful seaside villa, where you can enjoy breathtaking ocean views and luxurious amenities.</p>
            <button>View Details</button>
          </div>
        </div>
        <div className={classes.moreProperties}>
          <h5>More Properties</h5>
          <div className={classes.propertyGallery}>
            <img src={img1} alt="Image 1" />
            <img src={img2} alt="Image 2" />
            {/* Add more property images here */}
          </div>
          <button>View All Properties</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
