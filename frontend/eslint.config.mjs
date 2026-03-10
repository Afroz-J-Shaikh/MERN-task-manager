import js from "@eslint/js";
import babelParser from "@babel/eslint-parser";

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
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        module: "readonly" // for config files like tailwind/postcss
      }
    },
    rules: {
  "no-unused-vars": [
    "error",
    {
      "varsIgnorePattern": "React|^[A-Z]",
      "argsIgnorePattern": "^_",
      "caughtErrorsIgnorePattern": "^_"
    }
  ]
}

  }
];
