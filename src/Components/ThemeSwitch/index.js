import {Sun, Moon } from '../../Assets/images/symbols';
import '../../Assets/styles/ThemeSwitch.scss'
import React, { useState } from 'react';
import '../../Assets/styles/ThemeSwitch.scss';
const ThemeSwitch = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.querySelector('.themeSwitch').classList.toggle('dark');
  };

  return (
    <div className="themeSwitch">
      <Sun theme={theme}/>
      <div className="switch" onClick={toggleTheme}>
        <input type="checkbox" id="switch" checked={theme === 'dark'} />
        <span className="slider round dark"></span>
      </div>
      <Moon theme={theme} />
    </div>
  );
};

export default ThemeSwitch;
