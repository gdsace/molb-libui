module.exports = {
  stories: ["../**/*.stories.@(tsx|mdx)", "introduction.stories.mdx"],
  addons: [
    "@storybook/addon-actions",
    "storybook-addon-jsx",
    "@storybook/addon-viewport",
    "@storybook/addon-knobs",
    "@storybook/addon-docs"
  ]
}
