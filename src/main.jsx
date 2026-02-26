import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MetricsProvider } from "./context/MetricsContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <MetricsProvider>
      <App />
      </MetricsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

