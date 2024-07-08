import React from "react";
import { GrPowerReset } from "react-icons/gr";
import { IoVolumeHigh } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { FaDonate } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import useGameContext from "../../lib/hooks/useGameContext";
import { ACTIONS } from "../../lib/actions";
import { IoPersonSharp } from "react-icons/io5";

const circleStyle =
  "p-2 text-lg border-2 rounded-full border-quaternary text-quaternary hover:bg-quaternary hover:text-primary hover:rotate-[360deg] active:bg-septenary active:border-septenary transition-all duration-300 basis-100 h-fit w-fit";

const collapseParrentStyle =
  "flex items-center overflow-hidden group w-fit h-fit select-none";

const collapseChildStyle =
  "overflow-hidden max-w-0 group-hover:max-w-[300px] transition-all duration-700 text-nowrap ms-0 group-hover:ms-2 bg-quaternary p-0 group-hover:p-2 text-primary rounded-md poppins-regular text-xs cursor-pointer active:bg-septenary active:scale-90";

const CoreHandler = (instruction) => {
  const { dispatch, winner, ai_toggler } = useGameContext();

  switch (instruction) {
    case "reset":
      return () => {
        dispatch({ type: ACTIONS.RESET });
      };
    case "sound":
      return () => {
        dispatch({ type: ACTIONS.SOUND_TOGGLE });
      };
    case "computer":
      return ai_toggler;
    case "edit":
      return () => {
        dispatch({ type: ACTIONS.EDIT_PLAYER });
      };
    case "next_round":
      return () => {
        dispatch({ type: ACTIONS.NEXT_ROUND, winner: winner });
      };
    case "donate":
      window.location.href = "http://www.dimas-fahmi.com/donate";
    case "github":
      window.location.href = "http://www.github.com/dimas-fahmi";
    default:
      throw new Error("Button instruction is invalid");
  }
};

export const ResetGameButton = () => {
  return (
    <button className={circleStyle}>
      <GrPowerReset />
    </button>
  );
};

export const SoundGameButton = () => {
  return (
    <div className={collapseParrentStyle}>
      <button className={circleStyle}>
        <IoVolumeHigh />
      </button>
      <button className={collapseChildStyle}>
        <p>Mute Audio</p>
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
        {!AI ? <p>Play Against Computer</p> : <p>Play Against Human</p>}
      </button>
    </div>
  );
};

export const EditGameButton = () => {
  return (
    <div className={collapseParrentStyle}>
      <button className={circleStyle}>
        <MdEdit />
      </button>
      <button className={collapseChildStyle}>
        <p>Edit Your Name</p>
      </button>
    </div>
  );
};

export const DonateGameButton = () => {
  return (
    <div className={collapseParrentStyle}>
      <button className={circleStyle}>
        <FaDonate />
      </button>
      <button className={collapseChildStyle}>
        <p>buy me a juice</p>
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

export const GithubButton = () => {
  return (
    <div className={collapseParrentStyle}>
      <button className={circleStyle}>
        <FaGithub />
      </button>
      <button className={collapseChildStyle}>
        <p>Open Github</p>
      </button>
    </div>
  );
};
