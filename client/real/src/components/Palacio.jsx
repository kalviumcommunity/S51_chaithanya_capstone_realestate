import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import palacio from "../asserts/palacio.webp"

function Palacio() {
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
                    <h1>Casagrand Lakshmi</h1>
                </div>
                <div className="villa-image" onClick={() => openModal(lakshmi)}>
                    <img src={palacio} alt="lakshmi" />
                </div>
                <div className="description">
                    <p>Apartments</p>
                    <p>Located in Alwarpet, Chennai</p>
                      <p>Sold Out</p>
                </div>
                <div className="section">
                    <h2>CASAGRAND PALACIO  HIGHLIGHTS</h2>
                    <ul>
                        <li>Casagrand is proud to present “Casagrand PALACIO” – located in the heart of Chennai in Alwarpet in TTK Road. Casagrand Palacio features 16 deluxe Units structured in two blocks with all premium fittings and specifications.</li>
                                            </ul>
                </div>
            <h1>KNOW YOUR COMMUNITY</h1>
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
                    <Link to="/Schedule">
                        <button className="cta-button">Schedule a Viewing</button>
                    </Link>
                </div>
            
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

export default Palacio;
