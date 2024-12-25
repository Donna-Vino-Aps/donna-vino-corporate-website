import React from "react";
import PropTypes from "prop-types";
import "./globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen w-full font-barlow bg-primary-normal text-foreground-normal">
        {/* Header */}
        <header data-testid="header">
          {/* Added test ID */}
          <nav>
            <ul className="flex bg-primary-normal justify-center space-x-6 list-none">
              <li>
                <a
                  href="/"
                  className="text-lg font-roboto"
                  data-testid="home-link"
                >
                  Home
                </a>
                {/* Added test ID */}
              </li>
              <li>
                <a
                  href="/about"
                  className="text-lg font-roboto"
                  data-testid="about-link"
                >
                  About
                </a>
                {/* Added test ID */}
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-lg font-roboto"
                  data-testid="contact-link"
                >
                  Contact
                </a>
                {/* Added test ID */}
              </li>
            </ul>
          </nav>
        </header>

        {/* Main content, will adjust its size based on the content */}
        <main className="flex-grow" data-testid="main-content">
          {/* Added test ID */}
          {children}
        </main>

        {/* Footer, will always stay at the bottom */}
        <footer
          className="bg-primary-dark text-white text-center py-4 mt-auto"
          data-testid="footer"
        >
          {/* Added test ID */}© 2024 Donna Vino
        </footer>
      </body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired, // This ensures "children" is a valid React node
};

export default RootLayout;
