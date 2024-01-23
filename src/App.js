import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, AboutMe, Contact, Portfolio } from "./pages";
import { Loading, NavDesktop, NavMobile } from "./Components";
import "./Assets/styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// TODO : Add breadcrumb
// TODO : add two separate slideshows for the different projects

function App() {
  const [theme, setTheme] = useState("light");
  const routes = {
    home: {
      path: "/",
      element: <Home theme={theme} />,
      exact: true,
    },
    about: {
      path: "/about",
      element: <AboutMe theme={theme}/>,
      exact: true,
    },
    portfolio: {
      path: "/portfolio",
      element: <Portfolio theme={theme} />,
      exact: true,
    },
    contact: {
      path: "/contact",
      element: <Contact theme={theme} />,
      exact: true,
    },
  };
  return (
    <div className="App">
      <NavDesktop theme={theme} setTheme={setTheme}/>
      <NavMobile theme={theme} setTheme={setTheme} />

      <div className="currentPage">
        <Routes>
          {Object.values(routes).map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Suspense fallback={<Loading />}>{route.element}</Suspense>
              }
              exact={route.exact}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
