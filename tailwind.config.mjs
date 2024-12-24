/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          light: "#FDE8E9", // Light Primary
          hover: "#FCDDDD", // Light Primary Hover
          active: "#F9B9BB", // Light Primary Active
          normal: "#ED1C24", // Normal Primary
          hover_normal: "#D51920", // Normal Primary Hover
          active_normal: "#BE161D", // Normal Primary Active
          dark: "#B2151B", // Dark Primary
          hover_dark: "#8E1116", // Dark Primary Hover
          active_dark: "#6B0D10", // Dark Primary Active
          darker: "#530A0D", // Darker Primary
        },
        secondary: {
          light: "#E8ECE9", // Light Secondary
          hover: "#DCE2DF", // Light Secondary Hover
          active: "#B7C3BC", // Light Secondary Active
          normal: "#183127", // Normal Secondary
          hover_normal: "#163923", // Normal Secondary Hover
          active_normal: "#133211", // Normal Secondary Active
          dark: "#12281D", // Dark Secondary
          hover_dark: "#0E2617", // Dark Secondary Hover
          active_dark: "#0B1C12", // Dark Secondary Active
          darker: "#08160E", // Darker Secondary
        },
        tertiary1: {
          light: "#EAEAEA", // Light Tertiary-1
          hover: "#E0E0E0", // Light Tertiary-1 Hover
          active: "#BFBEBE", // Light Tertiary-1 Active
          normal: "#242E2E", // Normal Tertiary-1
          hover_normal: "#2A2929", // Normal Tertiary-1 Hover
          active_normal: "#262525", // Normal Tertiary-1 Active
          dark: "#232323", // Dark Tertiary-1
          hover_dark: "#1C1C1C", // Dark Tertiary-1 Hover
          active_dark: "#151515", // Dark Tertiary-1 Active
          darker: "#101010", // Darker Tertiary-1
        },
        tertiary2: {
          light: "#FEFEFE", // Light Tertiary-2
          hover: "#FDFDFD", // Light Tertiary-2 Hover
          active: "#FBFBFB", // Light Tertiary-2 Active
          normal: "#F1F181", // Normal Tertiary-2
          hover_normal: "#D9D9D9", // Normal Tertiary-2 Hover
          active_normal: "#C1C1C1", // Normal Tertiary-2 Active
          dark: "#B5B5B5", // Dark Tertiary-2
          hover_dark: "#919191", // Dark Tertiary-2 Hover
          active_dark: "#6C6C6C", // Dark Tertiary-2 Active
          darker: "#545454", // Darker Tertiary-2
        },
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"], // main font
        roboto: ["Roboto", "sans-serif"], // secondary font
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
    },
  },
  plugins: [],
};
