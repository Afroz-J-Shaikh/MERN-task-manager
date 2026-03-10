import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
    },
    linterOptions: {
      env: {
        node: true
      }
    },
    rules: {
      "no-unused-vars": "warn"
    }
  }
];
