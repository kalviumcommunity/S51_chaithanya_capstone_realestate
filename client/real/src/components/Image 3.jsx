import React from 'react';
import { Link } from 'react-router-dom';
import img3 from "../asserts/img 3.jpeg";
import "./Image 3.css"; // Corrected CSS file import

const Image3 = () => {
    return (
        <div className="image">
            <div className="Image3" style={{backgroundImage: `url(${img3})`}}>
                <div className="overlay">
                    <h2>Villa</h2> {/* Changed villa type to "Villa" */}
                    <p>Escape to this luxurious villa nestled in the heart of nature. Surrounded by lush greenery and breathtaking views, this villa offers the perfect blend of tranquility and modern comfort.</p>
                    <div className="details">
                        <p><strong>Location:</strong> Countryside Retreat</p> {/* Changed location to "Countryside Retreat" */}
                        <p><strong>Price:</strong> 1.5CR</p>
                        <p><strong>Features:</strong></p>
                        <ul>
                            <li>4 bedrooms</li>
                            <li>5 bathrooms</li>
                            <li>Outdoor hot tub</li>
                            <li>Fireplace</li>
                            <li>Gourmet kitchen</li>
                            <li>Home theater</li>
                        </ul>
                    </div>
                    <Link to="/">Back to homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default Image3;
