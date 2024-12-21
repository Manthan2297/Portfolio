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
