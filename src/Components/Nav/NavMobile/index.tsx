import { Link } from "react-router-dom";
import ThemeSwitch from "@/Components/ThemeSwitch";
import { MenuOpen, MenuClose, Instagram, Twitter, Youtube } from '@/assets/symbols';
import "./NavMobile.scss";

export default function NavMobile() {
  const toggleMenu = () => {
    document.querySelector(".navMobile__overlay")?.classList.toggle("active");
  };

  const activeMenuItem = () => {
    const navItems = document.querySelectorAll(".route_item");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItems.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
      });
    });
    toggleMenu();
  };

  return (
    <div className="navMobile">
      <MenuClose onClick={toggleMenu} className="navMobile__menuButton" />
      <div className="navMobile__overlay">
        <div className="navMobile__overlay__header">
          <ThemeSwitch />
          <MenuOpen onClick={toggleMenu} className="navMobile__overlay__menuButton" />
        </div>
        <div className="navMobile__overlay__menu">
          <span className="navMobile__overlay__menu__title">Menu</span>
          <div className="navMobile__overlay__nav">
            <Link className="navMobile__overlay__nav__link route_item" to="/" onClick={activeMenuItem}>About Me</Link>
            <Link className="navMobile__overlay__nav__link route_item" to="/portfolio" onClick={activeMenuItem}>Portfolio</Link>
            <div className="navMobile__overlay__nav__subMenu">
              <Link className="navMobile__overlay__nav__subMenu__link route_item" onClick={activeMenuItem} to="/portfolio/DwieSiostry">
                Dwie Siostry
              </Link>
              <Link className="navMobile__overlay__nav__subMenu__link route_item" onClick={activeMenuItem} to="/portfolio/Przekroj">
                Prezkroj
              </Link>
            </div>
            <Link className="navMobile__overlay__nav__link route_item topUnderLine" onClick={activeMenuItem} to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="navMobile__overlay__social">
          <Instagram className="navMobile__overlay__social__item" />
          <Twitter className="navMobile__overlay__social__item" />
          <Youtube className="navMobile__overlay__social__item" />
        </div>
      </div>
    </div>
  );
};

