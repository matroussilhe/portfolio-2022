import React, { FunctionComponent } from "react";

import { ResponsiveStyleValue } from "theme-ui";

import { Box, BoxProps } from "@components";
import { getResponsiveSx, VariantStyleMap } from "@services";

export type TagVariant = "primary" | "secondary" | "on-background";
export type TagSize = "sm" | "md" | "lg";
export type TagShape = "round" | "square";

export type TagProps = Omit<BoxProps, "variant" | "size" | "shape"> & {
  variant?: TagVariant;
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
  ...rest
}) => {
  const sizeSx = getResponsiveSx(SIZE_VARIANTS, size);
  const shapeSx = getResponsiveSx(SHAPE_VARIANTS, shape);

  return (
    <Box
      variant={variant ? `tags.${variant}` : undefined}
      sx={{ ...sizeSx, ...shapeSx }}
      {...rest}
    />
  );
};
