import React from "react";
import PropTypes from "prop-types";
import Script from "next/script";
import "./globals.css";
import Footer from "../components/Footer/Footer.js";
import Navbar from "../components/Navbar/Navbar.js";
import { LanguageProvider } from "./context/LanguageContext";
import CookieBanner from "../components/CookieBanner/CookieBanner";

export const metadata = {
  title: "Donna Vino",
  description:
    "Welcome to Donna Vino, where passion meets fine wine. Explore our curated selection, wine tasting experiences, and expert insights.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <LanguageProvider>
        <body className="flex flex-col min-h-screen w-full font-barlow bg-white text-foreground-normal">
          <Navbar />
          <main className="flex-grow" role="main" data-testid="main-content">
            {children}
          </main>
          <CookieBanner />
          <Footer />
          <Script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="26acc54d-5e47-483a-b38c-3c39a489f00c"
          />
        </body>
      </LanguageProvider>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
