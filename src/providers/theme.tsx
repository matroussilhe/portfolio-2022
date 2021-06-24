import React, { FunctionComponent } from "react";

import { ThemeProvider as ThemeUIThemeProvider } from "theme-ui";

import { theme } from "@themes/theme";

export const ThemeProvider: FunctionComponent = props => (
  <ThemeUIThemeProvider theme={theme}>{props.children}</ThemeUIThemeProvider>
);
