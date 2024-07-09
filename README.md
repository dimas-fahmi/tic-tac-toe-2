# TIC TAC TOE WITH MINIMAX

Practice useReducer and React Context with TIC TAC TOE.
Improvement from my first project with React: [TIC TAC TOE](https://github.com/dimas-fahmi/tic-tac-toe)

- Better State Management (The older one used useState, resulting in spaghetti code! I've learned a lot since then.)
- Better Code Structure (No more props drilling; useContext is in the home!)
- Designed for Mobile (doesn't need to be responsive as the UI is set to 450px wide)
- AI Opponent with Minimax Algorithm (the AI will not just pick a random box but will simulate every decision and choose the best one. In other words, the AI will predict the future).
- Sound Effects & Background Music (Planned)

# UNLIMITED MOVES

TIC TAC TOE is a solved game, so the outcome can be predicted from any position if both players play perfectly. To overcome this, we need to implement the UNLIMITED MOVES rule. If a player has 3 moves already, the last move will be deleted, so the board will never fill up, and the game will continue as long as a winner is not found.

This will not change the game as a solved game but will make the game harder as players need to remember all their moves, thus mistakes will happen more often than with the original rule. As the game will continue forever until one of the players makes a mistake, a win condition is mandatory so there will be no draw condition. With this rule, you can use strategies such as making a bait to force the opponent to think you are going to win by placing one block (considering the opponent does not remember all your past moves).

# MINIMAX IMPLEMENTATION

I thought with the Minimax implementation, even with the Unlimited Moves rule, the game would be broken as the AI would keep winning by making perfect decisions. But the result said otherwise: the AI can be defeated, even if it's a hard thing to do. I will analyze my Minimax function further; it needs more analysis.
