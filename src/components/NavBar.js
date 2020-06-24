import React from "react";
import { Link, useLocation } from "react-router-dom";

import "../css/NavBar.css";

const navPages = [
  { title: "Java Guide", path: "/java/" },
  { title: "FRC Guide", path: "/frc/" },
  { title: "Hardware", path: "/hardware/" }
];

export default function(props) {
  const loc = useLocation();
  const activePath = loc.pathname + (loc.pathname.endsWith("/") ? "" : "/");

  return (
    <nav className="mb-3">
      <div
        className="nav nav-pills nav-fill justify-content-center"
        id="nav-tab"
        role="tablist"
      >
        {navPages.map(page => (
          <Link
            className={
              "nav-item nav-link text-white" +
              (page.path === activePath ? " active" : "")
            }
            key={page.path}
            to={page.path}
          >
            {page.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
