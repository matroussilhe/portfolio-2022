import React, { Fragment } from "react";

import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { useThemeUI } from "theme-ui";

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
        <link rel={"icon"} href={"/icons/favicon.ico"}/>
        <title>{"Mathieu Roussilhe | Fullstack Engineer"}</title>
        <meta name={"description"} content={"My name is Mathieu Roussilhe, I'm a fullstack engineer, and this is my portfolio. Dive into it to find out more about my work, skills and personality!"}/>
        <meta name={"robots"} content={"index, follow"}/>
        <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"}/>
        <meta name={"theme-color"} content={theme.colors.background}/>
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
