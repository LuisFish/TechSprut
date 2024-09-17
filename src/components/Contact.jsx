import React from "react";
import {} from "../styles/contact.css";
import iconLocation from "../assets/icons/location.svg";
import iconTel from "../assets/icons/telephone.svg";
import iconInsta from "../assets/icons/instagram.png";
import iconFace from "../assets/icons/facebook.png";
import iconX from "../assets/icons/gorjeo.png";
import contactImg from "../assets/img/contact-women.jpg"
export default function Contact() {
  return (
    <div className="container-contact">
      {/* FORM */}
      <div className="container-form">
        <h2>Contactanos</h2>
        <form id="form" action="submit">
          <label htmlFor="">
            Name
            <input placeholder="Enter your name" type="text" name="name" id="name"  />
          </label>
          <label htmlFor="">
            Email
            <input placeholder="Enter your email" type="email" name="email" id="email" />
          </label>
          <label htmlFor="">
            Message
            <textarea name="message" id="message">

            </textarea>
          </label>
          <input id="button" type="submit" value="ENVIAR" />
        </form>
      </div>

      {/* FOLLOW-US */}
      <div className="container-follow">
        <h2>SÍGANOS</h2>
        <div className="follow-us">
          <img
            src={iconFace}
            width={50}
            height={50}
            alt="icon-face"
            className="rounded-full"
          />
          <img
            src={iconInsta}
            width={50}
            height={50}
            alt="icon-insta"
            className="rounded-full"
          />
          <img
            src={iconX}
            width={50}
            height={50}
            alt="icon-x"
            className="rounded-full"
          />
        </div>
        <h2>UBICACION</h2>
        <div className="flex">
          <img src={iconLocation} alt="icon-location" />
          <span>123 Tech Avenue, Suite 400, San Francisco, CA 94107, USA.</span>
        </div>
        <div className="flex">
          <img src={iconTel} alt="icon-tel" />
          <span>800 123 542</span>
        </div>
      </div>

      {/* IMG */}
      <div className="container-img flex">
        <img src={contactImg} alt="contact woman"/>
        <div>
          <img src="" alt="logo"/>
          <span>Ask a Question Here</span>
          <img src="" alt="arrow yellow"/>
        </div>
      </div>
    </div>
  );
}
