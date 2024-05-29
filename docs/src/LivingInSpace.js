// src/LivingInSpace.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './LivingInSpace.css';
import moduleImage from './images/living_in_space/Mir_Station_Complete.jpeg'; // Ensure this path is correct
import greyscaleImage from './images/living_in_space/Mir_Station_Complete_greyscale.jpg'; // Ensure this path is correct
import MirEVA from './MirEVA';



const modules = [
  {
    id: 'mir-core',
    name: 'Mir Core Module',
    description: `The Mir core module, launched on 20 February 1986, featured a record six docking ports. Like the second generation Salyut 6 and 7, Mir had a fore and aft axial docking ports. With the addition of four radial docking ports, Mir was able to be significantly expanded once in orbit.

The core module featured a pair of private cabins, each with a window, for crewmembers.`,
    image: './images/living_in_space/Mir_Core.jpeg' // Ensure this path is correct
  },
  {
    id: 'kvant-1',
    name: 'Kvant 1',
    description: `Kvant 1, the first expansion module for the Mir space station, was launched on 31 March 1987.

Unlike the later expansion modules, Kvant 1 did not have an integrated propulsion system. A TKS-derived tug, launched with Kvant 1, was used to transport the module from its initial orbit to the Mir space station. The tug performed a successful rendezvous and maneuvered Kvant 1 to a docking with the Mir core module's aft docking port. It's mission complete, the tug detached and was discarded. The departure of the tug cleared a rear docking port on Kvant 1. The rear docking port allowed Soyuz spacecraft and Progress resupply ships to dock on later missions.

Kvant 1 included gyrodines for attitude control. Gydrodines allowed the station to gyroscopically control attitude without using maneuvering fuel.

Kvant 1 was outfitted with astronomy instrumentation, including x-ray and ultraviolet experiments. Two experimental truss structures were later extended from the module.`,
    image: './images/living_in_space/Kvant-1.jpg' // Ensure this path is correct
  },
  {
    id: 'kvant-2',
    name: 'Kvant 2',
    description: `Launched on 26 November 1989, the Kvant 2 module was the second large expansion module for the Mir space station. The module was based on the TKS transport from the Almaz military space station program. Kvant 2, along with the later Kristall, Spektr, and Priroda modules, had a self-contained propulsion system. They did not need a large tug to deliver them to the station.

The 19.6 ton module included additional solar arrays and an airlock for EVAs. Life support equipment, including equipment to generate oxygen and recycle water, was included.

A pointable platform, mounted on the outside of the module, was used to point cameras and other scientific equipment.

The module included a second set of gyrodines. These gyrodines, along with those already installed in Kvant 1, provided attitude control for the station complex.`,
    image: './images/living_in_space/Kvant-2.jpg' // Ensure this path is correct
  },
  {
    id: 'kristall',
    name: 'Kristall',
    description: `Launched by a Proton rocket on 31 May 1990, the Kristall module docked with the Mir complex on 10 June 1990.

The Kristall module included a pair of special docking ports. This docking ports, designed to accommodate large spacecraft massing 100 tones, was initially included to allow the soviet space shuttle, Buran, to dock with the station.

It is these docking ports that allowed American space shuttles to dock with the station starting in 1995.

Kristall's usual position, berthed to one of the radial ports, did not allow enough clearance for shuttle dockings. As a result, the module had to be temporally moved to the forward axial port in anticipation of a shuttle arrival. This was a cumbersome maneuver and would prevent Soyuz spacecraft from using the axial port. To alleviate this problem, the second Space Shuttle docking mission, STS-74, delivered a new docking module. Once installed, the docking module provided the clearance needed to dock shuttles without repositioning the Kristall module each time.

Kristal included several furnaces for conducting crystal growing and semiconductor production experiments. Kristall also included more solar arrays and life support equipment for the station.`,
    image: './images/living_in_space/kristall.jpg' // Ensure this path is correct
  },
  {
    id: 'spektr',
    name: 'Spektr',
    description: `Spektr was initially designed as a platform for military experiments. All work on the module was stopped when the Soviet Union broke up.

NASA agreed to fund completion of the module as part of the Shuttle-Mir program in the 1990's. The military experiments were removed and several hundred kgs of American scientific equipment was added. A new conical section was added in place of some of the military equipment, allowing a pair of additional solar panels to be added.

The Spektr module was launched by a Proton rocket on 20 May 1995. Docking with the Mir complex occurred on 1 July 1995.

In 1997, a Progress tug aborting a docking attempt with Kvant-1's aft docking port, collided with the Spektr module. The collision damaged the solar arrays and resulted in a pressure hull leak.

With air slowly escaping, the crew sealed off the module. An internal spacewalk was later conducted to restore some power connections and to recover some equipment. Cosmonauts were unable to repair the pressure hull leak. The module never again saw regular use.`,
    image: './images/living_in_space/spektr.jpg' // Ensure this path is correct
  },
  {
    id: 'priroda',
    name: 'Priroda',
    description: `Launched on 23 April 1996, the Priroda module docked with the Mir complex on 26 April 1996.

The last major element added to Mir, Priroda included Earth remote sensing equipment.

The Priroda module, initially conceived as a platform for both civilian and military sensors, sat unfinished for several years after the breakup of the Soviet Union. With the start of American participation in the Shuttle-Mir program in the 1990's, plans were made to finish the module. The modules final outfitting, now partially financed with American funds, was geared toward remote sensing.`,
    image: './images/living_in_space/priroda.jpg' // Ensure this path is correct
  },
  {
    id: 'us-docking',
    name: 'US Docking Compartment',
    description: `Launched on STS-74 on 12 November 1995.

The US Docking module, equipped with an androgynous docking port at each end, was fitted to the Kristall module. The docking module increased clearance between a docking shuttle and components of the space station.

Without the extra clearance allowed by the new module, the massive Kristall module would have to be moved from its radial berth to the forward axial port for each shuttle docking.`,
    image: './images/living_in_space/us_docking.jpg' // Ensure this path is correct
  },
  {
    id: 'soyuz',
    name: 'Soyuz-TM',
    description: `Introduced in the mid-1980's, Soyuz-TM would become the primary crew transport vehicle for the Mir space station. Later missions would fly to the International Space Station.

Soyuz-TM replaced the Igla rendezvous system, used on previous Soyuz and Progress spacecraft, with the more capable Kurs system. With an ability to remain docked to a space station for six months, the Soyuz-TM was ideal for supporting long duration missions.

Soyuz-TM 1, an unmanned test flight, occurred in May 1986. The first manned mission, Soyuz-TM-2, was launched to the Mir space station in February 1987. The last mission, Soyuz-TM 34, was launched in April 2002.`,
    image: './images/living_in_space/Soyuz-TM.jpeg' // Ensure this path is correct
  },
  {
    id: 'progress',
    name: 'Progress Spacecraft',
    description: `Limited duration space stations, such as Skylab and several of the early Salyut stations, were launched with all the supplies needed for their planned missions. Stations designed for longer occupation often can not be launched with all supplies on board. Things such as food, water, fuel, spare parts and other items are needed to maintain the station. While crewed spacecraft, such as Soyuz, can carry a limited amount of cargo in addition to crew, it is not nearly enough to support ongoing operations.

The Soviets developed Progress, based on flight proven Soyuz-Ferry technology, as an unmanned supply ship. Not needing to include a crew, several major changes could be made. The descent module was removed completely. In its place was a newly developed tanker module. Fuel stored in tanks, within the tanker module, could be transferred to the space stations fuel tanks. This was accomplished via special propellant line connections incorporated into the docking equipment.

The orbital module was re-configured to allow transport of pressurized cargo. After docking, space station crew members could open the hatch and unload cargo from the orbital module.

While attached to a station, engines on the Progress could be used to adjust the orbit of the entire complex.

At the end of their mission, Progress spacecraft would be filled with trash, undocked from the station, and de-orbited over remote areas of the Pacific ocean.`,
    image: './images/living_in_space/Progress.jpeg' // Ensure this path is correct
  }
];

