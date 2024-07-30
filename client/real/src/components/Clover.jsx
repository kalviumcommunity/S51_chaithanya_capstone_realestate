import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import cloverr from "../asserts/cloverr.jpg"
import cloverf1 from "../asserts/cloverf1.webp"
import cloverf2 from "../asserts/cloverf2.webp"
import cloverf3 from "../asserts/cloverf3.webp"



function Clover() {
    const galleryRef = useRef(null);
  
    return (
      <div>
        <div className="linore-container">
          <img src={cloverr} alt="flagship" className="villa-image" />
        
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
            <h1>Clover By The River</h1>
            <div className="features">
              <ul>
                <li>2.28 Cr. Onwards*</li>
                <li> 2,3,4 BHK</li>
                <li>Kotturpuram,Chennai</li>
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
        <span id="construction-value">80%</span>
      </div>
        <div className='highlights'>
          <h1>CLOVER HIGHLIGHTS</h1>
          <h2>SALIENT FEATURES</h2>
          <div className='p'>
            <ul>
              <li>Access Controlled Barrier for Car Park Entry</li>
              <li>Toilets for drivers & domestic help</li>
              <li>Solar Powered LED Lights in common area</li>
              <li>Fire fighting sprinkler system</li>
                     <li>Water meters for all apartments Digital</li>
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
  <h1>360 Degree Virtual Tour</h1>
  <div className="videos">
    <iframe 
      src="https://my.matterport.com/show/?m=Dth1zsgsjKD" 
      width="560" 
      height="315" 
      frameBorder="0" 
      allow="fullscreen; vr" 
      allowFullScreen 
      title="360-degree Virtual Tour 1">
    </iframe>
    <iframe 
      src="https://my.matterport.com/show/?m=QRHY1d9UYGG" 
      width="560" 
      height="315" 
      frameBorder="0" 
      allow="fullscreen; vr" 
      allowFullScreen 
      title="360-degree Virtual Tour 2">
    </iframe>
    <iframe 
      src="https://my.matterport.com/show/?m=5Eri1LtZBZ8" 
      width="560" 
      height="315" 
      frameBorder="0" 
      allow="fullscreen; vr" 
      allowFullScreen 
      title="360-degree Virtual Tour 3">
    </iframe>
  </div>
</div>


        <div className='project-overview'>
          <h1>Experience awe in an amazing community!</h1>
          <div className='overview-container'>
            <img src={cloverr} alt='project' className='overview-image'/>
            <div className='overview-details'>
                <p>Clover By The River - an address that is an oasis of calm, peace and magnificence in the hustle-bustle of the city. A Clover is a leaf with four lobes and is thought to bring good luck. Clover By the River is the third prestigious project from Appaswamy in Kotturpuram. This idyllic place, surrounded by an aristocratic neighbourhood, is a popular residential destination.</p>
            </div>
          </div>
        </div>
        
        <div className='galleries'>
    <h2>FLOOR PLAN</h2>
    <div className='gallery-container'>
      <div className='gallery' ref={galleryRef}>
        <img src={cloverf1} alt='Gallery 1' className='gallery-image'></img>
        <img src={cloverf2} alt='Gallery 2' className='gallery-image'></img>
        <img src={cloverf3} alt='Gallery 3' className='gallery-image'></img>
      </div>
    </div>
  </div>
<h1>KNOW YOUR COMMUNITY</h1>
<div className='map-container'>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.7306494892533!2d80.2453263!3d13.0230378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f607534c9f%3A0xdb16d870a57b0a1d!2sClover%20By%20The%20River!5e0!3m2!1sen!2sin!4v1690550000000!5m2!1sen!2sin"
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
  
  export default Clover;
