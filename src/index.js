import React from "react";
import ReactDOM from "react-dom/client"; // Ensure correct import for React 18+
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Create a root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
