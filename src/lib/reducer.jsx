import { ACTIONS } from "./actions";
import { pvc_controller, advance_controller } from "./services";
import { randomizer } from "./core";

const reducer = (state, { type, boxId, newHolder, winner, initialValues }) => {
  let updatedBoardState = state.boardState.slice(),
    updatedScore,
    updatedMoves;

  switch (type) {
    case ACTIONS.ADVANCE:
      // ---------- VALIDATION ----------

      //  - Check if there's a winner | Do Nothing if True
      if (winner !== null) return state;

      // - Check if board is owned | Do Nothing if True
      if (state.boardState[boxId] !== null) return state;

      // ---------- Controller Director ----------
      // [run the controller according to game mode]
      if (state.AI) {
        // Player vs Computer Mode
        return pvc_controller(state, boxId, newHolder);
      } else {
        // Player vs Player Mode
        return advance_controller(state, boxId, newHolder);
      }
    case ACTIONS.NEXT_ROUND:
      //   Check if there's a winner | Return if there's no winner
      if (winner === null) return state;

      // RESET BoardState to initial value
      updatedBoardState = Array(9).fill(null);

      //   Reset Moves to Initial Valuse
      updatedMoves = { x: [], o: [] };

      switch (state.AI) {
        case true:
          // Return if it's the player's turn
          if (state.xNext) {
            //   Return The New State
            return {
              ...state,
              boardState: updatedBoardState,
              moves: updatedMoves,
              winner: null,
            };
          }

          // Get AI Response
          let aiResponse = randomizer(updatedBoardState, "o");

          // set customState
          let customState = {
            xNext: false,
            boardState: updatedBoardState,
            score: state.score,
            moves: updatedMoves,
            AI: true,
            winner: null,
            mute: state.mute,
          };

          // Assign the AI's move to boardState and Proceeds
          return advance_controller(customState, aiResponse, "o");
        case false:
          //   Return The New State
          return {
            ...state,
            boardState: updatedBoardState,
            moves: updatedMoves,
            winner: null,
          };
        default:
          throw new Error("AI State is invalid at NEXT_ROUND action.");
      }
    case ACTIONS.TOGGLE_AI:
      // Return The New State with Initial Values and Toggle the AI
      return {
        boardState: Array(9).fill(null),
        xNext: true,
        score: { x: 0, o: 0 },
        moves: { x: [], o: [] },
        AI: !state.AI,
        winner: null,
        mute: state.mute,
      };
    case ACTIONS.RESET_GAME:
      // Return The New State with Initial Values and Toggle the AI
      return {
        boardState: Array(9).fill(null),
        xNext: true,
        score: { x: 0, o: 0 },
        moves: { x: [], o: [] },
        AI: state.AI,
        winner: null,
        mute: state.mute,
      };
    case ACTIONS.SOUND_TOGGLE:
      return {
        ...state,
        mute: !state.mute,
      };
  }

  return state;
};

export default reducer;
