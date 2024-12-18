import React from "react"; // Capitalize React
import "./index.css";
import Home from "./routes/home"; // Capitalize component names
import Project from "./routes/project";
import Contact from "./routes/contact";
import About from "./routes/about";

import { BrowserRouter as Route, Routes } from "react-router-dom"; // Use Routes instead of Switch

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
