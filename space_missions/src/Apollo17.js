import React, { useState } from 'react';

const Apollo17 = () => {
  const [showCSMTechnicalDetails, setShowCSMTechnicalDetails] = useState(false);
  const [showLMTechnicalDetails, setShowLMTechnicalDetails] = useState(false);
  const [selectedCrewMember, setSelectedCrewMember] = useState(null);

  const missionDetails = {
    objective: 'Last crewed lunar landing and return to Earth.',
    result: 'Success. Returned with lunar samples and conducted scientific experiments.',
    technicalDetails: 'Launch Date: December 7, 1972, Launch Site: LC-39A, Kennedy Space Center, Florida, USA, Rocket: Saturn V SA-512',
  };

  const csmDetails = {
    manufacturer: 'North American Rockwell',
    designer: 'N/A',
    country: 'United States',
    operator: 'NASA',
    applications: 'Crewed lunar landing and return to Earth',
    specs: {
      type: 'Capsule',
      launchMass: '28,881 kg',
      dryMass: 'N/A',
      crewCapacity: '3',
      volume: 'N/A',
      power: 'Fuel cells',
      batteries: 'N/A',
      regime: 'Cislunar space',
      designLife: '14 days',
      dimensions: {
        length: 'N/A',
        diameter: 'N/A',
      },
      production: {
        status: 'Retired',
        built: 'N/A',
        launched: 'N/A',
        operational: 'N/A',
        failed: 'N/A',
        lost: 'N/A',
        maidenLaunch: 'N/A',
        lastLaunch: 'N/A',
        lastRetirement: 'N/A',
      },
    },
  };

  const lmDetails = {
    manufacturer: 'Grumman',
    designer: 'N/A',
    country: 'United States',
    operator: 'NASA',
    applications: 'Crewed lunar landing',
    specs: {
      type: 'Lunar lander',
      launchMass: '15,188 kg',
      dryMass: 'N/A',
      crewCapacity: '2',
      volume: 'N/A',
      power: 'Fuel cells',
      batteries: 'N/A',
      regime: 'Lunar orbit',
      designLife: '75 hours (extended)',
      dimensions: {
        length: '23 ft 1 in (7.04 m)',
        diameter: '13 ft 10 in (4.22 m) without landing gear',
        width: '31 ft (9.4 m), landing gear deployed',
      },
      production: {
        status: 'Retired',
        built: 'N/A',
        launched: 'N/A',
        operational: 'N/A',
        failed: 'N/A',
        lost: 'N/A',
        maidenLaunch: 'N/A',
        lastLaunch: 'N/A',
        lastRetirement: 'N/A',
      },
    },
  };

  const primeCrew = [
    {
      name: 'Eugene A. Cernan',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Astronaut_Eugene_A._Cernan.jpg/440px-Astronaut_Eugene_A._Cernan.jpg',
      birthDate: 'March 14, 1934',
      nationality: 'USA',
      job: 'Commander',
      evaDetails: [
        { date: 'N/A', duration: 'N/A', description: 'Only spaceflight' },
      ],
    },
    {
      name: 'Ronald E. Evans',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Ronald_Evans.jpg/440px-Ronald_Evans.jpg',
      birthDate: 'November 10, 1933',
      nationality: 'USA',
      job: 'Command Module Pilot',
      evaDetails: [
        { date: 'N/A', duration: 'N/A', description: 'Only spaceflight' },
      ],
    },
    {
      name: 'Harrison H. Schmitt',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harrison_Schmitt.jpg/440px-Harrison_Schmitt.jpg',
      birthDate: 'July 3, 1935',
      nationality: 'USA',
      job: 'Lunar Module Pilot',
      evaDetails: [
        { date: '12/11/1972', duration: '7:12', description: 'Collected 243 lb of geologic material. ALSEP exp deployed. 8 seismic explosive charges placed for later use. Used lunar rover to travel 11.4 miles (19 km) circuit with max range of 4.9 miles from lunar module.' },
        { date: '12/12/1972', duration: '7:37', description: 'N/A' },
        { date: '12/13/1972', duration: '7:16', description: 'N/A' },
        { date: '12/13/1972', duration: '0:08', description: 'Jettison suit backpacks and equip to lighten ascent.' },
      ],
    },
  ];

  const toggleCSMTechnicalDetails = () => setShowCSMTechnicalDetails(!showCSMTechnicalDetails);
  const toggleLMTechnicalDetails = () => setShowLMTechnicalDetails(!showLMTechnicalDetails);
  const handleCrewClick = (member) => {
    if (selectedCrewMember && selectedCrewMember.name === member.name) {
      setSelectedCrewMember(null);
    } else {
      setSelectedCrewMember(member);
    }
  };

  return (
    <div>
      <h2>Apollo 17</h2>
      <p>Apollo 17 was the eleventh and final crewed mission in the Apollo space program. It was launched on December 7, 1972, and was the last mission where humans traveled to and walked on the Moon.</p>
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
          alt="Apollo Command/Service Module"
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
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {primeCrew.map((member) => (
            <div key={member.name} style={{ textAlign: 'center' }}>
              <img
                src={member.image}
                alt={member.name}
                style={{ width: '150px', cursor: 'pointer' }}
                onClick={() => handleCrewClick(member)}
              />
              <p><strong>{member.name}</strong></p>
            </div>
          ))}
        </div>
        {selectedCrewMember && (
          <div>
            <h4>{selectedCrewMember.name}</h4>
            <p><strong>Birth Date:</strong> {selectedCrewMember.birthDate}</p>
            <p><strong>Nationality:</strong> {selectedCrewMember.nationality}</p>
            <p><strong>Job:</strong> {selectedCrewMember.job}</p>
            <h4>EVAs</h4>
            {selectedCrewMember.evaDetails.map((eva, index) => (
              <div key={index}>
                <p><strong>Date:</strong> {eva.date}</p>
                <p><strong>Duration:</strong> {eva.duration}</p>
                <p><strong>Description:</strong> {eva.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apollo17;