Modal.setAppElement('#root');

function LivingInSpace() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [highlightedModule, setHighlightedModule] = useState(null);
  const [highlightAll, setHighlightAll] = useState(false);

  const openModal = (module) => {
    setSelectedModule(module);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedModule(null);
  };

  const highlightModule = (moduleId) => {
    setHighlightedModule(moduleId);
  };

  const removeHighlight = () => {
    setHighlightedModule(null);
  };

  const handleTitleMouseOver = () => {
    setHighlightAll(true);
  };

  const handleTitleMouseOut = () => {
    setHighlightAll(false);
  };

  return (
    <section id="living-in-space">
      <h1
        className="living-in-space-title"
        onMouseOver={handleTitleMouseOver}
        onMouseOut={handleTitleMouseOut}
      >
        Mir Space Station
      </h1>
      <p className="mir-description">
        The Mir base module was launched on 20 February 1986. Large expansion modules, launched on Proton rockets, were periodically added to the station. These modules used automated docking techniques developed during the missions of Salyut 6 and 7.

        Crews were launched using Soyuz rockets and capsules. Progress spacecraft, also launched on Soyuz rockets, carried food, fuel, water, and other supplies to the station.

        Starting in July 1995, several American space shuttles docked with the Mir station. Seven American astronauts lived onboard the station for extended periods of time. Shannon Lucid's six month tour was the longest American stay on the station.

        Cosmonauts performed many long duration stays aboard the station. Several spent over one year on the station. Dr. Valeri Polyakov lived aboard the station for a record 438 consecutive days.

        With the International Space Station under construction in the late 1990's, Mir was abandoned. Using progress tugs, Russian controllers were able to re-enter the station over a remote area of the Pacific ocean.

        Operated in orbit for over a decade, the Mir space station proved human outposts could be maintained for extended periods of time.
      </p>
      <div className="living-in-space-content">
        <div className="mir-image">
          <img src={greyscaleImage} alt="Mir Space Station" className="greyscale-image" />
          <img
            src={moduleImage}
            alt="Mir Space Station"
            className={`color-image ${highlightAll ? 'highlighted-all' : ''} ${highlightedModule ? 'highlighted-module' : ''}`}
            id={`highlight-${highlightedModule}`}
          />
        </div>
        <div className="module-list">
          <p className="hover-instructions">
            Mouse over components to see their location<br/>


            Click for more information !
          </p>
          <ul>
            {modules.map((module) => (
              <li key={module.id}>
                <a
                  href="#!"
                  onMouseOver={() => highlightModule(module.id)}
                  onMouseOut={removeHighlight}
                  onClick={() => openModal(module)}
                >
                  {module.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Module Details">
        {selectedModule && (
          <div className="react-modal-content">
            <h2>{selectedModule.name}</h2>
            <img src={selectedModule.image} alt={selectedModule.name} className="module-image" />
            <p>{selectedModule.description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
      <MirEVA /> 
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Module Details">
        {selectedModule && (
          <div className="react-modal-content">
            <h2>{selectedModule.name}</h2>
            <img src={selectedModule.image} alt={selectedModule.name} className="module-image" />
            <p>{selectedModule.description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default LivingInSpace;
