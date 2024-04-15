import React from 'react';
import { Link } from 'react-router-dom';
import img4 from "../asserts/img 4.jpeg";
import "./Image 4.css"; // Import the corresponding CSS file

const Image4 = () => {
    return (
        <div className="image">
            <div className="Image4" style={{backgroundImage: `url(${img4})`}}>
                <div className="overlay">
                    <h2>Private Villa</h2> {/* Changed villa type to "Private Villa" */}
                    <p>Indulge in luxury with this exquisite private villa. Tucked away in a secluded paradise, this villa offers unparalleled privacy and stunning views, making it the perfect getaway for those seeking tranquility.</p>
                    <div className="details">
                        <p><strong>Location:</strong> Serene Haven</p> {/* Updated location to "Serene Haven" */}
                        <p><strong>Price:</strong> 2.7CR</p>
                        <p><strong>Features:</strong></p>
                        <ul>
                            <li>5 bedrooms</li>
                            <li>6 bathrooms</li>
                            <li>Private pool</li>
                            <li>Expansive gardens</li>
                            <li>Outdoor dining area</li>
                            <li>State-of-the-art security system</li>
                        </ul>
                    </div>
                    <Link to="/">Back to homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default Image4;
