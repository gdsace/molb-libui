# Prerequisites

- Node version: 10.15.3
- Yarn version: 1.15.2

# molb-libui

[![Build Status](https://travis-ci.com/gdsace/molb-libui.svg?branch=master)](https://travis-ci.com/gdsace/molb-libui)

UI library.

```
yarn install
```

after changing source code, run build again

```
yarn build:production
```

## Storybook For libui

In the storybook, you can create introduction for the UI Component.

## Usage Script

### Run the project

```bash
yarn start
```

You can also build your design system for publishing to private npm or your own github instance:

```bash
yarn build:production
```

## Common Issues

#### I've ran `yarn build:production` but travis is failing with the following error:

`Please run 'yarn build:production' and commit the changes error Command failed with exit code 1.`

Try:

1. Remove `dist` folder
2. Remove `node_modules`
3. run `yarn`
4. run `yarn build:production`

### Test

```bash
yarn test
```

## Lint

You can only use yarn to lint you code.

```bash
yarn lint
```

If you meet some lint error, you can try fix srcipt.

```bash
yarn lint:fix
```

## Write a story

In every component folder, we build file like xxx.stoies.tsx. In this story file, we can show how to use this component.

**Button.stoies.tsx**(src/components/button/Button.stoies.tsx) is an example you can view.

If you want to use **state** to drive **stateless component**, you can see the example of

**Dropdown.stoies.tsx**(src/components/dropdown/Dropdown.stoies.tsx)

For more detail, you can view the [offical document](https://storybook.js.org/basics/guide-react/)

## Addons

Storybook has many Addons. Here is what we use:

### Storybook state

This addons allow you to use state in the storybook.

https://github.com/Sambego/storybook-state

### Addons-action

Storybook Addon Actions can be used to display data received by event handlers in Storybook.

https://github.com/storybooks/storybook/tree/master/addons/actions

### Viewport Addon

Storybook Viewport Addon allows your stories to be displayed in different sizes and layouts in Storybook. This helps build responsive components inside of Storybook.

https://github.com/storybooks/storybook/tree/release/3.4/addons/viewport

## Reference

https://storybook.js.org/

https://dev.to/swyx/quick-guide-to-setup-your-react--typescript-storybook-design-system-1c51

@ncochard has provided an update to rewrite the stories in typescript, i think this is great so [i merged in the PR here](https://github.com/sw-yx/react-typescript-storybook-starter/pull/1). Check it out!
