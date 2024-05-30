import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import Popup from './Popup';
import styles from './MoonRace.module.css';
import Soyuz23 from './Figures/Soyuz_23.jpg';
import ModuleInLake from './Figures/Module_in_the_lake.jpg';
import HelicopterTakingModule from './Figures/Helicopter_is_taking_module.jpg';
import Rescue9H from './Figures/Rescue_9_H.jpg';
import Rozhdestvensky from './Figures/Rozhdestvensky_Valery.jpg';
import Zudov from './Figures/Zudov_Vyacheslav.jpg';
import Soyuz11 from './Figures/Soyuz_11.jpg';
import Crew from './Figures/Crew.jpg';
import Salyut1 from './Figures/Salyut_1.jpg';
import Capsule from './Figures/Capsule.jpg';
import Patsayev from './Figures/Patsayev_Viktor.jpg';
import Dobrovolski from './Figures/Dobrovolski_Georgi.jpg';
import Volkov from './Figures/Volkov_Vladislav.jpg';
import './Popup.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const LessonsFromFailures = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [popupContent, setPopupContent] = useState(null);

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };


  const toggleCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setShowSubcategories(false);
    } else {
      setSelectedCategory(category);
      setShowSubcategories(true);
      setSelectedSubcategory(null);
    }
  };

  const toggleSubcategory = (subcategory) => {
    if (selectedSubcategory === subcategory) {
      setSelectedSubcategory(null);
    } else {
      setSelectedSubcategory(subcategory);
    }
  };

  const handlePopupContent = (type) => {
    let content;
    switch (type) {
      case 'Soyuz 23':
        content = (
          <div className="popup-content">
            <img src={Soyuz23} alt="Soyuz 23" style={{ width: '50%' }} />
            <p><strong>Operator:</strong> Soviet space program</p>
            <p><strong>COSPAR ID:</strong> 1976-100A</p>
            <p><strong>SATCAT no.:</strong> 09477</p>
            <p><strong>Mission duration:</strong> 2 days 6 minutes 35 seconds</p>
            <p><strong>Orbits completed:</strong> 32</p>
            <p><strong>Spacecraft:</strong> Soyuz 7K-T No.10</p>
            <p><strong>Spacecraft type:</strong> Soyuz 7K-T/A9</p>
            <p><strong>Manufacturer:</strong> NPO Energia</p>
            <p><strong>Launch mass:</strong> 6750 kg</p>
            <p><strong>Landing mass:</strong> 1200 kg</p>
            <p><strong>Crew size:</strong> 2</p>
            <p><strong>Members:</strong> Vyacheslav Zudov, Valery Rozhdestvensky</p>
            <p><strong>Callsign:</strong> Радон (Radon - "Radon")</p>
            <p><strong>Launch date:</strong> 14 October 1976, 17:39:18 UTC</p>
            <p><strong>Rocket:</strong> Soyuz</p>
            <p><strong>Launch site:</strong> Baikonur, Site 1/5</p>
            <p><strong>Landing date:</strong> 16 October 1976, 17:45:53 UTC</p>
            <p><strong>Landing site:</strong> Lake Tengiz, Kazakhstan</p>
            <p><strong>Orbital parameters:</strong></p>
            <ul>
              <li><strong>Reference system:</strong> Geocentric orbit</li>
              <li><strong>Regime:</strong> Low Earth orbit</li>
              <li><strong>Perigee altitude:</strong> 243.0 km</li>
              <li><strong>Apogee altitude:</strong> 275.0 km</li>
              <li><strong>Inclination:</strong> 51.6°</li>
              <li><strong>Period:</strong> 89.5 minutes</li>
            </ul>
          </div>
        );
        break;
      case 'Rescue 9H':
        content = (
          <div className="popup-content">
            <img src={Rescue9H} alt="Rescue operation" style={{ width: '50%' }} />
            <p>The Soyuz 23 descent module landed in Lake Tengiz, a partially frozen body of water in Kazakhstan. The rescue operation was extremely challenging due to severe weather conditions, including fog and freezing temperatures. Despite these challenges, the crew was successfully rescued, albeit after a harrowing ordeal.</p>
          </div>
        );
        break;
      case 'Module in the lake':
        content = (
          <div className="popup-content">
            <img src={ModuleInLake} alt="Module in the lake" style={{ width: '50%' }} />
            <p>The Soyuz 23 descent module landed in Lake Tengiz, Kazakhstan, during re-entry. The landing was one of the most perilous in the history of space exploration, as the capsule began to sink into the frigid waters. Recovery operations were hampered by severe weather conditions.</p>
          </div>
        );
        break;
      case 'Helicopter taking module':
        content = (
          <div className="popup-content">
            <img src={HelicopterTakingModule} alt="Helicopter taking module" style={{ width: '50%' }} />
            <p>Helicopters were used to retrieve the Soyuz 23 module from Lake Tengiz. The challenging rescue operation was completed successfully despite the adverse weather conditions.</p>
          </div>
        );
        break;
      case 'Soyuz 11':
        content = (
          <div className="popup-content">
            <img src={Soyuz11} alt="Soyuz 11" style={{ width: '50%' }} />
            <p><strong>Operator:</strong> Soviet space program</p>
            <p><strong>COSPAR ID:</strong> 1971-053A</p>
            <p><strong>SATCAT no.:</strong> 05283</p>
            <p><strong>Mission duration:</strong> 23 days, 18 hours, 21 minutes, 43 seconds</p>
            <p><strong>Orbits completed:</strong> 383</p>
            <p><strong>Spacecraft:</strong> Soyuz, 7K-T No.32</p>
            <p><strong>Spacecraft type:</strong> Soyuz 7K-OKS</p>
            <p><strong>Manufacturer:</strong> Experimental Design Bureau (OKB-1)</p>
            <p><strong>Launch mass:</strong> 6565 kg</p>
            <p><strong>Landing mass:</strong> 1200 kg</p>
            <p><strong>Crew size:</strong> 3</p>
            <p><strong>Members:</strong> Georgy Dobrovolsky, Vladislav Volkov, Viktor Patsayev</p>
            <p><strong>Callsign:</strong> Янтарь (Yantar - "Amber")</p>
            <p><strong>Launch date:</strong> 6 June 1971, 04:55:09 GMT</p>
            <p><strong>Rocket:</strong> Soyuz</p>
            <p><strong>Launch site:</strong> Baikonur, Site 1/5</p>
            <p><strong>Landing date:</strong> 29 June 1971, 23:16:52 GMT</p>
            <p><strong>Landing site:</strong> 90 km southwest of Karazhal, Karaganda Oblast, Kazakh SSR, Soviet Union</p>
            <p><strong>Orbital parameters:</strong></p>
            <ul>
              <li><strong>Reference system:</strong> Geocentric orbit</li>
              <li><strong>Regime:</strong> Low Earth orbit</li>
              <li><strong>Perigee altitude:</strong> 185.0 km</li>
              <li><strong>Apogee altitude:</strong> 217.0 km</li>
              <li><strong>Inclination:</strong> 51.6°</li>
              <li><strong>Period:</strong> 88.3 minutes</li>
            </ul>
            <p>The Soyuz 11 mission ended in disaster when the crew capsule depressurised during preparations for re-entry, killing the three-person crew. The crew members of Soyuz 11 are the only humans to have died in space.</p>
          </div>
        );
        break;
      case 'Crew':
        content = (
          <div className="popup-content">
            <img src={Crew} alt="Soyuz 11 Crew" style={{ width: '50%' }} />
            <p><strong>Mission Start:</strong> June 6, 1971</p>
            <p><strong>Mission End:</strong> June 29, 1971</p>
            <p>The crew of Soyuz 11 consisted of Commander Georgi Dobrovolski, Flight Engineer Viktor Patsayev, and Research Engineer Vladislav Volkov. They were the first and only crew to board the Salyut 1 space station.</p>
          </div>
        );
        break;
      case 'Salyut 1':
        content = (
          <div className="popup-content">
            <img src={Salyut1} alt="Salyut 1" style={{ width: '50%' }} />
            <p><strong>Operator:</strong> Soviet space program</p>
            <p>Salyut 1 was the world's first space station, launched by the Soviet Union on April 19, 1971. It was part of the Salyut program and marked a significant milestone in space exploration.</p>
          </div>
        );
        break;
      case 'Capsule':
        content = (
          <div className="popup-content">
            <img src={Capsule} alt="Soyuz 11 Capsule" style={{ width: '50%' }} />
            <p>The Soyuz 11 capsule tragically depressurised during re-entry preparations, leading to the death of all three crew members on board. This incident underscored the need for improved safety measures in spacecraft design.</p>
          </div>
        );
        break;
      default:
        break;
    }
    setPopupContent(content);
  };

  const drawScatterPlot = (data, id) => {
    d3.select(`#${id}`).selectAll("*").remove();
    const svg = d3.select(`#${id}`).attr("width", 500).attr("height", 500);
    const xScale = d3.scaleLinear().domain([0, 60]).range([0, 500]);
    const yScale = d3.scaleLinear().domain([0, 80]).range([500, 0]);
    svg.append("g").attr("transform", "translate(0, 480)").call(d3.axisBottom(xScale));
    svg.append("g").attr("transform", "translate(20, 0)").call(d3.axisLeft(yScale));
    const circles = svg.selectAll("circle").data(data).enter().append("circle")
      .attr("cx", d => xScale(d.x)).attr("cy", d => yScale(d.y))
      .attr("r", d => selectedEvent === d.event ? 10 : 5)
      .attr("fill", d => selectedEvent === d.event ? "red" : "blue")
      .on("click", (event, d) => { setSelectedEvent(d.event); });
    svg.selectAll("text").data(data).enter().append("text")
      .attr("x", d => xScale(d.x)).attr("y", d => yScale(d.y) - 10)
      .text(d => d.event).attr("font-size", "12px").attr("fill", "black");
    circles.attr("r", d => selectedEvent === d.event ? 10 : 5).attr("fill", d => selectedEvent === d.event ? "red" : "blue");
  };

  useEffect(() => {
    if (selectedCategory === 'Soyuz 23' && selectedSubcategory === 'lessons') {
      drawScatterPlot([
        { x: 10, y: 20, event: "Launch" },
        { x: 20, y: 40, event: "Orbit Insertion" },
        { x: 30, y: 50, event: "Communication Failure" },
        { x: 40, y: 30, event: "Descent" },
        { x: 50, y: 70, event: "Rescue Operation" }
      ], "scatterplotSoyuz23");
    } else if (selectedCategory === 'Soyuz 11' && selectedSubcategory === 'lessons') {
      drawScatterPlot([
        { x: 10, y: 20, event: "Soyuz 11 Launch" },
        { x: 20, y: 40, event: "Docking with Salyut 1" },
        { x: 30, y: 50, event: "Communication Loss" },
        { x: 40, y: 30, event: "Descent" },
        { x: 50, y: 70, event: "Recovery" }
      ], "scatterplotSoyuz11");
    }
  }, [selectedCategory, selectedSubcategory, selectedEvent]);

  const missionDetailsSoyuz23 = {
    organization: "RVSN USSR",
    launchSite: "Site 1/5, Baikonur Cosmodrome, Kazakhstan",
    vehicle: "Soyuz | Soyuz 23",
    status: "Retired",
    missionOutcome: "Success",
    country: "Kazakhstan",
    launchDate: "1976-10-14 17:39:00+00:00",
    launchYear: 1976,
    launchMonth: 10,
    launchDay: 14,
    launchDateFormatted: "14/10/1976",
    launchTime: "17:39",
    location: "https://www.google.com/maps/place/Baikonur+Cosmodrome/@45.965,63.305,9z"
  };

  const missionDetailsSoyuz11 = {
    organization: "RVSN USSR",
    launchSite: "Site 1/5, Baikonur Cosmodrome, Kazakhstan",
    vehicle: "Soyuz | Soyuz 11",
    status: "Retired",
    missionOutcome: "Catastrophic",
    country: "Kazakhstan",
    launchDate: "1971-06-06 04:55:00+00:00",
    launchYear: 1971,
    launchMonth: 6,
    launchDay: 6,
    launchDateFormatted: "06/06/1971",
    launchTime: "04:55",
    location: "https://www.google.com/maps/place/Baikonur+Cosmodrome/@45.965,63.305,9z"
  };

  const pilotDataSoyuz23 = [
    {
      id: 168,
      number: 80,
      nationwide_number: 37,
      name: "Zudov, Vyacheslav",
      original_name: "Вячеслав Дмитриевич Зудов",
      sex: "male",
      year_of_birth: 1942,
      nationality: "U.S.S.R/Russia",
      military_civilian: "military",
      selection: "TsPK-3",
      year_of_selection: 1965,
      mission_number: 1,
      total_number_of_missions: 1,
      occupation: "commander",
      year_of_mission: 1976,
      mission_title: "Soyuz 23",
      ascend_shuttle: "Soyuz 23",
      in_orbit: "Soyuz 23",
      descend_shuttle: "Soyuz 23",
      hours_mission: 48,
      total_hrs_sum: 48.1,
      field21: 0,
      eva_hrs_mission: 0,
      total_eva_hrs: 0,
      image: Zudov
    },
    {
      id: 169,
      number: 81,
      nationwide_number: 38,
      name: "Rozhdestvensky, Valery",
      original_name: "Валерий Ильич Рождественский",
      sex: "male",
      year_of_birth: 1939,
      nationality: "U.S.S.R/Russia",
      military_civilian: "military",
      selection: "TsPK-3",
      year_of_selection: 1965,
      mission_number: 1,
      total_number_of_missions: 1,
      occupation: "flight engineer",
      year_of_mission: 1976,
      mission_title: "Soyuz 23",
      ascend_shuttle: "Soyuz 23",
      in_orbit: "Soyuz 23",
      descend_shuttle: "Soyuz 23",
      hours_mission: 48,
      total_hrs_sum: 48.1,
      field21: 0,
      eva_hrs_mission: 0,
      total_eva_hrs: 0,
      image: Rozhdestvensky
    }
  ];

  const pilotDataSoyuz11 = [
    {
      id: 107,
      number: 42,
      nationwide_number: 20,
      name: "Volkov, Vladislav",
      original_name: "Владислав Николаевич Волков",
      sex: "male",
      year_of_birth: 1935,
      nationality: "U.S.S.R/Russia",
      military_civilian: "military",
      selection: "Korolyov-Group / Mishin-Group / TsKBEM-1",
      year_of_selection: 1968,
      mission_number: 2,
      total_number_of_missions: 2,
      occupation: "flight engineer",
      year_of_mission: 1971,
      mission_title: "Soyuz 11",
      ascend_shuttle: "Soyuz 11",
      in_orbit: "Salyut 1",
      descend_shuttle: "Soyuz 11",
      hours_mission: 570,
      total_hrs_sum: 689.02,
      field21: 0,
      eva_hrs_mission: 0,
      total_eva_hrs: 0,
      image: Volkov
    },
    {
      id: 23,
      number: 52,
      nationwide_number: 24,
      name: "Dobrovolski, Georgi",
      original_name: "Георгий Тимофеевич Добровольский",
      sex: "male",
      year_of_birth: 1928,
      nationality: "U.S.S.R/Russia",
      military_civilian: "military",
      selection: "TsPK-2",
      year_of_selection: 1963,
      mission_number: 1,
      total_number_of_missions: 1,
      occupation: "commander",
      year_of_mission: 1971,
      mission_title: "Soyuz 11",
      ascend_shuttle: "Soyuz 11",
      in_orbit: "Salyut 1",
      descend_shuttle: "Soyuz 11",
      hours_mission: 570,
      total_hrs_sum: 570.35,
      field21: 0,
      eva_hrs_mission: 0,
      total_eva_hrs: 0,
      image: Dobrovolski
    },
    {
      id: 124,
      number: 53,
      nationwide_number: 25,
      name: "Patsayev, Viktor",
      original_name: "Виктор Иванович Пацаев",
      sex: "male",
      year_of_birth: 1933,
      nationality: "U.S.S.R/Russia",
      military_civilian: "civilian",
      selection: "TsKBEM-1",
      year_of_selection: 1968,
      mission_number: 1,
      total_number_of_missions: 1,
      occupation: "flight engineer",
      year_of_mission: 1971,
      mission_title: "Soyuz 11",
      ascend_shuttle: "Soyuz 11",
      in_orbit: "Salyut 1",
      descend_shuttle: "Soyuz 11",
      hours_mission: 570,
      total_hrs_sum: 570.35,
      field21: 0,
      eva_hrs_mission: 0,
      total_eva_hrs: 0,
      image: Patsayev
    }
  ];

  return (
    <section id="lessons-from-failures">
    <p className={styles.introText}>
      Here you can see some space missions that have failed and the lessons learned from them.<br />
      Scroll down and check out the details of the Soyuz 23 and Soyuz 11 missions.
    </p>
      <h1 className={styles.failedMissions}> Failed Space Missions</h1>
      <div className={styles.module}>
        <div className="App">
        <h1 
        className={`category-title ${selectedCategory === 'Soyuz 23' ? 'selected' : ''} ${styles.clickable}`} 
        onClick={() => toggleCategory('Soyuz 23')}
      >
        Soyuz 23
      </h1>
          {selectedCategory === 'Soyuz 23' && showSubcategories && (
            <div className={styles.whiteBackground}> 
            <h2 
              className={`lessons-learned-title ${selectedSubcategory === 'lessons' ? 'selected' : ''} ${styles.clickable}`} 
              onClick={() => toggleSubcategory('lessons')}
            >
              Lessons Learned
            </h2>
              {selectedSubcategory === 'lessons' && (
                <div className="module">
                  <p className="lessons-learned-text">
                    <strong>Objective:</strong> The Soyuz 23 mission, launched on October 14, 1976, aimed to dock with the Salyut 5 space station.<br />
                    <strong>Result:</strong> The mission ended with the capsule landing in a frozen lake, and the crew was rescued after a difficult operation.
                  </p>
                  <ul className="lessons-learned-list">
                    {[
                      { date: "October 14, 1976", event: "Launch", lesson: "Ensure comprehensive pre-launch system checks to prevent in-flight malfunctions." },
                      { date: "October 16, 1976", event: "Orbit Insertion", lesson: "Accurate calculations and multiple verification steps are critical for successful orbit insertion." },
                      { date: "October 16, 1976", event: "Communication Failure", lesson: "Establish reliable backup communication systems to maintain contact during all mission phases." },
                      { date: "October 16, 1976", event: "Descent", lesson: "Improve descent trajectory planning and ensure robust landing site selection processes." },
                      { date: "October 16, 1976", event: "Rescue Operation", lesson: "Enhance emergency rescue protocols to ensure timely recovery of the crew." }
                    ].map((item, index) => (
                      <li key={index} style={{ display: selectedEvent === null || selectedEvent === item.event ? 'block' : 'none', fontWeight: selectedEvent === item.event ? 'bold' : 'normal' }}>
                        <strong>{item.event} ({item.date}):</strong> {item.lesson}
                      </li>
                    ))}
                  </ul>
                  <div className="chart-container">
                    <svg id="scatterplotSoyuz23"></svg>
                  </div>
                </div>
              )}
              <h2 
              className={`mission-details-title ${selectedSubcategory === 'missionDetails' ? 'selected' : ''} ${styles.clickable}`} 
              onClick={() => toggleSubcategory('missionDetails')}
            >
              Mission Details
            </h2>
              {selectedSubcategory === 'missionDetails' && (
                <div className="module">
                  <p><strong>Organization:</strong> {missionDetailsSoyuz23.organization}</p>
                  <p><strong>Launch Site:</strong> {missionDetailsSoyuz23.launchSite}</p>
                  <p><strong>Vehicle:</strong> <span onClick={() => handlePopupContent('Soyuz 23')} style={{ color: 'blue', cursor: 'pointer' }}>Soyuz | Soyuz 23</span></p>
                  <p><strong>Status:</strong> {missionDetailsSoyuz23.status}</p>
                  <p><strong>Mission Outcome:</strong> {missionDetailsSoyuz23.missionOutcome}</p>
                  <p><strong>Country:</strong> <a href={missionDetailsSoyuz23.location} target="_blank" rel="noopener noreferrer">Kazakhstan</a></p>
                  <p><strong>Launch Date:</strong> {missionDetailsSoyuz23.launchDateFormatted}</p>
                  <p><strong>Launch Time:</strong> {missionDetailsSoyuz23.launchTime}</p>
                  <img src={Soyuz23} alt="Soyuz 23" style={{ width: '50%', marginTop: '20px', cursor: 'pointer' }} onClick={() => handlePopupContent('Soyuz 23')} />
                  <img src={ModuleInLake} alt="Module in the lake" style={{ width: '50%', marginTop: '20px', cursor: 'pointer' }} onClick={() => handlePopupContent('Module in the lake')} />
                  <img src={HelicopterTakingModule} alt="Helicopter taking module" style={{ width: '50%', marginTop: '20px', cursor: 'pointer' }} onClick={() => handlePopupContent('Helicopter taking module')} />
                  <img src={Rescue9H} alt="Rescue operation" style={{ width: '50%', marginTop: '20px', cursor: 'pointer' }} onClick={() => handlePopupContent('Rescue 9H')} />
                </div>
              )}
            <h2 
              className={`pilots-title ${selectedSubcategory === 'pilots' ? 'selected' : ''} ${styles.clickable}`} 
              onClick={() => toggleSubcategory('pilots')}
            >
              Pilots of Soyuz 23
            </h2>
              {selectedSubcategory === 'pilots' && (
                <div className="module">
                  {pilotDataSoyuz23.map((pilot) => (
                    <div key={pilot.id} className="pilot-card">
                      <h2>{pilot.name} ({pilot.original_name})</h2>
                      <img src={pilot.image} alt={pilot.name} style={{ width: '50%', marginTop: '20px' }} />
                      <p><strong>Role:</strong> {pilot.occupation}</p>
                      <p><strong>Year of Birth:</strong> {pilot.year_of_birth}</p>
                      <p><strong>Nationality:</strong> {pilot.nationality}</p>
                      <p><strong>Mission:</strong> {pilot.mission_title}</p>
                      <p><strong>Hours in Mission:</strong> {pilot.hours_mission}</p>
                      <p><strong>Total Hours in Space:</strong> {pilot.total_hrs_sum}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          <h1 
            className={`category-title ${selectedCategory === 'Soyuz 11' ? 'selected' : ''} ${styles.clickable}`} 
            onClick={() => toggleCategory('Soyuz 11')}
          >
            Soyuz 11
          </h1>
          {selectedCategory === 'Soyuz 11' && showSubcategories && (
            <div className={styles.whiteBackground}> 
              <h2 
              className={`lessons-learned-title ${selectedSubcategory === 'lessons' ? 'selected' : ''} ${styles.clickable}`} 
              onClick={() => toggleSubcategory('lessons')}
            >
              Lessons Learned
            </h2>
              {selectedSubcategory === 'lessons' && (
                <div className="module">
                  <p className="lessons-learned-text">
                    <strong>Objective:</strong> The Soyuz 11 mission, launched on June 6, 1971, aimed to dock with the Salyut 1 space station.<br />
                    <strong>Result:</strong> The mission ended catastrophically with the death of three astronauts due to capsule depressurisation during descent.
                  </p>
                  <ul className="lessons-learned-list">
                    {[
                      { date: "June 6, 1971", event: "Soyuz 11 Launch", lesson: "Importance of thorough pre-launch system checks." },
                      { date: "June 7, 1971", event: "Docking with Salyut 1", lesson: "Verification of docking mechanisms and procedures." },
                      { date: "June 29, 1971", event: "Communication Loss", lesson: "Ensure reliable and redundant communication systems." },
                      { date: "June 29, 1971", event: "Descent", lesson: "Need for improved safety mechanisms and pressure suits for astronauts." },
                      { date: "June 29, 1971", event: "Recovery", lesson: "Redesign of the spacecraft to improve safety during descent and landing." }
                    ].map((item, index) => (
                      <li key={index} style={{ display: selectedEvent === null || selectedEvent === item.event ? 'block' : 'none', fontWeight: selectedEvent === item.event ? 'bold' : 'normal' }}>
                        <strong>{item.event} ({item.date}):</strong> {item.lesson}
                      </li>
                    ))}
                  </ul>
                  <div className="chart-container">
                    <svg id="scatterplotSoyuz11"></svg>
                  </div>
                </div>
              )}
              <h2 
              className={`mission-details-title ${selectedSubcategory === 'missionDetails' ? 'selected' : ''} ${styles.clickable}`} 
              onClick={() => toggleSubcategory('missionDetails')}
            >
              Mission Details
            </h2>
              {selectedSubcategory === 'missionDetails' && (
                <div className="module">
                  <p><strong>Organization:</strong> {missionDetailsSoyuz11.organization}</p>
                  <p><strong>Launch Site:</strong> {missionDetailsSoyuz11.launchSite}</p>
                  <p><strong>Vehicle:</strong> <span onClick={() => handlePopupContent('Soyuz 11')} style={{ color: 'blue', cursor: 'pointer' }}>Soyuz | Soyuz 11</span></p>
                  <p><strong>Status:</strong> {missionDetailsSoyuz11.status}</p>
                  <p><strong>Mission Outcome:</strong> {missionDetailsSoyuz11.missionOutcome}</p>
                  <p><strong>Country:</strong> <a href={missionDetailsSoyuz11.location} target="_blank" rel="noopener noreferrer">Kazakhstan</a></p>
                  <p><strong>Launch Date:</strong> {missionDetailsSoyuz11.launchDateFormatted}</p>
                  <p><strong>Launch Time:</strong> {missionDetailsSoyuz11.launchTime}</p>
                  <img src={Crew} alt="Soyuz 11 Crew" style={{ width: '50%', marginTop: '20px', cursor: 'pointer' }} onClick={() => handlePopupContent('Crew')} />
                  <img src={Salyut1} alt="Salyut 1" style={{ width: '50%', marginTop: '20px', cursor: 'pointer' }} onClick={() => handlePopupContent('Salyut 1')} />
                  <img src={Capsule} alt="Soyuz 11 Capsule" style={{ width: '50%', marginTop: '20px', cursor: 'pointer' }} onClick={() => handlePopupContent('Capsule')} />
                </div>
              )}
             <h2 
              className={`pilots-title ${selectedSubcategory === 'pilots' ? 'selected' : ''} ${styles.clickable}`} 
              onClick={() => toggleSubcategory('pilots')}
            >
              Pilots of Soyuz 23
            </h2>
              {selectedSubcategory === 'pilots' && (
                <div className="module">
                  {pilotDataSoyuz11.map((pilot) => (
                    <div key={pilot.id} className="pilot-card">
                      <h2>{pilot.name} ({pilot.original_name})</h2>
                      <img src={pilot.image} alt={pilot.name} style={{ width: '50%', marginTop: '20px' }} />
                      <p><strong>Role:</strong> {pilot.occupation}</p>
                      <p><strong>Year of Birth:</strong> {pilot.year_of_birth}</p>
                      <p><strong>Nationality:</strong> {pilot.nationality}</p>
                      <p><strong>Mission:</strong> {pilot.mission_title}</p>
                      <p><strong>Hours in Mission:</strong> {pilot.hours_mission}</p>
                      <p><strong>Total Hours in Space:</strong> {pilot.total_hrs_sum}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {popupContent && <Popup content={popupContent} onClose={() => setPopupContent(null)} />}
        </div>
      </div>
      <div className={styles.navigationButtons}>
          <button onClick={() => handleNavigate('/living-in-space')} style={{ justifyContent: 'flex-start' }}>
            <FontAwesomeIcon icon={faRocket} /> Back to Living In Space
          </button>
        </div>
    </section>
  );
};

export default LessonsFromFailures;
