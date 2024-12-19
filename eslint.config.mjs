import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // Disables warnings for unescaped entities in React
      "@typescript-eslint/quotes": "off", // Turns off TypeScript-specific quote rules
      quotes: [
        "off", // Disables the `quotes` rule (set to "error" or "warn" if needed)
        "double", // Preferred quote style (double quotes)
        {
          avoidEscape: true, // Allows escaping when necessary
          allowTemplateLiterals: true, // Allows template literals
        },
      ],
      "no-useless-escape": "off", // Disables warnings for unnecessary escapes
    },
  },
];

export default eslintConfig;
