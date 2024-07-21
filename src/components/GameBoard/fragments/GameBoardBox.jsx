import React from "react";
import clsx from "clsx";
import useGameContext from "../../../lib/hooks/useGameContext";
import { ACTIONS } from "../../../lib/actions";
import { IoMdMove } from "react-icons/io";

// GameBoardBox component that represents a single box in the game board
function GameBoardBox({ boxId, boxHolder }) {
  // Destructure needed values from the game context
  const { xNext, winner, dispatch, moves, helper } = useGameContext();

  // Get the last moves from both players
  const lastX = moves.x[2];
  const lastO = moves.o[2];

  // Function to handle advancing the game state
  const advanceDispatchHandler = () => {
    dispatch({
      type: ACTIONS.ADVANCE,
      boxId: boxId,
      newHolder: xNext ? "x" : "o",
      winner: winner,
    });
  };

  // Determine the class names for the main div
  const boxClassNames = clsx(
    "relative flex items-center justify-center flex-grow border-2 basis-[100%]",
    {
      // Class for the Winner's boxes
      "scale-105 rounded-xl duration-1000": winner && winner === boxHolder,
      // Class for the rest of the box when the winner found
      "scale-75 duration-1000 rounded-xl opacity-30":
        winner && winner !== boxHolder,
      // Fade the moving boxes
      "opacity-50":
        helper &&
        !winner &&
        (moves.x.length > 2 || moves.o.length > 2) &&
        (boxId === lastX || boxId === lastO),
      // Disabled the empty box when Winner is Found
      "bg-tertiary border-tertiary text-tertiary hover:bg-tertiary hover:text-tertiary":
        !boxHolder && winner,
      // Box Style if the Holder is X
      "bg-quaternary border-quaternary": boxHolder === "x",
      // Box Style if the Holder is O
      "bg-septenary border-septenary text-primary": boxHolder === "o",
      // Placeholder for X's turn
      "border-quaternary hover:bg-quaternary": !boxHolder && xNext,
      // Placeholder for O's turn
      "border-septenary hover:bg-septenary text-primary": !boxHolder && !xNext,
      // General Style for all boxes
      "group cursor-pointer transition-all": true,
    }
  );

  // Determine the class names for the inner div
  const innerDivClassNames = clsx(
    "absolute inset-0 flex items-center justify-center text-5xl valorax",
    { "opacity-0": !boxHolder, "group-hover:opacity-100 transition-all": true }
  );

  // Determine the class names for the move icon span
  const moveIconSpanClassNames = clsx(
    "absolute flex items-center justify-center text-sm top-2 right-2",
    {
      hidden: !helper,
      "opacity-100": boxId === lastX || boxId === lastO,
      "opacity-0": boxId !== lastX && boxId !== lastO,
    }
  );

  return (
    <div className={boxClassNames} onClick={advanceDispatchHandler}>
      <div className={innerDivClassNames}>
        {/* Display X or O based on the state */}
        {!boxHolder ? (xNext ? "X" : "O") : boxHolder.toUpperCase()}
        {winner ? (
          ""
        ) : moves.x.length > 2 || moves.o.length > 2 ? (
          <span className={moveIconSpanClassNames}>
            <IoMdMove />
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default GameBoardBox;
