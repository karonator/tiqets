module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/comma-dangle": ["error", "never"],
    "@typescript-eslint/space-before-blocks": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function"
      }
    ],
    "import/prefer-default-export": "off",
    "no-restricted-exports": "off",
    "no-param-reassign": "off",
    "react/require-default-props": "off"
  },
  extends: [
    "eslint-config-airbnb",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ]
};
