// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
// Import the main App component
import App from "./App.jsx";
// Import styles
import "./index.css";
// Use ReactDOM.createRoot to render the App component into the 'root' element
// in strict mode
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap the App component with React.StrictMode
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
