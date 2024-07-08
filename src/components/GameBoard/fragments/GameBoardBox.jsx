import React from "react";
import useGameContext from "../../../lib/hooks/useGameContext";
import { ACTIONS } from "../../../lib/actions";

function GameBoardBox({ boxId, boxHolder }) {
  // GET dispatch, xNext, winner from GameContext
  const { xNext, winner, dispatch } = useGameContext();

  // dispatch handler for Advancing the Game (push the new holder to state)
  const advanceDispatchHandler = () => {
    dispatch({
      type: ACTIONS.ADVANCE,
      boxId: boxId,
      newHolder: xNext ? "x" : "o",
      winner: winner,
    });
  };

  return (
    <div
      className={`relative flex items-center justify-center flex-grow border-2 basis-[100%] ${
        !boxHolder
          ? winner
            ? "bg-tertiary border-tertiary text-tertiary hover:bg-tertiary hover:text-tertiary"
            : ""
          : ""
      } ${
        boxHolder
          ? boxHolder === "x"
            ? "bg-quaternary border-quaternary"
            : "bg-septenary border-septenary text-primary"
          : xNext
          ? "border-quaternary hover:bg-quaternary"
          : "border-septenary hover:bg-septenary text-primary"
      } group cursor-pointer transition-all`}
      onClick={advanceDispatchHandler}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center text-5xl valorax ${
          !boxHolder && "opacity-0"
        } group-hover:opacity-100 transition-all`}
      >
        {!boxHolder ? (xNext ? "X" : "O") : boxHolder.toUpperCase()}
      </div>
    </div>
  );
}

export default GameBoardBox;
