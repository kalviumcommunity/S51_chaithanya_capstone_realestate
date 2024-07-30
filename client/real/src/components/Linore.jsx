import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import home1 from '../asserts/linore.webp';

import l1 from "../asserts/l1.webp";
import l2 from "../asserts/l2.webp";
import l3 from "../asserts/l3.webp";
import l4 from "../asserts/l4.webp";
import l5 from "../asserts/l5.webp";
import l6 from "../asserts/l6.webp";
import "./Linore.css";
import axios from 'axios';

function Linore() {
  const [name, setName] = useState();
  const [number,setNumber]=useState()
  const galleryRef = useRef()
const handlesubmit=(e)=>{
  e.preventDefault();
  axios
      .post('http://localhost:3000/api/enquire', {
        name: name,
        number: number
      })
      .then((response) => {
        console.log(response);
        alert("Submitted successfully")
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
      });
}
  return (
    <div>
      <div className="linore-container">
        {/* Villa Image */}
        <img src={home1} alt="DreamHouse Linore" className="villa-image" />

        {/* Salient Features Section */}
        <div className="salient-features">
          <h2>Features</h2>
          <h3>Casagrand Linore</h3>
          <div className="features">
            <ul>
              <li>Starting from 71 lakhs </li>
              <li>Spacious 2, 3, and 4 BHK villas</li>
              <li>Located in kattupakkam.chennai</li>
            </ul>
          </div>
        </div>

        {/* Enquire Now Section */}
        <div className="enquire-now">
          <h2>Enquire Now</h2>
          <form onSubmit={handlesubmit}>
            <div className="input-group">
              <label htmlFor="name">Name:</label><br />
              <input type="text" onChange={(e)=>{setName(e.target.value)}} id="name" name="name" />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone Number:</label><br />
              <input type="text" onChange={(e)=>{setNumber(e.target.value)}} id="phone" name="phone" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    {/* <div className='new'>
    <Link to="/Favorites">
    <button>FAV</button>
    </Link>
  <Link to="/Cart">
    <button>CART</button>
    </Link>
    </div> */}
      <div classname="construction-range">
      <label for="construction">Construction Range:</label>
      <input type="range" id="construction" name="construction" min="0" max="100" value="3"></input>
      <span id="construction-value">3%</span>
    </div>

      {/* Highlights Section */}
      <div className='highlights'>
        <h1>LINORE HIGHLIGHTS</h1>
        <h2>SALIENT FEATURES</h2>
        <div className='p'>
          <ul>
            <li>275 signature 2, 3 & 4 BHK residences built on a B+G+5 Floor with Contemporary elevation across 4.87-acres</li>
            <li>Superior specs like gleaming Italian marble flooring, Digital Lock, High-end Sanitary Fittings and more</li>
            <li>Bedrooms with 3x ventilation with Huge windows</li>
            <li>Beautiful views of a 1.5-acre podium and lush green belt of 56,000 sft. to give an opportunity to be with nature</li>
            <li>70+ Amenities including 11,000 sft. Clubhouse with Double-height Lobby, 9400 sft. Swimming pool and more</li>
          </ul>
          <div className='more'>
            <Link to="/Linoremore">
              <button className="arrow-button">MORE REASON &#8594;</button>
            </Link>
            <div className='superior'>
              <Link to="/Superior">
                <button>SUPERIOR HOMES</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="amenities">
        <h1>Amenities</h1>
        <div className="amenities-list-container">
          <div className="amenities-list">
            <h2>Outdoor Amenities</h2>
            <ul>
              <li>Mini golf</li>
              <li>Tree house</li>
              <li>Hammock zone</li>
              {/* Add more amenities as needed */}
            </ul>
          </div>
          <div className='aminities-list1'>
            <h2>Indoor Amenities</h2>
            <ul>
              <li>Swimming pool</li>
              <li>Kids pool</li>
              <li>In pool day bed</li>
              {/* Add more amenities as needed */}
            </ul>
          </div>
        </div>
      </div>

      {/* Walkthrough Section */}
      <div className='walkthrough'>
        <h1>WALKTHROUGH</h1>
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Iujq_H4RBX4" title="Walkthrough 1" frameBorder="0" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/bsAsYwFfmio" title="Walkthrough 2" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>

      {/* Configuration Section */}
      <h1>CONFIGURATION</h1>
      <div className='configuration'>
        <div className='configuration-box'>
          <p>Market Price : ₹6500 / Sqft</p>
        </div>
        <div className='configuration-box'>
          <p>Casagrand Price : ₹5849 / Sqft</p>
        </div>
        <div className='configuration-box'>
          <p>Offer Price : ₹5749 / Sqft</p>
        </div>
      </div>

      {/* Apartment Configurations Section */}
      <div className='apartment'>
        <h1>Apartment Configurations</h1>
        <table className="apartment-table">
          <thead>
            <tr>
              <th>BHK</th>
              <th>UNIT TYPE</th>
              <th>BUILT-UP AREA</th>
              <th>PRICE PER SQ. FT.</th>
              <th>PRICE RANGE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2 BHK</td>
              <td>Apartment</td>
              <td>1169 - 1316 Sqft</td>
              <td>5749/Sqft</td>
              <td>Rs. 67.20 Lakhs Onwards</td>
            </tr>
            <tr>
              <td>3 BHK</td>
              <td>Apartment</td>
              <td>1593 - 1780 Sqft</td>
              <td>5749/Sqft</td>
              <td>Rs. 91.58 Lakhs Onwards</td>
            </tr>
            <tr>
              <td>4 BHK</td>
              <td>Apartment</td>
              <td>2506 - 2512 Sqft</td>
              <td>5849/Sqft</td>
              <td>Rs. 1.46 Cr Onwards</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Copyright Section */}
      <div className='copy'>
        <p>&copy; *Price mention is basic cost. Other charges excluded</p>
      </div>

      {/* Project Overview Section */}
      <div className="project-overview">
        <h1>Experience awe in an amazing community!</h1>
        <div className="overview-container">
          <img src={home1} alt="home1" className="overview-image" />
          <div className="overview-details">
            <p>Prepare to be captivated by a community that exudes sophistication in its breathtaking design! Casagrand Linore sets the standard for luxury,boasting a contemporary facade, opulent five-star interiors, and an abundance of meticulously curated features and amenities. Immerse yourself in a living experience that transcends ordinary, delivering unparalleled excellence at every corner.</p>
            <p>RERA number – TN/02/Buildinog/035/2024</p>
            <p><a href="http://www.rera.tn.gov.in" target="_blank" rel="noopener noreferrer">www.rera.tn.gov.in</a></p>
          </div>
        </div>
      </div>

      {/* Location Advantage Section */}
      <div className='location'>
        <h1>LOCATION ADVANTAGE</h1>
        <h3> TRANSPORTATION</h3>
        <div className='location-details'>
          <ul>
            <li>Upcoming Kattupakkam Metro Station – 5 Mins</li>
            <li>Upcoming Kumananchavadi Metro Station – 5 Mins</li>
            <li>Kattupakkam Bus Stop – 5 Mins</li>
            <li>Poonamallee Junction – 5 Mins</li>
            <li>Thiruverkadu Junction / Bus Stop – 7 Mins</li>
            <li>Karayanchavadi Bus Stand – 10 Mins</li>
            <li>Porur Junction / Bus Stop / Upcoming Porur Metro Station – 10 Mins</li>
          </ul>
          <div className='but'>
            <Link to="/Advantages">
              <button type='button'>MORE ADVANTAGES</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="galleries">
        <h2>Image Gallery</h2>
        <div className="gallery-container">
          <div className="gallery" ref={galleryRef}>
            <img src={l1} alt="Gallery 1" className="gallery-image" />
            <img src={l2} alt="Gallery 2" className="gallery-image" />
            <img src={l3} alt="Gallery 3" className="gallery-image" />
            <img src={l4} alt="Gallery 4" className="gallery-image" />
            <img src={l5} alt="Gallery 5" className="gallery-image" />
            <img src={l6} alt="Gallery 6" className="gallery-image" />
          </div>
        </div>
      <h1>KNOW YOUR COMMUNITY </h1>
      <div className="map-container" style={{ width: '100%', height: '400px', position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.2229774734963!2d80.25191987515147!3d13.040044090821428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b2727b3aaf%3A0x591c0a6c2f019a74!2sAdayar%2C%20Chennai%2C%20Tamil%20Nadu%20600020%2C%20India!5e0!3m2!1sen!2sus!4v1686853715091!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
    ></iframe>
</div>

      </div>


    </div>
  );
}

export default Linore;
