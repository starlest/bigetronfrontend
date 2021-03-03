import React, { useState } from "react";
import Link from "next/link";

import DropdownMenu from "./dropdown-menu";
import HamburgerButton from "./hamburger-button";

import bigetronLogoRed from "../../assets/img/bigetron.png";

const divisionsLinks = [
  {
    name: "PUBG Mobile",
    url: "/divisions/pubgm",
  },
  {
    name: "Mobile Legends",
    url: "/divisions/mlbb",
  },
  {
    name: "Free Fire",
    url: "/divisions/ff",
  },
];

const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <>
      <nav className="border-b border-gray-800 border-solid flex items-center justify-between flex-wrap bg-dark">
        <div className="ml-3 lg:w-1/5 lg:m-0">
          <Link href="/">
            <a>
              <img
                className="w-16 lg:w-24"
                src={bigetronLogoRed}
                alt="Bigetron Logo"
              ></img>
            </a>
          </Link>
        </div>

        <div className="lg:hidden flex items-center mr-6">
          <HamburgerButton
            toggleExpansion={toggleExpansion}
            isExpanded={isExpanded}
          />
        </div>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full font-semibold text-lg text-white lg:flex lg:items-center lg:justify-around lg:w-3/5 lg:pt-8`}
        >
          <Link href="/" activeClassName="text-primary">
            <a className="block m-5 lg:m-0">HOME</a>
          </Link>

          <DropdownMenu name="Divisions" links={divisionsLinks} />

          <Link href="/#about" activeClassName="text-primary">
            <a className="block m-5 lg:m-0">ABOUT</a>
          </Link>
          <Link href="/#partners" activeClassName="text-primary">
            <a className="block m-5 lg:m-0">PARTNERS</a>
          </Link>
          <a
            href="https://www.tokopedia.com/bigetron"
            className="block m-5 lg:m-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            SHOP
          </a>
        </div>

        <div className="hidden w-1/5 lg:block"></div>
      </nav>
    </>
  );
};

export default Navbar;
