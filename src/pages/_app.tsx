import React, { Fragment } from "react";

import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { ResponsiveContextProvider, ThemeProvider } from "@providers";
import { fontStyle, globalStyle, resetStyle } from "@styles";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <title>{"Mathieu Roussilhe | Fullstack Engineer"}</title>
        <meta name={"description"} content={"Mathieu Roussilhe's portfolio"}/>
        <link rel={"icon"} href={"/icons/favicon.ico"}/>
      </Head>
      <ThemeProvider>
        <ResponsiveContextProvider>
          <Global styles={`${fontStyle}${globalStyle}${resetStyle}`}/>
          <Component {...pageProps}/>
        </ResponsiveContextProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
