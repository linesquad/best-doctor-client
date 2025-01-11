import { useState } from "react";

import MotionNav from "./MotionNav";
import ToggleButton from "../../../ui/ToggleButton";

import DoctorLogo from "/images/doctorLogo.jpg";

const Navbar = ({ paddingX, paddingY, bgColor, links, ActiveBg }) => {
  const [clickMenu, setClickMenu] = useState(false);

  function toggleMenu() {
    setClickMenu((prev) => !prev);
  }

  return (
    <nav
      className={`flex items-center justify-between ${bgColor} ${paddingY} ${paddingX} relative`}
    >
      <img
        src={DoctorLogo}
        className="w-16 h-16 rounded-full"
        alt="Doctor Logo"
      />

      <ToggleButton toggleMenu={toggleMenu} clickMenu={clickMenu} />

      <MotionNav
        links={links}
        ActiveBg={ActiveBg}
        toggleMenu={toggleMenu}
        clickMenu={clickMenu}
        bgColor={bgColor}
      />
    </nav>
  );
};

export default Navbar;
