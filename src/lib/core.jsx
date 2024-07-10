import { evaluator } from "./services";

function decisionMaker(boardState, holder) {
  // Filter the indices of the null values in the boardState
  let nullIndices = boardState.reduce((acc, val, index) => {
    if (val === null) acc.push(index);
    return acc;
  }, []);

  // If there are no null values, return the original boardState
  if (nullIndices.length === 0) return boardState;

  // Pick a random index from the list of null indices
  let randomIndex = nullIndices[Math.floor(Math.random() * nullIndices.length)];

  // Create a copy of the boardState and update the value at the random index
  let newBoardState = [...boardState];
  newBoardState[randomIndex] = holder;

  return { newBoardState: newBoardState, randomIndex: randomIndex };
}

// Minimax function to evaluate the boardState
function minimax(boardState, depth, isMaximizing, aiPlayer, humanPlayer) {
  const winner = evaluator(boardState);
  if (winner === aiPlayer) return 10 - depth;
  if (winner === humanPlayer) return depth - 10;
  if (!boardState.includes(null)) return 0; // No moves left, draw condition

  if (isMaximizing) {
    let maxEval = -Infinity;
    for (let i = 0; i < boardState.length; i++) {
      if (boardState[i] === null) {
        boardState[i] = aiPlayer;
        let score = minimax(
          boardState,
          depth + 1,
          false,
          aiPlayer,
          humanPlayer
        );
        boardState[i] = null;
        maxEval = Math.max(maxEval, score);
      }
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (let i = 0; i < boardState.length; i++) {
      if (boardState[i] === null) {
        boardState[i] = humanPlayer;
        let score = minimax(boardState, depth + 1, true, aiPlayer, humanPlayer);
        boardState[i] = null;
        minEval = Math.min(minEval, score);
      }
    }
    return minEval;
  }
}

// Function to find the best move for AI
function core(boardState, aiPlayer) {
  let bestMove = -1;
  let bestValue = -Infinity;
  let humanPlayer = aiPlayer === "x" ? "o" : "x";

  for (let i = 0; i < boardState.length; i++) {
    if (boardState[i] === null) {
      boardState[i] = aiPlayer;
      let moveValue = minimax(boardState, 0, false, aiPlayer, humanPlayer);
      boardState[i] = null;

      if (moveValue > bestValue) {
        bestMove = i;
        bestValue = moveValue;
      }
    }
  }
  return bestMove;
}

export { core, decisionMaker };
