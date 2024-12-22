const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig([
  {
    ignores: ["**/.next/**"],
    languageOptions: {
      globals: {
        "cypress/globals": true,
        browser: true,
        es2021: true,
        jest: true,
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "jsx-a11y": require("eslint-plugin-jsx-a11y"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      cypress: require("eslint-plugin-cypress"),
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": ["warn"],
      "no-unused-vars": ["warn", { varsIgnorePattern: "^React$" }],
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
  {
    // Specific configuration for .cy.js files
    files: ["**/*.cy.js", "cypress.config.js"],
    languageOptions: {
      globals: {
        "cypress/globals": true,
      },
    },
    plugins: {
      cypress: require("eslint-plugin-cypress"),
    },
    rules: {
      "no-unused-vars": "off",
      "no-console": "off",
      "cypress/no-assertion-after-screenshot": "off",
    },
  },
  {
    // Specific configuration for logging.js
    files: ["src/utils/logging.js"],
    rules: {
      "no-console": "off",
    },
  },
]);
