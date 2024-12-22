// eslint.config.js
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig([
  {
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
    rules: {
      "react/prop-types": ["warn"],
      "no-unused-vars": ["warn", { varsIgnorePattern: "^React$" }],
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  {
    // Configuración específica para archivos .cy.js
    files: ["**/*.cy.js"],
    languageOptions: {
      globals: {
        "cypress/globals": true,
      },
    },
    plugins: {
      cypress: require("eslint-plugin-cypress"),
    },
    rules: {
      "cypress/no-assertion-after-screenshot": "off",
    },
  },
]);
