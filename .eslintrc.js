// DONE REVIEWING: GITHUB COMMIT
module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "arrow-body-style": "off",
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "func-name-matching": "error",
    "func-names": "error",
    "func-style": "error",
    "no-console": "error",
    "no-empty-function": "error",
    "no-nested-ternary": "off",
    "no-param-reassign": "error",
    "no-return-await": "off",
    "no-undef": "error",
    "no-underscore-dangle": "error",
    "no-unsafe-negation": "error",
    "no-unused-vars": ["error", {argsIgnorePattern: "request|response|next"}],
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-destructuring": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    "react/jsx-filename-extension": ["error", {extensions: [".ts", ".tsx"]}],
    "react/jsx-fragments": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"]
      }
    }
  }
}
