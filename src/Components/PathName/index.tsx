import { useLocation } from "react-router-dom";
import "./PathName.scss";

export default function PathName() {
    const currentPath = useLocation().pathname;

    const handleDisplayPath = () => {
        if (currentPath === "/") {
          return <span><b>Marta Nosowka.</b></span>;
        } else if (currentPath === "/portfolio") {
          return <span>Marta Nosowka. / Portfolio / <b>All works</b></span>; 
        } else if (currentPath === "/portfolio/DwieSiostry") {
          return <span>Marta Nosowka. / Porfolio / <b>Dwie Siostry</b></span>;
        } else if (currentPath === "/portfolio/Przekroj") {
          return <span>Marta Nosowka. / Portfolio / <b>Przekroj</b></span>;
        } else if (currentPath === "/contact") {
          return <span>Marta Nosowka. / <b>Contact</b></span>;
        }
      };

  return (
    <div className="pathName">
      <span className="pathName__title">{handleDisplayPath()}</span>
    </div>
  );
}