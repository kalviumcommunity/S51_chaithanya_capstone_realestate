import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import nava from "../asserts/nava.jpg"


function Navasuja() {
    const galleryRef = useRef(null);
  
    return (
      <div>
        <div className="linore-container">
          <img src={nava} alt="flagship" className="villa-image" />
        
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
            <h1>Navasuja</h1>
            <div className="features">
              <ul>
                <li>4.04 Cr. Onwards*</li>
                <li> 3 & 4 BHK</li>
                <li>Located in RA puram,Chennai</li>
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
        <span id="construction-value">90%</span>
      </div>
        <div className='highlights'>
          <h1>HARIDA HIGHLIGHTS</h1>
          <h2>SALIENT FEATURES</h2>
          <div className='p'>
            <ul>
                <li>Association Room</li>
                <li>Motion Sensor Lighting system in club house</li>
            <li>Solar Powered LED Lights in common area</li>
       <li>Garbage collection room</li>
       <li>Toilets for drivers & domestic help</li>
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
    width="100%"
    height="400px"
    src="https://www.youtube.com/embed/05rp0h3Pz1k"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
</div>


        <div className='project-overview'>
          <h1>Experience awe in an amazing community!</h1>
          <div className='overview-container'>
            <img src={nava} alt='project' className='overview-image'/>
            <div className='overview-details'>
            <p>Navasuja, A consistent amalgamation of extravagance, solace, and style mix to give away really modern outlook towards life. Located at RA Puram, a posh residential neighbourhood, Navasuja offers easy access to good schools, colleges, places of worship and Shopping centers.</p>            </div>
          </div>
        </div>
        
        {/* <div className='galleries'>
    <h2>FLOOR PLAN</h2>
    <div className='gallery-container'>
      <div className='gallery' ref={galleryRef}>
        <img src={haridaf} alt='Gallery 1' className='gallery-image'></img>
        <img src={haridaf1} alt='Gallery 2' className='gallery-image'></img>
      </div>
    </div>
  </div> */}
  
  <h1>KNOW YOUR COMMUNITY</h1>
<div className='map-container'>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15504.553709763116!2d80.268238!3d13.0405441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b35a26eea9%3A0x59679877a28deb7a!2sHaridra%20-%20Appaswamy%20Real%20Estates%20Ltd!5e0!3m2!1sen!2sin!4v1690458489361!5m2!1sen!2sin"
    width="100%"
    height="400px"
    style={{ border: 'none' }}
    allowFullScreen=""
    loading="lazy"
    title="Google Map"
  ></iframe>
</div>

      </div>
    );
  }
  
  export default Navasuja;
