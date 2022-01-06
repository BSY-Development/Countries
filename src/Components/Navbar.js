import React, { useState } from 'react';
import '../Styles/navbar.css';
import lightMode from '../images/moon.svg';
import darkMode from '../images/moon-outline.svg';

function Navbar() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  const [mode, setMode] = useState(isDarkMode ? lightMode : darkMode);
  
  const changeMode = () => {
    if (mode === lightMode) {
      localStorage.setItem('darkMode', 'false');
      setMode(darkMode);
    } else {
      localStorage.setItem('darkMode', 'true');
      setMode(lightMode);
    }
  }

  return (
    <nav className={`navbar-css ${isDarkMode && 'dark-mode-bg1'}`}>
      <h2 className='navbar-txt'>Where in the world?</h2>
      
      <button className={`dark-btn ${isDarkMode && 'dark-mode-bg1'}`} onClick={ changeMode }>
        <img className={ `moon-css ${isDarkMode && 'dark-mode-moon'}` }  src={ mode } alt='Dark Mode' />
          Dark Mode
      </button>
    </nav>
  )
}

export default Navbar;
