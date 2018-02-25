import React from "react";
import { Link } from "react-router-dom";
const Navpills = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
    </li>
    <li className={window.location.pathname === "/about" ? "active" : ""}>
      <Link to="/about">About</Link>
    </li>
    <li className={window.location.pathname === "/digital" ? "active" : ""}>
      <Link to="/digital">Digital</Link>
    </li>
    <li className={window.location.pathname === "/printmaking" ? "active" : ""}>
      <Link to="/printmaking">Printmaking</Link>
    </li>
      <li className={window.location.pathname === "/collage" ? "active" : ""}>
      <Link to="/collage">Collage</Link>
    </li>
    <li className={window.location.pathname === "/films" ? "active" : ""}>
      <Link to="/films">Films</Link>
    </li>
  </ul>;
export default Navpills;