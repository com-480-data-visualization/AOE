import React, { useState } from 'react';

const Apollo4 = () => {
  const [showDetails, setShowDetails] = useState(false);

  const missionDetails = {
    objective: 'First flight of the Saturn V rocket and first test of the complete Apollo Command/Service Module.',
    result: 'Successful test of the Saturn V rocket and Apollo Command/Service Module.',
    technicalDetails: 'Launch Date: 1967-11-09, Launch Site: LC-39A, Kennedy Space Center, Florida, USA, Rocket: Saturn V',
    extendedDetails: {
      type: 'Uncrewed Earth orbital CSM flight (A)',
      operator: 'NASA',
      COSPAR_ID: '1967-113A (command and service modules), 1967-113B (S-IVB)',
      SATCAT_no: '3032',
      duration: '8 hours, 36 minutes, 59 seconds',
      orbits_completed: '3',
      spacecraft: 'Apollo CSM-017, Apollo LTA-10R',
      manufacturer: 'North American Rockwell',
      launch_mass: '36,856 kilograms (81,253 lb)',
      start_date: 'November 9, 1967, 12:00:01 UTC',
      rocket: 'Saturn V SA-501',
      launch_site: 'Kennedy LC-39A',
      end_date: 'November 9, 1967, 20:37:00 UTC',
      recovery: 'USS Bennington',
      landing_site: 'North Pacific Ocean, 30°06′N 172°32′W',
      orbit_params: {
        reference_system: 'Geocentric',
        regime: 'Highly elliptical orbit',
        perigee: '−204 kilometers (−110 nmi)',
        apogee: '18,092 kilometers (9,769 nmi)',
        inclination: '31.9 degrees',
        period: '314.58 minutes (initial)',
        epoch: 'November 9, 1967',
      },
    },
  };

  const handleImageClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <h2>Apollo 4</h2>
      <p>Apollo 4 was the first flight of the Saturn V rocket and the first test of the complete Apollo Command/Service Module. It was an uncrewed mission that took place on November 9, 1967.</p>
      <div>
        <h3>Mission Details</h3>
        <p><strong>Objective:</strong> {missionDetails.objective}</p>
        <p><strong>Result:</strong> {missionDetails.result}</p>
        <p><strong>Technical Details:</strong> {missionDetails.technicalDetails}</p>
      </div>
      <div>
        <h3>Saturn V Rocket</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Apollo_4_Launch_-_GPN-2000-000044.jpg/520px-Apollo_4_Launch_-_GPN-2000-000044.jpg"
          alt="Saturn V Rocket"
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', cursor: 'pointer' }}
          onClick={handleImageClick}
        />
        {showDetails && (
          <div>
            <h3>Extended Technical Details</h3>
            <p><strong>Mission Type:</strong> {missionDetails.extendedDetails.type}</p>
            <p><strong>Operator:</strong> {missionDetails.extendedDetails.operator}</p>
            <p><strong>COSPAR ID:</strong> {missionDetails.extendedDetails.COSPAR_ID}</p>
            <p><strong>SATCAT No.:</strong> {missionDetails.extendedDetails.SATCAT_no}</p>
            <p><strong>Mission Duration:</strong> {missionDetails.extendedDetails.duration}</p>
            <p><strong>Orbits Completed:</strong> {missionDetails.extendedDetails.orbits_completed}</p>
            <p><strong>Spacecraft:</strong> {missionDetails.extendedDetails.spacecraft}</p>
            <p><strong>Manufacturer:</strong> {missionDetails.extendedDetails.manufacturer}</p>
            <p><strong>Launch Mass:</strong> {missionDetails.extendedDetails.launch_mass}</p>
            <p><strong>Launch Date:</strong> {missionDetails.extendedDetails.start_date}</p>
            <p><strong>Rocket:</strong> {missionDetails.extendedDetails.rocket}</p>
            <p><strong>Launch Site:</strong> {missionDetails.extendedDetails.launch_site}</p>
            <p><strong>End Date:</strong> {missionDetails.extendedDetails.end_date}</p>
            <p><strong>Recovered By:</strong> {missionDetails.extendedDetails.recovery}</p>
            <p><strong>Landing Site:</strong> {missionDetails.extendedDetails.landing_site}</p>
            <h4>Orbital Parameters</h4>
            <p><strong>Reference System:</strong> {missionDetails.extendedDetails.orbit_params.reference_system}</p>
            <p><strong>Regime:</strong> {missionDetails.extendedDetails.orbit_params.regime}</p>
            <p><strong>Perigee Altitude:</strong> {missionDetails.extendedDetails.orbit_params.perigee}</p>
            <p><strong>Apogee Altitude:</strong> {missionDetails.extendedDetails.orbit_params.apogee}</p>
            <p><strong>Inclination:</strong> {missionDetails.extendedDetails.orbit_params.inclination}</p>
            <p><strong>Period:</strong> {missionDetails.extendedDetails.orbit_params.period}</p>
            <p><strong>Epoch:</strong> {missionDetails.extendedDetails.orbit_params.epoch}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apollo4;
