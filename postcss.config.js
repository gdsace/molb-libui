module.exports = {
  plugins: {
    "postcss-import": { addModulesDirectories: ["src", "libui"] },
    "postcss-preset-env": { stage: 0 },
    cssnano: {},
    autoprefixer: {},
    "postcss-reporter": {}
  }
};
