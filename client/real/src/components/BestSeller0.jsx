import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pri from "../asserts/pri.webp";
import Pfloor1 from "../asserts/Pfloor1.webp";
import Pfloor2 from "../asserts/Pfloor2.webp";
import Pfloor3 from "../asserts/Pfloor3.webp"
import "./Bestseller0.css";
import "./Bestseller1.css";  // Assuming the same CSS file is used

function BestSeller0() {
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
        <h1>CASAGRAND PRIMROSE</h1>
      </div>
      <div className='villa-image' onClick={() => openModal(pri)}>
        <img src={pri} alt='pri'></img>
      </div>
  
      <div className="description">
        <p>2 & 3 BHK Rs.39 L Onwards</p>
        <p>Located in Perungalathur</p>
        <p>4 BHK Floor Villa Rs.1.47 Cr onwards</p>
      </div>
      <div className="section">
        <h2>CASAGRAND PRIMROSE HIGHLIGHTS</h2>
        <ul>
          <li>An elegant high-rise community of 932 apartments & 21 villas crafted in Contemporary architectural technique amidst 9.14 acres.</li>
          <li>Thoughtfully designed 2, 3 and 4 BHK apartments with following structure. (Tower A – B+G+18 | Tower B – B+G+ 19 | Tower – C & F – B+G+21 | Tower – D – B+G+21 |Tower – E -B+G+21).
          </li>
          <li>95+ world-class amenities like Victorian water cascade fountain, Multipurpose hall, Kids surprise fountain area, Informal Amphitheatre, Circular multiplay alcove, Convenio store, Saloon/Spa, and much more.</li>
          <li>77% open space with 49000 sq ft landscaped podiums for maximum light & ventilation.
          </li>
        </ul>
      </div>
  
      <div className='floor'>
        {/* Replace with actual floor plan images */}
        <img src={Pfloor1} alt='PriPlan1' onClick={() => openModal(pri)}></img>
        <img src={Pfloor2} alt='PriPlan2' onClick={() => openModal(pri)}></img>
        <img src={Pfloor3} alt='PriPlan3' onClick={() => openModal(pri)}></img>
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
              <td>1 BHK</td>
              <td>Compact</td>
              <td>686 Sqft - 842 Sqft	</td>
              <td>Rs.3799/ Sqft	</td>
              <td>Sold out
          </td>
            </tr>
            <tr>
              <td>2 BHK</td>
              <td>Regular</td>
              <td>952 Sqft - 1131 Sqft	</td>
              <td>Rs 3799 / Sqft	</td>
              <td>Rs.39 Lakhs onwards
              </td>
            </tr>
          <tr>
            <td>3 BHK</td>
            <td>Regular</td>
            <td>1135 Sqft - 1529 Sqft	</td>
            <td>Rs 3899 / Sqft	</td>
            <td>Rs.48 Lakhs onwards</td>
          </tr>
          
          </tbody>
        
      
        </table>
      <h4>*Price mention is basic cost and Other Charges add this at last in table</h4>
      <div className='section'>
        <h3>Ultra Luxurious Apartment</h3>
        <table className="configuration-table">
          <thread>
            <tr>
              <th>BHK</th>
              <th>UNIT TYPE</th>
              <th>BUILD-UP AREA</th>
              <th>PRICE PER SQ. FT</th>
              <th>PRICE RANGE</th>
            </tr>
            <tr>
          <td>4 BHK</td>
          <td>Floor villa</td>
          <td>3579 Sqft - 3588 Sqft</td>
          <td>Rs 3899 / Sqft</td>
          <td>Rs.1.47 Cr onwards
          </td>
        </tr>
        
          </thread>
        </table>
      <h4>*Price mention is basic cost and Other Charges add this at last in table</h4>

      </div>
      
      </div>
      <div className="amenities-section">
        <div className="amenities-list">
          <h1>Terrace Amenities</h1>
          <li>1.Cafeteria</li>        
          <li>2. Multipurpose hall</li>
          <li>3. Mini theatre</li>
          <li>4. Art / Music/ Learning center</li>
          <ul>
          </ul>
          <h2>Fitness</h2>
          <ul>
            <li>5.Gym</li>
            <li>6. Interactive Gym</li>
            <li>7. Yoga/ Zumba/ Aerobics room</li>
          </ul>
          <h2>Gaming Zone</h2>
          <ul>
            <li>8. Video games room</li>
            <li>9. Virtual reality games</li>
            <li>10. Boxing simulator

</li>
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
        <p>Embark on an unforgettable experience. Contact us today to reserve your apartment at Casagrand PRI.</p>
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

export default BestSeller0;
