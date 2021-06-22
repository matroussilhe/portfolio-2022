import { Global } from "@emotion/react";
import type { AppProps } from "next/app";

import ThemeProvider from "../providers/theme";
import globalStyle from "../styles/global";
import resetStyle from "../styles/reset";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Global
        styles={`
          ${globalStyle},
          ${resetStyle},
        `}/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
