import React from 'react'
import "./Projects.css"
import project1 from "../../assets/img/project-1.jpg";
import project2 from "../../assets/img/project-2.jpg";
import project3 from "../../assets/img/project-3.jpg";
import project4 from "../../assets/img/project-4.jpg";
import project5 from "../../assets/img/project-5.jpg";
import project6 from "../../assets/img/project-6.jpg";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    //? PROJECT MAIN
    <>
      <div className="projects__bio-image">
        <h1>My Projects</h1>
      </div>

      <main className="projects">
        <div className="projects__items">
          <div className="projects__item">
            <img src={project1} alt="My Project" />
          </div>

          <div className="projects__item">
            <img src={project2} alt="My Project" />
          </div>
          <div className="projects__item">
            <img src={project3} alt="My Project" />
          </div>
          <div className="projects__item">
            <img src={project4} alt="My Project" />
          </div>

          <div className="projects__item">
            <img src={project5} alt="My Project" />
          </div>
          <div className="projects__item">
            <img src={project6} alt="My Project" />
          </div>
        </div>
      </main>

      <footer className="vertical">
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

export default Projects