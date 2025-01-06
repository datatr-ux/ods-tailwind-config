import plugin from 'tailwindcss/plugin';
import colors from './tailwind/colors';
import borderRadius from './tailwind/borderRadius';

// Define the plugin as a TypeScript module
const myTailwindPlugin = plugin.withOptions(
  () => {
    return ({ addBase, theme }: { addBase: (styles: Record<string, any>) => void; theme: (key: string) => any }) => {
      // Apply base styles
      addBase({
        body: {
          fontFamily: 'var(--ods-font-family-default)',
          color: 'var(--ods-color-text)',
        },
        'h1, h2, h3, h4, h5, h6': {
          color: 'var(--ods-color-heading)',
        },
        h1: {
          fontSize: theme('fontSize.4xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        h2: {
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        h3: {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        h4: {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        h5: {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.bold'),
        },
        h6: {
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.bold'),
        },
      });
    };
  },
  () => ({
    theme: {
      extend: {
        colors,
        borderRadius,
      },
    },
  })
);

export default myTailwindPlugin;
