import React, { useState } from 'react';
import maple from "../asserts/maple.webp"
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function Maple() {
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
        <div>
            <div className="heading">
                <div className="title">
                    <h1>CASAGRAND MAPLE</h1>
                </div>
                <div className='villa-image' onClick={() => openModal(trinity)}>
                    <img src={maple} alt='dior'></img>
                </div>

                <div className="description">
                    <p> Apartments</p>
                    <p>Located in Adayar, Chennai</p>
                    <p>Sold Out</p>
                </div>
                <div className="section">
                    <h2>CASAGRAND MAPLE HIGHLIGHTS</h2>
                    <ul>
                       <li>Casagrand Maple is located in the posh extended Besant-Nagar neighborhood off MG road in Adyar, Chennai. Maple offers the customers a terrific location coupled with an irresistible price. The product has been designed with great care and attention to the smallest of details. When completed it will be a striking building with impressive architecture. The product has been designed having studied the nuances of the clients and to cater to the requirements. This is a sure fire quality product. For its price, location and quality is unbeatable offer.</li>
                    </ul>
                </div>

                {/* <div className='floor'>
                    <img src={Dplan1} alt='Dplan1' onClick={() => openModal(Dplan1)}></img>
                    <img src={Dplan2} alt='Dplan2' onClick={() => openModal(Dplan2)}></img>
                    <img src={Dplan3} alt='Dplan3' onClick={() => openModal(Dplan3)}></img>
                </div> */}
               
                <div className="amenities-section">
                    <div className="amenities-list">
                        <h1>Amenities</h1>
                        <ul>
                            <li>Common area laid with Marble/Kota flooring</li>
                            <li>Compound wall</li>
                            <li>Underground Rcc Sump with Pump and Sintex</li>
                            <li>Gate</li>
                            <li>Individual Letter Boxes</li>
                            <li>Security booth</li>
                            <li>Exterior Lighting by architect</li>
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
        
        </div>
    );
}

export default Maple;
