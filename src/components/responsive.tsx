import React, { Fragment } from "react";

import { ResponsiveContextValue, useResponsiveContext } from "@providers/responsive";

export type ResponsiveProps = Omit<ResponsiveContextValue, "width" | "height" | "breakpoints">;

export const Responsive: React.FunctionComponent<ResponsiveProps> = (props) => {
  const { ...responsive } = useResponsiveContext();

  let show = false;
  for (const [key, value] of Object.entries(props)) {
    if (responsive?.[key as keyof ResponsiveProps] === true && value === true) {
      show = true;
      break;
    }
  }

  return show ? <Fragment>{props.children}</Fragment> : null;
};
