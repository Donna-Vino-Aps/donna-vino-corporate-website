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
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
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
