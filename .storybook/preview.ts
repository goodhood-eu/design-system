import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: {
      theme: themes.normal,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'About',
          ['Introduction', 'Get Started'],
          'Foundation',
          ['Design Principles', 'Design Tokens'],
          'Components',
        ]
      }
  }
  },
};

export default preview;
