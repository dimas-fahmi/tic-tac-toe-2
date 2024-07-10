import { useEffect } from "react";
import { core } from "./core";

// Evaluator | Return null if there's no winner, return "x"|"o" if a is winner found.
function evaluator(boardState) {
  // Win Condition based on box index [horizonal, vertical and diagonals (bottom left to top right, bottom right to top left)]
  const scannerInstruction = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal | Bottom left to Top right
    [2, 4, 6],
    // Diagonal | Bottom Right to Top left
    [8, 4, 0],
  ];

  //   Loop to scann the BoardState | Return if either x or o is win
  for (let i = 0; i < scannerInstruction.length; i++) {
    // Get Box Index from each win combination
    let [a, b, c] = scannerInstruction[i];
    // If there's a 3 (o|x) in a row (a=b=c) return the winner
    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      return boardState[a];
    }
  }
  //   Return null if there's no winner found
  return null;
}

// boardStateUpdater
function boardState_method(boardState, boxId, newHolder) {
  // Push the new move to boardState
  boardState[boxId] = newHolder;
  // Return the altered boardState
  return boardState;
}

// moves_controller
// {moves: {x: [], o: []}}
function moves_method(boardState, moves, boxId, newHolder) {
  // Check if the player has 3 moves already
  if (moves[newHolder].length > 2) {
    // Cut the move from boardState
    boardState[moves[newHolder][2]] = null;
    // Cut the last move from player's move
    moves[newHolder].pop();
  }

  // Assign the New Move;
  moves[newHolder] = [boxId, ...moves[newHolder]];

  // Return the altered State
  return { boardState: boardState, moves: moves };
}

// Advance Controller

// advance_controller | Simple push and change the turn
function advance_controller(state, boxId, newHolder) {
  // Copy and Altered BoardState
  let newBoardState = boardState_method(state.boardState, boxId, newHolder);

  // Moves Logic [return altered boardState and altered moves]
  const newStates = moves_method(newBoardState, state.moves, boxId, newHolder);

  // Assign the new BoardState
  newBoardState = newStates.boardState;

  // Assign the new moves
  let newMoves = newStates.moves;

  // Get Winner from Evaluator
  let winner = evaluator(newBoardState);

  // If there's a winner after push, indent the winner's score
  let newScore = state.score;
  if (winner !== null) {
    newScore[winner] = newScore[winner] + 1;
  }

  // Return the New State
  return {
    ...state,
    boardState: newBoardState,
    moves: newMoves,
    xNext: !state.xNext,
    winner: winner,
  };
}

// ai_response_controller
function ai_response_controller(humanResponse) {
  const aiResponse = core(humanResponse.boardState, "o");
  return advance_controller(humanResponse, aiResponse, "o");
}

// pvc_controller | Player vs Computer
function pvc_controller(state, boxId, newHolder) {
  if (state.xNext) {
    // Push the Human's move
    let humanResponse = advance_controller(state, boxId, newHolder);

    // Check if there's a winner return if true
    if (evaluator(humanResponse.boardState) !== null) return humanResponse;

    // Get Ai Response based on human Response
    let aiResponse = ai_response_controller(humanResponse);

    // Return the New State from AI Response
    return aiResponse;
  } else {
    // Get Ai Response based on human response
    let aiResponse = ai_response_controller(state.boardState, boxId, newHolder);
    // Return The new state
    return aiResponse;
  }
}

export { evaluator, advance_controller, pvc_controller };
