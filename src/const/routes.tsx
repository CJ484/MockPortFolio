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
    element: <Portfolio mobileImages={portfolioImagesMobile} webImages={portfolioImagesWeb} />,
    exact: true,
  },
  DwieSiostry: {
    path: "/portfolio/DwieSiostry",
    element: <Portfolio mobileImages={DwieSiostryMobile} webImages={DwieSiostryWeb} />,
    exact: true,
  },
  Przekroj: {
    path: "/portfolio/Przekroj",
    element: <Portfolio mobileImages={PrzekrojMobile} webImages={PrzekrojWeb} />,
    exact: true,
  },
  contact: {
    path: "/contact",
    element: <Contact />,
    exact: true,
  },
};

export default routes;