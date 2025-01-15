"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

const Footer = () => {
  const { translations } = useLanguage();

  return (
    <footer
      className="flex text-white text-center py-4 h-96 bg-[#2F2E2E] md:h-[26.625rem] items-start justify-center"
      data-testid="footer"
      aria-label="Footer"
    >
      <div className="grid grid-cols-1 relative top-2 gap-1 md:top-0 md:grid-cols-5 md:mt-24 md:gap-5 lg:gap-8 xl:gap-11">
        <Link href="/" className="navbar-brand" aria-label="logo">
          <img
            className="h-20 rounded relative mt-4 mb-4 md:mt-0 md:mb-0 md:right-4"
            src="/images/donna-vino-logo-transparent.png"
            alt="Donna Vino Logo - Red background, white text saying 'Donna Vino'"
            data-testid="logo-footer"
          ></img>
        </Link>
        <Link
          data-testid={"our-team"}
          label={translations["footer.team"]}
          href="/our-team"
          className="rounded-md px-3 py-2 text-bodyLarge text-semibold order-4 md:order-1"
          role="navigation"
          aria-label={`Link to ${translations["footer.team"]}`}
        >
          {translations["footer.team"]}
        </Link>
        <Link
          data-testid={"our-values"}
          label={translations["footer.values"]}
          href="/our-values"
          className="rounded-md px-3 py-2 text-bodyLarge text-semibold order-3 md:order-2"
          role="navigation"
          aria-label={`Link to ${translations["footer.values"]}`}
        >
          {translations["footer.values"]}
        </Link>
        <Link
          data-testid={"contact"}
          label={translations["footer.contact"]}
          href="/contact"
          className="rounded-md px-3 py-2 text-bodyLarge text-semibold order-2 md:order-3"
          role="navigation"
          aria-label={`Link to ${translations["footer.contact"]}`}
        >
          {translations["footer.contact"]}
        </Link>
        <div className="p-2 order-1 md:order-4">
          <h4 className="pb-3 text-bodyLarge text-semibold">
            {translations["footer.follow"]}
          </h4>
          <div
            className="flex gap-4 ml-3 mt-3 relative right-1"
            aria-label="Social media icons"
          >
            <a
              href="https://www.facebook.com/donnavino.dk/"
              className="text-white"
            >
              <img
                src="/icons/footer/facebook-line.svg"
                alt="Facebook Logo"
                className="h-4 filter brightness-0 invert"
              ></img>
            </a>
            <a
              href="https://www.instagram.com/donna_vino_winetastings/"
              className="text-white"
            >
              <img
                src="/icons/footer/instagram-original.svg"
                alt="Instagram Logo"
                className="h-4 filter brightness-0 invert"
              ></img>
            </a>
            <a href="/icons/footer/linkedin-alt.svg" className="text-white">
              <img
                src="/icons/footer/linkedin-alt.svg"
                alt="LinkedIn Logo"
                className="h-4 filter brightness-0 invert"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
