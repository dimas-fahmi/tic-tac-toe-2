import { useContext } from "react";
import { GameContext } from "../GameContext";

const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("something's wrong with the Game Context.");
  }
  return context;
};

export default useGameContext;
