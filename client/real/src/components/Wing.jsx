import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import wings from "../asserts/wings.jpg"


function Wing() {
  const galleryRef = useRef(null);

  return (
    <div>
      <div className="linore-container">
        <img src={wings} alt="flagship" className="villa-image" />
      
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
          <h1>Wingfield</h1>
          <div className="features">
            <ul>
              <li>1.96 Cr.onwards*</li>
              <li> 3 & 4 BHK apartments</li>
              <li>Located in OMR, Chennai</li>
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
  <h1>WINGFIELD HIGHLIGHTS</h1>
  <h2>SALIENT FEATURES</h2>
  <div className='content'>
    <ul>
      <li>1000W Power Back up for all apartments.</li>
      <li>Solar lighting as per norms</li>
      <li>Emergency / First aid medical room, Association Room, Maintenance Help Desk</li>
      <li>The community has 42% open space with 69,000 sqft of colossal podiums</li>
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
       
      <iframe width="560" height="315" src="https://www.youtube.com/embed/1R3jMnYmH8c" title="Walkthrough 2" frameborder="0" allowfullscreen></iframe>

      </div>
    
</div>
      <div className='project-overview'>
        <h1>Experience awe in an amazing community!</h1>
        <div className='overview-container'>
          <img src={wings} alt='project' className='overview-image'/>
          <div className='overview-details'>
            <p>Living at Wingfield, in the highly desirable neighbourhood of Kottivakkam on OMR, is the pinnacle of opulence. Wingfield's luxurious 3 and 4-bedroom apartments, ranging in size from 1834 to 2928 square feet*, are unrivalled in their combination of lavishness, elegance, and comfort.</p>          </div>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3163088798555!2d80.24777267560204!3d12.971050065683614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d83d040e7cb%3A0x32963c1ca01bc634!2sWingfield%20-%20Appaswamy%20Real%20Estates%20Ltd!5e0!3m2!1sen!2sin!4v1691068939480!5m2!1sen!2sin"
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

export default Wing;
