import { useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import reducer from "./reducer";
import evaluator from "./services";
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
};

const GameContextProvider = ({ children }) => {
  // STATES & LOGICS
  const [{ xNext, moves, score, boardState, AI }, dispatch] = useReducer(
    reducer,
    initialValues
  );

  //   Winner State
  const [winner, setWinner] = useState(null);

  //   Winner Logics | Fired everytime there's a change to boardState
  useEffect(() => {
    // SetBack winner to null when the next round event fired
    if (boardState.filter((box) => box === null).length > 8) {
      setWinner(null);
      return;
    }

    // SetWinner when winner is found
    const result = evaluator(boardState);
    if (result !== null) {
      setWinner(result);
      dispatch({ type: ACTIONS.UPDATE_SCORE, winner: result });
      return;
    }
  }, [boardState]);

  //   AI Toggler Handler
  const ai_toggler = () => {
    dispatch({ type: ACTIONS.TOGGLE_AI, initialValues: initialValues });
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
        ai_toggler,
        dispatch,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };
