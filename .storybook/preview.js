import React from 'react';
import { addDecorator, addParameters } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import { withKnobs } from "@storybook/addon-knobs/react";
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

const CenterDecorator = (storyFn) => (
  <div style={{padding: '20px'}}>{storyFn()}</div>
);

addDecorator(CenterDecorator);
addDecorator(withKnobs);
addDecorator(jsxDecorator);

// Include global CSS and variables
import "../src/components/styles/root.scss";
import "../src/components/styles/fonts.scss";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});
