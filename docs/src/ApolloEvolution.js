import React from 'react';
import styles from './MoonRace.module.css';

const ApolloEvolution = () => (
  <section id="apollo-evolution">
    <h1 className={styles.apollo}> Apollo Evolution </h1>
    <div className={styles.module}>
      <p className={styles.apolloText}>
        Apollo 11 was the spaceflight that first landed humans on the Moon. Commander Neil Armstrong and lunar module pilot Buzz Aldrin formed the American crew that landed the Apollo Lunar Module Eagle on July 20, 1969, at 20:17 UTC. Armstrong became the first person to step onto the lunar surface six hours and 39 minutes later on July 21 at 02:56 UTC; Aldrin joined him 19 minutes later. They spent about two and a quarter hours together outside the spacecraft, and they collected 47.5 pounds (21.5 kg) of lunar material to bring back to Earth. Command module pilot Michael Collins flew the Command Module Columbia alone in lunar orbit while they were on the Moon's surface. Armstrong and Aldrin spent 21 hours, 36 minutes on the lunar surface at a site they named Tranquility Base before lifting off to rejoin Columbia in lunar orbit.
      </p>
      <div className={styles.boxDiagram}>
        <div className={styles.imageI1}></div>
        <div className={styles.imageI2}></div>
        <div className={styles.imageI3}></div>
        <div className={styles.imageI4}></div>
      </div>
    </div>
  </section>
);

export default ApolloEvolution;
