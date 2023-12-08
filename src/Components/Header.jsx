import React, { useState, useEffect } from "react";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import styles from "../styles/header.module.css";
import moon from '/img/moon.svg'
import sun from '/img/sun.svg'

const Header = () => {
  //changing the mode using state
  const [darkMode, setDarkMode] = useState(true);

  function toggleMode() {
    setDarkMode(!darkMode);
  }

  //using swithTheme utility to change mode
  useEffect(() => {
    ThemeSwitcher(darkMode);
  }, [darkMode]);

  return (
    <header>
      <nav>
        <h2>devFinder</h2>
        <div className={styles.mode} onClick={toggleMode}>
          <h5>{darkMode ? 'Light' : 'Dark'}</h5>
          <img src={darkMode ? sun : moon} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
