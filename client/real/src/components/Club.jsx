import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import clubs from "../asserts/club.jpg"
import clubf from "../asserts/clubf.webp"




function Club() {
    const galleryRef = useRef(null);
  
    return (
      <div>
        <div className="linore-container">
          <img src={clubs} alt="flagship" className="villa-image" />
        
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
            <h1>Club 1</h1>
            <div className="features">
              <ul>
                <li>12.4 Cr.onwards*</li>
                <li>3 BHK</li>
                <li>Boat Club, Chennai</li>
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
        <span id="construction-value">40%</span>
      </div>
        <div className='highlights'>
          <h1>CLUB HIGHLIGHTS</h1>
          <h2>SALIENT FEATURES</h2>
          <div className='p'>
            <ul>
              <li>Solar lighting as per norms</li>
              <li>Lifts with V3F & ARD</li>
              <li>Landscaped Garden</li>
              <li>100% power back up for common areas lifts & pumps</li>
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
                <li>Roof top swimming pool</li>
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
    src="https://www.youtube.com/embed/X4oZi7DpSv0" 
    width="560" 
    height="315" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen 
    title="YouTube Walkthrough">
  </iframe>
</div>
</div>

        <div className='project-overview'>
          <h1>Experience awe in an amazing community!</h1>
          <div className='overview-container'>
            <img src={clubs} alt='project' className='overview-image'/>
            <div className='overview-details'>
                <p>Discover the epitome of luxury living at Club 1 Apartments, nestled in the prestigious Boat House area of Chennai. This premium development is designed for those who seek elegance, comfort, and convenience in their daily lives.</p>
            </div>
          </div>
        </div>
        <div className='galleries'>
    <h2>FLOOR PLAN</h2>
    <div className='gallery-container'>
      <div className='gallery' ref={galleryRef}>
        <img src={clubf} alt='Gallery 1' className='gallery-image'></img>
      </div>
    </div>
  </div>
  
  <h1>KNOW YOUR COMMUNITY</h1>
<div className='map-container'>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.665841637702!2d80.250829!3d13.027694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52677cff831105%3A0xb936ecfecd5243d3!2sClub+1!5e0!3m2!1sen!2sin!4v1690458489361!5m2!1sen!2sin"
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
  
  export default Club;
