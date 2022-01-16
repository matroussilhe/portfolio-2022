import React, { FunctionComponent } from "react";

import styled from "@emotion/styled";
import { variant, VariantArgs } from "styled-system";
import { Button as ThemeUIButton, ButtonProps as ThemeUIButtonProps, ResponsiveStyleValue } from "theme-ui";

import { useResponsive } from "@hooks";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonShape = "round" | "square";

export type ButtonProps = Omit<ThemeUIButtonProps, "variant" | "size" | "shape"> & {
  variant?: ResponsiveStyleValue<ButtonVariant>;
  size?: ResponsiveStyleValue<ButtonSize>;
  shape?: ResponsiveStyleValue<ButtonShape>;
};

export type StyledThemeUIButtonProps = Omit<ThemeUIButtonProps, "size" | "shape"> & {
  size?: ButtonSize;
  shape?: ButtonShape;
};

const size = variant({
  prop: "size",
  variants: {
    sm: {
      px: "40px",
      py: "8px",
      fontSize: "body2",
      fontWeight: "medium",
    },
    md: {
      px: "60px",
      py: "12px",
      fontSize: "body2",
      fontWeight: "medium",
    },
    lg: {
      px: "80px",
      py: "16px",
      fontSize: "heading4",
      fontWeight: "medium",
    },
  },
} as VariantArgs);

const shape = variant({
  prop: "shape",
  variants: {
    round: {
      borderRadius: 50,
    },
    square: {
      borderRadius: 4,
    },
  },
} as VariantArgs);

const StyledThemeUIButton = styled(ThemeUIButton)<StyledThemeUIButtonProps>(
  size,
  shape,
);

export const Button: FunctionComponent<ButtonProps> = ({
  variant = "primary",
  size = "md",
  shape = "round",
  ...rest
}) => {
  const getResponsiveProp = useResponsive();

  const responsiveVariant = getResponsiveProp(variant);
  const responsiveSize = getResponsiveProp(size);
  const responsiveShape = getResponsiveProp(shape);

  return (
    <StyledThemeUIButton
      variant={responsiveVariant}
      size={responsiveSize}
      shape={responsiveShape}
      {...rest}
    />
  );
};
