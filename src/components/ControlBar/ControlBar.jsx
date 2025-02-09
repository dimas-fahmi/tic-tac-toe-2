import React from "react";
import {
  ComputerGameButton,
  DonateGameButton,
  HelperGameButton,
  SoundGameButton,
} from "../Buttons/Buttons";

function ControlBar() {
  return (
    <div className="flex items-center justify-around gap-2 px-4 py-2 border-2 rounded-xl border-quaternary">
      <SoundGameButton />
      <ComputerGameButton />
      <HelperGameButton />
      <DonateGameButton />
    </div>
  );
}

export default ControlBar;
