import { animate } from "motion/react";
import { useEffect, useRef } from "react";
import NavItems from "./NavItems";
import NavMobileItems from "./NavMobileItems";

const MotionNav = ({ links, ActiveBg, toggleMenu, clickMenu, bgColor }) => {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      animate(
        navRef.current,
        {
          transform: clickMenu ? "translateX(0%)" : "translateX(100%)",
        },
        { duration: 0.5 }
      );
    }
  }, [clickMenu]);

  return (
    <>
      {/* Mobile menu */}
      <div
        ref={navRef}
        className={`fixed top-0 right-0 ${bgColor} w-full h-screen lg:h-auto lg:static lg:translate-x-0 lg:w-auto z-10 lg:hidden`}
      >
        <ul
          className={`flex flex-col items-center justify-center h-full lg:flex-row lg:justify-end lg:items-center text-[2rem]`}
        >
          <NavMobileItems
            links={links}
            ActiveBg={ActiveBg}
            toggleMenu={toggleMenu}
            bgColor={bgColor}
          />
        </ul>
      </div>

      {/* Desktop menu */}
      <div
        className={`lg:flex lg:justify-end lg:items-center ${bgColor} w-auto z-10 hidden lg:block`}
      >
        <ul className={`flex flex-row items-center justify-end`}>
          <NavItems
            links={links}
            ActiveBg={ActiveBg}
            toggleMenu={toggleMenu}
            bgColor={bgColor}
          />
        </ul>
      </div>
    </>
  );
};

export default MotionNav;
