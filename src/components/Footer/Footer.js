"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

const Footer = () => {
  const { translations } = useLanguage();

  return (
    <footer
      className="flex text-white text-center py-4 h-96 bg-[#2F2E2E] md:h-[26.625rem] items-center justify-center"
      data-testid="footer"
      aria-label="Footer"
    >
      <div className="flex flex-col relative items-center gap-1 bottom-3 md:mb-32 md:flex-row md:gap-6 lg:gap-9 xl:gap-12">
        <Link href="/" className="navbar-brand" aria-label="logo">
          <img
            className="h-[5.351rem] w-[7.75rem] rounded relative mt-6 mb-4 md:mt-0 md:mb-0 md:right-4 md:top-6"
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
        <div className="flex flex-col order-1 md:order-4 items-center md:relative md:top-5">
          <h4 className="text-bodyLarge text-semibold mb-1 md:mb-3 md:mt-3">
            {translations["footer.follow"]}
          </h4>
          <div
            className="flex gap-4 justify-center mt-3 mb-1"
            aria-label="Social media icons"
          >
            <a
              href="https://www.facebook.com/donnavino.dk/"
              className="text-white"
            >
              <img
                src="/icons/footer/facebook-line.svg"
                alt="Facebook Logo"
                className="h-[1.5rem] w-[1.5rem] filter brightness-0 invert"
              ></img>
            </a>
            <a
              href="https://www.instagram.com/donna_vino_winetastings/"
              className="text-white"
            >
              <img
                src="/icons/footer/instagram-original.svg"
                alt="Instagram Logo"
                className="h-[1.5rem] w-[1.5rem] filter brightness-0 invert"
              ></img>
            </a>
            <a href="/icons/footer/linkedin-alt.svg" className="text-white">
              <img
                src="/icons/footer/linkedin-alt.svg"
                alt="LinkedIn Logo"
                className="h-[1.5rem] w-[1.5rem] filter brightness-0 invert"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
