import React from "react";
import {} from "../styles/us.css";
import laura from "../assets/img/laura.jpg";

function Us() {
  return (
    <section id="us">
      <div className="head">
        <h1>Nosotros</h1>
      </div>
      <div className="container">
        <div className="left">
          <h3>Mision</h3>
          <p>
            Empoderar a las pequeñas y medianas empresas para que logren un
            crecimiento sostenible a través de soluciones web innovadoras y
            accesibles.
          </p>
        </div>
        <div className="right">
          <h3>Vision</h3>
          <p>
            Convertirnos en un socio de confianza para empresas en todo el
            mundo, siendo reconocidos por nuestra habilidad para transformar
            ideas en experiencias digitales excepcionales.
          </p>
        </div>
      </div>
      <div className="container-2">
        <div className="personal">
          <img src={laura} alt="LauraGomez" />
          <div>
            <h3>Laura Gomez</h3>
            <p>CEO & Desarrolladora Web Full Stack</p>
          </div>
        </div>
        <div className="personal">
          <img src={laura} alt="LauraGomez" />
          <div>
            <h3>Laura Gomez</h3>
            <p>CEO & Desarrolladora Web Full Stack</p>
          </div>
        </div>
        <div className="personal">
          <img src={laura} alt="LauraGomez" />
          <div>
            <h3>Laura Gomez</h3>
            <p>CEO & Desarrolladora Web Full Stack</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Us;
