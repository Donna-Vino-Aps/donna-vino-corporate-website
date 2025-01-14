"use client";
import Link from "next/link";
import React, { useState } from "react";
import LanguageSwitch from "./LanguageSwitch";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: "home", href: "/", label: "Home" },
    { id: "our-values", href: "/our-values", label: "Our Values" },
    { id: "our-team", href: "/our-team", label: "Our Team" },
    { id: "contact", href: "/contact", label: "Contact" },
  ];

  const handleClick = (href) => {
    setActiveLink(href);
  };

  return (
    <nav className="w-full z-50 bg-white shadow-md">
      <div
        className="w-full py-8 px-6 flex justify-between items-center"
        data-testid="header"
      >
        <Link href="/" className="navbar-brand" aria-label="logo">
          <img
            src="/images/donna-vino-logo-transparent.png"
            alt="logo"
            className="w-[86px] rounded logo"
          />
        </Link>
        <div className="md:hidden mx-4">
          <button onClick={toggleMenu} role="button" aria-label="menu">
            <img src="/icons/menu.svg" alt="" className="mr-2" />
          </button>
        </div>
        <div
          className={`md:flex md:items-center md:space-x-4 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              data-testid={link.id}
              key={link.label}
              href={link.href}
              className={`rounded-md px-3 py-2 text-titleMedium ${
                activeLink === link.href
                  ? "text-tertiary1-gray"
                  : "text-tertiary2-active_dark"
              }`}
              onClick={() => handleClick(link.href)}
              role="navigation"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <LanguageSwitch />
        </div>
      </div>

      <div
        className={`fixed right-0 top-0 w-full h-full md:hidden z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex-col h-full pt-6 px-6 bg-white">
          <div className="flex justify-between pb-6">
            <div className="flex items-center">
              <img
                src="/images/donna-vino-logo-transparent.png"
                alt="Donna Vino's logo"
                className="h-16 rounded logo"
              />
            </div>
            <button
              className="self-end mb-6 mx-4"
              onClick={toggleMenu}
              role="button"
              aria-label="close"
            >
              <div>
                <img src="/icons/close.svg" alt="" className="mr-2 w-5" />
              </div>
            </button>
          </div>
          <ul data-testid="sidebar">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  className="block py-2 text-bodyLarge text-tertiary1"
                  role="sidebar"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <hr className="my-2 border-t-slate-300" />
            <div className="mt-12 flex col-6">
              <LanguageSwitch />
            </div>
            <div className="pt-12">
              <h4 className="pb-3 font-semibold footerHeading">Follow Us On</h4>
              <div
                className="flex gap-4 m-1 relative right-1"
                aria-label="Social media icons"
              >
                <a href="#" className="text-black">
                  <img
                    src="/icons/instagram-original.svg"
                    className="h-4 filter brightness-0"
                    alt="Instagram"
                  />
                </a>
                <a href="#" className="text-black">
                  <img
                    src="/icons/linkedin-alt.svg"
                    className="h-4 filter brightness-0"
                    alt="LinkedIn"
                  />
                </a>
                <a href="#" className="text-black">
                  <img
                    src="/icons/facebook-line.svg"
                    className="h-4 filter brightness-0"
                    alt="Facebook"
                  />
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
