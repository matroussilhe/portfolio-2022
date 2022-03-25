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

const App = ({ Component, pageProps }: AppProps) => {
  useAnalytics();

  return (
    <Fragment>
      <Head>
        <title>{"Mathieu Roussilhe | Fullstack Engineer"}</title>
        <meta name={"description"} content={"Mathieu Roussilhe's portfolio"}/>
        <link rel={"icon"} href={"/icons/favicon.ico"}/>
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
