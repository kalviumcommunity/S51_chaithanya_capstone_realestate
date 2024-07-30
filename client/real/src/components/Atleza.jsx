import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import altezza from "../asserts/altezza.jpg"
import afloor from "../asserts/afloor.webp"
import afloor2 from "../asserts/afloor2.webp"
import afloor3 from "../asserts/afloor3.webp"



function Alteza() {
    const galleryRef = useRef(null);
  
    return (
      <div>
        <div className="linore-container">
          <img src={altezza} alt="flagship" className="villa-image" />
        
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
            <h1>Altezza</h1>
            <div className="features">
              <ul>
                <li>1.42 Cr.onwards*</li>
                <li> 2, 2.5, 3, 4 BHK</li>
                <li>Located in kotivakkam, Chennai</li>
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
          <h1>ALTEZZA HIGHLIGHTS</h1>
          <h2>SALIENT FEATURES</h2>
          <div className='p'>
            <ul>
              <li>Access Controlled Barrier for Car Park Entry</li>
              <li>Solar lighting as per norms</li>
              <li>Solar Powered LED Lights in common area</li>
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
                <li>Leisure landscape court</li>
                <li>Roof top swimming pool</li>
                <li>Gymnasium</li>
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
      src="https://my.matterport.com/show/?m=XxPtYUi9eiQ" 
      width="560" 
      height="315" 
      frameBorder="0" 
      allow="fullscreen; vr" 
      allowFullScreen 
      title="360-degree Virtual Tour 2">
    </iframe>
    <iframe 
      src="https://my.matterport.com/show/?m=d1uCigAfkKM" 
      width="560" 
      height="315" 
      frameBorder="0" 
      allow="fullscreen; vr" 
      allowFullScreen 
      title="360-degree Virtual Tour 3">
    </iframe>
    <iframe 
      src="https://my.matterport.com/show/?m=ZQPr3o5Nxon" 
      width="560" 
      height="315" 
      frameBorder="0" 
      allow="fullscreen; vr" 
      allowFullScreen 
      title="360-degree Virtual Tour 4">
    </iframe>
  </div>
</div>

        <div className='project-overview'>
          <h1>Experience awe in an amazing community!</h1>
          <div className='overview-container'>
            <img src={altezza} alt='project' className='overview-image'/>
            <div className='overview-details'>
              <p>Altezza, a luxury community of a different hue, is located on OMR, famously known as the IT hub of Chennai. This location is surrounded by pan-national Tech Parks, a host of academics. True to its name, Vertical Garden grows to the roof, giving the Altezzians their very own parks to hike.</p>
            </div>
          </div>
        </div>
        
        <div className='galleries'>
    <h2>FLOOR PLAN</h2>
    <div className='gallery-container'>
      <div className='gallery' ref={galleryRef}>
        <img src={afloor} alt='Gallery 1' className='gallery-image'></img>
        <img src={afloor2} alt='Gallery 2' className='gallery-image'></img>
        <img src={afloor3} alt='Gallery 3' className='gallery-image'></img>
      </div>
    </div>
  </div>
  
  <h1>KNOW YOUR COMMUNITY</h1>
      <div className='map-container'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.2824376987163!2d80.249689!3d12.970139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525df0d5285d4f%3A0xe9f3aa287b8a56bb!2sAltezza+-+Appaswamy+Real+Estates+Ltd!5e0!3m2!1sen!2sin!4v1690458489361!5m2!1sen!2sin"
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
  
  export default Alteza;
