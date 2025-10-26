import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaDumbbell, FaCalendarCheck, FaHistory, FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="brand-link">Gimnasio</NavLink>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>
      <ul className={`navbar-nav ${menuOpen ? "open" : ""}`}>
        <li className="nav-item">
          <NavLink to="/socios" className="nav-link">
            <FaUser className="icon" /> Socios
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/actividades" className="nav-link">
            <FaDumbbell className="icon" /> Actividades
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/reservas" className="nav-link">
            <FaCalendarCheck className="icon" /> Reservas
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/historial" className="nav-link">
            <FaHistory className="icon" /> Historial
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
