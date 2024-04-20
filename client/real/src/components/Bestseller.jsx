import React from 'react';
import { Link } from 'react-router-dom'; 
import "./Bestseller.css";

const Bestseller = () => {
  return (
    <div className='content'>
      <h2 className='title'>Luxurious Seaside Villa - Your Dream Retreat</h2>
      <p className='description'>
        Welcome to our exquisite seaside villa, where luxury meets tranquility. Nestled along the pristine coastline, this stunning villa offers the epitome of coastal living. Let us take you on a journey through its captivating features:
      </p>
      <ul className='features'>
        <li>Breathtaking Ocean Views</li>
        <li>Elegant Design</li>
        <li>Spacious Living Areas</li>
        <li>Gourmet Kitchen</li>
        <li>Luxurious Bedrooms</li>
        <li>Resort-Style Amenities</li>
        <li>Outdoor Oasis</li>
        <li>Prime Location</li>
      </ul>
      <p className='contact'>
        For any inquiries or to schedule a viewing, please contact us at:
        <br />
        Phone:  7010965635 / 044-22234138
        <br />
        Email:  Email:dreamhouserealty@gamil.com
      </p>
      {/* Corrected link usage */}
      <Link to="/Schedule">
        <button className="cta-button">Schedule a Viewing</button>
      </Link>
    </div>
  );
};

export default Bestseller;
