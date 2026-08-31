import React, {
  createContext,
  FunctionComponent,
  useEffect,
  useState,
} from "react";

import throttle from "lodash.throttle";
import { get } from "theme-ui";

import { rootEm } from "@styles";
import { theme } from "@themes";

export type ResponsiveState = {
  width: number;
  height: number;
  breakpoints: number[];
  smOnly: boolean;
  mdOnly: boolean;
  lgOnly: boolean;
  xlOnly: boolean;
  smAndUp: boolean;
  mdAndUp: boolean;
  lgAndUp: boolean;
  xlAndUp: boolean;
  smAndDown: boolean;
  mdAndDown: boolean;
  lgAndDown: boolean;
  xlAndDown: boolean;
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
};

export const DEFAULT_RESPONSIVE_STATE: ResponsiveState = {
  width: 0,
  height: 0,
  breakpoints: [],
  smOnly: false,
  mdOnly: false,
  lgOnly: false,
  xlOnly: false,
  smAndUp: false,
  mdAndUp: false,
  lgAndUp: false,
  xlAndUp: false,
  smAndDown: false,
  mdAndDown: false,
  lgAndDown: false,
  xlAndDown: false,
  mobile: false,
  tablet: false,
  desktop: false,
};

export const ResponsiveContext = createContext<ResponsiveState>(DEFAULT_RESPONSIVE_STATE);

export const getBreakpoints = (): number[] => {
  const themeBreakpoints = get(theme, "breakpoints") as string[];

  return themeBreakpoints?.reduce((acc, item) => {
    acc.push(parseFloat(item.replace("rem", "")) * rootEm);

    return acc;
  }, [0]);
};

export const getResponsiveState = (width: number, height: number): ResponsiveState => {
  const breakpoints = getBreakpoints();
  const sm = width < breakpoints[1];
  const md = width < breakpoints[2] && !(sm);
  const lg = width < breakpoints[3] && !(sm || md);
  const xl = width >= breakpoints[3];

  return {
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
  };
};

export const ResponsiveContextProvider: FunctionComponent = (props) => {
  const [value, setValue] = useState<ResponsiveState>(DEFAULT_RESPONSIVE_STATE);

  const hasWindow = typeof window !== "undefined";
  useEffect(() => {
    if (hasWindow !== true) return;

    const handleResize = () => {
      const newResponsiveState = getResponsiveState(window.innerWidth, window.innerHeight);

      setValue(newResponsiveState);
    };
    const throttledHandleResize = throttle(handleResize, 500);

    // call handler right away to update state with initial window size
    handleResize();

    // add event listener
    window.addEventListener("resize", throttledHandleResize);

    // remove event listener on cleanup
    return () => window.removeEventListener("resize", throttledHandleResize);
  }, [hasWindow]);

  return (
    <ResponsiveContext.Provider value={value}>
      {props.children}
    </ResponsiveContext.Provider>
  );
};
