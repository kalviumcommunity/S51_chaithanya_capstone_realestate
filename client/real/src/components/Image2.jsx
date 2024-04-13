import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Image2.css"; // Import CSS for styling

const Image2 = () => {
    return (
        <div className="image">
            <div className="Image2">
                <div className="overlay">
                    <h2>Mountain Villa</h2>
                    <p>Escape to the serene surroundings of this luxurious mountain villa. Nestled amidst lush greenery and breathtaking views of the mountains, this villa offers the perfect retreat for nature lovers.</p>
                    <div className="details">
                        <p><strong>Location:</strong> Mountain Ridge, Pine Valley</p>
                        <p><strong>Price:</strong> 1.8CR</p>
                        <p><strong>Features:</strong></p>
                        <ul>
                            <li>4 bedrooms</li>
                            <li>5 bathrooms</li>
                            <li>Outdoor hot tub</li>
                            <li>Hiking trails nearby</li>
                            <li>Fireplace</li>
                            <li>Outdoor dining area</li>
                        </ul>
                    </div>
                    {/* Use Link component to navigate back to the homepage */}
                    <Link to="/">Back to homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default Image2;
