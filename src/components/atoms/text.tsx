import React, { forwardRef, FunctionComponent } from "react";

import {
  get,
  ResponsiveStyleValue,
  Text as ThemeUIText,
  TextProps as ThemeUITextProps,
} from "theme-ui";

import { getResponsiveSx, VariantStyleMap } from "@services";
import { theme } from "@themes";

export type TextVariant = "heading1" | "heading2" | "heading3" | "heading4" | "heading5" | "heading6" | "subheading1" | "subheading2" | "body1" | "body2" | "body3" | "label1" | "label2" | "label3" | "label4";

export type TextProps = Omit<ThemeUITextProps, "variant"> & {
  variant?: ResponsiveStyleValue<TextVariant>;
};

const TEXT_VARIANTS = get(theme, "text") as VariantStyleMap<TextVariant>;

export const Text: FunctionComponent<TextProps> = forwardRef<HTMLDivElement, TextProps>(({
  variant = "body1",
  as = "p",
  ...rest
}, ref) => {
  const variantSx = getResponsiveSx(TEXT_VARIANTS, variant);

  return (
    <ThemeUIText
      ref={ref}
      as={as}
      sx={variantSx}
      {...rest}
    />
  );
});
