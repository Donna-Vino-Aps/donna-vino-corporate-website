/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"], // Main font
        roboto: ["Roboto", "sans-serif"], // Secondary font
      },
      fontSize: {
        displayLarge: [
          "57px",
          { lineHeight: "64px", letterSpacing: "-0.25px" },
        ],
        displayMedium: ["45px", { lineHeight: "52px", letterSpacing: "0px" }],
        displaySmall: ["36px", { lineHeight: "44px", letterSpacing: "0px" }],
        headlineLarge: ["32px", { lineHeight: "40px", letterSpacing: "0px" }],
        headlineMedium: ["28px", { lineHeight: "36px", letterSpacing: "0px" }],
        headlineSmall: ["24px", { lineHeight: "32px", letterSpacing: "0px" }],
        titleLarge: ["22px", { lineHeight: "28px", letterSpacing: "0px" }],
        titleMedium: ["16px", { lineHeight: "24px", letterSpacing: "0.15px" }],
        titleSmall: ["14px", { lineHeight: "20px", letterSpacing: "0.1px" }],
        labelXLarge: ["18px", { lineHeight: "20px", letterSpacing: "0.1px" }],
        labelLarge: ["14px", { lineHeight: "20px", letterSpacing: "0.1px" }],
        labelMedium: ["12px", { lineHeight: "16px", letterSpacing: "0.5px" }],
        labelSmall: ["11px", { lineHeight: "16px", letterSpacing: "0.5px" }],
        bodyLarge: ["16px", { lineHeight: "24px", letterSpacing: "0.5px" }],
        bodyMedium: ["14px", { lineHeight: "20px", letterSpacing: "0.25px" }],
        bodySmall: ["12px", { lineHeight: "16px", letterSpacing: "0.4px" }],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
      },
      colors: {
        primary: {
          light: "#FDE8E9",
          hover: "#FCDDDD",
          active: "#F9B9BB",
          normal: "#ED1C24",
          hover_normal: "#D51920",
          active_normal: "#BE161D",
          dark: "#B2151B",
          hover_dark: "#8E1116",
          active_dark: "#6B0D10",
          darker: "#530A0D",
        },
        secondary: {
          light: "#E8ECE9",
          hover: "#DCE2DF",
          active: "#B7C3BC",
          normal: "#183127",
          hover_normal: "#163923",
          active_normal: "#133211",
          dark: "#12281D",
          hover_dark: "#0E2617",
          active_dark: "#0B1C12",
          darker: "#08160E",
        },
        tertiary1: {
          light: "#EAEAEA",
          hover: "#E0E0E0",
          active: "#BFBEBE",
          gray: "#637381",
          normal: "#242E2E",
          hover_normal: "#2A2929",
          active_normal: "#262525",
          dark: "#232323",
          hover_dark: "#1C1C1C",
          active_dark: "#151515",
          darker: "#101010",
        },
        tertiary2: {
          light: "#FEFEFE",
          hover: "#FDFDFD",
          active: "#FBFBFB",
          normal: "#F1F181",
          hover_normal: "#D9D9D9",
          active_normal: "#C1C1C1",
          dark: "#B5B5B5",
          hover_dark: "#919191",
          active_dark: "#6C6C6C",
          darker: "#545454",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        "dots-lg": "radial-gradient(circle, #FCDDDD 4px, transparent 1px)",
        "dots-sm": "radial-gradient(circle, #FCDDDD 3px, transparent 1px)",
      },
      backgroundSize: {
        "dots-size-lg": "35px 35px",
        "dots-size-sm": "25px 25px",
      },
    },
  },
  darkMode: "class", // Enable dark mode using a class
  plugins: [],
};
