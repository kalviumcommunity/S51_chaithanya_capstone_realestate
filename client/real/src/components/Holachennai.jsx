import React, { useState, useRef } from 'react'; // Add comma here
import hola from "../asserts/hola.webp";
import { Link } from "react-router-dom";


function Holachennai() {
    const galleryRef = useRef(null)
      return (
        <div>
          <div className="linore-container">
            {/* Villa Image */}
            <img src={hola} alt="DreamHouse Linore" className="villa-image" />
    
            {/* Salient Features Section */}
            <div className="salient-features">
              <h2>Features</h2>
              <h3>Casagrand Holachennai</h3>
              <div className="features">
                <ul>
                  <li>Starting from 55 lakhs </li>
                  <li>2, 3 & 4 BHK Apartments, 4 BHK Floor</li>
                  <li>Villas & 4 BHK Villas</li>
                  <li>Located in Sholinganallur, Chennai</li>
                </ul>
              </div>
            </div>
    
            {/* Enquire Now Section */}
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
        <div className='new'>
        <Link to="/Favorites">
        <button>FAV</button>
        </Link>
      <Link to="/Cart">
        <button>CART</button>
        </Link>
        </div>
    
          {/* Highlights Section */}
          <div className='highlights'>
            <h1>HOLACHENNAI HIGHLIGHTS</h1>
            <h2>SALIENT FEATURES</h2>
            <div className='p'>
              <ul>
                <li>Beautifully crafted Contemporary styled Community of 1818 homes with an extensive choice of finest 2, 3 & 4 BHK premium apartments, 4 BHK signature Villas & Floor Villas spread across 30 acres at Sholinganallur.</li>
                <li>Located close to IT hubs</li>
                <li>22 acre Open Spaces for maximum light & ventilation</li>
                <li>8 acres of vehicle-free green podiums for outdoor recreational activities</li>
                <li>Double-height luxurious lobbies in apartments & Clubhouse</li>
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
                  <li>Entry water cascade with tree bed</li>
                  <li>Bus bay with halt deck</li>
                  <li>Drop off Plaza</li>
                  <li>Shuttle services</li>
                  <li> Pedestrian pathway</li>
                  <li>Bicycle lane</li>
                  <li> Pastoral Plaza</li>
                  <li>Spheroid Pavilion deck</li>
                  {/* Add more amenities as needed */}
                </ul>
              </div>
            </div>
            https://youtu.be/mvxUoqhExxQ
          </div>
    
          {/* Walkthrough Section */}
          <div className='walkthrough'>
            <h1>WALKTHROUGH</h1>
            <div className="video-container">
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ECgbTnXP4ZA"
        title="Walkthrough 1"
        frameBorder="0"
        allowFullScreen
    ></iframe>
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/LIoMpbCq1Lo"
        title="Walkthrough 2"
        frameBorder="0"
        allowFullScreen
    ></iframe>
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/mvxUoqhExxQ"
        title="Walkthrough 3"
        frameBorder="0"
        allowFullScreen
    ></iframe>
</div>

          </div>
    
          {/* Configuration Section */}
          <h1>CONFIGURATION</h1>
          <div className='configuration'>
            <div className='configuration-box'>
              <p>Market Price : ₹6500 / Sqft</p>
            </div>
            <div className='configuration-box'>
              <p>Casagrand Price : ₹4899 / Sqft</p>
            </div>
            <div className='configuration-box'>
              <p>Offer Price : ₹4599 / Sqft</p>
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
                  <td>1 BHK</td>
                  <td>Apartment</td>
                  <td>900 Sqft - 1100 Sqft Sqft</td>
                  <td>4599/Sqft</td>
                  <td>Rs. 44 Lakhs Onwards</td>
                </tr>
                <tr>
                  <td>2 BHK</td>
                  <td>Apartment</td>
                  <td>1150 Sqft - 1450 Sqft</td>
                  <td>4599/Sqft</td>
                  <td>Rs. 55 Lakhs Onwards</td>
                </tr>
                <tr>
                  <td>3 BHK</td>
                  <td>Apartment</td>
                  <td>1450 Sqft - 1479 Sqft</td>
                  <td>4599/Sqft</td>
                  <td>Rs. 71 Lakhs Onwards</td>
                </tr>
                <tr>
                  <td>3 BHK</td>
                  <td>Apartment</td>
                  <td>1587 Sqft - 1784 Sqft</td>
                  <td>4599/Sqft</td>
                  <td>Rs. 76Lakhs Onwards</td>
                </tr>
                <tr>
                  <td>4 BHK</td>
                  <td>Apartment</td>
                  <td>2500 Sqft - 2550 Sqft</td>
                  <td>4799/Sqft</td>
                  <td>Rs.1.24 CR Onwards</td>
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
            <h1>Experience The Next Level Of Ultimate Living !!!</h1>
            <div className="overview-container">
              <img src={hola} alt="home1" className="overview-image" />
              <div className="overview-details">
                <p>Casagrand Holachennai in Sholinganallur is a mesmerizing enclave spread across 30 acres, featuring 1800+ homes, each uniquely designed. From modern apartments to charming villas, every residence is a masterpiece with contemporary touches like Italian marble and large windows. The community is adorned with grand pools and an array of amenities, ensuring a lifestyle of comfort and leisure..</p>
                <p>Regular community events and gatherings weave a tight-knit bond among residents, creating a symphony of shared joy and relaxation, Set amidst the vibrant pulse of Sholinganallur, Casagrand Holachennai exudes a welcoming ambiance with its lively colors, offering residents a sanctuary where they can embrace life’s pleasures fully and find true contentment.</p>
                <p>RERA number – TN/29/Building/0352/2024 </p>
                <p><a href="http://www.rera.tn.gov.in" target="_blank" rel="noopener noreferrer">www.rera.tn.gov.in</a></p>
              </div>
            </div>
          </div>
    
          {/* Location Advantage Section */}
          <div className='location'>
            <h1>LOCATION ADVANTAGE</h1>
            <h3>DISTANCE FROM NEAREST EDUCATIONAL INSTITUTIONS</h3>
            <div className='location-details'>
              <ul>
                <li>Babaji Vidhyashram School – 4 min</li>
                <li>Velammal New Gen School – 9 mins</li>
                <li>Sathyabama University –  10 mins</li>
                <li>NPS International Public School – 12 mins</li>
                <li>St.Joseph’s Institute of Technology – 15 mins</li>
                <li>Amit University – 20 mins</li>
                <li>Mohammed Sathak Collage – 7 mins</li>
              </ul>
              <div className='but'>
                <Link to="/Advantages">
                  <button type='button'>MORE ADVANTAGES</button>
                </Link>
              </div>
            </div>
          </div>
    
    
    
        
        </div>
      );
    }
    
    export default Holachennai;
    