import React, { useState } from 'react';

function SearchBox() {
  const [location, setLocation] = useState('');
  const [projectType, setProjectType] = useState('');
  const [projectStatus, setProjectStatus] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const handleSearch = async () => {
    const searchParams = {
      location,
      projectType,
      projectStatus,
      propertyType
    };

    const response = await fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(searchParams)
    });

    const data = await response.json();
    console.log('Search results:', data);
    // Handle displaying the search results
  };

  return (
    <div className="search-boxes">
      <select className="search-input" value={location} onChange={e => setLocation(e.target.value)}>
        <option value="">Select Location</option>
        <option value="Adyar">Adyar</option>
        <option value="Alwarpet">Alwarpet</option>
        <option value="Ambattur">Ambattur</option>
        <option value="Anna Nagar">Anna Nagar</option>
        <option value="Besant Nagar">Besant Nagar</option>
        <option value="Guindy">Guindy</option>
        <option value="Kodambakkam">Kodambakkam</option>
        <option value="Injambakkam">Injambakkam</option>
        <option value="Koyambedu">Koyambedu</option>
        <option value="Madipakkam">Madipakkam</option>
        <option value="Maduravoyal">Maduravoyal</option>
        <option value="Medavakkam">Medavakkam</option>
        <option value="Mount Road">Mount Road</option>
        <option value="Mogappair">Mogappair</option>
        <option value="Mylapore">Mylapore</option>
      </select>
      <div className="input-wrapper">
        <select className="search-input" value={projectType} onChange={e => setProjectType(e.target.value)}>
          <option value="project type">project type</option>
          <option value="apartment">apartment</option>
          <option value="villa">villa</option>
          <option value="plot">plot</option>
        </select>
      </div>
      <div className="input-wrapper">
        <select className="search-input" value={projectStatus} onChange={e => setProjectStatus(e.target.value)}>
          <option value="">project status</option>
          <option value="under construction">under construction</option>
          <option value="New launch">New launch</option>
          <option value="Ready to occupy">Ready to occupy</option>
          <option value="completed projects">completed projects</option>
        </select>
      </div>
      <div className="input-wrapper">
        <select className="search-input" value={propertyType} onChange={e => setPropertyType(e.target.value)}>
          <option value="">Type</option>
          <option value="1 BHK">1 BHK</option>
          <option value="2 BHK">2 BHK</option>
          <option value="3 BHK">3 BHK</option>
          <option value="4 BHK">4 BHK</option>
        </select>
      </div>
      <div className="but">
        <button onClick={handleSearch}>search</button>
      </div>
    </div>
  );
}

export default SearchBox;
