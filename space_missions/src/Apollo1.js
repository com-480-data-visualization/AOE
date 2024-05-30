import React, { useState } from 'react';
import './Apollo1.css';

const Apollo1 = () => {
  const [selectedCrewMember, setSelectedCrewMember] = useState(null);
  const [showServiceModuleDetails, setShowServiceModuleDetails] = useState(false);

  const missionDetails = {
    objective: 'First crewed flight of Apollo program.',
    result: 'Tragedy struck during a preflight test, resulting in the deaths of all three crew members.',
    technicalDetails: 'Launch Date: 1967-01-27, Launch Site: LC-34, Cape Canaveral AFS, Florida, USA, Rocket: Saturn IB',
  };

  const crewMembers = [
    {
      name: 'Virgil I. Grissom',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Virgil_I._%28Gus%29_Grissom_portrait.jpg/440px-Virgil_I._%28Gus%29_Grissom_portrait.jpg',
      birthDate: '1926-04-03',
      nationality: 'USA',
      job: 'Command Pilot',
    },
    {
      name: 'Edward H. White II',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/EdwardWhite.jpeg/440px-EdwardWhite.jpeg',
      birthDate: '1930-11-14',
      nationality: 'USA',
      job: 'Senior Pilot',
    },
    {
      name: 'Roger B. Chaffee',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/RogerChaffee.1964.ws.jpg/440px-RogerChaffee.1964.ws.jpg',
      birthDate: '1935-02-15',
      nationality: 'USA',
      job: 'Pilot',
    },
  ];

  const handleCrewClick = (crewMember) => {
    setSelectedCrewMember(crewMember);
  };

  const toggleServiceModuleDetails = () => {
    setShowServiceModuleDetails(!showServiceModuleDetails);
  };

  return (
    <div className="apollo1-container">
      <h2>Apollo 1</h2>
      <p>On Jan. 27, 1967, tragedy struck on the launch pad at Cape Kennedy during a preflight test for Apollo 204 (AS-204). The mission was to be the first crewed flight of Apollo, and was scheduled to launch Feb. 21, 1967. Astronauts Virgil Grissom, Edward White and Roger Chaffee lost their lives when a fire swept through the command module.</p>
      <div>
        <h3>Mission Details</h3>
        <p><strong>Objective:</strong> {missionDetails.objective}</p>
        <p><strong>Result:</strong> {missionDetails.result}</p>
        <p><strong>Technical Details:</strong> {missionDetails.technicalDetails}</p>
      </div>
      <div className="service-module">
        <h3>Service Module</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Apollo_CSM_lunar_orbit.jpg/520px-Apollo_CSM_lunar_orbit.jpg"
          alt="Apollo Command/Service Module"
          className="service-module-image"
          onClick={toggleServiceModuleDetails}
        />
        {showServiceModuleDetails && (
          <div className="technical-details">
            <h4>Apollo CSM Endeavour in lunar orbit during Apollo 15</h4>
            <p><strong>Manufacturer:</strong> North American Aviation</p>
            <p><strong>Designer:</strong> Maxime Faget</p>
            <p><strong>Country of Origin:</strong> United States</p>
            <p><strong>Operator:</strong> NASA</p>
            <p><strong>Applications:</strong> Crewed cislunar flight and lunar orbit, Skylab crew shuttle, Apollo–Soyuz Test Project</p>
            <h4>Specifications</h4>
            <p><strong>Spacecraft type:</strong> Capsule</p>
            <p><strong>Launch mass:</strong> 32,390 lb (14,690 kg) Earth orbit, 63,500 lb (28,800 kg) Lunar</p>
            <p><strong>Dry mass:</strong> 26,300 lb (11,900 kg)</p>
            <p><strong>Payload capacity:</strong> 2,320 lb (1,050 kg)</p>
            <p><strong>Crew capacity:</strong> 3</p>
            <p><strong>Volume:</strong> 218 cu ft (6.2 m3)</p>
            <p><strong>Power:</strong> Three 1.4 kW 30V DC fuel cells</p>
            <p><strong>Batteries:</strong> Three 40 ampere-hour silver-oxide</p>
            <p><strong>Regime:</strong> Low Earth orbit, Cislunar space, Lunar orbit</p>
            <p><strong>Design life:</strong> 14 days</p>
            <h4>Dimensions</h4>
            <p><strong>Length:</strong> 36.2 ft (11.0 m)</p>
            <p><strong>Diameter:</strong> 12.8 ft (3.9 m)</p>
            <h4>Production</h4>
            <p><strong>Status:</strong> Retired</p>
            <p><strong>Built:</strong> 35</p>
            <p><strong>Launched:</strong> 19</p>
            <p><strong>Operational:</strong> 19</p>
            <p><strong>Failed:</strong> 2</p>
            <p><strong>Lost:</strong> 1</p>
            <p><strong>Maiden launch:</strong> February 26, 1966 (AS-201)</p>
            <p><strong>Last launch:</strong> July 15, 1975 (Apollo–Soyuz)</p>
            <p><strong>Last retirement:</strong> July 24, 1975</p>
          </div>
        )}
      </div>
      <div>
        <h3>Crew Members</h3>
        <div className="crew-list">
          {crewMembers.map((member, index) => (
            <div key={index} className="crew-member" onClick={() => handleCrewClick(member)}>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Apollo1;
