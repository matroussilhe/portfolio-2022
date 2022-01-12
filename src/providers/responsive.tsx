import React, {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";

import throttle from "lodash.throttle";
import { get } from "theme-ui";

import { rootEm } from "@styles";
import { theme } from "@themes";

export type ResponsiveContext = {
  width?: number;
  height?: number;
  breakpoints?: number[];
  smOnly?: boolean;
  mdOnly?: boolean;
  lgOnly?: boolean;
  xlOnly?: boolean;
  smAndUp?: boolean;
  mdAndUp?: boolean;
  lgAndUp?: boolean;
  xlAndUp?: boolean;
  smAndDown?: boolean;
  mdAndDown?: boolean;
  lgAndDown?: boolean;
  xlAndDown?: boolean;
  mobile?: boolean;
  tablet?: boolean;
  desktop?: boolean;
};

export const ResponsiveContext = createContext<ResponsiveContext>({});

export const useResponsiveContext = () => {
  return useContext(ResponsiveContext);
};

export const ResponsiveContextProvider: FunctionComponent = (props) => {
  const [value, setValue] = useState<ResponsiveContext>({});

  const hasWindow = typeof window !== "undefined";
  useEffect(() => {
    if (hasWindow !== true) return;

    const themeBreakpoints = get(theme, "breakpoints") as string[];
    const breakpoints = themeBreakpoints?.reduce((acc, cur) => {
      acc.push(parseFloat(cur.replace("rem", "")) * rootEm);

      return acc;
    }, [0]);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const sm = width < breakpoints[1];
      const md = width < breakpoints[2] && !(sm);
      const lg = width < breakpoints[3] && !(sm || md);
      const xl = width >= breakpoints[3];

      setValue({
        width,
        height,
        breakpoints,
        smOnly: sm,
        mdOnly: md,
        lgOnly: lg,
        xlOnly: xl,
        smAndUp: (sm || md || lg || xl),
        mdAndUp: !(sm) && (md || lg || xl),
        lgAndUp: !(sm || md) && (lg || xl),
        xlAndUp: !(sm || md || lg) && (xl),
        smAndDown: (sm) && !(md || lg || xl),
        mdAndDown: (sm || md) && !(lg || xl),
        lgAndDown: (sm || md || lg) && !(xl),
        xlAndDown: (sm || md || lg || xl),
        mobile: (sm) && !(md || lg || xl),
        tablet: (md) && !(sm || lg || xl),
        desktop: (lg || xl) && !(sm || md),
      });
    };
    const throttledHandleResize = throttle(handleResize, 500);

    handleResize();

    window.addEventListener("resize", throttledHandleResize);
    return () => window.removeEventListener("resize", throttledHandleResize);
  }, [hasWindow]);

  return (
    <ResponsiveContext.Provider value={value}>
      {props.children}
    </ResponsiveContext.Provider>
  );
};
