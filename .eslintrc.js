module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
      jest: true,
      jquery: true,
    },
    extends: ["eslint:recommended", "google", "prettier"],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    rules: {
      semi: ["error", "always"],
      "require-jsdoc": 0,
    },
  };