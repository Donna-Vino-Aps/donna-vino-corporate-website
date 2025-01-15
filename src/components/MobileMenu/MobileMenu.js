import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import LanguageSwitch from "../Navbar/LanguageSwitch";

const MobileMenu = ({ isMenuOpen, toggleMenu, navLinks }) => {
  return (
    <div
      className={`fixed right-0 top-0 w-full h-full sm:hidden z-40 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
      data-testid="mobile-menu"
      role="dialog"
      aria-hidden={!isMenuOpen}
      aria-labelledby="mobile-menu-heading"
    >
      <div className="flex flex-col h-full gap-16 p-8 bg-white">
        {/* Header */}
        <div className="flex justify-between items-center">
          <img
            src="/images/donna-vino-logo-transparent.png"
            alt="Donna Vino's logo"
            className="w-[7.65rem] h-[5.37rem]"
          />
          <button
            className="self-start"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <img src="/icons/close.svg" alt="Close icon" className="w-5" />
          </button>
        </div>

        <h2 id="mobile-menu-heading" className="sr-only">
          Mobile navigation menu
        </h2>

        {/* Menu Links */}
        <ul className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={toggleMenu}
                className="block py-2 text-bodyLarge text-tertiary1"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="my-2 border-t-slate-300" />

        <div className="w-[5.12rem] h-[2.87rem]">
          <LanguageSwitch />
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-labelXLarge font-semibold">Follow Us On</h4>
          <div
            className="flex gap-4 justify-start"
            aria-label="Social media icons"
          >
            <a href="#" className="text-black" aria-label="Instagram">
              <img
                src="/icons/instagram-original.svg"
                className="h-4 filter brightness-0"
                alt="Instagram"
              />
            </a>
            <a href="#" className="text-black" aria-label="LinkedIn">
              <img
                src="/icons/linkedin-alt.svg"
                className="h-4 filter brightness-0"
                alt="LinkedIn"
              />
            </a>
            <a href="#" className="text-black" aria-label="Facebook">
              <img
                src="/icons/facebook-line.svg"
                className="h-4 filter brightness-0"
                alt="Facebook"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MobileMenu;
