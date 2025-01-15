"use client";
import Link from "next/link";
import React, { useState } from "react";
import LanguageSwitch from "./LanguageSwitch";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useLanguage } from "@/app/context/LanguageContext"; // Importamos el contexto de idioma

const Navbar = () => {
  const { translations } = useLanguage(); // Usamos el contexto para obtener las traducciones
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: "home", href: "/", label: translations["navbar.home"] }, // Traducción para el enlace Home
    {
      id: "our-values",
      href: "/our-values",
      label: translations["navbar.values"],
    }, // Traducción para Our Values
    { id: "our-team", href: "/our-team", label: translations["navbar.team"] }, // Traducción para Our Team
    { id: "contact", href: "/contact", label: translations["navbar.contact"] }, // Traducción para Contact
  ];

  const handleClick = (href) => {
    setActiveLink(href);
  };

  return (
    <nav
      className="flex flex-col-1 w-full h-[7.18rem] sm:h-[14.37rem] justify-between items-center px-8 py-6 gap-2 shadow-md z-50"
      aria-label="Main Navigation"
    >
      <Link href="/" data-testid="navbar-brand" aria-label="Go to home">
        <img
          src="/images/donna-vino-logo-transparent.png"
          alt="Donna Vino logo"
          className="w-[6.25rem] h-[4.31rem]"
        />
      </Link>
      <div className="sm:hidden w-[1.5rem] h-[1.5rem]">
        <button
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          data-testid="menu-toggle"
        >
          <img src="/icons/menu.svg" alt="" />
        </button>
      </div>
      <div
        id="desktop-menu"
        role="menu"
        className={`sm:flex sm:items-center sm:space-x-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`rounded-md px-3 py-2 text-titleMedium ${
              activeLink === link.href
                ? "text-tertiary1-gray"
                : "text-tertiary2-active_dark"
            }`}
            onClick={() => handleClick(link.href)}
            data-testid={`nav-link-${link.id}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="hidden sm:block w-[5.12rem] h-[2.87rem]">
        <LanguageSwitch />
      </div>
      <MobileMenu
        id="mobile-menu"
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        navLinks={navLinks}
      />
    </nav>
  );
};

export default Navbar;
