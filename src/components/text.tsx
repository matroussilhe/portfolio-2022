import React, { FunctionComponent } from "react";

import { ResponsiveStyleValue, Text as ThemeUIText, TextProps as ThemeUITextProps } from "theme-ui";

import { useResponsiveProp } from "@hooks";

export type TextVariant = "heading1" | "heading2" | "heading3" | "heading4" | "heading5" | "heading6" | "body1" | "body2";

export type TextProps = Omit<ThemeUITextProps, "variant"> & {
  variant?: ResponsiveStyleValue<TextVariant>;
};

export const Text: FunctionComponent<TextProps> = ({
  variant = "body1",
  ...rest
}) => {
  const getResponsiveProp = useResponsiveProp();

  const responsiveVariant = getResponsiveProp(variant);

  return (
    <ThemeUIText
      variant={responsiveVariant}
      {...rest}
    />
  );
};
