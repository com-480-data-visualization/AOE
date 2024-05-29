import React from 'react';
import styles from './MoonRace.module.css';

const Header = () => (
  <header className={styles.titleRow}>
    <h1 className={styles.mainTitle}>
      <a href="index.html" style={{ color: 'inherit', textDecoration: 'none' }}>Space Exploration's Geopolitical Narratives</a>
    </h1>
  </header>
);

export default Header;
