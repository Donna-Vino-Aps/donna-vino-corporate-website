"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import LanguageSwitch from "./LanguageSwitch";
import SideBar from "../Sidebar/Sidebar";
import { useLanguage } from "@/app/context/LanguageContext";

const Navbar = () => {
  const { translations } = useLanguage();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isSubscriptionPage =
    pathname === "/subscription/verify" ||
    pathname === "/subscription/confirmed";

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

  return (
    <header>
      <nav
        className="flex flex-col-1 w-full h-[7.18rem] md:h-[13.12rem] justify-between items-center px-8 py-6 gap-2 z-50"
        aria-label="Main Navigation"
      >
        <Link href="/" data-testid="navbar-brand" aria-label="Go to home">
          <img
            src="/images/donna-vino-logo-transparent.png"
            alt="Donna Vino Logo Navbar - a brand for wine tastings and experiences"
            className="w-[6.25rem] h-[4.31rem] md:w-[7.75rem] md:h-[5.37rem]"
          />
        </Link>
        {!isSubscriptionPage && (
          <>
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
              className={`sm:flex sm:items-center md:space-x-4 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-titleMedium ${
                    pathname === link.href
                      ? "font-bold underline"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  data-testid={`nav-link-${link.id}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </>
        )}
        <div
          className={`${isSubscriptionPage ? "block" : "hidden sm:block"} w-[5.12rem] h-[2.87rem]`}
        >
          <LanguageSwitch />
        </div>
        {!isSubscriptionPage && (
          <SideBar
            id="mobile-menu"
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            navLinks={navLinks}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
