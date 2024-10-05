import globals from "globals";
import pluginJs from "@eslint/js";
// const pluginReact = require("eslint-plugin-react");

export default [
  { files: ["**/*.{js,cjs,jsx}"] },
  // { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  // pluginReact.configs.flat.recommended,
];
