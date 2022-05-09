# Storybook Addon Aria Live

[![version](https://img.shields.io/npm/v/storybook-addon-aria-live)](https://www.npmjs.com/package/storybook-addon-aria-live)

> Storybook addon for inspecting ARIA live region announcements

`storybook-addon-aria-live` is a Storybook addon for inspecting ARIA live region announcements. Internally it is utilizing [`aria-live-capture`](https://www.npmjs.com/package/aria-live-capture) for announcement detection.

[Test online](https://ariperkkio.github.io/storybook-addon-aria-live/)

## Installation

`storybook-addon-aria-live` should be included in development dependencies.

```bash
yarn add --dev storybook-addon-aria-live
```

In your `.storybook/main.js`:

```js
module.exports = {
  addons: ['storybook-addon-aria-live'],
};
```

Use [Storybook parameters](https://storybook.js.org/docs/react/writing-stories/parameters) to set global or story specific options:

In your `.storybook/preview.js`:

```js
export const parameters = {
  'aria-live': {
    /** Indicates whether live regions inside `ShadowRoot`s should be tracked. Defaults to false. */
    includeShadowDom: true,
  },
};
```

## Development

Project setup is based on [`storybookjs/addon-kit`](https://github.com/storybookjs/addon-kit). See its README for instructions about tooling.

## Troubleshooting

1. Error: `Storybook preview hooks can only be called inside decorators and story functions`

This is caused by [storybookjs/storybook#9893](https://github.com/storybookjs/storybook/issues/9893). There are some work-arounds available:

- If you have custom decorators which are rendering Story as **React Element**, change it to call story instead.

```diff
// preview.js

export const decorators = [
  function withCustomDecorator(Story) {
-    return <Story />;
+    return Story();
  }
]
```

- If you have you have no custom decorators it is likely that 3rd party addon is causing this issue. If such addon is identified, make sure to report the issue to projects. As work-around try reordering your addons in `main.js`:

```diff
// main.js

module.exports = {
  addons: [
+    'some-addon-using-stories-as-react-elements-instead-of-functions',
    'storybook-addon-aria-live',
-    'some-addon-using-stories-as-react-elements-instead-of-functions',
  ],
};
```
