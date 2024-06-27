import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/theme/ThemeProvider";

import { CssBaseline } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

/* TODO: update import for your custom Material UI themes */
// import { lightTheme, darkTheme } from '../path/to/themes';

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  //   decorators:[(Story) => (
  // <ThemeProvider>
  //   <Story />
  // </ThemeProvider>
  // )]
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: CssBaseline,
      Provider: ThemeProvider,
      // themes: {
      //   // Provide your custom themes here
      //   light: lightTheme,
      //   dark: darkTheme,
      // },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
