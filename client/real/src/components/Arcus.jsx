import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import arcuss from "../asserts/arcuss.jpg"


function Arcus() {
    const galleryRef = useRef(null);
  
    return (
      <div>
        <div className="linore-container">
          <img src={arcuss} alt="flagship" className="villa-image" />
        
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
            <h1>Arcus</h1>
            <div className="features">
              <ul>
                <li>3.76Cr.onwards*</li>
                <li> 3,4 BHK</li>
                <li>Located in T.Nagar,Chennai</li>
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
          <h1>HARIDA HIGHLIGHTS</h1>
          <h2>SALIENT FEATURES</h2>
          <div className='p'>
            <ul>
              <li>Access Controlled Barrier for Car Park Entry</li>
              <li>Solar lighting as per norms</li>
              <li>Water meters for all apartments Digital</li>
  <li>Rain Water Harvesting</li>       
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
            <img src={arcuss} alt='project' className='overview-image'/>
            <div className='overview-details'>
                <p>Arcus, at Giri Road, T Nagar, provides the perfect canvas to set the life you have always desired An exquisite design with careful planning and attention to detail defines Arcus. And the number of apartments. With only 19 apartments, you will be amidst select like-minded residents, Arcus comes with a clubhouse, whose features will make it your third place.</p>
            </div>
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
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62203.41561941965!2d80.243288!3d13.0484265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526731dece9329%3A0x5c2bce76e74c223!2sArcus%20-%20Appaswamy%20Real%20Estates%20Ltd!5e0!3m2!1sen!2sin!4v1690458489361!5m2!1sen!2sin"
    width="100%"
    height="400px"
    style={{ border: 'none' }}
    allowFullScreen
    loading="lazy"
    title="Google Map"
  ></iframe>
</div>


      </div>
    );
  }
  
  export default Arcus;
