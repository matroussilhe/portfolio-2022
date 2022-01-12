import React, { Fragment } from "react";

import { ResponsiveContext, useResponsiveContext } from "@providers";

export type ResponsiveProps = Omit<ResponsiveContext, "width" | "height" | "breakpoints">;

export const Responsive: React.FunctionComponent<ResponsiveProps> = (props) => {
  const responsiveContext = useResponsiveContext();

  let show = false;
  for (const [key, value] of Object.entries(props)) {
    if (responsiveContext?.[key as keyof ResponsiveProps] === true && value === true) {
      show = true;
      break;
    }
  }

  return show ? <Fragment>{props.children}</Fragment> : null;
};
