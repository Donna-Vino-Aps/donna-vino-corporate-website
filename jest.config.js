module.exports = {
  testEnvironment: "jest-environment-jsdom", // Use the installed jsdom environment
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Transpile JSX files with Babel
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"], // Supported file extensions
};
