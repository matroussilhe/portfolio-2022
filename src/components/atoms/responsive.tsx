import React, { Fragment, FunctionComponent } from "react";

import { ResponsiveContext, useResponsiveContext } from "@providers";

export type ResponsiveProps = {
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

export const Responsive: FunctionComponent<ResponsiveProps> = (props) => {
  const responsiveContext = useResponsiveContext();

  let show = false;
  for (const [key, value] of Object.entries(props)) {
    if (responsiveContext?.[key as keyof ResponsiveContext] === true && value === true) {
      show = true;
      break;
    }
  }

  return show ? <Fragment>{props.children}</Fragment> : null;
};
