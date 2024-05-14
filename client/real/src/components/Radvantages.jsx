import React from 'react';
import { Link } from 'react-router-dom';

function Radvantages() {
  return (
    <div>
      <h2>Advantages</h2>
     
      <div className="advantages-list">
        <h3>CORPORATES</h3>
        <ul>
          <li>DLF Cyber City – 15 Mins</li>
          <li>Jayanth Tech park – 15 Mins</li>
          <li>L&T Infotech – 15 Mins</li>
          <li>RMZ Tech park – 15 Mins</li>
          <li>Ambattur Industrial Estate – 25 Mins</li>
        </ul>

        <h3>SCHOOLS</h3>
        <ul>
          <li>Narayana Etechno school – 5 Mins</li>
          <li>Pupil Public school – 5 Mins</li>
          <li>Sana model school – 5 Mins</li>
          <li>AVL matriculation school – 5 Mins</li>
          <li>Kalashetra school – 5 Mins</li>
        </ul>

        <h3>COLLEGES</h3>
        <ul>
          <li>Saveetha Dental and Medical College – 5 Mins</li>
          <li>ACS Medical College – 5 Mins</li>
          <li>Saveetha Law School – 5 Mins</li>
          <li>MGR University – 10 Mins</li>
          <li>Ramachandra University – 10 Mins</li>
        </ul>

        <h3>HOSPITALS</h3>
        <ul>
          <li>Saveetha Dental Hospital – 2-3 Mins</li>
          <li>ACS Hospital – 5 Mins</li>
          <li>Sri Ramachandra Hospital – 10 Mins</li>
          <li>Apollo Hospital – 10 Mins</li>
        </ul>

        <h3>ENTERTAINMENT</h3>
        <ul>
          <li>VR Mall – 20 Mins</li>
          <li>10 Square Mall – 20 Mins</li>
          <li>Chandra Mall – 20 Mins</li>
        </ul>

        <h3>Distance from Airport, Railway Station & Bus Stand</h3>
        <ul>
          <li>Chennai International Airport – 21.5 km</li>
          <li>Chennai Central Railway Station – 26.4 km</li>
          <li>Sholinganallur Bus Stop – 850 m</li>
          <li>Dollar Bus Stop – 1.4 km</li>
          <li>Ponniamman Koil Bus Stop – 2.3 km</li>
          <li>Sathyabama Bus Stop – 5.0 km</li>
        </ul>

        <h3>Distance from Nearest Localities</h3>
        <ul>
          <li>Thiruvanmiyur – 13.4 km</li>
          <li>Madhya Kailash – 14 km</li>
          <li>Perungudi – 9.3 km</li>
          <li>Sholinganallur – 1.7 km</li>
          <li>Thoraipakkam – 8.2 km</li>
          <li>Velachery – 14.8 km</li>
          <li>Elcot SEZ – 5.2 km</li>
          <li>SIPCOT – 9.1 km</li>
        </ul>

        <h3>Distance from Schools</h3>
        <ul>
          <li>Parent Choice International School – 500 m</li>
          <li>Vels Vidhyashram Kindergarten – 550 m</li>
          <li>Arise ‘n’ Shine International Preschool – 550 m</li>
          <li>Velammal Vidhyalaya – 950 m</li>
          <li>Sacred Heart Higher Secondary School – 1.0 km</li>
          <li>Babaji Vidhyashram Senior Secondary School – 1.1 km</li>
          <li>Kidzee School – 1.3 km</li>
          <li>KLAY Prep Schools & Day Care – 1.4 km</li>
          <li>Ellen Sharma Memorial Matriculation Higher Secondary School – 1.9 km</li>
          <li>Gateway The Complete School – 2.3 km</li>
          <li>Ramana Vidyalaya School – 1.5 km</li>
          <li>Narayana E-Techno School – 1.6 km</li>
          <li>JS Global School – 4.6 km</li>
          <li>NPS International School – 3.7 km</li>
          <li>PSSB Millennium School – 6.3 km</li>
          <li>HLC International School – 11.2 km</li>
        </ul>

        <h3>Distance from Nearest Hospitals</h3>
        <ul>
          <li>Swaram Specialty Hospital – 700 m</li>
          <li>Apollo Cradle – 3.2 km</li>
          <li>Gleneagles Global Health City – 3.6 km</li>
          <li>Apollo Specialty Hospital – 7.9 km</li>
          <li>Doctor Kamakshi Memorial Hospital – 10.2 km</li>
          <li>Chettinad Health City – 13.6 km</li>
        </ul>

        <h3>Distance from Colleges</h3>
        <ul>
          <li>Agni College of Technology – 9.5 km</li>
          <li>Sathyabama University – 3.3 km</li>
          <li>St. Joseph’s Institute of Technology – 4.3 km</li>
          <li>Jeppiaar Engineering College – 3.2 km</li>
          <li>KCG College of Technology – 4.6 km</li>
        </ul>
      </div>

      <div className='close'>
        <Link to="/Royale">
          <button className="close-button">Close</button>
        </Link>
      </div>
    </div>
  );
}

export default Radvantages;
