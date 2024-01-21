import { Link } from "react-router-dom";
import { lightDown } from "../../../Assets/images/symbols";
import "../../../Assets/styles/Nav.scss";

const NavDesktop = () => {
  const handleMenu = () => {
    document.querySelector(".menu_button").classList.toggle("active");
    document.querySelector(".nav_desktop_menu").classList.toggle("active");
  };

  const handleSubMenu = () => {
    const lastRouteItem = document.querySelector(".route_item:nth-child(4)");
    lastRouteItem.classList.toggle("topUnderLine");
    document.querySelector(".subMenu_title").classList.toggle("active");
    document.querySelector(".subMenu_projects").classList.toggle("active");
  };

  const activeMenuItem = () => {
    const navItems = document.querySelectorAll(
      ".route_item",
      ".subMenu_projects_item"
    );
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItems.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
      });
    });
  };

  const subMenuList = {
    projects: [
      {
        name: "All works",
        path: "/",
      },
      {
        name: "Dwie Siostry",
        path: "/",
      },
      {
        name: "Przekroj",
        path: "/",
      },
    ],
  };

  return (
    <div className="nav_desktop">
      <h1 className="nav_desktop_title">
        <b>Marta Nosowka</b>
      </h1>

      <div className="menu_button underLine" onClick={handleMenu}>
        <h1>Menu</h1>
        <img className="" src={lightDown} alt="Menu Down" />
      </div>

      <div className="nav_desktop_menu">
        <div className="route_item" onClick={activeMenuItem}>
          <Link to="/about">About</Link>
        </div>

        <div className="subMenu_title menu_button" onClick={handleSubMenu}>
          <h1>Projects</h1>
          <img className="" src={lightDown} alt="Menu Down" />
        </div>

        <div className="subMenu_projects">
          {subMenuList.projects.map((item, index) => (
            <div
              key={index}
              className="subMenu_projects_item route_item"
              onClick={activeMenuItem}
            >
              <Link to={item.path}>{item.name}</Link>
            </div>
          ))}
        </div>

        <div className="route_item" onClick={activeMenuItem}>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default NavDesktop;
