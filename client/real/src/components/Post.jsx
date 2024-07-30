import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Post.css"

function Post() {
  const [propertyDetails, setPropertyDetails] = useState({
    type: '',
    size: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    price: '',
    availability: '',
    contactName: '',
    email: '',
    phone: '',
    description: '',
    image: null // To store uploaded image file
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      // If the input is a file input for image upload
      setPropertyDetails(prevState => ({
        ...prevState,
        [name]: e.target.files[0] // Store the file object
      }));
    } else {
      // For other input fields
      setPropertyDetails(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log('Property details submitted:', propertyDetails);
    // Reset form after submission
    setPropertyDetails({
      type: '',
      location: '',
      BHK:'',
      price: '',
      availability: '',
      contactName: '',
      email: '',
      phone: '',
      description: '',
      image: null
    });
  };

  return (
    <div>
      <h1>Post Your Property</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Property Type:
          <input type="text" name="type" value={propertyDetails.type} onChange={handleChange} />
        </label>
        <label>
          Size:
          <input type="text" name="size" value={propertyDetails.size} onChange={handleChange} />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={propertyDetails.location} onChange={handleChange} />
        </label>
        <label>
          Bedrooms:
          <input type="number" name="bedrooms" value={propertyDetails.bedrooms} onChange={handleChange} />
        </label>
        <label>
          Bathrooms:
          <input type="number" name="bathrooms" value={propertyDetails.bathrooms} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="text" name="price" value={propertyDetails.price} onChange={handleChange} />
        </label>
        <label>
          Availability:
          <input type="text" name="availability" value={propertyDetails.availability} onChange={handleChange} />
        </label>
        <label>
          Contact Name:
          <input type="text" name="contactName" value={propertyDetails.contactName} onChange={handleChange} />
        </label>
        <label>
          Email:  
          <input type="email" name="email" value={propertyDetails.email} onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={propertyDetails.phone} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={propertyDetails.description} onChange={handleChange}></textarea>
        </label>
        <label>
          Upload Image:
          <input type="file" name="image" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Post;
