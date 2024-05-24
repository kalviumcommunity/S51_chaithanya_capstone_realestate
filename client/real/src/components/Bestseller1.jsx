import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Dimage from "../asserts/Dimage.webp"
import "./Bestseller1.css";
import dior from "../asserts/dior.webp"
import Dplan1 from "../asserts/Dplan1.webp"
import Dplan2 from "../asserts/Dplan2.webp"
import Dplan3 from "../asserts/Dplan3.webp"

function Bestseller1() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className="heading">
      <div className="title">
        <h1>CASAGRAND DIOR</h1>
      </div>
      <div className='villa-image' onClick={() => openModal(dior)}>
        <img src={dior} alt='dior'></img>
      </div>
  
      <div className="description">
        <p>3 & 4 BHK Apartments</p>
        <p>Located in Kilpauk, Chennai</p>
        <p>Rs. 2.53 Cr Onwards*</p>
      </div>
      <div className="section">
        <h2>CASAGRAND DIOR HIGHLIGHTS</h2>
        <ul>
          <li>An elegantly crafted Contemporary styled community with 30 finest 3 & 4 BHK Ultra Luxury Apartments</li>
          <li>Privacy ensured with apartments designed to avoid direct-facing main doors and overlooking units</li>
          <li>Architecturally magnificent community with glass façade, lighting, and grand entrance arch with water feature</li>
          <li>An elegant community where every bedroom and balcony offers breathtaking views of the city or landscape</li>
        </ul>
      </div>
  
      <div className='floor'>
        <img src={Dplan1} alt='Dplan1' onClick={() => openModal(Dplan1)}></img>
        <img src={Dplan2} alt='Dplan2' onClick={() => openModal(Dplan2)}></img>
        <img src={Dplan3} alt='Dplan3' onClick={() => openModal(Dplan3)}></img>
      </div>
      <div className="section">
  <h2>Configuration</h2>
  <table className="configuration-table">
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
        <td>3 BHK</td>
        <td>Signature</td>
        <td>1767 Sqft - 2082 Sqft</td>
        <td>Rs 13799 / Sqft</td>
        <td>Rs. 2.43 Cr onwards</td>
      </tr>
      <tr>
        <td>4 BHK</td>
        <td>Signature</td>
        <td>2515 Sqft</td>
        <td>Rs 13799 / Sqft</td>
        <td>Rs. 3.47 Cr onwards</td>
      </tr>
    </tbody>
  </table>
</div>
<div className="amenities-section">
  
  <div className="amenities-list">
    <h1>Terrace Amenities</h1>
    <h2>Entertainment</h2>
    <ul>
      <li>Kids play park</li>
      <li>Rooftop cabana</li>
      <li>Barbeque station</li>
    </ul>
    <h2>Fitness</h2>
    <ul>
      <li>Fitness functional frame</li>
      <li>Rooftop yoga & meditation deck</li>
    </ul>
    <h2>Outdoor Amenities</h2>
    <ul>
      <li>Reflexology walkway</li>
      <li>Leisure seating court</li>
      <li>Tot lot</li>
      <li>Pets park</li>
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

      <div className="section">
        <h2>Book Your Stay</h2>
        <p>Embark on an unforgettable experience. Contact us today to reserve your apartment at Casagrand Dior.</p>
        <p>Phone: 7010965635</p>
        <p>Email: dreamhouserealty@gmail.com</p>
        
        {/* Link the button to Schedule.js */}
        <Link to="/Schedule">
          <button className="cta-button">Schedule a Viewing</button>
        </Link>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="popup" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Bestseller1;
