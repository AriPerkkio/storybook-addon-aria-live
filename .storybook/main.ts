import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['./Example.stories.tsx'],
  addons: ['./local-preset.js', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
