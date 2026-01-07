import React, { Fragment } from "react";

import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import {
  useAnalytics,
} from "@hooks";
import {
  PreferenceContextProvider,
  ResponsiveContextProvider,
  ThemeProvider,
} from "@providers";
import {
  GA_MEASUREMENT_ID,
} from "@services";
import {
  fontStyle,
  globalStyle,
  resetStyle,
} from "@styles";
import { theme } from "@themes";

const App = ({ Component, pageProps }: AppProps) => {
  useAnalytics();

  return (
    <Fragment>
      <Head>
        {/* core */}
        <meta charSet={"UTF-8"}/>
        <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"}/>
        <meta name={"robots"} content={"index, follow"}/>
        <title>{"Mathieu Roussilhe"}</title>
        <meta name={"description"} content={"Software Engineer"}/>
        <meta name={"theme-color"} content={theme.colors.background}/>
        <link rel={"icon"} href={"/icons/favicon.ico"}/>
        <link rel={"canonical"} href={"https://matroussilhe.com"}/>
        {/* open graph */}
        <meta property={"og:type"} content={"website"}/>
        <meta property={"og:url"} content={"https://matroussilhe.com"}/>
        <meta property={"og:title"} content={"Mathieu Roussilhe"}/>
        <meta property={"og:description"} content={"Software Engineer"}/>
      </Head>
      {/* google tag manager */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy={"afterInteractive"}
      />
      <Script
        id={"google-analytics"}
        strategy={"afterInteractive"}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <ThemeProvider>
        <ResponsiveContextProvider>
          <PreferenceContextProvider>
            <Global styles={`${fontStyle}${globalStyle}${resetStyle}`}/>
            <Component {...pageProps}/>
          </PreferenceContextProvider>
        </ResponsiveContextProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
