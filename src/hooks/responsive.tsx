import { useCallback } from "react";

import { useResponsiveContext } from "@providers/responsive";

/**
 * Hook that parses responsive prop array into single prop based on active breakpoint
 */
export const useResponsiveProp = () => {
  const {
    smOnly,
    mdOnly,
    lgOnly,
    xlOnly,
  } = useResponsiveContext();

  const responsiveProp = useCallback((prop: any) => {
    if (Array.isArray(prop)) {
      const breapointMap = [
        smOnly,
        mdOnly,
        lgOnly,
        xlOnly,
      ];

      // map prop value to each breakpoint in a mobile first approach
      const breapointPropMap = breapointMap.reduce((acc, cur, idx) => {
        const propValue = prop[idx];

        if (propValue != undefined) {
          acc.push(propValue);
        } else {
          acc.push(acc[idx - 1]);
        }

        return acc;
      }, [] as string[]);

      // find corresponding prop value for current breakpoint
      const foundIndex = breapointMap.findIndex(item => item === true);
      return foundIndex !== -1
        ? breapointPropMap[foundIndex]
        : undefined;
    } else {
      return prop;
    }
  }, [smOnly, mdOnly, lgOnly, xlOnly]);

  return responsiveProp;
};
