import React, { useState } from 'react';
import './JohnGlenn.css';

const JohnGlenn = () => {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const [showPilotDetails, setShowPilotDetails] = useState(false);

  const toggleTechnicalDetails = () => {
    setShowTechnicalDetails(!showTechnicalDetails);
  };

  const togglePilotDetails = () => {
    setShowPilotDetails(!showPilotDetails);
  };

  return (
    <div className="john-glenn-container">
      <h2>John Glenn 20/02/1962</h2>
      <p><strong>Mission Name:</strong> Friendship 7</p>
      <p><strong>Organization:</strong> NASA</p>
      <p><strong>Launch Site:</strong> LC-14, Cape Canaveral AFS, Florida, USA</p>
      <p>
        <strong>Vehicle:</strong>{' '}
        <span onClick={toggleTechnicalDetails} className="toggle-link">
          Atlas-D Mercury | Friendship 7 (MA-6)
        </span>
      </p>
      <p><strong>Status:</strong> Retired</p>
      <p><strong>Mission Outcome:</strong> Success</p>
      <p><strong>Country:</strong> USA</p>
      <p><strong>Launch Date:</strong> 20/02/1962</p>
      <p><strong>Launch Time:</strong> 14:47</p>
      
      {showTechnicalDetails && (
        <div className="technical-details">
          <h3>Technical Details of Mercury-Atlas 6</h3>
          <p><strong>Mission Type:</strong> Test flight</p>
          <p><strong>Operator:</strong> NASA</p>
          <p><strong>Harvard Designation:</strong> 1962 Gamma 1</p>
          <p><strong>COSPAR ID:</strong> 1962-003A</p>
          <p><strong>SATCAT no.:</strong> 240</p>
          <p><strong>Mission Duration:</strong> 4 hours, 55 minutes, 23 seconds</p>
          <p><strong>Distance Travelled:</strong> 65,763 nautical miles (121,793 km)</p>
          <p><strong>Orbits Completed:</strong> 3</p>
          <p><strong>Spacecraft:</strong> Mercury No.13</p>
          <p><strong>Manufacturer:</strong> McDonnell Aircraft</p>
          <p><strong>Launch Mass:</strong> 2,981 pounds (1,352 kg)</p>
          <p><strong>Crew Size:</strong> 1</p>
          <p><strong>Members:</strong> John H. Glenn, Jr</p>
          <p><strong>Callsign:</strong> Friendship 7</p>
          <p><strong>Launch Date:</strong> February 20, 1962, 14:47:39 UTC</p>
          <p><strong>Rocket:</strong> Atlas LV-3B 109-D</p>
          <p><strong>Launch Site:</strong> Cape Canaveral LC-14</p>
          <p><strong>Recovered by:</strong> USS Noa</p>
          <p><strong>Landing Date:</strong> February 20, 1962, 19:43:02 UTC</p>
          <p><strong>Landing Site:</strong> North Atlantic Ocean, 21°20′N 68°40′W</p>
          <p><strong>Orbital Parameters:</strong></p>
          <ul>
            <li><strong>Reference System:</strong> Geocentric</li>
            <li><strong>Regime:</strong> Low Earth orbit</li>
            <li><strong>Perigee Altitude:</strong> 80 nautical miles (150 km)</li>
            <li><strong>Apogee Altitude:</strong> 134 nautical miles (248 km)</li>
            <li><strong>Inclination:</strong> 32.5 degrees</li>
            <li><strong>Period:</strong> 88.47 minutes</li>
          </ul>
        </div>
      )}

      <h3>John Glenn</h3>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/John_Glenn_Low_Res.jpg/440px-John_Glenn_Low_Res.jpg"
        alt="John Glenn"
        className="pilot-image"
        onClick={togglePilotDetails}
      />
      
      {showPilotDetails && (
        <div className="pilot-details">
          <p><strong>Name:</strong> Glenn, John H., Jr.</p>
          <p><strong>Original Name:</strong> Glenn, John H., Jr.</p>
          <p><strong>Sex:</strong> Male</p>
          <p><strong>Year of Birth:</strong> 1921</p>
          <p><strong>Nationality:</strong> U.S.</p>
          <p><strong>Military/Civilian:</strong> Military</p>
          <p><strong>Selection:</strong> NASA Astronaut Group 1</p>
          <p><strong>Year of Selection:</strong> 1959</p>
          <p><strong>Mission Number:</strong> 1</p>
          <p><strong>Total Number of Missions:</strong> 2</p>
          <p><strong>Occupation:</strong> Pilot</p>
          <p><strong>Year of Mission:</strong> 1962</p>
          <p><strong>Mission Title:</strong> MA-6</p>
          <p><strong>Ascend Shuttle:</strong> MA-6</p>
          <p><strong>In Orbit:</strong> MA-6</p>
          <p><strong>Descend Shuttle:</strong> MA-6</p>
          <p><strong>Hours in Mission:</strong> 5</p>
          <p><strong>Total Hours Sum:</strong> 218</p>
          <p><strong>EVA Hours in Mission:</strong> 0</p>
          <p><strong>Total EVA Hours:</strong> 0</p>
          <p>John Glenn was the third American in space, and the first American to orbit the Earth, circling it three times in 1962. Following his retirement from NASA, he served from 1974 to 1999 as a U.S. Senator from Ohio. In 1998, he flew into space again at the age of 77.</p>
        </div>
      )}
    </div>
  );
};

export default JohnGlenn;
