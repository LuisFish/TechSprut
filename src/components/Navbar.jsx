import {} from "../styles/navbar.css"

import {Component} from "react";

import Logo from "../assets/icons/logo.png"

class Navbar extends Component {

  state={clicked: false};
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render (){
  return (
    <header className="header-navbar">
    <div className="nav-logo">
      <a href="#inicio">
        <img src={Logo} alt="logo" />
        <p>TechSprout</p>
      </a>
    </div>
    <div className="sections">
      <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
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

    <div id="mobile" onClick={this.handleClick}>
      <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>

  </header>
  )
  
}
}

export default Navbar;
