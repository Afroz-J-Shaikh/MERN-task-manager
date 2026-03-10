import js from "@eslint/js";
import babelParser from "@babel/eslint-parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs", // backend uses require/module.exports
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false
      },
      globals: {
        ...js.environments.node.globals // enable Node.js globals
      }
    },
    rules: {
      "no-unused-vars": "warn"
    }
  }
];
