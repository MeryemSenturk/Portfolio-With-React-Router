import React from "react";
import "./Contact.css";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaMobile,
  FaMap,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <main className="contact">
        <h2>Contact Me ...</h2>
        <div className="contact__list">
          <div className="contact__item">
            <FaEnvelope className="fas fa-envelope"></FaEnvelope> Email
            <div className="text-secondary">wednesday@nevermoreacademy.edu</div>
          </div>
          <div className="contact__item">
            <FaMobile className="fas fa-mobile-alt"></FaMobile> Phone
            <div className="text-secondary">+40 (571) 360-1234</div>
          </div>
          <div className="contact__item">
            <FaMap className="fas fa-map-marker-alt"></FaMap> Address
            <div className="text-secondary">
              Strada Zamorei 1, Bușteni 105500, Romania
            </div>
          </div>
        </div>
      </main>

      <footer className="middle">
        <div className="contact-social-icons">
          <a href="#">
            <FaTwitter className="fab fa-twitter fa-2x"></FaTwitter>
          </a>
          <a href="#">
            <FaFacebook className="fab fa-facebook"></FaFacebook>
          </a>
          <a href="#">
            <FaInstagram className="fab fa-instagram fa-2x"></FaInstagram>
          </a>
          <a href="#">
            <FaGithub className="fab fa-github fa-2x"></FaGithub>
          </a>
        </div>
        <div className="contact-copyright">&copy; Copyright 2023</div>
      </footer>
    </>
  );
};

export default Contact;
