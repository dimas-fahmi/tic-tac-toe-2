import React from "react";
import GameBoardBox from "./fragments/GameBoardBox";
import useGameContext from "../../lib/hooks/useGameContext";

function GameBoard() {
  // GET boardState from context
  const { boardState } = useGameContext();

  return (
    <div className="flex flex-col min-h-[382px] gap-2">
      <div className="flex flex-grow gap-2 [&>*:nth-child(1)]:rounded-tl-xl [&>*:nth-child(3)]:rounded-tr-xl">
        <GameBoardBox boxId={0} boxHolder={boardState[0]} />
        <GameBoardBox boxId={1} boxHolder={boardState[1]} />
        <GameBoardBox boxId={2} boxHolder={boardState[2]} />
      </div>
      <div className="flex flex-grow gap-2">
        <GameBoardBox boxId={3} boxHolder={boardState[3]} />
        <GameBoardBox boxId={4} boxHolder={boardState[4]} />
        <GameBoardBox boxId={5} boxHolder={boardState[5]} />
      </div>
      <div className="flex flex-grow gap-2 [&>*:nth-child(1)]:rounded-bl-xl [&>*:nth-child(3)]:rounded-br-xl">
        <GameBoardBox boxId={6} boxHolder={boardState[6]} />
        <GameBoardBox boxId={7} boxHolder={boardState[7]} />
        <GameBoardBox boxId={8} boxHolder={boardState[8]} />
      </div>
    </div>
  );
}

export default GameBoard;
