module.exports = {
  testEnvironment: "jsdom", // For React testing
  transform: {
    "^.+\\.jsx?$": "babel-jest", // For transforming JSX files
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"], // Specify file extensions
};
