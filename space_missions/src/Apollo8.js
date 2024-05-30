import React, { useState } from 'react';
import './Apollo8.css';

const Apollo8 = () => {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const [selectedCrewMember, setSelectedCrewMember] = useState(null);

  const missionDetails = {
    objective: 'First crewed mission to orbit the Moon and return safely to Earth.',
    result: 'Successful lunar orbit and return mission.',
    technicalDetails: 'Launch Date: 1968-12-21, Launch Site: LC-39A, Kennedy Space Center, Florida, USA, Rocket: Saturn V',
  };

  const spacecraftDetails = {
    manufacturer: 'North American Aviation',
    designer: 'Maxime Faget',
    country: 'United States',
    operator: 'NASA',
    applications: 'Crewed cislunar flight and lunar orbit, Skylab crew shuttle, Apollo–Soyuz Test Project',
    specs: {
      type: 'Capsule',
      launchMass: '32,390 lb (14,690 kg) Earth orbit, 63,500 lb (28,800 kg) Lunar',
      dryMass: '26,300 lb (11,900 kg)',
      payloadCapacity: '2,320 lb (1,050 kg)',
      crewCapacity: '3',
      volume: '218 cu ft (6.2 m³)',
      power: 'Three 1.4 kW 30V DC fuel cells',
      batteries: 'Three 40 ampere-hour silver-oxide',
      regime: 'Low Earth orbit, Cislunar space, Lunar orbit',
      designLife: '14 days',
      dimensions: {
        length: '36.2 ft (11.0 m)',
        diameter: '12.8 ft (3.9 m)',
      },
      production: {
        status: 'Retired',
        built: '35',
        launched: '19',
        operational: '19',
        failed: '2',
        lost: '1',
        maidenLaunch: 'February 26, 1966 (AS-201)',
        lastLaunch: 'July 15, 1975 (Apollo–Soyuz)',
        lastRetirement: 'July 24, 1975',
      },
    },
  };

  const primeCrew = [
    {
      name: 'Frank F. Borman II',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Astronaut_Frank_Borman.jpg/440px-Astronaut_Frank_Borman.jpg',
      birthDate: '1928-03-14',
      nationality: 'USA',
      job: 'Commander',
      details: 'Second and last spaceflight',
    },
    {
      name: 'James A. Lovell Jr.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/James_Lovell.jpg/440px-James_Lovell.jpg',
      birthDate: '1928-03-25',
      nationality: 'USA',
      job: 'Command Module Pilot',
      details: 'Third spaceflight',
    },
    {
      name: 'William A. Anders',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/William_Anders.jpg/440px-William_Anders.jpg',
      birthDate: '1933-10-17',
      nationality: 'USA',
      job: 'Lunar Module Pilot',
      details: 'Only spaceflight',
    },
  ];

  const toggleTechnicalDetails = () => {
    setShowTechnicalDetails(!showTechnicalDetails);
  };

  const handleCrewClick = (crewMember) => {
    setSelectedCrewMember(crewMember);
  };

  const closeModal = () => {
    setSelectedCrewMember(null);
  };

  return (
    <div className="apollo8-container">
      <h2>Apollo 8</h2>
      <p>Apollo 8 was the first crewed mission to orbit the Moon and return safely to Earth. It was launched on December 21, 1968.</p>
      <div>
        <h3>Mission Details</h3>
        <p><strong>Objective:</strong> {missionDetails.objective}</p>
        <p><strong>Result:</strong> {missionDetails.result}</p>
        <p><strong>Technical Details:</strong> {missionDetails.technicalDetails}</p>
      </div>
      <div className="service-module">
        <h3>Spacecraft</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Apollo_CSM_lunar_orbit.jpg/520px-Apollo_CSM_lunar_orbit.jpg"
          alt="Apollo 8 spacecraft"
          className="service-module-image"
          onClick={toggleTechnicalDetails}
        />
        {showTechnicalDetails && (
          <div className="technical-details">
            <h4>Technical Details</h4>
            <p><strong>Manufacturer:</strong> {spacecraftDetails.manufacturer}</p>
            <p><strong>Designer:</strong> {spacecraftDetails.designer}</p>
            <p><strong>Country of Origin:</strong> {spacecraftDetails.country}</p>
            <p><strong>Operator:</strong> {spacecraftDetails.operator}</p>
            <p><strong>Applications:</strong> {spacecraftDetails.applications}</p>
            <h4>Specifications</h4>
            <p><strong>Type:</strong> {spacecraftDetails.specs.type}</p>
            <p><strong>Launch Mass:</strong> {spacecraftDetails.specs.launchMass}</p>
            <p><strong>Dry Mass:</strong> {spacecraftDetails.specs.dryMass}</p>
            <p><strong>Payload Capacity:</strong> {spacecraftDetails.specs.payloadCapacity}</p>
            <p><strong>Crew Capacity:</strong> {spacecraftDetails.specs.crewCapacity}</p>
            <p><strong>Volume:</strong> {spacecraftDetails.specs.volume}</p>
            <p><strong>Power:</strong> {spacecraftDetails.specs.power}</p>
            <p><strong>Batteries:</strong> {spacecraftDetails.specs.batteries}</p>
            <p><strong>Regime:</strong> {spacecraftDetails.specs.regime}</p>
            <p><strong>Design Life:</strong> {spacecraftDetails.specs.designLife}</p>
            <h4>Dimensions</h4>
            <p><strong>Length:</strong> {spacecraftDetails.specs.dimensions.length}</p>
            <p><strong>Diameter:</strong> {spacecraftDetails.specs.dimensions.diameter}</p>
            <h4>Production</h4>
            <p><strong>Status:</strong> {spacecraftDetails.specs.production.status}</p>
            <p><strong>Built:</strong> {spacecraftDetails.specs.production.built}</p>
            <p><strong>Launched:</strong> {spacecraftDetails.specs.production.launched}</p>
            <p><strong>Operational:</strong> {spacecraftDetails.specs.production.operational}</p>
            <p><strong>Failed:</strong> {spacecraftDetails.specs.production.failed}</p>
            <p><strong>Lost:</strong> {spacecraftDetails.specs.production.lost}</p>
            <p><strong>Maiden Launch:</strong> {spacecraftDetails.specs.production.maidenLaunch}</p>
            <p><strong>Last Launch:</strong> {spacecraftDetails.specs.production.lastLaunch}</p>
            <p><strong>Last Retirement:</strong> {spacecraftDetails.specs.production.lastRetirement}</p>
          </div>
        )}
      </div>
      <div>
        <h3>Prime Crew</h3>
        <div className="crew-list">
          {primeCrew.map((member, index) => (
            <div
              key={index}
              className="crew-member"
              onClick={() => handleCrewClick(member)}
            >
              <img src={member.image} alt={member.name} className="crew-image" />
              <p>{member.name}</p>
            </div>
          ))}
        </div>
        {selectedCrewMember && (
          <div className="crew-details">
            <h4>{selectedCrewMember.name}</h4>
            <p><strong>Birth Date:</strong> {selectedCrewMember.birthDate}</p>
            <p><strong>Nationality:</strong> {selectedCrewMember.nationality}</p>
            <p><strong>Job:</strong> {selectedCrewMember.job}</p>
            <p><strong>Details:</strong> {selectedCrewMember.details}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apollo8;
