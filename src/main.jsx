import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// CSS Initializations
import "./css/directives.css";
import "./css/style.css";
import "./css/fonts.css";
import { GameContextProvider } from "./lib/GameContext";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <GameContextProvider>
    <App />
  </GameContextProvider>
);
