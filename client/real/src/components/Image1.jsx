import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import img1 from "../asserts/img 1.jpeg";
import "./Image 1.css";

const Image1 = () => {
    return (
        <div className="image">
            <div className="Image1" style={{backgroundImage: `url(${img1})`}}>
                <div className="overlay">
                    <h2>Beach Villa</h2>
                    <p>Experience luxury living at its finest in this breathtaking beach villa. With panoramic views of the ocean, private beach access, and top-notch amenities, this villa offers the ultimate coastal retreat.</p>
                    <div className="details">
                        <p><strong>Location:</strong> Beachfront, PoysGarden</p>
                        <p><strong>Price:</strong> 2.3CR</p>
                        <p><strong>Features:</strong></p>
                        <ul>
                            <li>6 bedrooms</li>
                            <li>7 bathrooms</li>
                            <li>Infinity pool</li>
                            <li>Private beach access</li>
                            <li>Spa and sauna</li>
                            <li>Gourmet kitchen</li>
                        </ul>
                    </div>
                    {/* Use Link component to navigate back to the homepage */}
                    <Link to="/">Back to homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default Image1;
