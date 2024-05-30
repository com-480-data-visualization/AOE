import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

const Gemini = () => {
  const [selectedMission, setSelectedMission] = useState(null);

  useEffect(() => {
    const data = [
      { mission: 'Gemini XI', date: '1966-09-12', outcome: 'Success' },
      { mission: 'Gemini XII', date: '1966-11-11', outcome: 'Success' },
      { mission: 'Gemini VIII', date: '1966-05-16', outcome: 'Partial Failure' },
      { mission: 'Gemini 2', date: '1965-01-19', outcome: 'Success' },
      { mission: 'Gemini VII', date: '1965-12-04', outcome: 'Success' },
      { mission: 'Gemini IV', date: '1965-06-03', outcome: 'Success' },
    ];

    // Parse date and set up scales
    const parseDate = d3.timeParse('%Y-%m-%d');
    data.forEach(d => d.date = parseDate(d.date));

    // Clear any previous SVG
    d3.select('#geminiTimeline').selectAll('*').remove();

    // Set up SVG and dimensions
    const svg = d3.select('#geminiTimeline').append('svg')
      .attr('width', 800)
      .attr('height', 200);

    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = svg.attr('width') - margin.left - margin.right;
    const height = svg.attr('height') - margin.top - margin.bottom;

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Set up scales
    const x = d3.scaleTime()
      .range([0, width])
      .domain(d3.extent(data, d => d.date));

    const y = d3.scaleBand()
      .range([height, 0])
      .domain(data.map(d => d.mission))
      .padding(0.1);

    // Add axes
    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(6));

    // Add dots
    g.selectAll('.dot')
      .data(data)
      .enter().append('circle')
      .attr('class', 'dot')
      .attr('cx', d => x(d.date))
      .attr('cy', d => y(d.mission) + y.bandwidth() / 2)
      .attr('r', 5)
      .attr('fill', 'blue')
      .on('click', (event, d) => setSelectedMission(d));

    // Highlight selected mission
    if (selectedMission) {
      g.selectAll('.dot')
        .attr('fill', d => d.mission === selectedMission.mission ? 'red' : 'blue');
    }
  }, [selectedMission]);

  const missionDetails = {
    'Gemini XI': {
      objective: 'Rendezvous and docking with the Agena target vehicle, high-altitude EVA.',
      result: 'Successful docking, multiple EVAs, and high-altitude orbit achieved.',
      technicalDetails: 'Launch Date: 1966-09-12, Launch Site: LC-19, Cape Canaveral AFS, Florida, USA, Rocket: Titan II GLV',
    },
    'Gemini XII': {
      objective: 'Rendezvous and docking with the Agena target vehicle, multiple EVAs.',
      result: 'Successful docking and multiple EVAs completed.',
      technicalDetails: 'Launch Date: 1966-11-11, Launch Site: LC-19, Cape Canaveral AFS, Florida, USA, Rocket: Titan II GLV',
    },
    'Gemini VIII': {
      objective: 'Docking with the Agena target vehicle.',
      result: 'Successful docking but mission ended early due to stuck thruster.',
      technicalDetails: 'Launch Date: 1966-03-16, Launch Site: LC-19, Cape Canaveral AFS, Florida, USA, Rocket: Titan II GLV',
    },
    'Gemini 2': {
      objective: 'Test of spacecraft systems in a suborbital flight.',
      result: 'Successful suborbital flight and recovery.',
      technicalDetails: 'Launch Date: 1965-01-19, Launch Site: LC-19, Cape Canaveral AFS, Florida, USA, Rocket: Titan II GLV',
    },
    'Gemini VII': {
      objective: 'Long-duration flight and rendezvous with Gemini VI-A.',
      result: 'Successful long-duration flight and rendezvous.',
      technicalDetails: 'Launch Date: 1965-12-04, Launch Site: LC-19, Cape Canaveral AFS, Florida, USA, Rocket: Titan II GLV',
    },
    'Gemini IV': {
      objective: 'First American EVA and long-duration flight.',
      result: 'Successful EVA and long-duration flight.',
      technicalDetails: 'Launch Date: 1965-06-03, Launch Site: LC-19, Cape Canaveral AFS, Florida, USA, Rocket: Titan II GLV',
    }
  };

  const pilotData = [
    { country: 'USA', name: 'Ed White', mission: 'Gemini IV', date: '1965-06-03', duration: '0:36', description: 'First U.S. EVA. Used HHMU and took photos. Gas flow cooling of 25ft umbilical overwhelmed by vehicle ingress work and helmet fogged. Lost overglove. Jettisoned thermal gloves and helmet sun visor.' },
    { country: 'USA', name: 'David Scott', mission: 'Gemini VIII', date: '1966-03-16', duration: '0:00', description: 'HHMU EVA cancelled before starting by stuck on vehicle thruster that ended mission early.' },
    { country: 'USA', name: 'Eugene Cernan', mission: 'Gemini IX-A', date: '1966-06-05', duration: '2:07', description: 'Inadequate restraints, stiff 25ft umbilical and high workloads exceeded suit vent loop cooling capacity and caused fogging. Demo called off of tethered astronaut maneuvering unit.' },
    { country: 'USA', name: 'Mike Collins', mission: 'Gemini X', date: '1966-07-19', duration: '0:50', description: 'Standup EVA. UV photos of stars. Ended by eye irritation that impaired vision.' },
    { country: 'USA', name: 'Mike Collins', mission: 'Gemini X', date: '1966-07-20', duration: '0:39', description: 'Retrieved MMOD experiment from docked Agena. Used HHMU. Lost camera and retrieved experiment. EVA ended early by unrelated spacecraft problem.' },
    { country: 'USA', name: 'Richard Gordon', mission: 'Gemini XI', date: '1966-09-13', duration: '0:44', description: 'Attached tether between Agena and Gemini. EVA ended early due to fatigue, overheating & eye sweat.' },
    { country: 'USA', name: 'Richard Gordon', mission: 'Gemini XI', date: '1966-09-14', duration: '2:10', description: 'Standup EVA. Took star photos. Agena tether ops.' },
    { country: 'USA', name: 'Buzz Aldrin', mission: 'Gemini XII', date: '1966-11-12', duration: '2:29', description: 'Standup EVA. Science tasks. Took star photos.' },
    { country: 'USA', name: 'Buzz Aldrin', mission: 'Gemini XII', date: '1966-11-13', duration: '2:06', description: 'Attached tether between Agena and Gemini. UV photos of stars. Waist tether and Dutch shoe eval.' },
    { country: 'USA', name: 'Buzz Aldrin', mission: 'Gemini XII', date: '1966-11-14', duration: '0:55', description: 'Standup EVA. Jettisoned equipment. Took photos.' },
  ];

  return (
    <div>
      <h2>Gemini 1965-1966</h2>
      <p>
  The Gemini program was a pivotal step in advancing the techniques and technology necessary for the Apollo missions. It featured groundbreaking achievements such as spacewalks, long-duration flights, and orbital rendezvous and docking. Click on the dots below to explore individual mission details and, where available, learn about the astronauts' extravehicular activities and other mission highlights.
</p>

      <div id="geminiTimeline"></div>
      {selectedMission && (
        <div>
          <h3>Mission: {selectedMission.mission}</h3>
          <p><strong>Objective:</strong> {missionDetails[selectedMission.mission].objective}</p>
          <p><strong>Result:</strong> {missionDetails[selectedMission.mission].result}</p>
          <p><strong>Technical Details:</strong> {missionDetails[selectedMission.mission].technicalDetails}</p>
          <h3>Pilots and EVA Details</h3>
          <ul>
            {pilotData.filter(pilot => pilot.mission === selectedMission.mission).map((pilot, index) => (
              <li key={index}>
                <p><strong>{pilot.name}</strong> ({pilot.country}) - Mission: {pilot.mission} on {pilot.date}</p>
                <p>Duration: {pilot.duration}</p>
                <p>{pilot.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Gemini;
