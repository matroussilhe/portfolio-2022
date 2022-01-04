import React, { FunctionComponent } from "react";

import { ResponsiveStyleValue, Text as ThemeUIText, TextProps as ThemeUITextProps } from "theme-ui";

import { useResponsiveProp } from "@hooks/responsive";

export type TextProps = Omit<ThemeUITextProps, "variant"> & {
  variant?: ResponsiveStyleValue<string>;
};

export const Text: FunctionComponent<TextProps> = ({
  variant = "body1",
  ...rest
}) => {
  const responsiveProp = useResponsiveProp();

  const responsiveVariant = responsiveProp(variant);

  return (
    <ThemeUIText
      variant={responsiveVariant}
      {...rest}
    />
  );
};
