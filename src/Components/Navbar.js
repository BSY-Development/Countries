import React, { useContext, useState } from 'react';
import MyContext from '../context/context';
import '../Styles/navbar.css';
import lightMode from '../images/moon.svg';
import idarkMode from '../images/moon-outline.svg';

function Navbar() {
  const { darkMode, setDarkMode } = useContext(MyContext);
  const [moon, setMoon] = useState(darkMode ? lightMode : idarkMode);
  
  const changeMode = () => {
    if (moon === lightMode) {
      localStorage.setItem('darkMode', 'false');
      setDarkMode(false);
      setMoon(idarkMode);
    } else {
      localStorage.setItem('darkMode', 'true');
      setDarkMode(true);
      setMoon(lightMode);
    }
  }

  return (
    <nav className={`navbar-css ${darkMode && 'dark-mode-bg1'}`}>
      <h2 className='navbar-txt'>Where in the world?</h2>
      
      <button className={`dark-btn ${darkMode && 'dark-mode-bg1'}`} onClick={ changeMode }>
        <img className={ `moon-css ${darkMode && 'dark-mode-moon'}` }  src={ moon } alt='Dark Mode' />
          Dark Mode
      </button>
    </nav>
  )
}

export default Navbar;
