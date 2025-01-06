"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { id: "our-values", href: "/our-values", label: "Our Values" },
    { id: "our-team", href: "/our-team", label: "Our Team" },
    { id: "contact", href: "/contact", label: "Contact" },
  ];
  return (
    <footer
      className="flex text-white text-center py-4 h-96 md:flex-row md:h-[26.625rem] items-center justify-center"
      data-testid="footer"
      style={{ backgroundColor: "#2F2E2E" }}
    >
      <div className="grid md:grid-cols-5 sm:grid-cols-1 gap-1 md:gap-5 lg:gap-7 xl:gap-9">
        <img
          className="h-16 rounded relative"
          src="/images/donna-vino-logo-transparent.png"
          alt="Donna Vino Logo - Red background, white text saying Donna Vino"
        ></img>
        {navLinks.map((link) => (
          <Link
            data-testid={link.id}
            key={link.label}
            href={link.href}
            className="rounded-md px-3 py-2 text-bodyLarge text-semibold"
            role="navigation"
          >
            {link.label}
          </Link>
        ))}
        <div className="p-2">
          <h4 className="pb-3 text-bodyLarge text-semibold">Follow Us On</h4>
          <div className="flex gap-4 ml-3 mt-3 relative right-1">
            <a
              href="https://www.facebook.com/donnavino.dk/"
              className="text-white"
            >
              <img
                src="https://www.svgrepo.com/show/341809/facebook-f.svg"
                className="h-4 filter brightness-0 invert"
              ></img>
            </a>
            <a
              href="https://www.instagram.com/donna_vino_winetastings/"
              className="text-white"
            >
              <img
                src="https://www.svgrepo.com/show/378429/instagram-fill.svg"
                className="h-4 filter brightness-0 invert"
              ></img>
            </a>
            <a
              href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A105748835&keywords=donna%20vino%20aps&origin=RICH_QUERY_SUGGESTION&position=1&searchId=00b4548c-20b3-4ff2-a651-e9e4156e57f2&sid=fqg&spellCorrectionEnabled=false"
              className="text-white"
            >
              <img
                src="https://www.svgrepo.com/show/25824/linked-in-logo-of-two-letters.svg"
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
