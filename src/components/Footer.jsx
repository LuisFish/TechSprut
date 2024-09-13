import React from "react";
import faceIco from "../assets/icons/facebook.png";
import instaIco from "../assets/icons/instagram.png";
import xIco from "../assets/icons/gorjeo.png";
import youIco from "../assets/icons/youtube.png";
import mapsIco from "../assets/icons/maps-and-location.png";
import telIco from "../assets/icons/telefono.png";
import mailIco from "../assets/icons/email.png";

import {} from "../styles/footer.css";

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
          {/* <hr className="vert" /> */}
          <div className="termins">
            <h4>SIGUENOS</h4>
            <div className="iconos">
              <p><img src={faceIco} alt="facebook" /></p>
              <p><img src={instaIco} alt="instagram" /></p>
              <p><img src={xIco} alt="x" /></p>
              <p><img src={youIco} alt="youtube" /></p>
            </div>
          </div>
          {/* <hr className="vert" /> */}

          <div className="termins">
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
        </div>

        <hr></hr>

        <div className="content-down">
          <div className="content-down-copy">
            <p>© {new Date().getFullYear()}, TechSprut | All Right Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
