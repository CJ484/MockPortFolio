import { Link } from "react-router-dom";
import ThemeSwitch from "../../ThemeSwitch";
import { twitter, instagram, youtube } from "../../../Assets/images/symbols";
import { MenuClose, MenuOpen } from "../../../Assets/images/symbols";
import "../../../Assets/styles/mobileMenu.scss";

const NavMobile = ({theme}) => {
  const activeMenuItem = () => {
    const navItems = document.querySelectorAll(
      ".route_item"
    );
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItems.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
      });
    });
    document.querySelector(".overlay-content").classList.remove("active");
  };

  const toggleMenu = () => {
    const overlay = document.querySelector(".overlay-content");
    overlay.classList.toggle("active");
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
          <ThemeSwitch />
          <MenuOpen theme={theme} onClick={toggleMenu} />
        </div>
        <div className="overlay-content__menu">
          <h1 className="overlay-content_title">Menu</h1>
          <div className="overlay-content_nav">
            <div className="overlay-content__menu_item route_item">
              <Link onClick={activeMenuItem} to="/about">
                About
              </Link>
            </div>
            <div className="overlay-content__menu_item">
              <h1 onClick={toggleSubMenu}>Portfolio</h1>
            </div>
            <div className="overlay-content__subMenu">
              <div className="overlay-content__subMenu_item route_item">
                <Link onClick={activeMenuItem} to="/portfolio">
                  Dwie Siostry
                </Link>
              </div>
              <div className="overlay-content__subMenu_item route_item">
                <Link onClick={activeMenuItem} to="/portfolio">
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
        <h1>Marta Nosowka.</h1>
        <MenuClose theme={theme} onClick={toggleMenu} />
      </div>
    </>
  );
};

export default NavMobile;
