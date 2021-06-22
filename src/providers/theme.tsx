import { FunctionComponent } from "react";

import { ThemeProvider as ThemeUIThemeProvider } from "theme-ui";

import { theme } from "@themes/theme";

const ThemeProvider: FunctionComponent = props => (
  <ThemeUIThemeProvider theme={theme}>{props.children}</ThemeUIThemeProvider>
);

export default ThemeProvider;
