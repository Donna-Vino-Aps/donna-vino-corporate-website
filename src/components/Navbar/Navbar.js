"use client";
import Link from "next/link";
import React, { useState } from "react";
import LanguageSwitch from "./LanguageSwitch";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: "home", href: "/", label: "Home" },
    { id: "our-values", href: "/our-values", label: "Our Values" },
    { id: "our-team", href: "/our-team", label: "Our Team" },
    { id: "contact", href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container py-6 px-6 flex justify-between items-center">
        <Link href="/" className="navbar-brand">
          <img
            src="/images/donna-vino-logo-transparent.png"
            alt="logo"
            className="h-16 rounded logo"
          />
        </Link>
        <div className="md:hidden">
          <button className="block" onClick={toggleMenu}>
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
              className="rounded-md px-3 py-2 text-titleMedium text-tertiary1"
              aria-current="page"
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
                alt=""
                className="h-16 rounded logo"
              />
            </div>
            <button className="self-end mb-6" onClick={toggleMenu}>
              <div>
                <img src="/icons/close.svg" alt="close" className="mr-2 w-5" />
              </div>
            </button>
          </div>
          <ul>
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
            <hr className="my-2 border-t-slate-300" />
            <div className="pt-12">
              <h4 className="pb-3 font-semibold footerHeading">Follow Us On</h4>
              <div className="flex gap-4 m-1 relative right-1">
                <a href="#" className="text-black">
                  <img
                    src="/icons/instagram-original.svg"
                    className="h-4 filter brightness-0"
                  />
                </a>
                <a href="#" className="text-black">
                  <img
                    src="/icons/linkedin-alt.svg"
                    className="h-4 filter brightness-0"
                  />
                </a>
                <a href="#" className="text-black">
                  <img
                    src="/icons/facebook-line.svg"
                    className="h-4 filter brightness-0"
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
