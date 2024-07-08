import { ACTIONS } from "./actions";

// Cut Move Function
function cutMove(boardState, moves) {
  boardState[moves[moves.length - 1]] = null;
  moves.pop();
  return { boardState: boardState, moves: moves };
}

const reducer = (state, { type, boxId, newHolder, winner, initialValues }) => {
  let updatedBoardState = state.boardState.slice(),
    updatedMovesX = state.moves.x.slice(),
    updatedMovesO = state.moves.o.slice(),
    updatedScore,
    updatedMoves,
    newStates;

  switch (type) {
    case ACTIONS.ADVANCE:
      // Check if there's already a winner | Do nothing if true
      if (winner !== null) return state;

      // check if board is already owned | Do nothing if true
      if (state.boardState[boxId] !== null) return state;

      // Update the boardState (push the new holder to board)
      updatedBoardState[boxId] = newHolder;

      // Moves Logic to implement the Unlimited move
      let cutMoveResult;
      if (newHolder === "x") {
        // Cut the moves and remove it from boardState if longer than 2
        if (updatedMovesX.length > 2) {
          // Get the new UpdatedBoardState and Move after the cut
          cutMoveResult = cutMove(updatedBoardState, updatedMovesX);
          // Assign the new UpdatedBoardState after the cut
          updatedBoardState = cutMoveResult.boardState;
          // Assign the new Moves after the cut
          updatedMovesX = cutMoveResult.moves;
        }
        // Push the new boxId to moves
        updatedMovesX = [boxId, ...updatedMovesX];
      } else if (newHolder === "o") {
        // Cut the moves and remove it from boardState if longer than 2
        if (updatedMovesO.length > 2) {
          // Get the new UpdatedBoardState and Move after the cut
          cutMoveResult = cutMove(updatedBoardState, updatedMovesO);
          // Assign the new UpdatedBoardState after the cut
          updatedBoardState = cutMoveResult.boardState;
          // Assign the new Moves after the cut
          updatedMovesO = cutMoveResult.moves;
        }
        // Push the new boxId to moves
        updatedMovesO = [boxId, ...updatedMovesO];
      }

      updatedMoves = { x: updatedMovesX, o: updatedMovesO };

      console.log(updatedMoves);

      //   Return The New State
      return {
        ...state,
        xNext: !state.xNext,
        boardState: updatedBoardState,
        moves: updatedMoves,
      };
    case ACTIONS.UPDATE_SCORE:
      // Indent the new score from based on the winner
      if (winner === "x") {
        updatedScore = {
          x: state.score.x + 1,
          o: state.score.o,
        };
      } else if (winner === "o") {
        updatedScore = {
          x: state.score.x,
          o: state.score.o + 1,
        };
      }

      //   Return The New State
      return {
        ...state,
        score: updatedScore,
      };
    case ACTIONS.NEXT_ROUND:
      //   Check if there's a winner | Return if there's no winner
      if (winner === null) return state;

      // RESET BoardState to initial value
      updatedBoardState = Array(9).fill(null);

      //   Reset Moves to Initial Valuse
      updatedMoves = { x: [], o: [] };

      //   Return The New State
      return {
        ...state,
        boardState: updatedBoardState,
        moves: updatedMoves,
      };
    case ACTIONS.TOGGLE_AI:
      // Return The New State with Initial Values and Toggle the AI
      return {
        ...state,
        boardState: initialValues.boardState,
        xNext: initialValues.xNext,
        score: initialValues.score,
        AI: !state.AI,
      };
  }

  return state;
};

export default reducer;
