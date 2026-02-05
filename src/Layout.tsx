import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading, Header } from "./Components";
import routes from "@/const/routes";
import "@/styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout() {
  
  return (
    <div className="layout">
      <Header />

      <main className="pagesContainer">
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
      </main>
    </div>
  );
}
