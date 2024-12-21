module.exports = {
  preset: "next/babel", // This tells Jest to use the Next.js Babel preset
  testEnvironment: "jest-environment-jsdom", // Use jsdom for simulating the browser environment
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Custom aliases if necessary
  },
  transformIgnorePatterns: ["/node_modules/"],
};
