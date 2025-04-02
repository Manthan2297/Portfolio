import React from "react";
import "./index.css";
import Home from "./routes/home";
import Project from "./routes/project";
import Contact from "./routes/contact";
import About from "./routes/about";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
// Path: src/App.js
// Compare this snippet from src/components/Projects.js:
//       <p className="section-subheading"> Check out some of my projects</p>
//       <section className="project-section">
//         <div className="project-content">
//           <div className="project-info">
//             <div className="project-number-box">
//               <span className="project-number">{`0${currentIndex + 1}`}</span>
//             </div>
//             <h2 className="project-title">{projects[currentIndex].title}</h2>
//             <p className="project-description">
//               {projects[currentIndex].description}
