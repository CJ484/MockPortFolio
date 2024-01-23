import { Link, useLocation } from "react-router-dom";
import ThemeSwitch from '../../ThemeSwitch';
import { LightDown } from "../../../Assets/images/symbols";
import "../../../Assets/styles/Nav.scss";

const NavDesktop = ({theme, setTheme}) => {
  const currentPath = useLocation().pathname;

  const handleDisplayPath = () => {
    if (currentPath === "/") {
      return "Marta Nosowka.";
    } else if (currentPath === "/about") {
      return <h1>Marta Nosowka. / <b>About</b></h1>;
    } else if (currentPath === "/portfolio") {
      return <h1>Marta Nosowka. / Portfolio / <b>All works</b></h1>; 
    } else if (currentPath === "/contact") {
      return <h1>Marta Nosowka. / <b>Contact</b></h1>;
    } else if (currentPath === "/portfolio/DwieSiostry") {
      return <h1>Marta Nosowka. / Porfolio / <b>Dwie Siostry</b></h1>;
    } else if (currentPath === "/portfolio/Przekroj") {
      return <h1>Marta Nosowka. / Portfolio / <b>Przekroj</b></h1>;
    }
  };

  const handleMenu = () => {
    console.log(theme);
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

  const resetMenu = () => {
    document.querySelectorAll(".route_item").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelector(".menu_button").classList.remove("active");
    document.querySelector(".nav_desktop_menu").classList.remove("active");
    document.querySelector(".subMenu_title").classList.remove("active");
    document.querySelector(".subMenu_projects").classList.remove("active");

  };

  const subMenuList = {
    projects: [
      {
        name: "All works",
        path: "/portfolio",
      },
      {
        name: "Dwie Siostry",
        path: "/portfolio/DwieSiostry",
      },
      {
        name: "Przekroj",
        path: "/portfolio/Przekroj",
      },
    ],
  };

  return (
    <div className="nav_desktop">
      <div>
      <h1 className="nav_desktop_title">
        <Link to="/" onClick={resetMenu}>{handleDisplayPath()}</Link>
      </h1>

      <div className="menu_button underLine" onClick={handleMenu}>
        <h1>Menu</h1>
        <LightDown theme={theme}/>
      </div>

      <div className="nav_desktop_menu">
        <div className="route_item" >
          <Link to="/about" onClick={activeMenuItem}>About</Link>
        </div>

        <div className="subMenu_title menu_button" onClick={handleSubMenu}>
          <h1>Portfolio</h1>
          <LightDown theme={theme}/>
        </div>

        <div className="subMenu_projects">
          {subMenuList.projects.map((item, index) => (
            <div
              key={index}
              className="subMenu_projects_item route_item"

            >
              <Link onClick={activeMenuItem} to={item.path}>{item.name}</Link>
            </div>
          ))}
        </div>

        <div className="route_item" >
          <Link onClick={activeMenuItem} to="/contact">Contact</Link>
        </div>
      </div>

      </div>
      <ThemeSwitch theme={theme} setTheme={setTheme}/>
    </div>
  );
};

export default NavDesktop;
