import React, { FunctionComponent } from "react";

import styled from "@emotion/styled";
import { variant, VariantArgs } from "styled-system";
import { Button as ThemeUIButton, ButtonProps as ThemeUIButtonProps, ResponsiveStyleValue } from "theme-ui";

import { useResponsiveProp } from "@hooks";

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
      px: "16px",
      py: "4px",
      fontSize: "body1",
      fontWeight: "medium",
    },
    md: {
      px: "16px",
      py: "8px",
      fontSize: "body1",
      fontWeight: "medium",
    },
    lg: {
      px: "20px",
      py: "12px",
      fontSize: "body1",
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
  const responsiveProp = useResponsiveProp();

  const responsiveVariant = responsiveProp(variant);
  const responsiveSize = responsiveProp(size);
  const responsiveShape = responsiveProp(shape);

  return (
    <StyledThemeUIButton
      variant={responsiveVariant}
      size={responsiveSize}
      shape={responsiveShape}
      {...rest}
    />
  );
};
