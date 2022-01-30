# Storybook Addon Aria Live

[![version](https://img.shields.io/npm/v/storybook-addon-aria-live)](https://www.npmjs.com/package/storybook-addon-aria-live)

> Storybook addon for inspecting ARIA live region announcements

`storybook-addon-aria-live` is a Storybook addon for inspecting ARIA live region announcements. Internally it is utilizing [`aria-live-capture`](https://www.npmjs.com/package/aria-live-capture) for announcement detection.

[Test online](https://ariperkkio.github.io/storybook-addon-aria-live/)

## Installation

`storybook-addon-aria-live` should be included in development dependencies. `aria-live-capture` is required as a peer dependency.

```bash
yarn add --dev storybook-addon-aria-live aria-live-capture
```

In your `.storybook/main.js`:

```js
module.exports = {
  addons: ['storybook-addon-aria-live'],
};
```

## Development

Project setup is based on [`storybookjs/addon-kit`](https://github.com/storybookjs/addon-kit). See its README for instructions about tooling.
