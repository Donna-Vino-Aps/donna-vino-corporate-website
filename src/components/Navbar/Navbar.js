"use client";
import Link from "next/link";
import React, { useState } from "react";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "@/app/context/LanguageContext";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = () => {
  const { translations } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: "home", href: "/", label: translations["navbar.home"] },
    {
      id: "our-values",
      href: "/our-values",
      label: translations["navbar.values"],
    },
    { id: "our-team", href: "/our-team", label: translations["navbar.team"] },
    { id: "contact", href: "/contact", label: translations["navbar.contact"] },
  ];

  const handleClick = (href) => {
    setActiveLink(href);
  };

  return (
    <nav className="flex flex-col-1 w-full h-[7.18rem] sm:h-[14.37rem] z-50 shadow-md justify-between items-center px-8 py-6 gap-2">
      <Link href="/" data-testid="navbar-brand" aria-label="logo">
        <img
          src="/images/donna-vino-logo-transparent.png"
          alt="logo"
          className="w-[6.25rem] h-[4.31rem]"
        />
      </Link>
      <div className="sm:hidden w-[1.5rem] h-[1.5rem]">
        <button onClick={toggleMenu} role="button" aria-label="menu">
          <img src="/icons/menu.svg" alt="" className="" />
        </button>
      </div>
      <div
        className={`sm:flex sm:items-center sm:space-x-4 ${
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
      <div className="hidden sm:block w-[5.12rem] h-[2.87rem]">
        <LanguageSwitch />
      </div>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        navLinks={navLinks}
      />
    </nav>
  );
};

export default Navbar;
