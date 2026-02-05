
import { Link } from "react-router-dom";
import { LightDown } from '@/assets/symbols';
import "./NavDesktop.scss";

export default function NavDesktop() {
  const handleMenu = () => {
    document.querySelector(".navDesktop__menuButton")?.classList.toggle("active");
    document.querySelector(".navDesktop__menu")?.classList.toggle("active");
  };

  const handleSubMenu = () => {
    const lastRouteItem = document.querySelector(".navDesktop__menu__item:nth-child(4)");
    lastRouteItem?.classList.toggle("topUnderLine");
    document.querySelector(".navDesktop__menu__subMenuTitle")?.classList.toggle("active");
    document.querySelector(".navDesktop__menu__subMenuProjects")?.classList.toggle("active");
  };

  const activeMenuItem = () => {
    const navItems = document.querySelectorAll(
      ".navDesktop__menu__item, .navDesktop__menu__subMenuProjects__item"
    );
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItems.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
      });
    });
    handleMenu();
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
    <div className="navDesktop">
      <div className="navDesktop__content">
        <div className="navDesktop__menuButton" onClick={handleMenu}>
          <span>Menu</span>
          <LightDown className="navDesktop__menu__icon" />
        </div>
        <div className="navDesktop__menu">
          <div className="navDesktop__menu__item" >
            <Link className="route_item_link" to="/" onClick={activeMenuItem}>About</Link>
          </div>

          <div className="navDesktop__menu__subMenuTitle" onClick={handleSubMenu}>
            <span>Portfolio</span>
            <LightDown className="navDesktop__menu__icon" />
          </div>

          <div className="navDesktop__menu__subMenuProjects">
            {subMenuList.projects.map((item, index) => (
              <div
                key={index}
                className="navDesktop__menu__item"
              >
                <Link onClick={activeMenuItem} to={item.path}>{item.name}</Link>
              </div>
            ))}
          </div>

          <div className="navDesktop__menu__item" >
            <Link onClick={activeMenuItem} to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

