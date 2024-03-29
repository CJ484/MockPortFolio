import { Link, useLocation } from "react-router-dom";
import ThemeSwitch from "../../ThemeSwitch";
import { twitter, instagram, youtube } from "../../../Assets/images/symbols";
import { MenuClose, MenuOpen } from "../../../Assets/images/symbols";
import "../../../Assets/styles/components/mobileMenu.scss";

const NavMobile = ({ theme, setTheme }) => {
  const currentPath = useLocation().pathname;

  const handleDisplayPath = () => {
    console.log(currentPath);
   if (currentPath === "/portfolio") {
      return (
        <h1>
          / Portfolio / <b>All works</b>
        </h1>
      );
    } else if (currentPath === "/portfolio/Przekroj") {
      return (
        <h1>
          / Portfolio / <b>Przekroj</b>
        </h1>
      );
      } else if (currentPath === "/portfolio/DwieSiostry") {
      return (
        <h1>
          / Porfolio / <b>Dwie Siostry</b>
        </h1>
      );
    } else {
      return;
    }
  };
  const activeMenuItem = () => {
    const navItems = document.querySelectorAll(".route_item");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItems.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
      });
    });
    document.querySelector(".overlay-content").classList.remove("active");
  };

  const toggleSubMenu = () => {
    const subMenu = document.querySelector(".overlay-content__subMenu");
    subMenu.classList.toggle("active");
    document
      .querySelector(".overlay-content__menu_item:nth-child(4)")
      .classList.toggle("topUnderLine");
  };

  return (
    <>
      <div className="overlay-content">
        <div className="overlay-content_header">
          <ThemeSwitch theme={theme} setTheme={setTheme} />
          <MenuOpen theme={theme} />
        </div>
        <div className="overlay-content__menu">
          <h1 className="overlay-content_title">Menu</h1>
          <div className="overlay-content_nav">
            <div className="overlay-content__menu_item route_item">
              <Link onClick={activeMenuItem} to="/about">
                About
              </Link>
            </div>
            <div className="overlay-content__menu_item route_item">
                <Link to="/portfolio" onClick={() => {activeMenuItem(); toggleSubMenu();}}>Portfolio</Link>

            </div>
            <div className="overlay-content__subMenu">
              <div className="overlay-content__subMenu_item route_item">
                <Link onClick={activeMenuItem} to="/portfolio/DwieSiostry">
                  Dwie Siostry
                </Link>
              </div>
              <div className="overlay-content__subMenu_item route_item">
                <Link onClick={activeMenuItem} to="/portfolio/Przekroj">
                  Prezkroj
                </Link>
              </div>
            </div>
            <div className="overlay-content__menu_item route_item">
              <Link onClick={activeMenuItem} to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="overlay-content__social">
          <img
            className="overlay-content__social_item"
            src={instagram}
            alt="instagram logo"
          />
          <img
            className="overlay-content__social_item"
            src={twitter}
            alt="twitter logo"
          />
          <img
            className="overlay-content__social_item"
            src={youtube}
            alt="youtube logo"
          />
        </div>
      </div>
      <div className="nav_Mobile">
        <div className="nav_Mobile_header">
          <h1 className="nav_Mobile_header_title">Marta Nosowka.</h1>
          <MenuClose theme={theme} />
        </div>
        <div className="nav_Mobile_header_path">{handleDisplayPath()}</div>
      </div>
    </>
  );
};

export default NavMobile;
