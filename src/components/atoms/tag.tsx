import React, { FunctionComponent } from "react";

import styled from "@emotion/styled";
import { variant, VariantArgs } from "styled-system";
import { ResponsiveStyleValue } from "theme-ui";

import { Box, BoxProps } from "@components";
import { useResponsive } from "@hooks";

export type TagVariant = "primary" | "secondary" | "on-background";
export type TagSize = "sm" | "md" | "lg";
export type TagShape = "round" | "square";

export type TagProps = Omit<BoxProps, "variant" | "size" | "shape"> & {
  variant?: ResponsiveStyleValue<TagVariant>;
  size?: ResponsiveStyleValue<TagSize>;
  shape?: ResponsiveStyleValue<TagShape>;
};

export type StyledBoxProps = Omit<BoxProps, "size" | "shape"> & {
  size?: TagSize;
  shape?: TagShape;
};

const size = variant({
  prop: "size",
  variants: {
    sm: {
      px: "4px",
      py: "4px",
      fontSize: "label3",
      fontWeight: "regular",
    },
    md: {
      height: "auto",
      px: "6px",
      py: "6px",
      fontSize: "label2",
      fontWeight: "regular",
    },
    lg: {
      px: "8px",
      py: "8px",
      fontSize: "label1",
      fontWeight: "regular",
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

const StyledBox = styled(Box)<StyledBoxProps>(
  size,
  shape,
);

export const Tag: FunctionComponent<TagProps> = ({
  variant = "on-background",
  size = "md",
  shape = "round",
  ...rest
}) => {
  const getResponsiveProp = useResponsive();

  const responsiveVariant = getResponsiveProp(variant);
  const responsiveSize = getResponsiveProp(size);
  const responsiveShape = getResponsiveProp(shape);

  return (
    <StyledBox
      variant={responsiveVariant ? `tags.${responsiveVariant}` : undefined}
      size={responsiveSize}
      shape={responsiveShape}
      {...rest}
    />
  );
};
