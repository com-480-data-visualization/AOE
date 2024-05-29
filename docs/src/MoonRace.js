import React from 'react';
import styles from './MoonRace.module.css';

const MoonRace = () => (
  <section className={styles.moonRace} id="urss-vs-usa">
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
      <h2 style={{ color: 'white' }}>URSS vs USA: The Moon Race</h2>
    </div>
    <div className={styles.boxTimeline}>
      <div className={styles.ligne_urss}></div>
      <div className={styles.ligne_usa}></div>
      <div className={styles.jointure}></div>
      <div className={styles.ligne_world}></div>
      <div className={`${styles.rond} ${styles.r1}`}><h6>1957</h6></div>
      <div className={`${styles.rond} ${styles.r2}`}><h6>1959</h6></div>
      <div className={`${styles.rond} ${styles.r3}`}><h6>1960</h6></div>
      <div className={`${styles.rond} ${styles.r4}`}><h6>1961</h6></div>
      <div className={`${styles.rond} ${styles.r5}`}><h6>1962</h6></div>
      <div className={`${styles.rond} ${styles.r6}`}><h6>1963</h6></div>
      <div className={`${styles.rond} ${styles.r6_1}`}><h6>1963</h6></div>
      <div className={`${styles.rond} ${styles.r7}`}><h6>1965</h6></div>
      <div className={`${styles.rond} ${styles.r7_1}`}><h6>1965</h6></div>
      <div className={`${styles.rond} ${styles.r8}`}><h6>1966</h6></div>
      <div className={`${styles.rond} ${styles.r9}`}><h6>1967</h6></div>
      <div className={`${styles.rond} ${styles.r10}`}><h6>1968</h6></div>
      <div className={`${styles.rond} ${styles.r11}`}><h6>1969</h6></div>
      <div className={`${styles.rond} ${styles.r12}`}><h6>1970</h6></div>
      <div className={`${styles.rond} ${styles.r13}`}><h6>1971</h6></div>
      <div className={`${styles.rond} ${styles.r13_1}`}><h6>1971</h6></div>
      <div className={`${styles.rond} ${styles.r14}`}><h6>1973</h6></div>
      <div className={`${styles.rond} ${styles.r15}`}><h6>1975</h6></div>
      <div className={`${styles.rond} ${styles.r16}`}><h6>1976</h6></div>
      <div className={`${styles.rond} ${styles.r17}`}><h6>1979</h6></div>
      <div className={`${styles.rond} ${styles.r18}`}><h6>1981</h6></div>
      <div className={`${styles.rond} ${styles.r19}`}><h6>1986</h6></div>
      <div className={`${styles.rond} ${styles.r20}`}><h6>1989</h6></div>
      <div className={`${styles.rond} ${styles.r21}`}><h6>1990</h6></div>
      <div className={`${styles.rond} ${styles.r22}`}><h6>1995</h6></div>
      <div className={`${styles.rond} ${styles.r23}`}><h6>2000</h6></div>
      <div className={`${styles.rond} ${styles.r24}`}><h6>2001</h6></div>
      <div className={`${styles.rond} ${styles.r25}`}><h6>2004</h6></div>
      <div className={`${styles.rond} ${styles.r26}`}><h6>2005</h6></div>
      <div className={`${styles.rond} ${styles.r27}`}><h6>2010</h6></div>
      <div className={`${styles.rond} ${styles.r28}`}><h6>2011</h6></div>
      <div className={`${styles.rond} ${styles.r29}`}><h6>2014</h6></div>
      <div className={`${styles.rond} ${styles.r30}`}><h6>2015</h6></div>
      <div className={`${styles.rond} ${styles.r31}`}><h6>2019</h6></div>

      <div className={`${styles.box} ${styles.b1}`}>
        <h3>Oct. 4, 1957 : Sputnik 1</h3> 
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First artificial Earth satellite
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b1_1}`}>
        <h3>Nov. 3, 1957 : Sputnik 2</h3> 
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First animal launched into space
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b2}`}>
        <h3>Sept. 14, 1959 : Luna 2</h3> 
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First Spacecraft to hard-land on another celestial object (the Moon)
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b2_1}`}>
        <h3>Oct. 7, 1959 : Luna 3</h3> 
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First pictures of the far side of the Moon
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b3}`}>
        <h3>April 1, 1960 : TIROS 1</h3> 
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First applications satellite launched
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b3_1}`}>
        <h3>Aug. 11, 1960 : Discoverer 13</h3> 
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First recovery of a payload from Earth orbit
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b4}`}>
        <h3>April 12, 1961 : Vostok 1</h3> 
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First human to orbit Earth
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b5}`}>
        <h3>Dec. 14, 1962 : Mariner 2</h3> 
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First data returned from another planet (Venus)
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b6}`}>
        <h3>June 16, 1963 : Vostok 6</h3> 
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First woman in space
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b6_1}`}>
        <h3>July 26, 1963 : Syncom 2</h3> 
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First satellite to operate in geostationary orbit
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b7}`}>
        <h3>March 18, 1965 : Voskhod 2</h3> 
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First space walk
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b7_1}`}>
        <h3>July 14, 1965 : Mariner 4</h3> 
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft pictures of Mars
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b8}`}>
        <h3>Feb. 3, 1966 : Luna 9</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to soft-land on the Moon
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b9}`}>
        <h3>April 24, 1967 : Soyuz 1</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First death during a space mission
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b10}`}>
        <h3>Dec. 24, 1968 : Apollo 8</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First humans to orbit the Moon
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b11}`}>
        <h3>July 20, 1969 : Apollo 11</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First human to walk on the Moon
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b12}`}>
        <h3>Sept. 24, 1970 : Luna 16</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First return of lunar samples by an unmanned spacecraft
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b12_1}`}>
        <h3>Dec. 15, 1970 : Venera 7</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First soft landing on another planet (Venus)
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b13}`}>
        <h3>April 19, 1971 : Salyut 1</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First space station launched
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b13_1}`}>
        <h3>Nov. 13, 1971 : Mariner 9</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to orbit another planet (Mars)
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b13_2}`}>
        <h3>Dec. 2, 1971 : Mars 3</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to soft-land on Mars
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b14}`}>
        <h3>Dec. 3, 1973 : Pioneer 10</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to fly by Jupiter
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b15}`}>
        <h3>July 17, 1975 : Apollo-Soyuz</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First international docking in space
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b16}`}>
        <h3>July 20, 1976 : Viking 1</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First pictures transmitted from the surface of Mars
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b17}`}>
        <h3>Sept. 1, 1979 : Pioneer 11</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to fly by Saturn
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b18}`}>
        <h3>April 12–14, 1981 : Columbia</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First reusable spacecraft launched and returned from space
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b19}`}>
        <h3>Jan. 24, 1986 : Voyager 2</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to fly by Uranus
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b19_1}`}>
        <h3>March 13, 1986 : Giotto</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to make a close flyby of a comet nucleus
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b20}`}>
        <h3>Aug. 24, 1989 : Voyager 2</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to fly by Neptune
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b21}`}>
        <h3>April 25, 1990 : Hubble</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First large optical space telescope launched
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b22}`}>
        <h3>Dec. 7, 1995 : Galileo</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to orbit Jupiter
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b23}`}>
        <h3>Nov. 2, 2000 : ISS</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First resident crew to occupy the International Space Station
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b23_1}`}>
        <h3>Feb. 14, 2000 : NEAR</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to orbit an asteroid
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b24}`}>
        <h3>Feb. 12, 2001 : NEAR</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to land on an asteroid
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b25}`}>
        <h3>June 21, 2004 : SpaceShipOne</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First privately funded manned spacecraft to achieve suborbital flight above 100 km (62 miles)
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b25_1}`}>
        <h3>July 1, 2004 : Cassini-Huygens</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to orbit Saturn
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b26}`}>
        <h3>Jan. 14, 2005 : Huygens probe</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to land on the moon of a planet other than Earth (Saturn's moon Titan)
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b27}`}>
        <h3>June 13, 2010 : Hayabusa</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to return to Earth with samples from an asteroid
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b28}`}>
        <h3>March 17, 2011 : Messenger</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to orbit Mercury
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b29}`}>
        <h3>August 6, 2014 : Rosetta</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to orbit a comet
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b29_1}`}>
        <h3>November 12, 2014 : Philae</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to land on a comet
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b30}`}>
        <h3>March 6, 2015 : Dawn</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First spacecraft to orbit a dwarf planet (Ceres)
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b30_2}`}>
        <h3>December 21, 2015 : Falcon 9</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First rocket stage to return to its launch site
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b31}`}>
        <h3>January 3, 2019 : Chang'e 4</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            First landing on the Moon's far side
          </div>
        </button>
      </div>
      <div className={`${styles.box} ${styles.b31_1}`}>
        <h3>January 1, 2019 : New Horizons</h3>
        <button className={styles.button}>i
          <div className={styles.infobulle}>
            Farthest object (2014 MU69) explored by a spacecraft
          </div>
        </button>
      </div>
    </div>
  </section>
);

export default MoonRace;
