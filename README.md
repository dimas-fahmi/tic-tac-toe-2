# TIC TAC TOE WITH MINIMAX

Practice useReducer and React Context with TIC TAC TOE.
Improvement from my first project with React : [TIC TAC TOE](https://github.com/dimas-fahmi/tic-tac-toe-2)

- Better State Management (The older one is using useState, spaghetti code!) Learned a Lot since then
- Better Code Structure (No more Props Drilling, useContext is in the home!)
- Design for Mobile (doesn't need to be responsive as the UI is cut to 450px wide)
- Sound Effect & Background Music (Planned)
- AI Opponent with Minimax Algorithm (Planned) perhaps will broke the game as AI will always make the perfect moves

# UNLIMITED MOVES

TIC TAC TOE is a solved game so the outcome can be predicted from any position if both players play perfectly. To overcome this we need to implement the UNLIMITED MOVES, if player have 3 moves already the last moves will be deleted so the board will never filled up and the Game will continue as long as the winner still not found.

It will not change the game as a Solved Game but will make the game harder as the players need to remember all their moves thus mistakes will happened more often than the original rule. As the game will continue forever untill one of the player make a mistakes win condition is mandatory so there will be no draw condition.
