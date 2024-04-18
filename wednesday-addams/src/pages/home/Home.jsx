import React from "react";
import "./Home.css";
import {FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <main className="home">
        <h2>Hi! My Name Is</h2>
        <h1 className="home__name">
          Wednesday <span className="home__name--last">Addams</span>
        </h1>
        <h2>Full Stack Web Developer</h2>
      </main>

      <footer className="horizontal">
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

export default Home;
