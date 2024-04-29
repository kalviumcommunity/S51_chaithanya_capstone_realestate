import React from 'react';
import { Link } from 'react-router-dom';
import "./Advantages.css";

function Advantages() {
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
      </div>
    <div className='close'>
    <Link to ="/Linore">
      <button className="close-button">Close</button>
      </Link>
      </div>
    </div>
  );
}

export default Advantages;
