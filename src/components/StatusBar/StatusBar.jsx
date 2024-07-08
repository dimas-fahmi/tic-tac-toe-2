import React from "react";
import { NextRoundButton } from "../Buttons/Buttons";
import { FaComputer } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import useGameContext from "../../lib/hooks/useGameContext";

function StatusBar() {
  const { winner, AI } = useGameContext();

  return (
    <div className="flex items-center justify-between gap-3 p-4 border-2 border-quaternary rounded-xl">
      <div>
        <h1 className="flex items-center gap-3 text-xl valorax text-quaternary">
          STATUS
        </h1>
        <p className="quicksand-regular">
          {!winner ? "START THE GAME" : `${winner.toUpperCase()} WON`}
        </p>
      </div>
      <div>
        {winner ? (
          <NextRoundButton />
        ) : AI ? (
          <div className="flex items-center gap-2">
            <IoPersonSharp className="text-quaternary" />
            <p className="valorax">VS</p>
            <FaComputer className="text-septenary" />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <IoPersonSharp className="text-quaternary" />
            <p className="valorax">VS</p>
            <IoPersonSharp className="text-septenary" />
          </div>
        )}
      </div>
    </div>
  );
}

export default StatusBar;
