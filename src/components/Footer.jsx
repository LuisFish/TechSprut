import React from "react";
import faceIco from "../assets/icons/facebook.png";
import instaIco from "../assets/icons/instagram.png";
import xIco from "../assets/icons/gorjeo.png";
import youIco from "../assets/icons/youtube.png";
import mapsIco from "../assets/icons/maps-and-location.png";
import telIco from "../assets/icons/telefono.png";
import mailIco from "../assets/icons/email.png";

import {} from '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <div className="content-up">
          <div className="termins">
            <h4>TECHSPROUT</h4>
            <a href="https://www.google.com/">
              <p>Terminos y Condiciones de uso del sitio</p>
            </a>
            <a href="https://www.google.com/">
              <p>Aviso de privacidad</p>
            </a>
            <a href="https://www.google.com/">
              <p>Politica de Privacidad</p>
            </a>
          </div>
          <div className="followus">
            <h4>SIGUENOS</h4>
            <div className="iconos">
              <img src={faceIco} alt="facebook" />
              <img src={instaIco} alt="instagram" />
              <img src={xIco} alt="x" />
              <img src={youIco} alt="youtube" />
            </div>
          </div>
          <div className="info">
            <h4>INFORMACION DE CONTACTO</h4>
            <a href="https://www.google.com/">
              <img src={mapsIco} alt="" />
              <p>123 Tech Avenue, Suite 400, San Francisco, CA 94107, USA.</p>
            </a>
            <a href="https://www.google.com/">
              <img src={telIco} alt="" />
              <p>Tel:+1 (555) 123-4567</p>
            </a>
            <a href="https://www.google.com/">
              <img src={mailIco} alt="" />
              <p>contacto@techsprout.dev</p>
            </a>
          </div>
        </div>
        <div className="content-down">
          <p>© 2024, TechSprut | All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;