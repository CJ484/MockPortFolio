import {Sun, Moon } from '../../Assets/images/symbols';
import '../../Assets/styles/ThemeSwitch.scss'
import React from 'react';
import '../../Assets/styles/ThemeSwitch.scss';
const ThemeSwitch = ({theme, setTheme}) => {

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.querySelector(".App").classList.toggle('darkMode');
  };
  

  return (
    <div className="themeSwitch">
      <Sun theme={theme}/>
      <div className="switch" onClick={toggleTheme}>
        <input type="checkbox" id="switch" checked={theme === 'light'} />
        <span className="slider round"></span>
      </div>
      <Moon theme={theme} />
    </div>
  );
};

export default ThemeSwitch;
