import { useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import reducer from "./reducer";
import { evaluator } from "./services";
import { ACTIONS } from "./actions";

const GameContext = createContext();

const initialValues = {
  xNext: true,
  moves: {
    x: [],
    o: [],
  },
  score: {
    x: 0,
    o: 0,
  },
  boardState: Array(9).fill(null),
  AI: false,
  winner: null,
};

const GameContextProvider = ({ children }) => {
  // STATES & LOGICS
  const [{ xNext, moves, score, boardState, AI, winner }, dispatch] =
    useReducer(reducer, initialValues);

  // Helper State
  const [helper, setHelper] = useState(true);

  // Helper Toggler
  const helper_toggler = () => setHelper(!helper);

  //   AI Toggler Handler
  const ai_toggler = () => {
    dispatch({ type: ACTIONS.TOGGLE_AI });
  };

  return (
    <GameContext.Provider
      value={{
        xNext,
        moves,
        score,
        winner,
        boardState,
        AI,
        helper,
        ai_toggler,
        helper_toggler,
        dispatch,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };
