import React from "react";

import { Global } from "@emotion/react";
import type { AppProps } from "next/app";

import { ResponsiveContextProvider, ThemeProvider } from "@providers";
import { globalStyle, resetStyle } from "@styles";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <ResponsiveContextProvider>
        <Global styles={`${globalStyle}${resetStyle}`}/>
        <Component {...pageProps}/>
      </ResponsiveContextProvider>
    </ThemeProvider>
  );
};

export default App;
