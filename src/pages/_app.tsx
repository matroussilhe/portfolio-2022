import React from "react";

import { Global } from "@emotion/react";
import type { AppProps } from "next/app";

import { ResponsiveContextProvider } from "@providers/responsive";
import { ThemeProvider } from "@providers/theme";
import { globalStyle } from "@styles/global";
import { resetStyle } from "@styles/reset";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <ResponsiveContextProvider>
        <Global
          styles={`
            ${globalStyle},
            ${resetStyle},
          `}/>
        <Component {...pageProps}/>
      </ResponsiveContextProvider>
    </ThemeProvider>
  );
};

export default App;
