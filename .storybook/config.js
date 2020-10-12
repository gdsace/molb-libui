import React from 'react';
import {
  configure
} from "@storybook/react";
import {
  addDecorator
} from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import {
  withKnobs
} from "@storybook/addon-knobs/react";

const CenterDecorator = (storyFn) => (
  <div style={{padding: '20px'}}>{storyFn()}</div>
);

addDecorator(CenterDecorator);
addDecorator(withKnobs);
addDecorator(jsxDecorator);

// Include global CSS and variables
import "../src/components/styles/root.scss";
import "../src/components/styles/fonts.scss";

// automatically import all files ending in *.stories.js
const req = require.context("../src/stories", true, /.stories.tsx$/);

function loadStories() {
  require("./welcomeStory.tsx");
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
