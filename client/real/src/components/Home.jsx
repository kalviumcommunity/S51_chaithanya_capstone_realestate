import React from 'react';
import "./Home.css";

import Footer from "../components/Footer";

const Navbar = () => {
  return (
    <div className="container">
      <div className="search-boxes">
        <select className="search-input">
          <option value="">Select Location</option>
          <option value="Adyar">Adyar</option>
          <option value="Alandur">Alandur</option>
          <option value="Alwarthirunagar">Alwarthirunagar</option>
          <option value="Ambattur">Ambattur</option>
          <option value="Anna Nagar">Anna Nagar</option>
          <option value="Arumbakkam">Arumbakkam</option>
          <option value="Ashok Nagar">Ashok Nagar</option>
          <option value="Besant Nagar">Besant Nagar</option>
          <option value="Chromepet">Chromepet</option>
          <option value="Egmore">Egmore</option>
          <option value="Gopalapuram">Gopalapuram</option>
          <option value="Guindy">Guindy</option>
          <option value="Kodambakkam">Kodambakkam</option>
          <option value="Kolathur">Kolathur</option>
          <option value="Korattur">Korattur</option>
          <option value="Kotturpuram">Kotturpuram</option>
          <option value="Koyambedu">Koyambedu</option>
          <option value="Madipakkam">Madipakkam</option>
          <option value="Maduravoyal">Maduravoyal</option>
          <option value="Medavakkam">Medavakkam</option>
          <option value="Mogappair">Mogappair</option>
          <option value="Mount Road">Mount Road</option>
          <option value="Mylapore">Mylapore</option>
          <option value="Nandanam">Nandanam</option>
          <option value="Nanganallur">Nanganallur</option>
          <option value="Neelangarai">Neelangarai</option>
          <option value="Nungambakkam">Nungambakkam</option>
          <option value="Pallavaram">Pallavaram</option>
          <option value="Pallikaranai">Pallikaranai</option>
          <option value="Perambur">Perambur</option>
          <option value="Perungalathur">Perungalathur</option>
          <option value="Perungudi">Perungudi</option>
          <option value="Poonamallee">Poonamallee</option>
          <option value="Porur">Porur</option>
          <option value="Purasawalkam">Purasawalkam</option>
          <option value="R.A. Puram">R.A. Puram</option>
          <option value="Royapettah">Royapettah</option>
          <option value="Saidapet">Saidapet</option>
          <option value="Saligramam">Saligramam</option>
          <option value="Santhome">Santhome</option>
          <option value="Shenoy Nagar">Shenoy Nagar</option>
          <option value="Sholinganallur">Sholinganallur</option>
          <option value="T. Nagar (Thyagaraya Nagar)">T. Nagar (Thyagaraya Nagar)</option>
          <option value="Tambaram">Tambaram</option>
          <option value="Teynampet">Teynampet</option>
          <option value="Tharamani">Tharamani</option>
          <option value="Thiruvanmiyur">Thiruvanmiyur</option>
          <option value="Tondiarpet">Tondiarpet</option>
          <option value="Triplicane">Triplicane</option>
          <option value="Velachery">Velachery</option>
        </select>
        <div className="input-wrapper">
          <select className='search-input'>
            <option value="project type">project type</option>
            <option value="apartment">apartment</option>
            <option value="villa">villa</option>
            \<option value="plot">plot</option>
          </select>
        </div>
        <div className="input-wrapper">
          <select className='search-input'>
          <option value="">project status</option>
          <option value="">under construction</option>
          <option value="">New launch</option>
          <option value="">Ready to occupy</option>
          <option value="">completed projects</option>
          </select>
        </div>
        <div className="input-wrapper">
          <select className='search-input'>
          <option value="">Type</option>
          <option value="">1 BHK</option>
          <option value="">2 BHK</option>
          <option value="">3 BHK</option>
          <option value="">4 BHK</option>
          </select>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Navbar;
