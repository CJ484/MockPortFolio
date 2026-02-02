import '@/styles/components/ThemeSwitch.scss';

export default function ThemeSwitch() {
  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  //   document.querySelector(".App")?.classList.toggle('darkMode');
  // };

  return (
    <div className="themeSwitch">
      <img src="/symbols/sun.svg" alt="Light mode" />
      <div className="switch">
        <input type="checkbox" id="switch" checked={true} readOnly />
        <span className="slider round"></span>
      </div>
      <img src="/symbols/moon.svg" alt="Dark mode" />
    </div>
  );
};

