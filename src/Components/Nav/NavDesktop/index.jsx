import { Link } from "react-router-dom";
import { lightDown } from "../../../Assets/images/symbols";
import "../../../Assets/styles/Nav.scss";

const NavDesktop = () => {
  const handleMenu = () => {
    document.querySelector(".menu_button").classList.toggle("active");
    document.querySelector(".nav_desktop_menu").classList.toggle("active");
  };

  const handleSubMenu = () => {
    document.querySelector(".subMenu").classList.toggle("active");
    document.querySelector(".subMenu_projects").classList.toggle("active");
  };

  const activeMenuItem = () => {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItems.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
      });
    });
  };

  return (
    <div className="nav_desktop">
      <h1 className="underLine"><b>Marta Nosowka</b></h1>
      <div className="menu_button underLine" onClick={handleMenu}>
        <h1>Menu</h1>
        <img className='' src={lightDown} alt="Menu Down" />
      </div>
      <div className="nav_desktop_menu">
        <div className="underLine">
            <Link className="nav-item" onClick={activeMenuItem} to="/about">About</Link>
        </div>
        <div className="subMenu menu_button underLine" onClick={handleSubMenu}>
            <h1>Projects</h1>
            <img  className="" src={lightDown} alt="Menu Down" />
        </div>
        <div className="subMenu_projects">
          <Link className="nav-item" onClick={activeMenuItem} to="/">All works</Link>
          <Link className="nav-item" onClick={activeMenuItem} to="/">Dwie Siostry</Link>
          <Link className="nav-item" onClick={activeMenuItem} to="/">Przekroj</Link>
        </div>
        <div className="underLine">
            <Link className="nav-item" onClick={activeMenuItem} to="/contact">Contact</Link>
        </div>
      </div>


    </div>
  );
};

export default NavDesktop;
