// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Disable "no-explicit-any"
      "prefer-const": "off", // Disable "prefer-const"
      "react/no-unescaped-entities": "off",
      "no-warning-comments": "off", // Ignorer les commentaires de warning
      "@next/next/no-img-element": "off", // Désactiver l'avertissement sur l'utilisation de <img>
      "react-hooks/exhaustive-deps": "off", // Désactiver l'avertissement sur les dépendances de useEffect
      "@typescript-eslint/no-unused-vars": "off" // Désactiver l'avertissement sur les variables non utilisées
    },
  },
];

export default eslintConfig;