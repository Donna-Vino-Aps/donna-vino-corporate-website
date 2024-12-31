import React from "react";
import PropTypes from "prop-types";
import "./globals.css";
import Footer from "../components/Footer/Footer.js";
// import { logInfo } from "@/utils/logging";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen w-full font-barlow bg-primary-normal text-foreground-normal">
        <header data-testid="header" role="banner">
          <nav role="navigation">
            <ul className="flex bg-primary-normal justify-center space-x-6 list-none">
              <li>
                <a
                  href="/"
                  className="text-lg font-roboto"
                  data-testid="home-link"
                  aria-label="Go to home page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-lg font-roboto"
                  data-testid="about-link"
                  aria-label="Go to about page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-lg font-roboto"
                  data-testid="contact-link"
                  aria-label="Go to contact page"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow" role="main" data-testid="main-content">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
