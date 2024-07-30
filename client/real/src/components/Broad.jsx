import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import broad from "../asserts/broad.jpg"


function Broad() {
  const galleryRef = useRef(null);

  return (
    <div>
      <div className="linore-container">
        <img src={broad} alt="flagship" className="villa-image" />
      
        {/* <div class="fav"> */}
      {/* <Link to="/Favorites">
      <button type="button">ADD TO FAV</button>
      </Link>
      <Link to="/Cart">
      <button type="button">ADD TO CART</button>
      </Link> */}
    {/* </div> */}
  

        <div className="salient-features">
          <h2>Features</h2> 
          <h1>The Broadstone</h1>
          <div className="features">
            <ul>
              <li>1.92 Cr.onwards*</li>
              <li> 3 & 4 BHK apartments</li>
              <li>Located in Ramapuram, Chennai</li>
            </ul>
          </div>
        </div>
      
      
        <div className="enquire-now">
          <h2>Enquire Now</h2>
          <form>
            <div className="input-group">
              <label htmlFor="name">Name:</label><br />
              <input type="text" id="name" name="name" />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone Number:</label><br />
              <input type="text" id="phone" name="phone" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div classname="construction-range">
      <label for="construction">Construction Range:</label>
      <input type="range" id="construction" name="construction" min="0" max="100" value="55"></input>
      <span id="construction-value">50%</span>
    </div>
      <div className='highlights'>
        <h1>The Broadstone HIGHLIGHTS</h1>
        <h2>SALIENT FEATURES</h2>
        <div className='p'>
          <ul>
            <li>Security Cabins</li>
            <li>1000 Watts Supply for each apartment.100% Power Back up for common Area</li>
        <li>Emergency / First aid medical room,Association Room,Maintenance Help Desk</li>            <li>The community has 42% open space with 69,000 sqft of colossal podiums</li>
<li>Rain Water Harvesting</li>       
     <li>An elaborate clubhouse of 34,000 sq.ft with luxurious amenities like Spa, Sauna, Jacuzzi & Salon</li>
     <li>Garbage collection room</li>
          </ul>
         
        </div>
      </div>
      <div className="amenities">
        <h1>Amenities</h1>
        <div className="amenities-list-container">
          <div className="amenities-list">
            <h2>ENTERTAINMENT AND FEATURES</h2>
            <ul>
              <li>Mini Theatre</li>
              <li>swimming pool</li>
              <li>kids play area</li>
              <li>Yoga & meditation zone</li>
              <li>Access Controlled Doors</li>
              <li>CCTV Surveillance</li>

            </ul>
          
          </div>
        </div>
      </div>
      <div className='walkthrough'>
  <h1>Walkthrough</h1>
  <div className="videos">

    <iframe 
      src="https://www.youtube.com/embed/Gm8PxObSa68" 
      width="560" 
      height="315" 
      frameborder="0"   
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      title="YouTube Video">
    </iframe>
  </div>


</div>
      <div className='project-overview'>
        <h1>Experience awe in an amazing community!</h1>
        <div className='overview-container'>
          <img src={broad} alt='project' className='overview-image'/>
          <div className='overview-details'>
            <p>The Broadstone is a meticulously designed sanctuary offering a premium living central to one's life. Holding comfort and convenience at their heart, the two towers' modern, slick exteriors feature clean lines and muted colours. And these premium apartments come with well-thought-of features finished to the highest standards. </p>
          </div>
        </div>
      </div>
      
      {/* <div className='galleries'>
  <h2>FLOOR PLAN</h2>
  <div className='gallery-container'>
    <div className='gallery' ref={galleryRef}>
      <img src={park1} alt='Gallery 1' className='gallery-image'></img>
      <img src={park2} alt='Gallery 2' className='gallery-image'></img>
      <img src={park3} alt='Gallery 3' className='gallery-image'></img>
    </div>
  </div>
</div> */}

    <h1>KNOW YOUR COMMUNITY</h1>
    <div className='map-container'>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7465954359173!2d80.17417191482492!3d13.024946218835917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670dcb2ee0ed%3A0x19a11bcb65e8ac3!2sExample%20Location!5e0!3m2!1sen!2sin!4v1624541597372!5m2!1sen!2sin"
    width="100%"
    height="400px"
    style={{ border: 0 }}
    allowfullscreen=""
    loading="lazy"
    title="Google Maps Example Location"
  ></iframe>
</div>


    </div>
  );
}

export default Broad;
