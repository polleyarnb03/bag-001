import React from "react";
import ReactDOM from "react-dom/client";  // ✅ Use "react-dom/client" instead of "react-dom"

//import store from "./store/store";
import App from "./App";

// ✅ Use createRoot() instead of render()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <App />
 
);
