import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import styles from './MoonRace.module.css';
import JohnGlennPage from './JohnGlenn';
import Gemini from './Gemini';
import Apollo1 from './Apollo1';
import Apollo4 from './Apollo4';
import Apollo8 from './Apollo8';
import Apollo11 from './Apollo11';
import Apollo13 from './Apollo13';
import Apollo17 from './Apollo17';

const DirectAscent = () => (
  <div>
    <h2>Direct Ascent</h2>
    <p>Direct ascent is a method of landing a spacecraft on the Moon or another planetary surface directly, without first assembling the vehicle in Earth orbit or carrying a separate landing vehicle into orbit around the target body. It was proposed as the first method to achieve a crewed lunar landing in the United States Apollo program but was rejected because it would have required developing a prohibitively large launch vehicle.</p>
    <img src="./Figures/Direct_Ascent.jpg" alt="Direct Ascent Concept" />
  </div>
);

const EarthOrbitRendezvous = () => (
  <div>
    <h2>Earth Orbit Rendezvous</h2>
    <p>Earth Orbit Rendezvous (EOR) involves launching two rockets into Earth orbit, refueling and assembling the spacecraft, and then taking the entire craft to the Moon.</p>
    <img src="./Figures/Eart_orbit_randevouz.jpg" alt="Earth Orbit Rendezvous Concept" />
  </div>
);

const LunarOrbitRendezvous = () => (
  <div>
    <h2>Lunar Orbit Rendezvous</h2>
    <p>Lunar Orbit Rendezvous (LOR) involves launching one rocket towards lunar orbit and landing a small lander on the lunar surface while the remaining spacecraft stayed in orbit.</p>
    <img src="./Figures/Lunar_orbit_randevouz.jpg" alt="Lunar Orbit Rendezvous Concept" />
  </div>
);

