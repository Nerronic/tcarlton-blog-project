import ParticlesBg from "particles-bg";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';

import AboutMe from "./Components/AboutMe/aboutme.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Home from "./Components/Home/Home.jsx";
import Projects from "./Components/Projects/projects.jsx";
import Videos from "./Components/Videos/Videos.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";


function App() {
  return(
    <>
    <NavBar/>
    <Router>
      <div>
        <ParticlesBg type="cobweb" color="blue" bg={true} num={200}/>
        <Routes>
        <Route path="/" element={<AboutMe />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />}/>
          <Route path="/videos" element={<Videos />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App
