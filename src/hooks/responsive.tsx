import { ResponsiveStyleValue } from "theme-ui";

import { useResponsiveContext } from "@providers";

/**
 * Hook containing responsive helper functions
 *
 * @returns function used to parse a prop array into a single prop based on active breakpoint
 */
export const useResponsive = () => {
  const {
    smOnly,
    mdOnly,
    lgOnly,
    xlOnly,
  } = useResponsiveContext();

  const getResponsiveProp = <T extends unknown>(prop: ResponsiveStyleValue<T>): T | undefined => {
    if (Array.isArray(prop)) {
      const breakpointMap = [
        smOnly,
        mdOnly,
        lgOnly,
        xlOnly,
      ];

      // map prop value to each breakpoint in a mobile first approach
      const breakpointPropMap = breakpointMap.reduce((acc, item, index) => {
        const propValue = prop[index];

        if (propValue != undefined) {
          acc.push(propValue as T);
        } else {
          acc.push(acc[index - 1]);
        }

        return acc;
      }, [] as T[]);

      // find corresponding prop value for current breakpoint
      const foundIndex = breakpointMap.findIndex(item => item === true);
      if (foundIndex === -1) return undefined;

      return breakpointPropMap[foundIndex];
    } else {
      if (prop == undefined) return undefined;

      return prop as T;
    }
  };

  return getResponsiveProp;
};
