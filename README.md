
# molb-libui

node: 10.10.0

Common UI library for MOLB.

Right now, this is kept inside the frontend repository for ease of development. We will split this out when needed in the future, so please avoid creating direct dependencies between this and the main application.

```
yarn install
```

after changing source code, run build again and push `dist`
```
yarn build:production
```

## Version control

Recommend use commit hash as version before we decide to add tag to a commit.

usage in the `package.json` in `molb-web`

```
yarn add ssh://git@github.com/gdsace/molb-libui.git#commithash
``` 

When you we decide to add a tag as release verison

```
git tag -a v0.0.11 9fceb02 -m "Message here"
```

Then push the tag

```
git push origin <tag_name>
```


## Storybook For libui

In the storybook, you can create introduction for the UI Component.

## Usage Script

### Run the project

```bash
yarn start
npm run start
```

You can also build your design system for publishing to private npm or your own github instance:

```bash
yarn build:production
```

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

## Source Direcotory

```
├── .storybook
│   ├── addons.js                   //  Location to define storybook addons
│   ├── config.js                   //  configs of ways to import components
│   ├── utils.js                    //  import utils like withInfo, with which you can write markdown.
│   ├── webpack.config.js           //  webpack config file for libui
│   └── welcomeStory.tes            //  welcome story in the start page
├── src
│────── components
│       └── button
│           ├── __test__
│           ├── Button.stoies.tsx   //  story description for a component.
│           ├── Button.tsx
│           └── index.ts
├── storybook-static
│   └── static
├── test
│   └── helpers
└── types                           // Location for custom typing.
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
