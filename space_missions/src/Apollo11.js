import React, { useState } from 'react';

const Apollo11 = () => {
  const [showCSMTechnicalDetails, setShowCSMTechnicalDetails] = useState(false);
  const [showLMTechnicalDetails, setShowLMTechnicalDetails] = useState(false);
  const [selectedCrewMember, setSelectedCrewMember] = useState(null);

  const missionDetails = {
    objective: 'First crewed mission to land on the Moon and return safely to Earth.',
    result: 'Successful lunar landing and return mission.',
    technicalDetails: 'Launch Date: 1969-07-16, Launch Site: LC-39A, Kennedy Space Center, Florida, USA, Rocket: Saturn V',
  };

  const csmDetails = {
    manufacturer: 'North American Aviation',
    designer: 'Maxime Faget',
    country: 'United States',
    operator: 'NASA',
    applications: 'Crewed cislunar flight and lunar orbit',
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

  const lmDetails = {
    manufacturer: 'Grumman',
    designer: 'Thomas J. Kelly',
    country: 'United States',
    operator: 'NASA',
    applications: 'Crewed lunar landing',
    specs: {
      type: 'Lunar lander',
      launchMass: '33,500 lb (15,200 kg) standard, 36,200 lb (16,400 kg) extended',
      dryMass: '9,430 lb (4,280 kg) standard, 10,850 lb (4,920 kg) extended',
      crewCapacity: '2',
      volume: '235 cu ft (6.7 m³)',
      power: '28 V DC, 115 V 400 Hz AC',
      batteries: 'Six or seven 28–32-volt, 296 ampere hour silver-zinc',
      regime: 'Lunar orbit, Lunar landing',
      designLife: '75 hours (extended)',
      dimensions: {
        length: '23 ft 1 in (7.04 m)',
        diameter: '13 ft 10 in (4.22 m) without landing gear',
        width: '31 ft (9.4 m), landing gear deployed',
      },
      production: {
        status: 'Retired',
        built: '15',
        launched: '10',
        operational: '10',
        retired: '1972',
        failed: '0',
        lost: '0',
        maidenLaunch: 'January 22, 1968',
        lastLaunch: 'December 7, 1972',
        lastRetirement: 'December 14, 1972',
      },
    },
  };

  const primeCrew = [
    {
      name: 'Neil Armstrong',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Neil_Armstrong_pose.jpg/440px-Neil_Armstrong_pose.jpg',
      birthDate: '1930-08-05',
      nationality: 'USA',
      job: 'Commander',
      evaDetails: [
        {
          date: '07/20/1969',
          duration: '2:32',
          description: 'First to walk on the moon. Some trouble getting out small hatch. 46.3 lb of geologic material collected. EASEP seismograph and laser reflector exp deployed. Solar wind exp deployed & retrieved. 400 ft (120m) circuit on foot. Dust issue post EVA',
        },
        {
          date: '07/20/1969',
          duration: '0:05',
          description: 'Jettison suit backpacks and equip to lighten ascent',
        },
      ],
    },
    {
      name: 'Buzz Aldrin',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Buzz_Aldrin.jpg/440px-Buzz_Aldrin.jpg',
      birthDate: '1930-01-20',
      nationality: 'USA',
      job: 'Lunar Module Pilot',
    },
    {
      name: 'Michael Collins',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Michael_Collins_%28S69-31742%2C_restoration%29.jpg/440px-Michael_Collins_%28S69-31742%2C_restoration%29.jpg',
      birthDate: '1930-10-31',
      nationality: 'USA',
      job: 'Command Module Pilot',
    },
  ];

  const toggleCSMTechnicalDetails = () => {
    setShowCSMTechnicalDetails(!showCSMTechnicalDetails);
  };

  const toggleLMTechnicalDetails = () => {
    setShowLMTechnicalDetails(!showLMTechnicalDetails);
  };

  const handleCrewClick = (crewMember) => {
    setSelectedCrewMember(crewMember);
  };

  return (
    <div>
      <h2>Apollo 11</h2>
      <p>Apollo 11 was the first crewed mission to land on the Moon and return safely to Earth. It was launched on July 16, 1969.</p>
      <div>
        <h3>Mission Details</h3>
        <p><strong>Objective:</strong> {missionDetails.objective}</p>
        <p><strong>Result:</strong> {missionDetails.result}</p>
        <p><strong>Technical Details:</strong> {missionDetails.technicalDetails}</p>
      </div>
      <div>
        <h3>Command/Service Module (CSM)</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Apollo_CSM_lunar_orbit.jpg/520px-Apollo_CSM_lunar_orbit.jpg"
          alt="Apollo CSM in lunar orbit"
          style={{ width: '300px', cursor: 'pointer' }}
          onClick={toggleCSMTechnicalDetails}
        />
        {showCSMTechnicalDetails && (
          <div>
            <h4>Technical Details</h4>
            <p><strong>Manufacturer:</strong> {csmDetails.manufacturer}</p>
            <p><strong>Designer:</strong> {csmDetails.designer}</p>
            <p><strong>Country of Origin:</strong> {csmDetails.country}</p>
            <p><strong>Operator:</strong> {csmDetails.operator}</p>
            <p><strong>Applications:</strong> {csmDetails.applications}</p>
            <h4>Specifications</h4>
            <p><strong>Type:</strong> {csmDetails.specs.type}</p>
            <p><strong>Launch Mass:</strong> {csmDetails.specs.launchMass}</p>
            <p><strong>Dry Mass:</strong> {csmDetails.specs.dryMass}</p>
            <p><strong>Payload Capacity:</strong> {csmDetails.specs.payloadCapacity}</p>
            <p><strong>Crew Capacity:</strong> {csmDetails.specs.crewCapacity}</p>
            <p><strong>Volume:</strong> {csmDetails.specs.volume}</p>
            <p><strong>Power:</strong> {csmDetails.specs.power}</p>
            <p><strong>Batteries:</strong> {csmDetails.specs.batteries}</p>
            <p><strong>Regime:</strong> {csmDetails.specs.regime}</p>
            <p><strong>Design Life:</strong> {csmDetails.specs.designLife}</p>
            <h4>Dimensions</h4>
            <p><strong>Length:</strong> {csmDetails.specs.dimensions.length}</p>
            <p><strong>Diameter:</strong> {csmDetails.specs.dimensions.diameter}</p>
            <h4>Production</h4>
            <p><strong>Status:</strong> {csmDetails.specs.production.status}</p>
            <p><strong>Built:</strong> {csmDetails.specs.production.built}</p>
            <p><strong>Launched:</strong> {csmDetails.specs.production.launched}</p>
            <p><strong>Operational:</strong> {csmDetails.specs.production.operational}</p>
            <p><strong>Failed:</strong> {csmDetails.specs.production.failed}</p>
            <p><strong>Lost:</strong> {csmDetails.specs.production.lost}</p>
            <p><strong>Maiden Launch:</strong> {csmDetails.specs.production.maidenLaunch}</p>
            <p><strong>Last Launch:</strong> {csmDetails.specs.production.lastLaunch}</p>
            <p><strong>Last Retirement:</strong> {csmDetails.specs.production.lastRetirement}</p>
          </div>
        )}
      </div>
      <div>
        <h3>Lunar Module (LM)</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apollo16LM.jpg/520px-Apollo16LM.jpg"
          alt="Apollo Lunar Module"
          style={{ width: '300px', cursor: 'pointer' }}
          onClick={toggleLMTechnicalDetails}
        />
        {showLMTechnicalDetails && (
          <div>
            <h4>Technical Details</h4>
            <p><strong>Manufacturer:</strong> {lmDetails.manufacturer}</p>
            <p><strong>Designer:</strong> {lmDetails.designer}</p>
            <p><strong>Country of Origin:</strong> {lmDetails.country}</p>
            <p><strong>Operator:</strong> {lmDetails.operator}</p>
            <p><strong>Applications:</strong> {lmDetails.applications}</p>
            <h4>Specifications</h4>
            <p><strong>Type:</strong> {lmDetails.specs.type}</p>
            <p><strong>Launch Mass:</strong> {lmDetails.specs.launchMass}</p>
            <p><strong>Dry Mass:</strong> {lmDetails.specs.dryMass}</p>
            <p><strong>Crew Capacity:</strong> {lmDetails.specs.crewCapacity}</p>
            <p><strong>Volume:</strong> {lmDetails.specs.volume}</p>
            <p><strong>Power:</strong> {lmDetails.specs.power}</p>
            <p><strong>Batteries:</strong> {lmDetails.specs.batteries}</p>
            <p><strong>Regime:</strong> {lmDetails.specs.regime}</p>
            <p><strong>Design Life:</strong> {lmDetails.specs.designLife}</p>
            <h4>Dimensions</h4>
            <p><strong>Length:</strong> {lmDetails.specs.dimensions.length}</p>
            <p><strong>Diameter:</strong> {lmDetails.specs.dimensions.diameter}</p>
            <p><strong>Width:</strong> {lmDetails.specs.dimensions.width}</p>
            <h4>Production</h4>
            <p><strong>Status:</strong> {lmDetails.specs.production.status}</p>
            <p><strong>Built:</strong> {lmDetails.specs.production.built}</p>
            <p><strong>Launched:</strong> {lmDetails.specs.production.launched}</p>
            <p><strong>Operational:</strong> {lmDetails.specs.production.operational}</p>
            <p><strong>Retired:</strong> {lmDetails.specs.production.retired}</p>
            <p><strong>Failed:</strong> {lmDetails.specs.production.failed}</p>
            <p><strong>Lost:</strong> {lmDetails.specs.production.lost}</p>
            <p><strong>Maiden Launch:</strong> {lmDetails.specs.production.maidenLaunch}</p>
            <p><strong>Last Launch:</strong> {lmDetails.specs.production.lastLaunch}</p>
            <p><strong>Last Retirement:</strong> {lmDetails.specs.production.lastRetirement}</p>
          </div>
        )}
      </div>
      <div>
        <h3>Crew Members</h3>
        <div className="crew-list">
          {primeCrew.map((member, index) => (
            <div key={index} className="crew-member" onClick={() => handleCrewClick(member)}>
              <img src={member.image} alt={member.name} style={{ width: '100px', cursor: 'pointer' }} />
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
            {selectedCrewMember.evaDetails && (
              <div>
                <h5>EVA Details</h5>
                <ul>
                  {selectedCrewMember.evaDetails.map((eva, index) => (
                    <li key={index}>
                      <p><strong>Date:</strong> {eva.date}</p>
                      <p><strong>Duration:</strong> {eva.duration}</p>
                      <p>{eva.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apollo11;
