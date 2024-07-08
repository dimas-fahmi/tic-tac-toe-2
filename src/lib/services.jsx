export default function evaluator(boardState) {
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
