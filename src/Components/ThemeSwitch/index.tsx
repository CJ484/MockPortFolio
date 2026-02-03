import { useDarkMode } from 'usehooks-ts';
import { Sun, Moon } from '@/assets/symbols';
import './ThemeSwitch.scss';

export default function ThemeSwitch() {
  const { isDarkMode, toggle } = useDarkMode();

  const handleToggle = () => {
    toggle();
    document.documentElement.classList.toggle('darkMode');
  };

  return (
    <div className="themeSwitch">
      <Sun className="themeSwitch__icon" />
      <div className="themeSwitch__switch">
        <input className="themeSwitch__switch__toggle" type="checkbox" checked={isDarkMode} onClick={handleToggle} />
        <span className="themeSwitch__switch__slider"></span>
      </div>
      <Moon className="themeSwitch__icon" />
    </div>
  );
};

