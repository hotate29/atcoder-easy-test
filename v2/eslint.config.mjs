import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import rules from "eslint-config-prettier";

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  rules,
  ...tseslint.configs.strict,
];
