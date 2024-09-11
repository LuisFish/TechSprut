import React from "react";
import {} from "../styles/navbar.css"
import Logo from "../assets/icons/logo.png"

export default function Navbar() {
  return (
    <header className="header-navbar">
    <div className="nav-logo">
      <a href="#inicio">
        <img src={Logo} alt="logo" />
        <p>TechSprout</p>
      </a>
    </div>
    <div className="sections">
      <ul className="ul-menu">
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#servicios">Servicios</a>
        </li>
        <li>
          <a href="#nosotros">Nosotros</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </div>
  </header>
  )
  
}
