import React from "react";
import PropTypes from "prop-types";
import "./globals.css";
import Footer from "../components/Footer/Footer.js";
import Navbar from "../components/Navbar/Navbar.js";
// import { logInfo } from "@/utils/logging";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen w-full font-barlow bg-white text-foreground-normal gap-4">
        <Navbar />

        <main
          className="flex-grow mt-32"
          role="main"
          data-testid="main-content"
        >
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
