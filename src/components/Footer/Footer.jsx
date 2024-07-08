import React from "react";
import { GithubButton } from "../Buttons/Buttons";

function Footer() {
  return (
    <div className="flex items-center justify-between p-4 border-2 border-quaternary rounded-xl">
      <p className="text-xs text-quaternary poppins-regular">
        Design and Created by <br />
        <span className="text-septenary poppins-bold">Dimas Fahmi</span>
      </p>
      <div>
        <GithubButton />
      </div>
    </div>
  );
}

export default Footer;
