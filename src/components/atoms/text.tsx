import React, { forwardRef, FunctionComponent, useMemo } from "react";

import { ResponsiveStyleValue, Text as ThemeUIText, TextProps as ThemeUITextProps } from "theme-ui";

import { useResponsive } from "@hooks";

export type TextVariant = "heading1" | "heading2" | "heading3" | "heading4" | "heading5" | "heading6" | "subheading1" | "subheading2" | "body1" | "body2" | "body3" | "label1" | "label2" | "label3" | "label4";

export type TextProps = Omit<ThemeUITextProps, "variant"> & {
  variant?: ResponsiveStyleValue<TextVariant>;
};

export const Text: FunctionComponent<TextProps> = forwardRef<HTMLDivElement, TextProps>(({
  variant = "body1",
  ...rest
}, ref) => {
  const getResponsiveProp = useResponsive();

  const responsiveVariant = getResponsiveProp(variant);
  const as = useMemo(() => {
    switch (responsiveVariant) {
      case "heading1":
        return "h1";
      case "heading2":
        return "h2";
      case "heading3":
        return "h3";
      case "heading4":
        return "h4";
      case "heading5":
        return "h5";
      case "heading6":
        return "h6";
      case "subheading1":
        return "h6";
      case "subheading2":
        return "h6";
      case "body1":
        return "p";
      case "body2":
        return "p";
      case "body3":
        return "p";
      case "label1":
        return "span";
      case "label2":
        return "span";
      case "label3":
        return "span";
      case "label4":
        return "span";
      default:
        return "p";
    }
  }, [responsiveVariant]);

  return (
    <ThemeUIText
      ref={ref}
      variant={responsiveVariant}
      as={as}
      {...rest}
    />
  );
});
