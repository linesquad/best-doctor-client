import { animate } from "motion/react";

function ToggleButton({ toggleMenu, clickMenu }) {
  return (
    <div>
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 relative z-20"
        aria-label="Toggle menu"
      >
        <div
          className="bg-white h-[2px] w-6 mb-1"
          ref={(el) => {
            if (el) {
              animate(
                el,
                clickMenu
                  ? { transform: "rotate(45deg) translateY(8px)" }
                  : { transform: "rotate(0deg) translateY(0px)" },
                { duration: 0.3 }
              );
            }
          }}
        />
        <div
          className="bg-white h-[2px] w-6 mb-1"
          ref={(el) => {
            if (el) {
              animate(el, clickMenu ? { opacity: 0 } : { opacity: 1 }, {
                duration: 0.3,
              });
            }
          }}
        />
        <div
          className="bg-white h-[2px] w-6"
          ref={(el) => {
            if (el) {
              animate(
                el,
                clickMenu
                  ? { transform: "rotate(-45deg) translateY(-8px)" }
                  : { transform: "rotate(0deg) translateY(0px)" },
                { duration: 0.3 }
              );
            }
          }}
        />
      </button>
    </div>
  );
}

export default ToggleButton;
