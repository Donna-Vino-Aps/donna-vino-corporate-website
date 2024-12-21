module.exports = {
  testEnvironment: "jsdom", // For React testing environment
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest", // Use babel-jest for JS/JSX/TS/TSX files
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // If you use path aliases
  },
  transformIgnorePatterns: [
    "/node_modules/(?!tailwindcss|other-module-to-transform)/", // If you need to transform node_modules
  ],
};
