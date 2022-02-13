import React, { forwardRef, FunctionComponent } from "react";

import { Box as ThemeUIBox, BoxProps as ThemeUIBoxProps } from "theme-ui";

export type BoxProps = ThemeUIBoxProps;

export const Box: FunctionComponent<BoxProps> = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return (
    <ThemeUIBox ref={ref} {...props}/>
  );
});
