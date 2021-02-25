import React, { useState } from "react";
import Link from "next/link";

const DropdownMenu = ({ name, links }) => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div className="relative block m-5 lg:inline-block z-10">
      <div>
        <span>
          <button
            type="button"
            className="inline-flex justify-center text-lg leading-none font-semibold focus:outline-none transition ease-in-out duration-150"
            id={`${name}-menu`}
            onClick={() => toggleExpansion(!isExpanded)}
            aria-haspopup="true"
            aria-expanded="true"
          >
            {name.toUpperCase()}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      <div
        className={`${
          isExpanded
            ? `block transition ease-out duration-100 transform scale-100`
            : `hidden transition ease-in duration-75 transform scale-95`
        } lg:absolute lg:right-0 mt-2 w-48 lg:rounded-md lg:shadow-lg`}
      >
        <div className="rounded-md lg:bg-primary lg:shadow-xs">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {links.map((link) => (
              <Link href={link.url} role="menuitem" key={link.name}>
                <a className="block px-4 py-2 text-sm leading-5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
