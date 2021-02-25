import React from "react";

const HamburgerButton = ({ isExpanded, toggleExpansion }) => (
  <button
    aria-label="Hamburger Button"
    className="focus:outline-none"
    onClick={() => toggleExpansion(!isExpanded)}
  >
    <div className="flex flex-col justify-between h-6 w-10 cursor-pointer">
      <div
        className={`transform ${
          isExpanded ? "rotate-45 translate-y-3" : "rotate-0"
        } h-1 rounded-lg bg-white`}
      ></div>
      <div
        className={`transform ${
          isExpanded ? "opacity-0" : "opacity-1"
        } h-1 rounded-lg bg-white`}
      ></div>
      <div
        className={`transform ${
          isExpanded ? "-rotate-45 -translate-y-2" : ""
        } h-1 rounded-lg bg-white`}
      ></div>
    </div>
  </button>
);

export default HamburgerButton;
