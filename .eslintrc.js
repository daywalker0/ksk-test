module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off",
    "linebreak-style": 0,
    quotes: [0, "double"],
    "vuejs-accessibility/click-events-have-key-events": "off",
    "vuejs-accessibility/label-has-for": "off",
  },
};
