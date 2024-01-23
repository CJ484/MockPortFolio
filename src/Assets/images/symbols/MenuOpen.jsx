const MenuOpen = ({ theme }) => {
  const lightTheme = "#004C93";
  const darkTheme = "#E6EBF0";
  const color = theme === "light" ? lightTheme : darkTheme;

  const toggleMenu = () => {
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
        d="M18 6L6 18"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default MenuOpen;