const ApolloEvolution = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const navigate = useNavigate();

  const toggleCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    } else {
      setSelectedCategory(category);
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

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const renderStrategy = () => {
    switch (selectedStrategy) {
      case 'Direct Ascent':
        return <DirectAscent />;
      case 'Earth Orbit Rendezvous':
        return <EarthOrbitRendezvous />;
      case 'Lunar Orbit Rendezvous':
        return <LunarOrbitRendezvous />;
      default:
        return null;
    }
  };

  return (
    <div className={`App ${styles.whiteText}`}>
      <section id="apollo-evolution">
        <div className={styles.introduction}>
          <p>
            The story of America's journey to the Moon began with a sense of humiliation and urgency. In the late 1950s and early 1960s, the Soviet Union achieved several firsts in space exploration, including launching the first satellite, Sputnik, and sending the first human, Yuri Gagarin, into space. These feats were significant technological and ideological victories for the USSR, causing great embarrassment and a sense of urgency within the United States.
          </p>
          <p>
            The American space program initially faced several setbacks, but John F. Kennedy's pivotal speech at Rice University in 1962 galvanized public support and led to significant investment in NASA's Apollo program. This speech set a clear goal for the United States: to land a man on the Moon and return him safely to Earth before the end of the decade.
          </p>
          <p>
            The journey began with early missions like John Glenn's orbit around the Earth and the Gemini program, which laid the groundwork for the Apollo missions. The culmination of these efforts was the historic Apollo 11 mission, where Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon. The Apollo program continued with several more missions, each contributing valuable knowledge and experience, until the final Apollo 17 mission in 1972.
          </p>
          <p>
            This section also explores NASA's approach to the Moon landing, highlighting different strategies considered and ultimately chosen for the historic mission.
          </p>
        </div>
        <h1 className={`${styles.apollo} ${styles.clickable}`} onClick={() => toggleCategory('Us Humiliation')}>
          Us Humiliation and John F Kennedy for the mission
        </h1>
        {selectedCategory === 'Us Humiliation' && (
          <div className="details">
            <h2>What Happened</h2>
            <p>
              In the late 1950s and early 1960s, the space race between the USA and the USSR was in full swing. The Soviet Union had several firsts, including the first satellite (Sputnik) and the first human in space (Yuri Gagarin). These achievements were seen as significant technological and ideological victories for the USSR, causing great embarrassment and a sense of urgency within the United States.
            </p>
            <h2>Why the US People Felt Humiliated</h2>
            <p>
              The success of the Soviet space program was a stark contrast to the initial failures of the American space program. This was seen as a direct challenge to American technological superiority and global leadership. The inability to match Soviet accomplishments in space made many Americans feel that the US was losing the Cold War.
            </p>
            <h2>Why is This Speech Important</h2>
            <p>
              John F. Kennedy's speech at Rice University on September 12, 1962, was a pivotal moment in the space race. It set a clear goal for the United States to land a man on the Moon and return him safely to Earth before the end of the decade. This speech galvanized public support and led to significant investment in NASA's Apollo program.
            </p>
            <h2>Favorite Speech</h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8ygoE2YiHCs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <h1 className={`${styles.apollo} ${styles.clickable}`} onClick={() => toggleCategory('Apollo Evolution')}>
          Evolution Of the Apollo and Moon missions
        </h1>
        {selectedCategory === 'Apollo Evolution' && (
          <div className={styles.module}>
            <h2>Select a Mission</h2>
            <ul className={styles.missionList}>
              <li className={styles.clickable} onClick={() => toggleSubcategory('j-glenn')}>John Glenn</li>
              <li className={styles.clickable} onClick={() => toggleSubcategory('gemini')}>Gemini</li>
              <li className={styles.clickable} onClick={() => toggleSubcategory('apollo1')}>Apollo 1</li>
              <li className={styles.clickable} onClick={() => toggleSubcategory('apollo4')}>Apollo 4</li>
              <li className={styles.clickable} onClick={() => toggleSubcategory('apollo8')}>Apollo 8</li>
              <li className={styles.clickable} onClick={() => toggleSubcategory('apollo11')}>Apollo 11</li>
              <li className={styles.clickable} onClick={() => toggleSubcategory('apollo13')}>Apollo 13</li>
              <li className={styles.clickable} onClick={() => toggleSubcategory('apollo17')}>Apollo 17</li>
            </ul>
            {selectedSubcategory === 'j-glenn' && <JohnGlennPage />}
            {selectedSubcategory === 'gemini' && <Gemini />}
            {selectedSubcategory === 'apollo1' && <Apollo1 />}
            {selectedSubcategory === 'apollo4' && <Apollo4 />}
            {selectedSubcategory === 'apollo8' && <Apollo8 />}
            {selectedSubcategory === 'apollo11' && <Apollo11 />}
            {selectedSubcategory === 'apollo13' && <Apollo13 />}
            {selectedSubcategory === 'apollo17' && <Apollo17 />}
          </div>
        )}

        <h1 className={`${styles.apollo} ${styles.clickable}`} onClick={() => toggleCategory('Lunar Landing Decision')}>
          NASA Decides on Lunar Orbit Rendezvous for Moon Landing
        </h1>
        {selectedCategory === 'Lunar Landing Decision' && (
          <div className="details">
            <p>
              Landing a man on the moon and safely returning him to Earth before the end of the decade came down to choosing the best strategy.
            </p>
            <p>
              President John F. Kennedy in his historic message to a joint session of Congress on May 25, 1961, declared,
              "...I believe this nation should commit itself to achieving the goal, before this decade is out, of landing a man on the Moon and returning him safely to the Earth."
            </p>
            <h2>Strategies</h2>
            <ul>
              <li className={styles.clickable} onClick={() => setSelectedStrategy('Direct Ascent')}>Direct Ascent</li>
              <li className={styles.clickable} onClick={() => setSelectedStrategy('Earth Orbit Rendezvous')}>Earth Orbit Rendezvous</li>
              <li className={styles.clickable} onClick={() => setSelectedStrategy('Lunar Orbit Rendezvous')}>Lunar Orbit Rendezvous</li>
            </ul>
            {renderStrategy()}
          </div>
        )}

        <div className={styles.navigationButtons}>
          <button onClick={() => handleNavigate('/')} style={{ justifyContent: 'flex-start' }}>
            <FontAwesomeIcon icon={faRocket} /> Back to Moon Race
          </button>
          <button onClick={() => handleNavigate('/rocket-missions')}>
            <FontAwesomeIcon icon={faRocket} /> Go to Rocket Missions
          </button>
        </div>
      </section>
    </div>
  );
};

export default ApolloEvolution;
