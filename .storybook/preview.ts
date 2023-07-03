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
          'Introduction',
          'Principle',
          'Accessibilty',
          'Architecture',
          'Base',
          ['Color', 'Typography', 'Shadows'],
          'Components',
        ]
      }
  }
  },
};

export default preview;
