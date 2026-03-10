import js from "@eslint/js";
import babelParser from "@babel/eslint-parser";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"]
        }
      },
      globals: {
        ...globals.browser, // enables window, document, localStorage, etc.
        ...globals.node     // enables module.exports for config files
      }
    },
    rules: {
      "no-unused-vars": ["error", { "varsIgnorePattern": "React|^[A-Z]" }]
    }
  }
];
