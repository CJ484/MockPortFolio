import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading, NavDesktop, NavMobile } from "./Components";
import routes from "@/const/routes";
import "@/styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// TODO : Add breadcrumb
// TODO : add two separate slideshows for the different projects

type Theme = 'light' | 'dark';

export default function Layout() {
  
  return (
    <div className="layout">
      <NavDesktop />
      <NavMobile />

      <div className="currentPage">
        <Routes>
          {Object.values(routes).map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Suspense fallback={<Loading />}>{route.element}</Suspense>
              }
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}
