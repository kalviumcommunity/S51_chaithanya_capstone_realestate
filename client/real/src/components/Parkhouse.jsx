import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import park from "../asserts/park.jpg"
import park1 from "../asserts/park1.webp"
import park2 from "../asserts/park2.webp"
import park3 from "../asserts/park3.webp"

import "./Park.css"

function Parkhouse() {
  const galleryRef = useRef(null);

  return (
    <div>
      <div className="linore-container">
        <img src={park} alt="flagship" className="villa-image" />
      
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
          <h1>parkhouse mews</h1>
          <div className="features">
            <ul>
              <li>3.01 Cr.onwards*</li>
              <li> 3 & 4 BHK apartments</li>
              <li>Located in guindy, Chennai</li>
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
      <span id="construction-value">60%</span>
    </div>
      <div className='highlights'>
        <h1>PARKHOUSE HIGHLIGHTS</h1>
        <h2>SALIENT FEATURES</h2>
        <div className='p'>
          <ul>
            <li>1000W Power Back up for all apartments.</li>
            <li>Solar lighting as per norms</li>
            <li>Emergency / First aid medical room,Association Room,Maintenance Help Desk</li>            <li>The community has 42% open space with 69,000 sqft of colossal podiums</li>
<li>Rain Water Harvesting</li>       
     <li>An elaborate clubhouse of 34,000 sq.ft with luxurious amenities like Spa, Sauna, Jacuzzi & Salon</li>
     <li>Motion sensor lighting system in club house</li>
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
              <li>Feature median planting</li>
              <li>Leisure landscape court</li>
              <li>Yoga & meditation zone</li>
              <li>Access Controlled Doors</li>
              <li>CCTV Surveillance</li>

            </ul>
          
          </div>
        </div>
      </div>
      <div className='walkthrough'>
      <h1>360 Degree Virtual Tour And Walkthrough Video</h1>
      <div className="videos">
        <iframe 
          src="https://my.matterport.com/show/?m=jkjS5KLSqFg" 
          width="560" 
          height="315" 
          frameBorder="0" 
          allow="fullscreen; vr" 
          allowFullScreen 
          title="360-degree Virtual Tour">
        </iframe>
        <iframe 
          src="https://www.youtube.com/embed/E1yl_a25704" 
          width="560" 
          height="315" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
          title="YouTube Video">
        </iframe>
      </div>
    
</div>
      <div className='project-overview'>
        <h1>Experience awe in an amazing community!</h1>
        <div className='overview-container'>
          <img src={park} alt='project' className='overview-image'/>
          <div className='overview-details'>
            <p>Parkhouse Mews is elegantly designed in a triangular shape with clean lines and smooth edges. The apartments are neatly placed in the periphery of the triangle to give each of them the best views possible of the beautiful surroundings. The corner of the building is sculpted with a series of overhanging balconies reminiscent of early-modern high rises.</p>
          </div>
        </div>
      </div>
      
      <div className='galleries'>
  <h2>FLOOR PLAN</h2>
  <div className='gallery-container'>
    <div className='gallery' ref={galleryRef}>
      <img src={park1} alt='Gallery 1' className='gallery-image'></img>
      <img src={park2} alt='Gallery 2' className='gallery-image'></img>
      <img src={park3} alt='Gallery 3' className='gallery-image'></img>
    </div>
  </div>
</div>

    <h1>KNOW YOUR COMMUNITY</h1>
    <div className='map-container'>
    <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4104235888323!2d80.205401!3d12.99581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e6f70166f3%3A0x18d4af75de6d9742!2sParkhouse+Mews%2C+Chennai%2C+Tamil+Nadu%2C+India!5e0!3m2!1sen!2sus!4v1659426540900!5m2!1sen!2sus"
            width="100%"
            height="400px" // Adjust the height as needed
            style={{ border: 'none' }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
        ></iframe>
</div>

    </div>
  );
}

export default Parkhouse;
