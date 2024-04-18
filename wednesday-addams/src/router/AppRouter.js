import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact"
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer';



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact " element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default AppRouter