module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // For JSX without manually importing React
      },
    ],
  ],
};
