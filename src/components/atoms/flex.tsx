import React, { forwardRef, FunctionComponent } from "react";

import { Flex as ThemeUIFlex, FlexProps as ThemeUIFlexProps } from "theme-ui";

export type FlexProps = ThemeUIFlexProps;

export const Flex: FunctionComponent<FlexProps> = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  return (
    <ThemeUIFlex ref={ref} {...props}/>
  );
});
