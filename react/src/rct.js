import React from "react";
import ReactDOM from "react-dom/client";
import App from "./rct";
import "./style.css"; // Tailwind CSS styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);