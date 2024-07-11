import React, { useEffect } from "react";
import { ACTIONS } from "../../lib/actions";
import useGameContext from "../../lib/hooks/useGameContext";

// Audio Toggler Button Icons
import { IoVolumeHigh } from "react-icons/io5";
import { IoVolumeMuteSharp } from "react-icons/io5";
//  Computer Toggler Button Icons
import { FaComputer } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
// Helper Toggler Button Icons
import { RiDeleteBin2Line } from "react-icons/ri";
import { RiDeleteBin7Fill } from "react-icons/ri";
// Donate Button Icon
import { FaDonate } from "react-icons/fa";
// Github Button Icon
import { FaGithub } from "react-icons/fa6";
// Reset Game Icon
import { GrPowerReset } from "react-icons/gr";

const circleStyle =
  "p-2 text-lg border-2 rounded-full border-quaternary text-quaternary hover:bg-quaternary hover:text-primary hover:rotate-[360deg] active:bg-septenary active:border-septenary transition-all duration-300 basis-100 h-fit w-fit";

const collapseParrentStyle =
  "flex items-center overflow-hidden group w-fit h-fit select-none";

const collapseChildStyle =
  "overflow-hidden max-w-0 group-hover:max-w-[300px] transition-all duration-700 text-nowrap ms-0 group-hover:ms-2 bg-quaternary p-0 group-hover:p-2 text-primary rounded-md poppins-regular text-xs cursor-pointer active:bg-septenary active:scale-90";

const CoreHandler = (instruction) => {
  const { dispatch, winner, ai_toggler } = useGameContext();

  switch (instruction) {
    case "reset_game":
      return () => {
        dispatch({ type: ACTIONS.RESET_GAME });
      };
    case "sound_toggle":
      return () => {
        dispatch({ type: ACTIONS.SOUND_TOGGLE });
      };
    case "next_round":
      return () => {
        dispatch({ type: ACTIONS.NEXT_ROUND, winner: winner });
      };
    case "computer":
      return ai_toggler;
    default:
      throw new Error("Button instruction is invalid");
  }
};

export const ResetGameButton = () => {
  const onClick = CoreHandler("reset_game");
  return (
    <button className={circleStyle} onClick={onClick}>
      <GrPowerReset />
    </button>
  );
};

export const SoundGameButton = () => {
  const { mute } = useGameContext();
  const onClick = CoreHandler("sound_toggle");
  return (
    <div className={collapseParrentStyle}>
      <button className={circleStyle}>
        {mute ? <IoVolumeHigh /> : <IoVolumeMuteSharp />}
      </button>
      <button className={collapseChildStyle} onClick={onClick}>
        <p>{mute ? "Turn On" : "Turn Off"} Audio</p>
      </button>
    </div>
  );
};

export const ComputerGameButton = () => {
  const { AI } = useGameContext();
  const onClick = CoreHandler("computer");
  return (
    <div className={collapseParrentStyle}>
      <button className={circleStyle}>
        {!AI ? <FaComputer /> : <IoPersonSharp />}
      </button>
      <button className={collapseChildStyle} onClick={onClick}>
        {!AI ? <p>vs Computer</p> : <p>vs Human</p>}
      </button>
    </div>
  );
};

export const HelperGameButton = () => {
  const { helper, helper_toggler } = useGameContext();
  return (
    <div className={collapseParrentStyle}>
      <button className={circleStyle}>
        {helper ? <RiDeleteBin2Line /> : <RiDeleteBin7Fill />}
      </button>
      <button className={collapseChildStyle} onClick={helper_toggler}>
        <p>Turn {helper ? "off" : "on"} helper</p>
      </button>
    </div>
  );
};

export const NextRoundButton = () => {
  const onClick = CoreHandler("next_round");

  return (
    <button
      className="px-2 py-0 text-xs transition-all duration-300 border-2 rounded-md valorax text-quaternary border-quaternary hover:bg-quaternary hover:text-primary active:scale-90"
      onClick={onClick}
    >
      NEXT
      <br />
      ROUND
    </button>
  );
};

export const DonateGameButton = () => {
  return (
    <div className={collapseParrentStyle}>
      <button className={circleStyle}>
        <FaDonate />
      </button>
      <a
        href="https://saweria.co/dimasfahmi"
        target="_blank"
        className={collapseChildStyle}
      >
        <p>buy me a juice</p>
      </a>
    </div>
  );
};

export const GithubButton = () => {
  return (
    <div className={collapseParrentStyle}>
      <button className={circleStyle}>
        <FaGithub />
      </button>
      <a
        href="https://github.com/dimas-fahmi/tic-tac-toe-2"
        target="_blank"
        className={collapseChildStyle}
      >
        <p>Open Github</p>
      </a>
    </div>
  );
};
