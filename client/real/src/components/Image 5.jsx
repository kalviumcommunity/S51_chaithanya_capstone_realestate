import React from 'react';
import { Link } from 'react-router-dom';
import "./Image 5.css"; // Assuming the corresponding CSS file is imported correctly

const Image5 = () => {
    return (
        <div className="image">
            <div className="Image5">
                <div className="overlay">
                    <h2>Luxury Beach House</h2>
                    <p>Escape to this stunning beachfront retreat and experience the epitome of luxury living. With breathtaking ocean views and unparalleled amenities, this beach house offers the perfect blend of relaxation and sophistication.</p>
                    <div className="details">
                        <p><strong>Location:</strong> ECR,Beach house</p>
                        <p><strong>Price:</strong> 5.2CR</p>
                        <p><strong>Features:</strong></p>
                        <ul>
                            <li>7 bedrooms</li>
                            <li>8 bathrooms</li>
                            <li>Private beach access</li>
                            <li>Infinity pool</li>
                            <li>Spa and wellness center</li>
                            <li>Outdoor entertainment area</li>
                        </ul>
                    </div>
                    <Link to="/">Back to homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default Image5;
