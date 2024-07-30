import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import s from "../asserts/s.webp"

function Suncity() {
  const [name, setName] = useState();
  const [number,setNumber]=useState()
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
        <img src={s} alt="DreamHouse Linore" className="villa-image" />

        {/* Salient Features Section */}
        <div className="salient-features">
          <h2>Features</h2>
          <h3>Casagrand Palm Springs</h3>
          <div className="features">
            <ul>
              <li>Starting from 51 lakhs </li>
              <li>2 & 3 BHK Apartments</li>
              <li>Located in East Tambaram, Chennai
              </li>
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
      

      {/* Highlights Section */}
      <div className='highlights'>
        <h1>PALM SPRINGS HIGHLIGHTS</h1>
        <h2>SALIENT FEATURES</h2>
        <div className='p'>
          <ul>
            <li>Finely crafted 352 apartments amidst 5.16 acres of land</li>
            <li>Elegantly designed 2 & 3 BHK units with B+G+5 floors structure</li>
            <li>75+ lifestyle Amenities of outdoor and indoor recreational facilities for a superior living</li>
            <li>13000 Sqft Clubhouse is equipped with world-class amenities and plush interiors.</li>
            <li>Community is designed with vehicle free zone & ideal place for Kids & Senior Citizens</li>
          </ul>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="amenities">
        <h1>Amenities</h1>
        <div className="amenities-list-container">
          <div className="amenities-list">
            <h2>Outdoor Amenities</h2>
            <ul>
              <li>swimming pool</li>
              <li>lobby</li>
              <li>play area</li>
              <li>toodler play area</li>
            <h2>Indoor amenities</h2>
            <ul>
              <li>gym</li>
              <li>club house</li>
              <li>library</li>
            
            </ul>
              {/* Add more amenities as needed */}
            </ul>
          </div>
        </div>
      </div>

      {/* Walkthrough Section */}
      <div className='walkthrough'>
  <h1>WALKTHROUGH</h1>
  <div className="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/54I6qcWRXLQ" title="Walkthrough 3" frameBorder="0" allowFullScreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/QFTtGiiH474" title="Walkthrough 4" frameBorder="0" allowFullScreen></iframe>
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
          <img src={s} alt="home1" className="overview-image" />
          <div className="overview-details">
            <p>
            Finding a perfect home that matches your dreams is happiness. But finding a home that exceeds your expectations and goes beyond your imagination is pure bliss. Casagrand Palm Springs is one such perfect home. One that brings the best of everything – location, connectivity, comfort, and lifestyle. A home that truly matches your dreams, aspirations, and desires.</p>
            <p>Casagrand Palm Springs gives you smooth access to major parts of the city. It’s central location is a huge advantage that benefits you in innumerable ways saving you precious time and money on needless travel. Being in the hub of growth, it also makes for an exciting investment option that will give you excellent returns in the future. Packed with amenities and superior lifestyle features, Palm Springs will enrich your life in ways you never imagined.</p>
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
            <li>Indian Institute of Information Technology, Design and Manufacturing – 2 mins</li>
            <li>Tamil Nadu Physical Education and Sports University – 7 mins</li>
            <li>Tagore Medical College – 9 mins</li>
            <li>VIT Kelambakkam – 10 mins</li>
            <li>Velammal Vidyashram School – 10 mins</li>
            <li>FIITJEE Global School Chennai – 15 mins</li>
            <li>Zion International School – 14 mins</li>
            <li>Lydia Matriculation Higher Secondary School – 15 mins</li>
          </ul>
          
        </div>
      </div>

      {/* Image Gallery Section */}
      {/* <div className="galleries">
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
        </div> */}
      <h1>KNOW YOUR COMMUNITY </h1>
      <div className="map-container" style={{ width: '100%', height: '400px', position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8484822828334!2d80.15530401480136!3d12.882609890909314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d2aaf77b43f%3A0xdea5ad3e7b3d935!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1626865930190!5m2!1sen!2sus"
    width="100%"
    height="100%"
    style={{ border: 'none' }}
    allowFullScreen=""
    loading="lazy"
    title="Google Map"
  ></iframe>
</div>



      </div>


    // </div>
  );
}

export default Suncity;
