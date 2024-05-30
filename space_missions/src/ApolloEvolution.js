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

const ApolloEvolution = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
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

  return (
    <div className={`App ${styles.whiteText}`}>
      <section id="apollo-evolution">
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
              <li className={styles.clickable}>Direct Ascent</li>
              <li className={styles.clickable}>Earth Orbit Rendezvous</li>
              <li className={styles.clickable}>Lunar Orbit Rendezvous</li>
            </ul>
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
