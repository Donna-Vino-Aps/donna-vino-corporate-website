"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/app/context/LanguageContext";

const Footer = () => {
  const { translations } = useLanguage();
  const pathname = usePathname();

  const isSubscriptionPage = pathname.startsWith("/subscription/");

  const socialLinks = [
    {
      href: "https://www.facebook.com/donnavino.dk/",
      src: "/icons/footer/facebook-line.svg",
      alt: "Facebook Logo",
    },
    {
      href: "https://www.instagram.com/donna_vino_winetastings/",
      src: "/icons/footer/instagram-original.svg",
      alt: "Instagram Logo",
    },
    {
      href: "https://www.linkedin.com/company/donna-vino-aps/",
      src: "/icons/footer/linkedin-alt.svg",
      alt: "LinkedIn Logo",
    },
  ];

  return (
    <footer
      className={`relative flex flex-col text-white text-center py-4 md:mt-2 ${isSubscriptionPage ? "h-72" : "h-96"} bg-[#2F2E2E] md:h-[26.625rem] items-center justify-center`}
      data-testid="footer"
      aria-label="Footer"
    >
      <div
        className={`flex flex-col relative md:items-start items-center gap-1 bottom-3 md:mb-32 md:flex-row md:gap-6 lg:gap-9 xl:gap-12 mb-4 ${isSubscriptionPage ? "md:justify-between w-full max-w-4xl px-4" : ""}`}
      >
        <Link href="/" className="navbar-brand" aria-label="logo">
          <img
            className={`h-[5.351rem] w-[7.75rem] rounded relative mt-6 mb-4 md:mt-0 md:mb-0 ${isSubscriptionPage ? "" : "md:right-4"}`}
            src="/images/donna-vino-logo-transparent.png"
            alt="Donna Vino Logo Footer- a brand for wine tastings and experiences"
            data-testid="logo-footer"
          />
        </Link>

        {!isSubscriptionPage && (
          <>
            <Link
              data-testid="our-team"
              href="/our-team"
              className={`rounded-md px-3 py-2  text-bodyLarge text-semibold order-2 md:order-1`}
              role="navigation"
              aria-label={`Link to ${translations["footer.team"]}`}
            >
              {translations["footer.team"]}
            </Link>

            <Link
              data-testid="our-values"
              href="/our-values"
              className={`rounded-md px-3 py-2 text-bodyLarge text-semibold order-3 md:order-2`}
              role="navigation"
              aria-label={`Link to ${translations["footer.values"]}`}
            >
              {translations["footer.values"]}
            </Link>

            <Link
              data-testid="contact"
              href="/contact"
              className={`rounded-md px-3 py-2 text-bodyLarge text-semibold order-4 md:order-3`}
              role="navigation"
              aria-label={`Link to ${translations["footer.contact"]}`}
            >
              {translations["footer.contact"]}
            </Link>
          </>
        )}

        <section className="flex flex-col order-1 md:order-5 items-center md:relative">
          <h4 className="text-bodyLarge text-semibold px-3 py-2">
            {translations["footer.follow"]}
          </h4>
          <div
            className="flex gap-4 justify-center mt-3 mb-1"
            aria-label="Social media icons"
          >
            {socialLinks.map(({ href, src, alt }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <img
                  src={src}
                  alt={alt}
                  className="h-[1.5rem] w-[1.5rem] filter brightness-0 invert"
                />
              </a>
            ))}
          </div>
        </section>
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-bodySmall mt-1 mb-1 md:mt-0 md:mb-0 md:text-bodyMedium text-tertiary2-hover_dark">
        <p className="company-number">
          &copy; {new Date().getFullYear()} Donna Vino Aps | CVR-n. 45017567 |{" "}
          <a
            className="underline"
            href="/privacy-policy"
            role="navigation"
            aria-label={`Link to ${translations["footer.privacy-policy"]}`}
          >
            {translations["footer.privacy-policy"]}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
