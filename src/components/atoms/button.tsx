import React, { forwardRef, FunctionComponent } from "react";

import { Button as ThemeUIButton, ButtonProps as ThemeUIButtonProps, ResponsiveStyleValue } from "theme-ui";

import { getBaseVariant, resolveResponsiveVariant, VariantStyleMap } from "@hooks";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonShape = "round" | "square";

export type ButtonProps = Omit<ThemeUIButtonProps, "variant" | "size" | "shape"> & {
  variant?: ResponsiveStyleValue<ButtonVariant>;
  size?: ResponsiveStyleValue<ButtonSize>;
  shape?: ResponsiveStyleValue<ButtonShape>;
};

const SIZE_VARIANTS: VariantStyleMap<ButtonSize> = {
  sm: {
    px: "16px",
    py: "8px",
    fontSize: "body2",
    fontWeight: "medium",
  },
  md: {
    px: "20px",
    py: "10px",
    fontSize: "body1",
    fontWeight: "medium",
  },
  lg: {
    px: "40px",
    py: "20px",
    fontSize: "body1",
    fontWeight: "medium",
  },
};

const SHAPE_VARIANTS: VariantStyleMap<ButtonShape> = {
  round: {
    borderRadius: 50,
  },
  square: {
    borderRadius: 4,
  },
};

export const Button: FunctionComponent<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = "primary",
  size = "md",
  shape = "round",
  ...rest
}, ref) => {
  const sizeSx = resolveResponsiveVariant(SIZE_VARIANTS, size);
  const shapeSx = resolveResponsiveVariant(SHAPE_VARIANTS, shape);

  return (
    <ThemeUIButton
      ref={ref}
      variant={getBaseVariant(variant)}
      sx={{ ...sizeSx, ...shapeSx }}
      {...rest}
    />
  );
});
