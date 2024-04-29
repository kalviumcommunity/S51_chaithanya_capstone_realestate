import React from 'react';
import { Link } from 'react-router-dom';
import "./Superior.css"; // Import CSS file for styling

function Superior1() {
  return (
    <div className="superior-container">
      <h2>Superior Homes</h2>
      {/* Popup content */}
      <div className="popup-content">
        <p>The best of Product Superiority..</p>
        <p>Chennai’s Tudor styled residential community with apartments and villas.</p>
        <p>The community hosts about 110+ indoor and outdoor amenities.</p>
        <p>A neighborhood reimagining its style with unreal services and fun.</p>
        <p>The project includes 6 podiums and an exclusive park for multi-sensory amenities.</p>
        <p>42% of open land area adds to the efficiency of the building footprint.</p>
        <p>Apartment blocks are planned around 10 acres of landscaped podiums, courtyard, and open parks.</p>
        <p>Light, Ventilation, Vaastu, Privacy & Aesthetics are the 5 important pillars in planning the Master & Unit plans.</p>
        <p>Superior and Signature apartments to upgrade your lifestyle!</p>
        <p>Presenting you a community with the best of Architecture & Finesse…</p>
        <br />
        <p>The project is set amidst 17.6 acres with 887 apartments & 54 villas.</p>
        <p>An English domestic architectural structure with solid masonry and elaborate forms emphasizing the tudor style.</p>
        <p>Braced with accent portals and heraldic lighting, the entrance leads the users to the community and is facilitated with a drop-off zone.</p>
        <p>An elaborate clubhouse of 34,000 ft area furnished with indoor amenities.</p>
        <p>Aesthetic double height lobbies provided as a premium welcoming feature within the community.</p>
        <p>Blocks orientation ensuring maximum wind-flow and minimum heat-gain for every apartment.</p>
        <p>3m & 6.5m (10 & 21 feet) wide Driveway is planned across the project for comfortable vehicular movement.</p>
        <p>A Feature wall is designed opposite to every block entrance as a way finder.</p>
        <p>Detailed Lift Facia with wall cladding & lighting elements.</p>
        <p>Designer floor identification signage at every floor level.</p>
        <p>Well planned corridors with wall artefacts leading to your doorsteps.</p>
        <p>A neighborhood one with nature..</p>
        <p>10 acres of rampant landscaped open space within the community is a never-seen-before feature in the neighborhood.</p>
        <p>The community boasts of an efficient building footprint where 42% of land area is open space.</p>
        <p>The apartment towers are planned around colossal podiums of 69,000 sq.ft with no overlooking between the apartments.</p>
        <p>Private terraces are provided for the apartments in the first floor level connecting the indoors with the podiums.</p>
        <p>Offering you 100+ Amenities..! The best in Market..!</p>
        <br />
        <p>The project features an exclusive swimming pool :</p>
        <p>8,200 sq.ft Pool and deck with Overflowing adult’s edge pool, Spa pool, Shallow pool & Kids pool with water gun, connected to the pathway through a diagonal pool deck with loungers.</p>
        <p>The podium encompasses a vibrant kid’s play zone, Multi-purpose social gatherings decks, Reflexology walkway with Seating nooks and Buffer planting to maintain privacy for residents.</p>
        <p>The clubhouse delivers luxurious amenities like Spa, Sauna, Jacuzzi & Salon for residents to oblige in.</p>
        <p>Double height entrance lobby appeals into a palatial Multipurpose party hall along with pre-function hall, party hall spill-over, buffet & kitchen for residents to host their guests in.</p>
        <p>Coffee bar that opens out to the swimming pool to relax your evenings.</p>
        <p>Indoor kids play, Creche, and Learning center for children’s learning and entertainment.</p>
        {/* Add more details as needed */}
      </div>
      {/* Link to close the popup */}
      <Link to="/Flagship" className="close-link">
        <button>Close</button>
      </Link>
    </div>
  );
}

export default Superior1;
