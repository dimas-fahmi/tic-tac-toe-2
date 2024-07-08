import React from "react";
import {
  NavBar,
  ControlBar,
  StatusBar,
  ScoreBoard,
  GameBoard,
  Footer,
} from "./components";

function App() {
  return (
    <div className="max-w-[450px] px-4 py-6 mx-auto flex flex-col gap-4">
      {/* Navigation Bar */}
      <NavBar />
      {/* Control Bar */}
      <ControlBar />
      {/* Status Bar */}
      <StatusBar />
      {/* Score Board */}
      <ScoreBoard />
      {/* Game Board */}
      <GameBoard />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
