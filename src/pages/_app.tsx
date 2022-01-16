import React from "react";

import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { ResponsiveContextProvider, ThemeProvider } from "@providers";
import { fontStyle, globalStyle, resetStyle } from "@styles";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{"Mat Roussilhe | Software Engineer"}</title>
        <meta name={"description"} content={"Mathieu Roussilhe's portfolio"}/>
        <link rel={"icon"} href={"/favicon.ico"}/>
      </Head>
      <ThemeProvider>
        <ResponsiveContextProvider>
          <Global styles={`${fontStyle}${globalStyle}${resetStyle}`}/>
          <Component {...pageProps}/>
        </ResponsiveContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
