import React from "react";
import { ResetGameButton } from "../Buttons/Buttons";

function NavBar() {
  return (
    <div className="flex items-center justify-between">
      <div className="label">
        <h1 className="text-4xl text-quaternary valorax">TIC TAC TOE</h1>
      </div>
      <div className="actions">
        <ResetGameButton />
      </div>
    </div>
  );
}

export default NavBar;
