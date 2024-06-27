import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import tranquil from "../asserts/tranquil.webp"
import Tfloor from "../asserts/Tfloor.webp";



function Bestseller2() {
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
        <h1>CASAGRAND TRANQUIL</h1>
      </div>
      <div className='villa-image' onClick={() => openModal(brand2)}>
        <img src={tranquil} alt='brand2'></img>
      </div>

      <div className="description">
        <p>4 BHK Villa</p>
        <p>Located in Pallikaranai</p>
        <p>Rs. 2.22 Cr onwards</p>
      </div>
      <div classname="construction-range">
      <label for="construction">Construction Range:</label>
      <input type="range" id="construction" name="construction" min="0" max="100" value="55"></input>
      <span id="construction-value">82%</span>
    </div>
      <div className="section">
        <h2>CASAGRAND TRANQUIL HIGHLIGHTS</h2>
        <ul>
            <li>Beautifully crafted 82 luxurious 4 & 5 BHK Villas on 5.3 acres</li>
            <li>Exclusive Bali themed villa community with G+2 structure and ample open space for undisturbed light & ventilation
            </li>
            <li>35+ lifestyle amenities & features like swimming pool, gym, amphitheatre,
            mini-golf & more</li>
          <li>AIndependent villas with no-common-wall sharing with exclusive
          350 sq.ft backyard</li>
          <li>Carefully chosen premium specifications like digital door lock, VDP,
          bluetooth speaker, premium sanitary fittings & more</li>
          <li>100% Vaastu compliant homes designed with no wastage of spaces</li>
          <li>Most thoughtfully designed plans with major focus on 4 important design
          elements – light, ventilation, privacy & Vaastu</li>
        </ul>
      </div>
    <div>
        <Link to='/Tsuperior'>
      <button type='onclick'>SUPERIOR HOMES</button>
      </Link>
    </div>

      {/* <div className='floor'>
        <img src={Bplan1} alt='Bplan1' onClick={() => openModal(Bplan1)}></img>
        <img src={Bplan2} alt='Bplan2' onClick={() => openModal(Bplan2)}></img>
        <img src={Bplan3} alt='Bplan3' onClick={() => openModal(Bplan3)}></img>
      </div> */}
      <div className="section">
        <h2>Configuration</h2>
        <table className="configuration-table">
          <thead>
            <tr>
              <th>BHK</th>
              <th>UNIT TYPE</th>
              <th>LAND AREA</th>
              <th>BUILD-UP AREA</th>
              <th>PRICE RANGE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4 BHK</td>
              <td>Individual House / Villa</td>
              <td>2197 sq.ft</td>
              <td>2577 sq.ft</td>
              <td>Sold Out</td>
            </tr>
            <tr>
              <td>5 BHK</td>
              <td>Individual House / Villa</td>
              <td>2307 sq.ft</td>
              <td>2756 sq.ft</td>
              <td>Sold Out</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="amenities-section">
        <div className="amenities-list">
          <h1>Amenities</h1>
          <h2>KIDS</h2>
          <ul>
            <li>Kids play area</li>
            <li> Tot-lot play area in sandpit</li>
            <li>Hopscotch</li>
            <li> Cognitive play mound</li>
            <li>Kid’s trampoline</li>
            <li>Tree house</li>
            <li>Jungle gym</li>
            <li>Rock climbing wall</li>
          </ul>
          <h2>SPORTS</h2>
          <ul>
            <li>Walking / jogging track</li>
            <li>Badminton court</li>
            <li>Circle ping pong</li>
            <li>Outdoor gym</li>
          </ul>
        {/* <div className='button'>
        <Link to='Taminities'>
            <button type='onclick'>MORE AMINITIES</button>.
        </Link>
            </div>     */}

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
        <p>Reserve your luxury apartment at Casagrand Brand2 today.</p>
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

export default Bestseller2;
