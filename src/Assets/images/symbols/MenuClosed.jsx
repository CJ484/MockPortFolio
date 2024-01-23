const MenuClosed = ({ theme }) => {
  const lightTheme = "#004C93";
  const darkTheme = "#E6EBF0";
  const color = theme === "light" ? lightTheme : darkTheme;

  const toggleMenu = () => {
    console.log("click");
    const overlay = document.querySelector(".overlay-content");
    overlay.classList.toggle("active");
  };

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggleMenu}
    >
      <path
        d="M3 12H21"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 6H21"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 18H21"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MenuClosed;
