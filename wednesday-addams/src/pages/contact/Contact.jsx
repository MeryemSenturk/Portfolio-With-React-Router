import React from "react";
import "./Contact.css"
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <main className="contact">
        <h2>Contact Me ...</h2>
        <div className="contact__list">
          <div className="contact__item">
            <i className="fas fa-envelope"></i> Email
            <div className="text-secondary">wednesday@nevermoreacademy.edu</div>
          </div>
          <div className="contact__item">
            <i className="fas fa-mobile-alt"></i> Phone
            <div className="text-secondary">+40 (571) 360-1234</div>
          </div>
          <div className="contact__item">
            <i className="fas fa-map-marker-alt"></i> Address
            <div className="text-secondary">
              Strada Zamorei 1, Bușteni 105500, Romania
            </div>
          </div>
        </div>
      </main>

      <footer className="middle">
        <div className="social-icons">
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
        <div className="copyright">&copy; Copyright 2023</div>
      </footer>
    </>
  );
};

export default Contact;
