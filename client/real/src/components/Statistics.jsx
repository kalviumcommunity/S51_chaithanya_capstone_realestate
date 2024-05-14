import React, { useEffect, useState } from 'react';
import "./Statistics.css"

function Statistics() {
  const [demographics, setDemographics] = useState({});
  const [marketTrends, setMarketTrends] = useState({});
  const [schools, setSchools] = useState([]);
  const [chennaiStats, setChennaiStats] = useState({}); // State for Chennai statistics

  useEffect(() => {
    // Fetch data from API and set state
    // Replace these with actual API calls or data sources
    setDemographics({
      population: 50000,
      medianAge: 35,
      householdIncome: 75000,
      educationLevel: {
        highSchool: "40%",
        bachelors: "35%",
        masters: "15%",
        doctorate: "10%"
      },
      ethnicity: {
        white: "60%",
        black: "20%",
        asian: "10%",
        hispanic: "5%",
        other: "5%"
      }
    });

    setMarketTrends({
      averagePrice: 300000,
      priceChange: "5% increase",
      averageRent: 1500,
      daysOnMarket: 45,
      inventory: 200
    });

    setSchools([
      { name: "Local High School", rating: 4.5, studentTeacherRatio: "15:1", address: "123 Main St" },
      { name: "Neighborhood Elementary", rating: 4.0, studentTeacherRatio: "18:1", address: "456 Oak St" },
      { name: "City Middle School", rating: 4.2, studentTeacherRatio: "16:1", address: "789 Pine St" }
    ]);

    // Fetch Chennai statistics data
    fetchChennaiStats(); // Define this function to fetch Chennai statistics
  }, []);

  // Function to fetch Chennai statistics
  const fetchChennaiStats = () => {
    // Make API call or fetch data for Chennai statistics
    // Update setChennaiStats with fetched data
    setChennaiStats({
      // Sample Chennai statistics data
      population: 6000000,
      medianAge: 28,
      householdIncome: 60000,
      educationLevel: {
        highSchool: "50%",
        bachelors: "25%",
        masters: "15%",
        doctorate: "10%"
      },
      ethnicity: {
        tamil: "80%",
        telugu: "10%",
        hindi: "5%",
        other: "5%"
      }
    });
  };

  return (
    <div className="statistics">
      <h2>Local Statistics</h2>

      <div className="statistics-section">
        <h3>Demographics</h3>
        <p>Population: {demographics.population}</p>
        <p>Median Age: {demographics.medianAge}</p>
        <p>Household Income: ${demographics.householdIncome}</p>
        <h4>Education Level</h4>
        <ul>
          <li>High School: {demographics.educationLevel?.highSchool}</li>
          <li>Bachelor's: {demographics.educationLevel?.bachelors}</li>
          <li>Master's: {demographics.educationLevel?.masters}</li>
          <li>Doctorate: {demographics.educationLevel?.doctorate}</li>
        </ul>
        <h4>Ethnicity</h4>
        <ul>
          <li>White: {demographics.ethnicity?.white}</li>
          <li>Black: {demographics.ethnicity?.black}</li>
          <li>Asian: {demographics.ethnicity?.asian}</li>
          <li>Hispanic: {demographics.ethnicity?.hispanic}</li>
          <li>Other: {demographics.ethnicity?.other}</li>
        </ul>
      </div>

      <div className="statistics-section">
        <h3>Market Trends</h3>
        <p>Average Property Price: ${marketTrends.averagePrice}</p>
        <p>Price Change: {marketTrends.priceChange}</p>
        <p>Average Rent: ${marketTrends.averageRent}</p>
        <p>Days on Market: {marketTrends.daysOnMarket}</p>
        <p>Inventory: {marketTrends.inventory} properties</p>
      </div>

      <div className="statistics-section">
        <h3>Local Schools</h3>
        {schools.map((school, index) => (
          <div key={index} className="school-info">
            <p><strong>School Name:</strong> {school.name}</p>
            <p><strong>Rating:</strong> {school.rating}</p>
            <p><strong>Student-Teacher Ratio:</strong> {school.studentTeacherRatio}</p>
            <p><strong>Address:</strong> {school.address}</p>
          </div>
        ))}
      </div>

      {/* Render Chennai Statistics */}
      <div className="statistics-section">
        <h3>Chennai Statistics</h3>
        <p>Population: {chennaiStats.population}</p>
        <p>Median Age: {chennaiStats.medianAge}</p>
        <p>Household Income: ${chennaiStats.householdIncome}</p>
        <h4>Education Level</h4>
        <ul>
          <li>High School: {chennaiStats.educationLevel?.highSchool}</li>
          <li>Bachelor's: {chennaiStats.educationLevel?.bachelors}</li>
          <li>Master's: {chennaiStats.educationLevel?.masters}</li>
          <li>Doctorate: {chennaiStats.educationLevel?.doctorate}</li>
        </ul>
        <h4>Ethnicity</h4>
        <ul>
          <li>Tamil: {chennaiStats.ethnicity?.tamil}</li>
          <li>Telugu: {chennaiStats.ethnicity?.telugu}</li>
          <li>Hindi: {chennaiStats.ethnicity?.hindi}</li>
          <li>Other: {chennaiStats.ethnicity?.other}</li>
        </ul>
      </div>
    </div>
  );
}

export default Statistics;