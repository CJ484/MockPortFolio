import { AboutMe, Contact, Portfolio } from "@/pages";
import { portfolioImagesWeb, DwieSiostryWeb, PrzekrojWeb, portfolioImagesMobile, DwieSiostryMobile, PrzekrojMobile }
  from "@/const/imageArrays";

const routes = {
  home: {
    path: "/",
    element: <AboutMe />,
    exact: true,
  },
  portfolio: {
    path: "/portfolio",
    element: <Portfolio images={portfolioImagesMobile} />,
    exact: true,
  },
  DwieSiostry: {
    path: "/portfolio/DwieSiostry",
    element: <Portfolio images={DwieSiostryMobile} />,
    exact: true,
  },
  Przekroj: {
    path: "/portfolio/Przekroj",
    element: <Portfolio images={PrzekrojMobile} />,
    exact: true,
  },
  contact: {
    path: "/contact",
    element: <Contact />,
    exact: true,
  },
};

export default routes;