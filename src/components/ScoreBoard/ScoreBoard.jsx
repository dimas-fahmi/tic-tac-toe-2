import React, { useEffect } from "react";
import useGameContext from "../../lib/hooks/useGameContext";

function ScoreBoard() {
  // Get Scores from GameContext
  const { score } = useGameContext();

  return (
    <div className="flex justify-between antialiased valorax">
      <div className="flex items-center justify-center flex-grow border-2 border-quaternary rounded-l-xl text-quinary">
        <h1>TEAM X</h1>
      </div>
      <div className="flex text-2xl text-primary">
        <div className="p-2 border-2 bg-quaternary border-quaternary min-w-[55px] text-center">
          {score.x}
        </div>
        <div className="p-2 border-2 bg-septenary border-septenary min-w-[55px] text-center">
          {score.o}
        </div>
      </div>
      <div className="flex items-center justify-center flex-grow border-2 border-septenary rounded-r-xl text-septenary">
        <h1>TEAM O</h1>
      </div>
    </div>
  );
}

export default ScoreBoard;
