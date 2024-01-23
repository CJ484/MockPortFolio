const LightDown = ({ theme }) => {
  const lightTheme = "#004C93";
  const darkTheme = "#E6EBF0";
  const color = theme === "light" ? lightTheme : darkTheme;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 10L12 16L18 10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LightDown;
