import React, { FunctionComponent } from "react";

import { ResponsiveStyleValue } from "theme-ui";

import { Box, BoxProps } from "@components";
import { getBaseVariant, resolveResponsiveVariant, VariantStyleMap } from "@hooks";

export type TagVariant = "primary" | "secondary" | "on-background";
export type TagSize = "sm" | "md" | "lg";
export type TagShape = "round" | "square";

export type TagProps = Omit<BoxProps, "variant" | "size" | "shape"> & {
  variant?: ResponsiveStyleValue<TagVariant>;
  size?: ResponsiveStyleValue<TagSize>;
  shape?: ResponsiveStyleValue<TagShape>;
};

const SIZE_VARIANTS: VariantStyleMap<TagSize> = {
  sm: {
    px: "5px",
    py: "5px",
    fontSize: "label3",
    fontWeight: "regular",
  },
  md: {
    px: "6px",
    py: "6px",
    fontSize: "label2",
    fontWeight: "regular",
  },
  lg: {
    px: "7px",
    py: "7px",
    fontSize: "label1",
    fontWeight: "regular",
  },
};

const SHAPE_VARIANTS: VariantStyleMap<TagShape> = {
  round: {
    borderRadius: 50,
  },
  square: {
    borderRadius: 4,
  },
};

export const Tag: FunctionComponent<TagProps> = ({
  variant = "on-background",
  size = "md",
  shape = "round",
  sx,
  ...rest
}) => {
  const sizeSx = resolveResponsiveVariant(SIZE_VARIANTS, size);
  const shapeSx = resolveResponsiveVariant(SHAPE_VARIANTS, shape);
  const baseVariant = getBaseVariant(variant);

  return (
    <Box
      variant={baseVariant ? `tags.${baseVariant}` : undefined}
      sx={{ ...sizeSx, ...shapeSx, ...sx }}
      {...rest}
    />
  );
};
